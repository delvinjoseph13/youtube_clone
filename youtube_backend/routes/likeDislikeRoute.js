import express, { Router } from "express";
import { likedislike } from "../controllers/likeDislike.contoller.js";
const likeDislikeRoute=express(Router());

likeDislikeRoute.put("/:videoId/like",likedislike)

export default likeDislikeRoute;