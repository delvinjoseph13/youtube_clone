
import VideoModel from "../module/VideoSchema.js"

export const youtubeVideo=async(req,res)=>{
    try {
        const newVideo=new VideoModel(req.body)
        await newVideo.save()
        res.status(201).json({message:"Video Created Successfully",video:newVideo})
    } catch (error) {
        console.error("Error creating video:", error);
        res.status(500).json({ message: "Failed to create video" });
    } 

}

export const AllVideos=(req,res)=>{
    try {
        const videos=VideoModel.find().then((data)=>{
            if(!data){
                return res.status(404).json({message:"No Videos To Show"})
            }
            res.status(200).json({data:data})
        }) 
    } catch (error) {
       res.status(500).json({message:error.message}) 
    }

}