import VideoModel from "../module/VideoSchema.js";

export const likedislike=async(req,res)=>{
    const {videoId}=req.params;
    const {type,userId}=req.body;

    try {
        const video =await VideoModel.findById(videoId);
        if(!video){
            return res.status(404).json({message:"Video not Found"})
        }

        if(type==="like"){
            video.likes+=1;
        }else if(type==="dislikes"){
            video.dislikes+=1
        }

        await video.save();
        res.status(200).json({message:"updated",video})
    } catch (error) {
        res.status(500).json({message:error.message})
    }

}