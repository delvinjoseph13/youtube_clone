import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function istokenValid(token){
    try {
        const decode=jwtDecode(token);
        const now=Date.now /1000;
        return decode.exp > now  
    } catch (error) {
        return false
    }
}

function ProtectRoute({children}){
    const navigate=useNavigate()

    useEffect(()=>{
        const token=localStorage.getItem('token');
        if(!token || !istokenValid(token)){
            alert("Session expired Login again")
            navigate('/login')
        }

    },[navigate])


    return children;
   
}


export default ProtectRoute