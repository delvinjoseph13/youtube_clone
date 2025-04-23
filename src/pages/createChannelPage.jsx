import { useEffect, useState } from "react";
import { Camera } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateChannelPage() {
  const navigate = useNavigate();

  const [preview, setPreview] = useState(null);
  const [channelName, setChannelName] = useState("");
  const [description, setDescription] = useState("");
  const [banner,setBanner]=useState("")

  const user = JSON.parse(localStorage.getItem("user"));
  const username = user?.name;
  const [owner,setOwner]=useState(user?.name)


  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    setBanner(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Check if user already has a channel
      const res = await axios.get(`http://localhost:5000/channel/videos/${username}`);
      const videos = res.data?.videos;
  
      if (videos) {
        alert("Channel already exists!");
        return navigate(`/channel/${username}`);
      }
    } catch (error) {
      // If error, assume no channel exists and continue
    }
  
    try {
      const formData = new FormData();
      formData.append("channelName", channelName);
      formData.append("description", description);
      formData.append("username", username);
      formData.append("banner", banner); // this is the image file
  
      await axios
        .post("http://localhost:5000/channel/createChannel", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          alert("Channel created successfully!");
          navigate(`/channel/user/${username}`);
        })
        .catch((err) => {
          console.error("Error creating channel:", err);
          alert("Something went wrong!");
        });
    } catch (error) {
      console.error("Channel creation failed:", error);
      alert("Failed to create channel.");
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">Create Your Channel</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Channel Logo Preview and Upload */}
          <div className="flex items-center space-x-6">
            <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gray-200">
              {preview ? (
                <img src={preview} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <Camera className="w-6 h-6" />
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoChange}
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Upload channel logo</label>
              <p className="text-sm text-gray-500">Image should be square (1:1 ratio)</p>
            </div>
          </div>

          {/* Channel Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Channel Name</label>
            <input
              type="text"
              value={channelName}
              onChange={(e) => setChannelName(e.target.value)}
              placeholder="e.g., Delvin’s Coding Hub"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
              required
            />
          </div>

          {/* Channel Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              placeholder="Tell viewers about your channel"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-md w-full transition"
          >
            Create Channel
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateChannelPage;
