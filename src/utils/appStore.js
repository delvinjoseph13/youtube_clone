import {configureStore} from "@reduxjs/toolkit"
import commentReducer from "./CommentSlice"
import likeDislike from "./likeDislikeSlice"

const appStore=configureStore({
    reducer:{
        comment:commentReducer,
        likeDislikes:likeDislike
    }
})

export default appStore