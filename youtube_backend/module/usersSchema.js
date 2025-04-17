import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";


const userSchema=mongoose.Schema({
    userId:{
       type:String,
       default:uuidv4,  // generates a unique userId automatically
       unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
        required:true
    },
    channels: {
        type: [String],
        default: [],
    },
},{timestamps:true});

const userModel=mongoose.model("users",userSchema);

export default userModel