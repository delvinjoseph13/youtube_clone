import mongoose from "mongoose";


const reactionSchema=mongoose.Schema({
    videoId:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
    type:{
        type:String,
        enum:["like","dislike"],
        required:true
    },
    timestamp:{
        type:Date,
        default:Date.now()
    }
})

const ReactionModel=mongoose.model("reaction",reactionSchema);

export default ReactionModel