import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";




const channelSchema=mongoose.Schema({
    channelId:{
        type:String,
        default:uuidv4,
        unique:true
    },
    channelName:{
        type:String
    },
    owner:{
        type:String
    },
    description:{
        type:String
    },
    channelBanner:{
        type:String
    },
    subscribers:{
        type:Number
    },
    videos:[
        {
            type:String
        }
    ]
   
});

const channelModel=mongoose.model("channel",channelSchema);

export default channelModel;