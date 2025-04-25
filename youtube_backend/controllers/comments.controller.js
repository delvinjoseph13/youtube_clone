import VideoModel from "../module/VideoSchema.js";
import { v4 as uuidv4 } from "uuid";



//getting the comment for the particular videoId
export const commentsById=async(req,res)=>{
    try {
        const {videoId}=req.params;
        const video=await VideoModel.findById(videoId);
        if(!video){
           return res.status(404).json({message:"Video Not Found"})
        }
        res.json(video.comments || [])
    } catch (error) {
         res.status(500).json({message:error.message})
    }
}


//adding a new Comment
export const addComment=async(req,res)=>{
        try {
            const {videoId}=req.params;
            const {text,userId}=req.body;

            const video=await VideoModel.findById(videoId)
            if(!video){
                return res.status(404).json({message:"Video Not Found"})
            }
            const newComment={
                commentId:uuidv4(),
                userId,
                text,
                timestamp:new Date().toISOString()
            }

            video.comments.push(newComment);
            await video.save()
            res.status(201).json(newComment)
        } catch (error) {
            res.status(500).json({message:error.message})
        }
}


//editing a comment
export const editComment=async(req,res)=>{
    try {
        const {videoId,commentId}=req.params;
        const {newText}=req.body;

        const video=await VideoModel.findById(videoId);
        if(!video){
           return res.status(404).json({message:"Video Not Found"})
        }
        const comment=video.comments.find((c)=>c.commentId ===commentId)
        if(!comment){
            return res.status(404).json({message:"No Comment Found"})
        }
        comment.text=newText;
        await video.save()
        res.status(201).json({message:"Comment Updated Successfully","newText":newText})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


//deleting a comment
export const deleteComment=async(req,res)=>{
    try {
        const {videoId,commentId}=req.params;

    const video=await VideoModel.findById(videoId)
    if(!video){
        return res.status(404).json({message:"Video Not Found"})
    }
    const commentIndex=video.comments.findIndex(c=>c.commentId===commentId)
    if(commentIndex ===-1){
        return res.status(404).json({message:"Comment Not Found"})
    }

    video.comments.splice(commentIndex,1)

    await video.save()

    res.status(200).json({message:"SuccessFully Deleted",commentId})
    } catch (error) {
        res.status(500).json({message:error.message})
    }

}