import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const updateLikeDislike = createAsyncThunk(
  "likeDislike/update",
  async ({ videoId, userId, type }) => {
    const res = await axios.post(`http://localhost:5000/videos/${videoId}/like`, { userId, type });
    return { videoId, likes: res.data.likes, dislikes: res.data.dislikes };
  }
);

export const fetchReactionCounts = createAsyncThunk(
  "likeDislike/fetchCounts",
  async (videoId) => {
    const res = await axios.get(`http://localhost:5000/videos/${videoId}/like`);
    return { videoId, likes: res.data.likes, dislikes: res.data.dislikes };
  }
);

const likeDislikeSlice = createSlice({
  name: "likeDislike",
  initialState: {
    counts: {},
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateLikeDislike.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateLikeDislike.fulfilled, (state, action) => {
        const { videoId, likes, dislikes } = action.payload;
        state.counts[videoId] = { likes, dislikes };
        state.loading = false;
      })
      .addCase(updateLikeDislike.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchReactionCounts.fulfilled, (state, action) => {
        const { videoId, likes, dislikes } = action.payload;
        state.counts[videoId] = { likes, dislikes };
      });
  }
});

export default likeDislikeSlice.reducer