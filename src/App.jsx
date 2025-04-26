import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { UserProvider } from "./utils/userContext";
import appStore from "./utils/appStore";
import HomePage from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PageNotFound from "./components/PageNotFound";
import VideoDetailPage from "./pages/VideoDetailPage";
import VideoPlayerPage from "./pages/VideoPlayerPage";
import CreateChannelPage from "./pages/createChannelPage";
import MyChannel from "./pages/MyChannel";
import MyChannelMain from "./pages/MyChannelMain";
import ProtectRoute from "./components/ProtectRoute";

function App() {
  return (
    <Provider store={appStore}>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/cretechannel" element={<ProtectRoute><CreateChannelPage /></ProtectRoute>} />
            <Route path="/watch" element={<ProtectRoute><VideoDetailPage /></ProtectRoute>}>
              <Route path="v/:id" element={<VideoPlayerPage />} />
            </Route>
            <Route path="/channel" element={<ProtectRoute><MyChannel /></ProtectRoute>}>
              <Route path="user/:id" element={<MyChannelMain />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </UserProvider>
    </Provider>
  );
}

export default App;



// https://github.com/delvinjoseph13/youtube_clone