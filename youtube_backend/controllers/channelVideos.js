import channelModel from "../module/ChannelModel.js";
import userModel from "../module/usersSchema.js";
import VideoModel from "../module/VideoSchema.js";
// export const channelVideo=async(req,res)=>{
//     const {channelId}=req.params;

//     try {
//         const video=await VideoModel.find({channelId})
//         if(!video){
//             return res.status(404).json({message:"No video present"})
//         }
    
//         res.status(200).json(video)  
//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }

// }


//creating new Channel
export const createChannel=async(req,res)=>{
    try {
        const {channelName,description,username}=req.body;
        const bannerPath=req.file?.path || "" ;

        const newChannel=new channelModel({
            channelName,
            description,
            owner:username,
            channelBanner:bannerPath
        })
        
        await newChannel.save();
        res.status(201).json({message:"Channel created Successfully",newChannel})


    } catch (error) { 
        res.status(500).json({message:error.message})
        
    }
}


//getting the channel Videos and other details
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
        res.status(200).json({ 
            videos: channel.videos,
            channelName:channel.channelName,
            description:channel.description,
            channelBanner:channel.channelBanner,
            owner:channel.owner,
            subscribers:channel.subscribers,
            channelId:channel.channelId
         });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//adding new Video to the channel
export const addVideoToChannel=async(req,res)=>{
    try {
        const {channelId}=req.params;
        const {videoId,videoImg,videoTitle}=req.body;

        if(!videoId || !videoImg || !videoTitle){
            return res.status(400).json({message:"Missing Video Fields"})
        }

        const updateChannel=await channelModel.findOneAndUpdate(
            {channelId},{
                $push:{
                    videos:{
                        videoId,
                        videoImg,
                        videoTitle
                    }
                }
            },
            {new:true}
        )

        if(!updateChannel){
            return res.status(400).json({message:"channel Not found"})
        }

        res.status(200).json({
            message:"video add successfully",
            updateChannel
        })

    } catch (error) {
        console.error("Error adding video:", error);
        res.status(500).json({ message: error.message });
      }

}


//editing a channel video
export const editVideo = async (req, res) => {
    const { channelId, videoId } = req.params;
    const { videoTitle, videoImg } = req.body;
  
    try {
      const updateFields = {};
      if (videoTitle) updateFields["videos.$.videoTitle"] = videoTitle;
      if (videoImg) updateFields["videos.$.videoImg"] = videoImg;
  
      const channel = await channelModel.findOneAndUpdate(
        {
          channelId,
          "videos._id": videoId,
        },
        {
          $set: updateFields,
        },
        { new: true }
      );
  
      if (!channel) {
        return res.status(404).json({ message: "Channel or Video not found" });
      }
  
      res.status(200).json({
        message: "Video updated successfully",
        updatedChannel: channel,
      });
    } catch (error) {
      console.error("Edit video error:", error);
      res.status(500).json({ message: error.message });
    }
  };


//deleting a video
export const deleteVideoFromChannel = async (req, res) => {
    const { channelId, videoId } = req.params;
  
    try {
      const channel = await channelModel.findOneAndUpdate(
        { channelId },
        {
          $pull: {
            videos: { _id: videoId }
          }
        },
        { new: true }
      );
  
      if (!channel) {
        return res.status(404).json({ message: "Channel not found" });
      }
  
      res.status(200).json({ message: "Video deleted successfully", channel });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

