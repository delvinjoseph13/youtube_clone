import ReactionModel from "../module/ReactionModel.js";


//adding like and dislike
export const likedislike = async (req, res) => {
    const { videoId } = req.params;
    const { userId, type } = req.body;
  
    if (!["like", "dislike"].includes(type)) {
      return res.status(400).json({ message: "Invalid reaction type" });
    }
  
    try {
      const existingReaction = await ReactionModel.findOne({ videoId, userId });
  
      let likes, dislikes;
  
      if (existingReaction) {
        if (existingReaction.type === type) {
          await ReactionModel.deleteOne({ _id: existingReaction._id });
          likes = await ReactionModel.countDocuments({ videoId, type: 'like' });
          dislikes = await ReactionModel.countDocuments({ videoId, type: 'dislike' });
          return res.status(200).json({ message: `${type} removed`, likes, dislikes });
        } else {
          existingReaction.type = type;
          await existingReaction.save();
          likes = await ReactionModel.countDocuments({ videoId, type: 'like' });
          dislikes = await ReactionModel.countDocuments({ videoId, type: 'dislike' });
          return res.status(200).json({ message: `Reaction updated to ${type}`, likes, dislikes });
        }
      } else {
        const newReaction = new ReactionModel({ videoId, userId, type });
        await newReaction.save();
        likes = await ReactionModel.countDocuments({ videoId, type: 'like' });
        dislikes = await ReactionModel.countDocuments({ videoId, type: 'dislike' });
        return res.status(201).json({ message: `${type} added`, likes, dislikes });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };



//getting the reactions which is count of both like and dislike
export const getReaction=async(req,res)=>{
    const {videoId}=req.params;

    try {
        const likes=await ReactionModel.countDocuments({videoId, type: "like" });
        const dislikes=await ReactionModel.countDocuments({videoId, type: "dislike" })

        res.status(200).json({likes,dislikes})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
} 



  
