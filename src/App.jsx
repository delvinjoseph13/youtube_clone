import { useState } from "react"
import Header from "./components/Header"
import SideBar from "./components/SideBar"

function App() {

  const [isSidebarCollapsed,setIsSidebarCollapsed]=useState(false)


  return (
    <div className="flex flex-col h-screen" >
     <Header toggleSideBar={()=>setIsSidebarCollapsed(prev=>!prev)}/>
     <div className="flex flex-grow overflow-hidden">
      <SideBar collapsed={isSidebarCollapsed}/>
      <main className="flex-grow overflow-y-auto bg-gray-100 p-4">
          {/* Your main content here */}
          <h1 className="text-2xl font-bold">Main Content</h1>
        </main> 
     </div>
    </div>
  )
}

export default App
