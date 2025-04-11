// import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";



// export const fetchComments=createAsyncThunk(
//     "comment/fetchComments",
//     async (videoId)=>{
//         const res=await axios.get(`fetchcomment`)
//         return res.data
//     }
// )

// export const addComment=createAsyncThunk(
//     "comment/addComment",
//     async ({videoId,text})=>{
//         const res=await axios.post(`addcomment`,{
//             videoId,
//             text
//         });
//         return res.data;
//     }
// )

// export const editComment=createAsyncThunk(
//     "comment/editComment",
//     async ({commentId,newText})=>{
//         const res=await axios.put(`editurl`,{});
//         return res.data
//     }
// )

// export const deleteComment=createAsyncThunk(
//     "comment/deleteComment",
//     async (commentId)=>{
//         await axios.delete(`deleteurl`);
//         return commentId;
//     }
// )

// const CommentSlice=createSlice({
//     name:"comment",
//     initialState:{
//         comments:["hi","how are you"],
//         loading:false,
//         error:null
//     },
//     extraReducers: (builder)=>{
//         builder
//         .addCase(fetchComments.pending,(state)=>{
//             state.loading=true;
//         })
//         .addCase(fetchComments.fulfilled,(state,action)=>{
//             state.loading=false
//             state.comments=action.payload
//         })
//         .addCase(addComment.fulfilled,(state,action)=>{
//             state.comments.push(action.payload)
//         })
//         .addCase(editComment.fulfilled,(state,action)=>{
//             const index=state.comments.findIndex((c)=>c.id===action.payload.id);
//             if (index !==-1){
//                   state.comments[index]=action.payload;
//             }
//         })
//         .addCase(deleteComment.fulfilled,(state,action)=>{
//             state.comments=state.comments.filter((c)=>c.id!==action.payload)
//         });
//     }
// })

// export default CommentSlice.reducer();