import SideBar from "../components/SideBar"
import Videos from "../components/videos"
import Header from "../components/Header"
import { useEffect, useState } from "react"
import axios from "axios"

function HomePage(){

    const [searchQuery,setSearchQuery]=useState("")
    const [isSidebarCollapsed,setIsSidebarCollapsed]=useState(false);
    const [selectedCategory,setSelectedCategory]=useState("");
    const [video,setVideos]=useState([])

    useEffect(()=>{
        const fetchData=async()=>{
            try {
                const videoApi=await axios.get('http://localhost:5000/all/videos').then((res)=>{
                    console.log("home content",res.data)
                    setVideos(res.data.data)
                })
            } catch (error) {
                console.log("Error fetching api",error)
            }

        }
        fetchData()

    },[])




    const filterBySearch= video.filter((video) =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

     const filteredVideos=selectedCategory ? filterBySearch.filter((video)=> video.category ===selectedCategory) :filterBySearch;
     
    return (
        <>
     <div className="flex flex-col h-screen" >
        {/* passing the value from the child to partent and upading the toggleSidebar and getting the search input */}
     <Header toggleSideBar={()=>setIsSidebarCollapsed(prev=>!prev)} setSearchQuery={setSearchQuery}/>
     <div className="flex flex-grow overflow-hidden">
        {/* isSidebarCollapsed is used to minimize is sidebar or not the setIsSidebarCollapsed gives me boolean value if it is true then no sidebar or else there is sidebar */}
      <SideBar collapsed={isSidebarCollapsed}/> 
       <Videos 
       videos={filteredVideos} 
       allVideos={video}
       onCategoryClick={setSelectedCategory}
       selectedCategory={selectedCategory}/>
      {/* </main> */}
     </div>
    {/* <LoginPage/>  */}
    </div>
        </>
    )
}

export default HomePage;