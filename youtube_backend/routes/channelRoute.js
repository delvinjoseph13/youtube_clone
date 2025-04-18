import express, { Router } from "express"
import { channelVideo } from "../controllers/channelVideos.js";

const channelRoute=express(Router());

channelRoute.get("/channel/videos/:channelId",channelVideo)

export default channelRoute;