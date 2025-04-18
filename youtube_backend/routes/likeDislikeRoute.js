import express, { Router } from "express";
import { getReaction, likedislike } from "../controllers/likeDislike.contoller.js";
const likeDislikeRoute=express(Router());

likeDislikeRoute.post("/:videoId/like",likedislike)
likeDislikeRoute.get("/:videoId/like",getReaction)

export default likeDislikeRoute;


