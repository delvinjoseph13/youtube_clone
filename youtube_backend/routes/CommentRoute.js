import express, { Router } from "express"
import { addComment, commentsById, deleteComment, editComment } from "../controllers/comments.controller.js";

const commentRoute=express(Router());

commentRoute.get("/:videoId/comments",commentsById)
commentRoute.post("/:videoId/comments",addComment)
commentRoute.put("/:videoId/comments/:commentId",editComment)
commentRoute.delete("/:videoId/comments/:commentId",deleteComment)

export default commentRoute;