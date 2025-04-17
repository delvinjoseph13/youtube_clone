import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const updateLikeDislike=createAsyncThunk(
    "video/updateLikeDislike",
    async({videoId,userId,type})=>{
        const res=await axios.put(`http://localhost:5000/videos/${videoId}/like`,{
            userId,
            type
        })
        return res.data.video;
    }
)





const likeDislikeSlice=createSlice({
    name:"likeDislike",
    initialState:{
        videos:[],
             loading:false
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(updateLikeDislike.fulfilled, (state, action) => {
          const updatedVideo = action.payload;
          const index = state.videos.findIndex(v => v._id === updatedVideo._id);
          if (index !== -1) {
            state.videos[index] = updatedVideo;
          }
        });
      },
    });

    export default likeDislikeSlice.reducer;