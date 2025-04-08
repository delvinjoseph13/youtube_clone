import SideBar from "../components/SideBar"
import Videos from "../components/videos"
import Header from "../components/Header"
import { useState } from "react"
import { sampleVideos } from "../components/videos"

function HomePage(){

    const [searchQuery,setSearchQuery]=useState("")
    const [isSidebarCollapsed,setIsSidebarCollapsed]=useState(false)

    const filteredVideos = sampleVideos.filter((video) =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return (
        <>
     <div className="flex flex-col h-screen" >
     <Header toggleSideBar={()=>setIsSidebarCollapsed(prev=>!prev)} setSearchQuery={setSearchQuery}/>
     <div className="flex flex-grow overflow-hidden">
      <SideBar collapsed={isSidebarCollapsed}/>
      {/* <main className="flex-grow overflow-y-auto bg-gray-100 p-4"> */}
       <Videos videos={filteredVideos}/>
      {/* </main> */}
     </div>
    {/* <LoginPage/>  */}
    </div>
        </>
    )
}

export default HomePage;