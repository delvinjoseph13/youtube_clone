import { useParams } from "react-router-dom";
import { sampleVideos } from "../components/videos";
import { useState } from "react";

function VideoPlayerPage() {
  const { id } = useParams();
  const video = sampleVideos.find((video) => video.id === id);
  const [showMore, setShowMore] = useState(false);

  // Convert YouTube watch link to embed URL
  const getEmbedUrl = (url) => {
    const videoId = url?.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full p-4">
      {/* Left Side - Video and Comments */}
      <div className="flex-1">
        {/* Video Player */}
        <div className="w-full aspect-video bg-black mb-4">
          <iframe
            className="w-full h-full"
            src={getEmbedUrl(video?.videoUrl)}
            title={video?.title}
            allowFullScreen
          ></iframe>
        </div>

        {/* Video Title */}
        <h1 className="font-bold text-xl mb-2">{video?.title}</h1>

        {/* Channel Info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <img
              src="https://i.ytimg.com/vi/sBws8MSXN7A/maxresdefault.jpg"
              alt="channel"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h2 className="font-medium text-gray-800">Pop PREMIER</h2>
              <p className="text-sm text-gray-500">128K subscribers</p>
            </div>
            <button className="bg-black text-white px-3 py-1 text-sm rounded-md hover:bg-gray-800">
              Subscribe
            </button>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <button className="flex items-center bg-[#E5E5E5] gap-1 p-1 rounded-2xl text-gray-700 hover:text-black hover:bg-gray-300 transition duration-200">
              👍 <span className="font-medium">Like</span>
            </button>
            <button className="flex items-center gap-1 bg-[#E5E5E5] p-1 rounded-2xl text-gray-700 hover:text-black hover:bg-gray-300 transition duration-200">
              👎 <span className="font-medium">Dislike</span>
            </button>
          </div>
        </div>

        <div className="mt-2 text-gray-700 text-sm">
          <div className="flex gap-4 mb-1 text-gray-600 text-sm">
            <span>3323232 views</span>
            <span>•</span>
            <span>25/1/2024</span>
          </div>

          <p className="whitespace-pre-line">
            This is a hilarious theatre response video by Pop PREMIER for the
            movie Maranamass featuring Basil Joseph. \n\nDon't forget to like,
            comment and subscribe for more such awesome content!
          </p>

          <button
            className="text-blue-600 mt-1 text-sm font-medium hover:underline"
            onClick={() => setShowMore((prev) => !prev)}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>

        {/* Comments Section */}
        <div className="mt-6">
          <h2 className="font-semibold text-lg mb-2">Comments</h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Add a comment..."
              className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none p-2"
            />

            <button className="bg-blue-600 text-white mt-2 px-4 py-1 rounded hover:bg-blue-700">
              Comment
            </button>
          </div>

          {/* Sample Comments */}
          <div className="space-y-4">
            <div className="border-b pb-2">
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-gray-700">This was an epic review!</p>
            </div>
            <div className="border-b pb-2">
              <p className="font-semibold">Sneha R</p>
              <p className="text-sm text-gray-700">
                Maranamass title feels accurate 😂
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Suggested Videos */}
      <div className="w-full md:w-[350px] space-y-4">
        <h2 className="font-semibold text-lg mb-2">Up Next</h2>
        {sampleVideos
          .filter((v) => v.id !== id)
          .map((video) => (
            <div
              key={video.id}
              className="flex gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-32 h-20 object-cover rounded"
              />
              <div>
                <p className="font-semibold text-sm">{video.title}</p>
                <p className="text-xs text-gray-500">{video.category}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default VideoPlayerPage;
