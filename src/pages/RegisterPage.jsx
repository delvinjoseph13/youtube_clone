import { useState } from "react";
import {useNavigate,Link} from "react-router-dom"
import axios from "axios"


function RegisterPage() {
    
    const [userName,setUserName]=useState("")
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [avatar,setAvatar]=useState("")
    const navigate=useNavigate()

    const handleRegister=(e)=>{
        e.preventDefault();

        const formData = new FormData();
        
        formData.append("username",userName);
        formData.append("email",email);
        formData.append("password",password);
        if(avatar){
          formData.append("avatar",avatar)

        }
      

        const RegisterApi=axios.post(`http://localhost:5000/register`,formData,{
          headers: {
            "Content-Type": "multipart/form-data",  
          },
        }).then((res)=>{
            console.log("Register Successful")
            console.log(res.data)
            alert("User Registered Successfully")

            navigate('/login')
        }).catch(error=>{
          alert("Internal Server Error")
            console.log(error)
        })
    }


    return (
      <div className="flex justify-center items-center h-screen bg-[#0f0f0f]">
        <div className="bg-[#1f1f1f] shadow-lg rounded-xl w-full max-w-sm p-8 text-white">
          <h2 className="text-3xl font-bold text-center text-white mb-6">Register User</h2>
  
          <form className="space-y-5" onSubmit={handleRegister}>
            <div>
              <label htmlFor="username" className="block text-sm text-gray-300 mb-1">
                Username 
              </label>
              <input
                type="text"
                id="username"
                onChange={(e)=>setUserName(e.target.value)}
                className="w-full px-4 py-2 bg-[#121212] border border-[#3c3c3c] text-white rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
                placeholder="Enter your Username"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-[#121212] border border-[#3c3c3c] text-white rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
                placeholder="Enter your Email"
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
            <div>
            <label htmlFor="avatar" className="block text-sm text-gray-300 mb-1">Avatar Image</label>
            <input
              type="file"
              id="avatar"
              accept="image/*"
              onChange={(e) => setAvatar(e.target.files[0])}
              className="w-full px-2 py-1 bg-[#121212] text-white"
            />
          </div>

  
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md font-medium transition duration-200"
            >
              Register
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link to="/login" className="text-red-500 hover:underline font-medium">Already have account</Link>
          </div>
        </div>
      </div>
    );
  }
  
  export default RegisterPage;
  