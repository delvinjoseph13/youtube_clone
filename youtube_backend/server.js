import express, { json } from "express"
import mongoose from "mongoose";
import cors from "cors"
import VideoRouter from "./routes/videoRoute.js";
import UserLoginRoute from "./routes/userLoginRoute.js";
import commentRoute from "./routes/CommentRoute.js";
import likeDislikeRoute from "./routes/likeDislikeRoute.js";
import channelRoute from "./routes/channelRoute.js";


const app=express()
app.use(express.json())
app.use(cors())
app.use('/',VideoRouter)
app.use('/videos',commentRoute)
app.use('/videos',likeDislikeRoute)
app.use(channelRoute)


UserLoginRoute(app)

app.use("/uploads", express.static("uploads"));


mongoose.connect("mongodb://localhost:27017/youtube_clone")
.then(()=>console.log("db connected successfully"))
.catch(()=>console.log("error connecting to database"))

const PORT=5000;
app.listen(PORT,()=>{
    console.log(`server running on port `,PORT)
})