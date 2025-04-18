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
import VideoDetailPage from "./pages/VideoDetailPage"
import VideoPlayerPage from "./pages/VideoPlayerPage"
import CreateChannelPage from "./pages/createChannelPage"
import MyChannel from "./pages/MyChannel"
import MyChannelMain from "./pages/MyChannelMain"
import { UserProvider } from "./utils/userContext"
import {Provider} from "react-redux"
import appStore from "./utils/appStore"

function App() {



  return (
    <Provider store={appStore}>
    <UserProvider>
    <Router>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="*" element={<PageNotFound/>}/>

        <Route path="/watch" element={<VideoDetailPage/>}>
            <Route path="v/:id" element={<VideoPlayerPage/>}/>
        </Route>
      <Route path="/cretechannel" element={<CreateChannelPage/>}/>

      <Route path="/channel" element={<MyChannel/>}>
           <Route path="user/:id" element={<MyChannelMain/>}/>
      </Route>
    </Routes>
   </Router>
    </UserProvider>
    </Provider>

    
  )
}

export default App
