import express, { Router } from "express"
import { channelVideo, createChannel, getChannelVideos } from "../controllers/channelVideos.js";

const channelRoute=express(Router());

// channelRoute.get("/channel/videos/:channelId",channelVideo)
channelRoute.post("/channel/createchannel",createChannel)
channelRoute.get("/channel/videos/:username",getChannelVideos)

export default channelRoute;