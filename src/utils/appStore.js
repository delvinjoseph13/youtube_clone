import {configureStore} from "@reduxjs/toolkit"
import commentReducer from "./CommentSlice"
import likeDislike from "./likeDislikeSlice"

//creating a redux store and 2 different reducer function which is for comments and reactions
const appStore=configureStore({
    reducer:{
        comment:commentReducer,
        likeDislikes:likeDislike
    }
})

export default appStore