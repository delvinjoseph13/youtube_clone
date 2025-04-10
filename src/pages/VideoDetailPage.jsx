import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { useState } from "react";

function VideoDetailPage(){
    const [isSidebarCollapsed,setIsSidebarCollapsed]=useState(true)
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
export default VideoDetailPage;