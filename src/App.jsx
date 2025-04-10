import { useState } from "react"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import LoginPage from "./pages/LoginPage"
import MainContent from "./pages/MainContent"
import Videos from "./components/videos"
import HomePage from "./pages/Home"
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import PageNotFound from "./components/PageNotFound"
import UserContext from "./utils/userContext"
import VideoDetailPage from "./pages/VideoDetailPage"
import VideoPlayerPage from "./pages/VideoPlayerPage"

function App() {

  const [user,setUser]=useState(null);


  return (
    <>
    <UserContext.Provider value={{user,setUser}}>
    <Router>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="*" element={<PageNotFound/>}/>

        <Route path="/watch" element={<VideoDetailPage/>}>
            <Route path="v/:id" element={<VideoPlayerPage/>}/>
        </Route>

    </Routes>
   </Router>
    </UserContext.Provider>
    </>

    
  )
}

export default App
