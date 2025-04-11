import { useEffect, useState, useContext } from "react";
import { Edit, Trash2 } from "lucide-react";
import UserContext from "../utils/userContext";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

function MyChannel() {
  const [isSidebarCollapsed,setIsSidebarCollapsed]=useState(false);

  return (
    <div className="flex flex-col h-screen">
      <Header toggleSideBar={()=>setIsSidebarCollapsed((prev)=>!prev)}/>
        <div className="flex flex-grow overflow-hidden">
          <SideBar collapsed={isSidebarCollapsed}/>
          <main className="flex-grow overflow-y-auto p-4">
            <Outlet/>
  
          </main>
  
        </div>
  
    </div>
  )


}

export default MyChannel;


