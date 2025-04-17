import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchComments = createAsyncThunk(
  "comment/fetchComments",
  async (videoId) => {
    const res = await axios.get(
      `http://localhost:5000/videos/${videoId}/comments`
    );
    return res.data;
  }
);

export const addComment = createAsyncThunk(
  "comment/addComment",
  async ({ videoId, text, userId }) => {
    const res = await axios.post(
      `http://localhost:5000/videos/${videoId}/comments`,
      {
        userId,
        text,
      }
    );
    return res.data;
  }
);

export const editComment = createAsyncThunk(
  "comment/editComment",
  async ({ videoId, commentId, newText }) => {
    const res = await axios.put(
      `http://localhost:5000/videos/${videoId}/comments/${commentId}`,
      {
        newText,
      }
    );
    return res.data;
  }
);

export const deleteComment = createAsyncThunk(
  "comment/deleteComment",
  async ({ commentId, videoId }) => {
    await axios.delete(
      `http://localhost:5000/videos/${videoId}/comments/${commentId}`
    );
    return commentId;
  }
);

const CommentSlice = createSlice({
  name: "comment",
  initialState: {
    comments: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(addComment.fulfilled, (state, action) => {
        state.comments.push(action.payload);
      })

      // In your extraReducers:
      .addCase(editComment.fulfilled, (state, action) => {
        const updatedComment = action.payload;
        const index = state.comments.findIndex((c) => c.commentId === updatedComment.commentId);
        
        if (index !== -1) {
          state.comments[index] = updatedComment; // Replace the old comment with the updated one
        }
      })
      

      .addCase(deleteComment.fulfilled, (state, action) => {
        state.comments = state.comments.filter(
          (c) => c.commentId !== action.payload
        );
      });
  },
});

export default CommentSlice.reducer;
