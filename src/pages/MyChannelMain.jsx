import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import UserContext from "../utils/userContext";

function MyChannelMain() {
  const { id: username } = useParams();
  const navigate = useNavigate();
  const [channelExists, setChannelExists] = useState(null);
  const [channelDetails, setChannelDetails] = useState({});
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const { user } = useContext(UserContext);//context api
  const avatar = user?.avatar;

  // Edit states
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editVideoId, setEditVideoId] = useState(null);

  // Add video states
  const [addingVideo, setAddingVideo] = useState(false);
  const [addVideoId, setAddVideoId] = useState("");
  const [addVideoTitle, setAddVideoTitle] = useState("");
  const [addVideoImg, setAddVideoImg] = useState("");

  const fetchChannelData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/channel/videos/${username}`
      );
      if (response.status === 200) {
        setChannelDetails(response.data);
      }
    } catch (error) {
      console.error("Error fetching channel data:", error);
    }
  };

  useEffect(() => {
    const checkChannelExists = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/channel/videos/${username}`
        );
        if (response.status === 200) {
          setChannelExists(true);
          await fetchChannelData();
        }
      } catch (error) {
        if (error.response?.status === 404) {
          navigate("/create-channel");
        } else {
          console.error("Unexpected error", error);
        }
      }
    };
    
   
    checkChannelExists(); 
  }, [username, navigate]);

  const handleEditClick = (videoId, currentTitle) => {
    setIsEditing(true);
    setEditVideoId(videoId);
    setEditTitle(currentTitle);
  };

  const handleEditSubmit = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/channel/editvideo/${channelDetails.channelId}/${editVideoId}`,
        { videoTitle: editTitle }
      );

      if (response.status === 200) {
        await fetchChannelData();
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Edit error:", error);
      alert("Failed to update video title");
    }
  };

  const handleDelete = async (videoId) => {
    const confirmed = window.confirm("Are you sure you want to delete this video?");
    if (!confirmed) return;

    try {
      const response = await axios.delete(
        `http://localhost:5000/channel/deletevideo/${channelDetails.channelId}/${videoId}`
      );
      
      if (response.status === 200) {
        await fetchChannelData();
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete video");
    }
  };

  const addVideos = async () => {
    try {
      if (!addVideoId || !addVideoTitle || !addVideoImg) {
        alert("Please fill all fields");
        return;
      }

      const response = await axios.patch(
        `http://localhost:5000/channel/${channelDetails.channelId}/add-video`,
        {
          videoId: addVideoId,
          videoTitle: addVideoTitle,
          videoImg: addVideoImg
        }
      );

      if (response.status === 200) {
        await fetchChannelData();
        setAddVideoId("");
        setAddVideoTitle("");
        setAddVideoImg("");
        setAddingVideo(false);
      }
    } catch (error) {
      console.error("Add video error:", error);
      alert(error.response?.data?.message || "Failed to add video");
    }
  };

  if (channelExists === null) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      {/* Banner */}
      <div className="w-full h-48 md:h-60 bg-gray-200">
        <img
          src={`http://localhost:5000/${channelDetails.channelBanner}`}
          alt="banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Channel Info */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 md:p-6 gap-4 md:gap-6">
        <div className="flex items-center gap-4 md:gap-6">
          <img
            src={`http://localhost:5000${avatar}`}
            alt="channel"
            className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover border-4 border-white"
          />
          <div>
            <h1 className="font-bold text-xl md:text-3xl">
              {channelDetails.channelName}
            </h1>
            <div className="flex flex-wrap gap-1 md:gap-2 items-center">
              <span className="text-gray-600 text-sm md:text-lg">
                @{channelDetails.owner}
              </span>
              <span className="text-gray-400 hidden md:inline">•</span>
              <span className="text-gray-600 text-sm md:text-lg">
                {channelDetails.subscribers} subscribers
              </span>
              <span className="text-gray-400 hidden md:inline">•</span>
              <span className="text-gray-600 text-sm md:text-lg">
                {channelDetails.videos?.length} Videos
              </span>
            </div>
            <p className="text-xs md:text-sm mt-1 text-gray-600">
              {channelDetails.description}
            </p>
          </div>
        </div>
        <div className="flex gap-2 md:gap-4 w-full md:w-auto mt-4 md:mt-0">
          <button
            className="px-3 py-1 md:px-4 md:py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-xs md:text-sm font-medium flex-1 md:flex-none"
          >
            Customize
          </button>
          <button
            className="px-3 py-1 md:px-4 md:py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 text-xs md:text-sm font-medium flex-1 md:flex-none"
            onClick={() => setAddingVideo(!addingVideo)}
          >
            {addingVideo ? "Cancel" : "Add Video"}
          </button>
        </div>
      </div>

      {/* Add Video Form */}
      {addingVideo && (
        <div className="px-4 md:px-6 mb-6">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Add New Video</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="YouTube Video ID"
                value={addVideoId}
                onChange={(e) => setAddVideoId(e.target.value)}
                className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Video Title"
                value={addVideoTitle}
                onChange={(e) => setAddVideoTitle(e.target.value)}
                className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Thumbnail URL"
                value={addVideoImg}
                onChange={(e) => setAddVideoImg(e.target.value)}
                className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mt-4 flex gap-2 justify-end">
              <button
                onClick={addVideos}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Add Video
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Selected Video Player */}
      {selectedVideoId && (
        <div className="px-4 md:px-6 mb-6">
          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedVideoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}

      {/* Video Grid */}
      <div className="px-4 md:px-6 pb-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Your Videos</h2>
        {channelDetails.videos?.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            No videos uploaded yet
          </div>
        ) : (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {channelDetails.videos?.map((video) => (
              <div
                key={video._id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow relative"
              >
                <img
                  src={video.videoImg}
                  alt="video"
                  className="w-full h-40 object-cover cursor-pointer"
                  onClick={() => setSelectedVideoId(video.videoId)}
                />
                <div className="p-3">
                  {isEditing && editVideoId === video._id ? (
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        className="w-full p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <div className="flex gap-2 justify-end">
                        <button
                          onClick={handleEditSubmit}
                          className="text-sm px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setIsEditing(false)}
                          className="text-sm px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <h3 className="font-semibold text-sm md:text-base mb-1">
                      {video.videoTitle}
                    </h3>
                  )}
                </div>
                <div className="absolute top-2 right-2 flex gap-2">
                  <button
                    onClick={() => handleEditClick(video._id, video.videoTitle)}
                    className="p-1 bg-white rounded-full shadow hover:bg-gray-100"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => handleDelete(video._id)}
                    className="p-1 bg-white rounded-full shadow hover:bg-gray-100"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyChannelMain;