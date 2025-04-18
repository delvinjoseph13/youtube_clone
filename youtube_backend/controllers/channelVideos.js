import VideoModel from "../module/VideoSchema.js";
export const channelVideo=async(req,res)=>{
    const {channelId}=req.params;

    try {
        const video=await VideoModel.find({channelId})
        if(!video){
            return res.status(404).json({message:"No video present"})
        }
    
        res.status(200).json(video)  
    } catch (error) {
        res.status(500).json({message:error.message})
    }

}