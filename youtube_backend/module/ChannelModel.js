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
        type:Number,
        default:1000
    },
    videos:[
        {
            videoId:{
                type:String
            },
            videoImg:{
                type:String
            },
            videoTitle:{
                type:String
            }
        }
    ]
   
});

const channelModel=mongoose.model("channel",channelSchema);

export default channelModel;