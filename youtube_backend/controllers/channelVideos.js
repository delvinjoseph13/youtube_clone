import channelModel from "../module/ChannelModel.js";
import userModel from "../module/usersSchema.js";
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



export const createChannel=async(req,res)=>{
    try {
        const newChannel=new channelModel(req.body);
        await newChannel.save();
        res.status(201).json({message:"Channel created Successfully",newChannel})


    } catch (error) { 
        res.status(500).json({message:error.message})
        
    }
}

export const getChannelVideos = async (req, res) => {
    try {
        const { username } = req.params;

        // Find the user by username
        const user = await userModel.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Find the channel owned by the user
        const channel = await channelModel.findOne({ owner: user.username });
        if (!channel) {
            return res.status(404).json({ message: "No channel found for this user" });
        }

        // Return channel videos
        res.status(200).json({ videos: channel.videos });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};