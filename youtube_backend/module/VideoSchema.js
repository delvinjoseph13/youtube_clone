        import mongoose from "mongoose";


        const commentSchema=mongoose.Schema({
            commentId:{
                type:String,
                required:true,
            },
            userId: {
                type:String,
                required:true

            },
            text:{
                type:String,
                required:true,
            },
            timestamp:{
                type:Date,
                default:Date.now
            }
        })

        const videoScehma=mongoose.Schema({
            videoId:{
                type:String,
                required:true,
                unique:true
            },
            title:{
                type:String,
                required:true,
            },
            thumbnailUrl:{
                type:String
            },
            category:{
            type:String,

            },
            description:{
                type:String
            },
            channelId:{
                type:String,
                required:true
            },
            uploader:{
                type:String,
                required:true
            },
            views:{
                type:Number,
                default:0
            },       
            uploadDate:{
                type:Date,
                default:Date.now
            },
            comments:[commentSchema]
        })


        const VideoModel=mongoose.model("video",videoScehma)

        export default VideoModel;