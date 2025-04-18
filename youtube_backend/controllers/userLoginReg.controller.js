import userModel from "../module/usersSchema.js";
import bcrypt from "bcrypt";
import  jwt  from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config();

export const userRegister = async (req, res) => {
  try {
  const { username, email, password } = req.body;
  const avatarPath=req.file ? `/uploads/${req.file.filename}` : null;

    const isEmailPresent = await userModel.findOne({ email });
    if (isEmailPresent) {
      return res.status(400).json({
        message: "User email already exists",
      });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = new userModel({
      username,
      email,
      password: hashedPassword,
      avatar:avatarPath
    });

    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
      user: {
        userId: newUser.userId,
        username: newUser.username,
        email: newUser.email,
        avatar: newUser.avatar,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};


export const userLogin= (req,res)=>{

  const {email,password}=req.body;
  userModel.findOne({email}).then((data)=>{
    if(!data){
      return res.status(404).json({message:"User Not Found"})
    }

    const ValidPassword=bcrypt.compareSync(password,data.password)
    if(!ValidPassword){
      return res.status(400).json({message:"password is incorrect"});
    }

    const accessToken=jwt.sign({id:data._id,email:data.email},process.env.JWT_SECRET,{expiresIn:"1h"})

    res.status(200).json({
      message:"Successfully Logged in",
      userId:data.userId,
      token:accessToken,
      email:email,
      username:data.username,
      avatar:data.avatar
    })

  }).catch(err=> res.status(500).json({message:err.message}))
  
}