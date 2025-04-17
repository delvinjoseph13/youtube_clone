import { useState } from "react";
import {useNavigate,Link} from "react-router-dom"
import axios from "axios"
import UserContext from "../utils/userContext";
import { useContext } from "react";


function LoginPage() {
    
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const navigate=useNavigate()
    const {setUser}=useContext(UserContext);

    const handleLogin=(e)=>{
        e.preventDefault();
        const loginApi=axios.post(`http://localhost:5000/login`,{
            "email":email,
            "password":password
        }).then((res)=>{
            console.log("Login Successful")
            console.log(res.data)
            localStorage.setItem("token",res.data.token)
            setUser({
              name:res.data.username,
              email:res.data.email,
              avatar:res.data.avatar
            })
            navigate('/')
        }).catch(error=>{
          alert("Password or Email is not matching")
            console.log(error)
        })
    }


    return (
      <div className="flex justify-center items-center h-screen bg-[#0f0f0f]">
        <div className="bg-[#1f1f1f] shadow-lg rounded-xl w-full max-w-sm p-8 text-white">
          <h2 className="text-3xl font-bold text-center text-white mb-6">Login in</h2>
  
          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label htmlFor="username" className="block text-sm text-gray-300 mb-1">
                Email 
              </label>
              <input
                type="email"
                id="username"
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-[#121212] border border-[#3c3c3c] text-white rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
                placeholder="Enter your email or phone"
              />
            </div>
  
            <div>
              <label htmlFor="password" className="block text-sm text-gray-300 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={(e)=>setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-[#121212] border border-[#3c3c3c] text-white rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
                placeholder="Enter your password"
              />
            </div>
  
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md font-medium transition duration-200"
            >
              Login
            </button>
          </form>
  
          <div className="text-sm text-gray-400 mt-6 text-center">
            Not your computer? Use Guest mode to sign in privately.{" "}
            <a href="#" className="text-red-500 hover:underline">Learn more</a>
          </div>
  
          <div className="mt-6 text-center">
            <Link to="/register" className="text-red-500 hover:underline font-medium">Create account</Link>
          </div>
        </div>
      </div>
    );
  }
  
  export default LoginPage;
  