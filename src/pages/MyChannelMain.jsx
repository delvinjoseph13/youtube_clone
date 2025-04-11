import { useParams } from "react-router-dom";

function MyChannelMain() {
  const { id } = useParams();

  return (
    <div className="flex flex-col w-full">
      {/* Banner */}
      <div className="w-full h-60 bg-gray-200">
        <img
          src="https://www.pixelstalk.net/wp-content/uploads/2016/08/YouTube-Background-HD.jpg"
          alt="banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Channel Info */}
      <div className="flex flex-col md:flex-row justify-between  items-start md:items-center p-6 gap-6">
        <div className="flex items-center gap-6">
          <img
            src="https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg"
            alt="channel"
            className="w-28 h-28 rounded-full object-cover"
          />
          <div>
            <h1 className="font-bold text-3xl">Username</h1>
            <h2 className="text-gray-600 text-lg">useremail@example.com</h2>
            <p className="text-sm mt-1">Channel description or bio goes here.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-sm font-medium">
            Customize Channel
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-sm font-medium">
            Manage Videos
          </button>
        </div>
      </div>

      {/* Video Section */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Your Videos</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[1, 2, 3, 4, 5, 6].map((video) => (
            <div
              key={video}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src="https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg"
                alt="video"
                className="w-full h-40 object-cover"
              />
              <div className="p-3">
                <h3 className="font-semibold text-lg mb-1">Video Title</h3>
                <p className="text-sm text-gray-500">Views · Date</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyChannelMain;
