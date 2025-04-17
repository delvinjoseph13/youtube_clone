import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addComment, deleteComment, editComment, fetchComments } from "../utils/CommentSlice";
import { updateLikeDislike } from "../utils/likeDislikeSlice";

function VideoPlayerPage() {
  const { id } = useParams();
  const [videos, setVideos] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [Videoloading, setVideoLoading] = useState(true);
  const { comments, loading, error } = useSelector((state) => state.comment);
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const [showMenu, setShowMenu] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editingComment, setEditingComment] = useState(null);



  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:5000/all/videos")
        .then((res) => {
          setVideos(res.data.data);
        })
        .catch((err) => alert(err))
        .finally(() => setVideoLoading(false));
    };
    fetchData();
  }, []);

    const video = videos.find((video) => video.videoId === id);


  useEffect(() => {
    if (video?._id) {
      dispatch(fetchComments(video._id));
      console.log(video)
    }
  }, [dispatch, video?._id]);

  const handleComment = () => {
    if (comment.trim() && video?._id) {
      dispatch(addComment({ videoId: video._id, text: comment, userId: video.uploader }));
      setComment("");
    } else {
      console.error("Video ID is undefined or comment is empty");
    }
  };

  const handleDeleteComment = (commentId) => {
    if (video?._id) {
      dispatch(deleteComment({ videoId: video._id, commentId }));
    }
  };

  const handleEditComment = (comment) => {
    setEditingComment(comment);
    setComment(comment.text);
    setEditMode(true);
  };
  

  const handleSaveEdit = () => {
    if (editingComment && comment.trim() && video?._id) {
      dispatch(editComment({ videoId: video._id, commentId: editingComment.commentId, newText: comment }))
        .then(() => {
          // Refetch comments to ensure the updated comment is loaded
          dispatch(fetchComments(video._id));
        });
      setEditMode(false);
      setComment(""); // Clear comment input after saving
    }
  };

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

  const handleLike=()=>{
    if(video?._id){
      dispatch(updateLikeDislike({videoId:video._id,userId:video.channelId,type:"like"}))

    }
  }

  const handleDislike=()=>{
    if(video?._id){
      dispatch(updateLikeDislike({videoId:video._id,userId:video.channelId,type:"dislikes"}))

    }
  }

  if(Videoloading){
    return <div className="p-4 text-center text-gray-600">Loading video...</div>;
  }
  

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full p-4 max-w-screen-xl mx-auto">
      {/* Left - Video and Details */}
      <div className="w-full md:flex-1">
        {/* Video Player */}
        <div className="w-full aspect-video bg-black mb-4 rounded overflow-hidden">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${video?.videoId}`}
            title={video?.title}
            allowFullScreen
          ></iframe>
        </div>
                {/* Video Title */}
                <h1 className="font-bold text-lg sm:text-xl mb-2">{video?.title}</h1>

{/* Channel Info + Buttons */}
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
  <div className="flex items-center gap-3">
    <img
      src="https://i.ytimg.com/vi/sBws8MSXN7A/maxresdefault.jpg"
      alt="channel"
      className="w-10 h-10 rounded-full"
    />
    <div>
      <h2 className="font-medium text-gray-800 text-sm">{video.channelId}</h2>
      <p className="text-xs text-gray-500">128K subscribers</p>
    </div>
    <button className="ml-2 bg-black text-white px-3 py-1 text-xs sm:text-sm rounded hover:bg-gray-800">
      Subscribe
    </button>
  </div>

  <div className="flex gap-3">
    <button className="flex items-center bg-gray-200 gap-1 px-3 py-1 rounded-full text-sm hover:bg-gray-300"
    onClick={handleLike}>
      👍 <span>{video.likes} Like</span>
    </button>
    <button className="flex items-center bg-gray-200 gap-1 px-3 py-1 rounded-full text-sm hover:bg-gray-300"
    onClick={handleDislike}>
      👎 <span>{video.dislikes} Dislike</span>
    </button>
  </div>
</div>

{/* Views + Description */}
<div className="text-gray-700 text-sm">
  <div className="flex flex-wrap gap-2 mb-2 text-gray-600 text-xs sm:text-sm">
    <span>{video.views} views</span>
    <span>•</span>
    <span>{timeAgo(video.uploadDate)}</span>
  </div>

  <p className={`whitespace-pre-line ${showMore ? "" : "line-clamp-3"}`}>
    {video.description}
  </p>
  <button
    className="text-blue-600 mt-1 text-sm font-medium hover:underline"
    onClick={() => setShowMore((prev) => !prev)}
  >
    {showMore ? "Show Less" : "Show More"}
  </button>
</div>
        

        {/* Comments */}
        <div className="mt-6">
          <h2 className="font-semibold text-lg mb-2">Comments</h2>
          <div className="mb-4">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment..."
              className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none p-2 text-sm"
            />
            <button
              className="bg-blue-600 text-white mt-2 px-4 py-1 rounded hover:bg-blue-700 text-sm"
              onClick={editMode ? handleSaveEdit : handleComment}
            >
              {editMode ? "Save" : "Comment"}
            </button>
          </div>

          {comments?.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.commentId} className="flex justify-between border-b pb-2 mb-2 ">
                <div>
                <p className="font-semibold text-sm">{comment.userId}</p>
                <p className="text-sm text-gray-700">{comment.text}</p> 
                </div>

                
                {/* Menu for editing and deleting */}
                <div className="relative">
                <button
                  className="text-blue-500 text-xs mt-2"
                  onClick={() => setShowMenu(comment.commentId === showMenu ? null : comment.commentId)}
                >
                  More
                </button>
                {showMenu === comment.commentId && (
                  <div className="absolute bg-white border p-2 rounded shadow-lg mt-2">
                    <button
                      className="text-blue-600 text-sm"
                      onClick={() => handleEditComment(comment)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-600 text-sm mt-2"
                      onClick={() => handleDeleteComment(comment.commentId)}
                    >
                      Delete
                    </button>
                  </div>
                )}
                </div>
                
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500 mt-4">No comments yet.</p>
          )}
        </div>
      </div>

      {/* Right - Suggested Videos */}
      <div className="w-full md:w-[350px] space-y-4">
        <h2 className="font-semibold text-lg mb-2">Up Next</h2>
        {videos
          .filter((v) => v._id !== video._id)
          .map((video) => (
            <div
              key={video._id}
              className="flex gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded"
            >
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                className="w-32 h-20 object-cover rounded"
              />
              <div className="flex flex-col justify-center">
                <p className="font-semibold text-sm line-clamp-2">{video.title}</p>
                <p className="text-xs text-gray-500">{video.category}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default VideoPlayerPage;
