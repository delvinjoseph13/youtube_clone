import Videos from "../components/videos";
import { useNavigate } from "react-router-dom";

function MainContent({ Videos,allVideos,onCategoryClick,selectedCategory}) {

   const categories=[... new Set(allVideos.map((videos) => videos.category))]

   const navigate=useNavigate()

   function handleGetVideo(id){
     navigate(`watch/v/${id}`)
   }
  

  return (
    <div className="flex-1 bg-white p-6 overflow-y-auto text-black">
      <div className="flex gap-3 mb-6 overflow-x-auto scrollbar-hide">
        <button 
        className="text-black whitespace-nowrap bg-gray-200 px-4 py-1.5 rounded-full hover:bg-gray-300 cursor-pointer font-medium transition duration-200"
        onClick={()=>onCategoryClick("")}
        >
          All
        </button>
        {categories.map((category, index) => (
          <button
            key={index}
            className={`text-black whitespace-nowrap bg-gray-200 px-4 py-1.5 rounded-full hover:bg-gray-300 cursor-pointer font-medium ${
              selectedCategory===category  
                ? "bg-red-500 text-black"
                : "bg-gray-200"
            }`}
            onClick={()=>onCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {Videos && Videos.length > 0 ? (
          Videos.map((video, index) => (
            <div
              key={index}
              className="cursor-pointer w-full hover:scale-[1.02] transition-transform duration-200"
              onClick={()=>handleGetVideo(video.id)}
            >
              <div className="rounded-xl overflow-hidden mb-2">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-fill rounded-xl"
                />
              </div>

              <div className="flex gap-3">
                <img
                  src={video.thumbnail}
                  alt={video.channelName}
                  className="w-9 h-9 rounded-full "
                />

                <div>
                  <h3 className="text-black text-sm font-semibold line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-xs text-gray-500 hover:text-black font-medium">
                    {video.channelName}
                  </p>
                  <p className="text-xs text-gray-500">
                    {video.views} • {video.uploaded}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
            <div >
             <p className="text-center">Nothing To Show</p>
            </div>

        )}
      </div>
    </div>
  );
}

export default MainContent;
