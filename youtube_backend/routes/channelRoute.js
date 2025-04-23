import express, { Router } from "express"
import { addVideoToChannel, createChannel, deleteVideoFromChannel, editVideo, getChannelVideos } from "../controllers/channelVideos.js";
import multer from "multer";
import { upload } from "../middleware/upload.js";

const channelRoute=express(Router());

// channelRoute.get("/channel/videos/:channelId",channelVideo)
channelRoute.post("/channel/createchannel",upload.single("banner"),createChannel)
channelRoute.get("/channel/videos/:username",getChannelVideos)
channelRoute.patch("/channel/:channelId/add-video",addVideoToChannel)
channelRoute.patch("/channel/editvideo/:channelId/:videoId",editVideo)
channelRoute.delete("/channel/deletevideo/:channelId/:videoId",deleteVideoFromChannel)

export default channelRoute;