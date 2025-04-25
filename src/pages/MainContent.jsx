import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../utils/userContext";


//main Page for the all youtube videos
function MainContent({ Videos, allVideos, onCategoryClick, selectedCategory }) {
  const categories = [...new Set(allVideos.map((video) => video.category))];
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  //function to get to watch the youtube video with specific id
  function handleGetVideo(id) {
    navigate(`watch/v/${id}`);
  }

  //function to convert the data string to human readable time differnce between that data and the current time eg 5 minutes ago
  function timeAgo(dateString) {
    const now = new Date();
    const uploadedDate = new Date(dateString);
    const seconds = Math.floor((now - uploadedDate) / 1000);

    const intervals = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
    };

    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
      const value = Math.floor(seconds / secondsInUnit);
      if (value >= 1) {
        return `${value} ${unit}${value > 1 ? "s" : ""} ago`;
      }
    }

    return "Just now";
  }

  return (
    <div className="flex-1 bg-white p-6 overflow-y-auto text-black">
      <div className="flex gap-3 mb-6 overflow-x-auto scrollbar-hide">
        <button
          className="text-black whitespace-nowrap bg-gray-200 px-4 py-1.5 rounded-full hover:bg-gray-300 cursor-pointer font-medium transition duration-200"
          onClick={() => onCategoryClick("")}
        >
          All
        </button>
        {categories.map((category, index) => (
          <button
            key={index}
            className={`text-black whitespace-nowrap px-4 py-1.5 rounded-full hover:bg-gray-300 cursor-pointer font-medium transition duration-200 ${
              selectedCategory === category
                ? "bg-red-500 text-black"
                : "bg-gray-200"
            }`}
            onClick={() => onCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* ✅ Conditional render here based on user */}
      {user ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {Videos && Videos.length > 0 ? (
            Videos.map((video, index) => (
              <div
                key={index}
                className="cursor-pointer w-full hover:scale-[1.02] transition-transform duration-200"
                onClick={() => handleGetVideo(video.videoId)}
              >
                <div className="rounded-xl overflow-hidden mb-2">
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-full h-48 object-fill rounded-xl"
                  />
                </div>

                <div className="flex gap-3">
                  <img
                    src={video.thumbnailUrl}
                    alt={video.channelId}
                    className="w-9 h-9 rounded-full"
                  />

                  <div>
                    <h3 className="text-black text-sm font-semibold line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-xs text-gray-500 hover:text-black font-medium">
                      {video.channelName}
                    </p>
                    <p className="text-xs text-gray-500">
                      {video.views} views • {timeAgo(video.uploadDate)}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">Nothing To Show</p>
          )}
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="flex flex-col justify-center w-1/2 items-center text-gray-600 mt-10 text-lg p-8 bg-white rounded-lg shadow-xl">
            <h1 className="text-2xl font-semibold mb-2">
              Try searching to get started
            </h1>
            <p className="text-center text-base">
              Start watching videos to help us build a feed of videos you'll
              love.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainContent;
