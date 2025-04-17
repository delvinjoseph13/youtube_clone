import express from "express"
import { AllVideos, youtubeVideo } from "../controllers/VideoController.js"

const VideoRouter=express.Router()


VideoRouter.post("/videos",youtubeVideo)
VideoRouter.get("/all/videos",AllVideos)

export default VideoRouter;