import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaHistory, FaRegPlayCircle, FaUserCircle, FaDownload } from "react-icons/fa";
import { MdOutlineVideoLibrary, MdOutlineWatchLater, MdThumbUpOffAlt, MdOutlineMenuBook } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function SideBar(props) {
    const navigate = useNavigate();

    const items = [
        { icon: <IoMdHome className="w-6 h-6" />, label: "Home", route: '/' },
        { icon: <SiYoutubeshorts className="w-6 h-6" />, label: "Shorts" },
        { icon: <MdSubscriptions className="w-6 h-6" />, label: "Subscriptions" },
        { icon: <FaUserCircle className="w-6 h-6" />, label: "You" },
        { icon: <FaHistory className="w-6 h-6" />, label: "History" },
        { icon: <FaRegPlayCircle className="w-6 h-6" />, label: "Playlist" },
        { icon: <MdOutlineVideoLibrary className="w-6 h-6" />, label: "Your Videos" },
        { icon: <MdOutlineMenuBook className="w-6 h-6" />, label: "Your Courses" },
        { icon: <MdOutlineWatchLater className="w-6 h-6" />, label: "Watch Later" },
        { icon: <MdThumbUpOffAlt className="w-6 h-6" />, label: "Liked Videos" },
        { icon: <FaDownload className="w-6 h-6" />, label: "Downloads" },
    ];

    return (
        <aside className={`w-16 ${props.collapsed ? 'md:w-16' : 'md:w-64'} p-4 h-screen overflow-y-auto transition-all duration-300`}>
            <div className="flex flex-col gap-2">
                {items.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => item.route && navigate(item.route)}
                        className={`px-2 ${
                            props.collapsed ? 'md:px-2' : 'md:px-4'
                        } flex items-center ${
                            props.collapsed ? 'justify-center md:justify-start' : 'justify-start'
                        } py-2 rounded-lg hover:bg-gray-300 cursor-pointer transition-all duration-200`}
                    >
                        <span className="flex-shrink-0">{item.icon}</span>
                        {!props.collapsed && (
                            <span className="hidden md:inline-block ml-4 text-sm font-medium truncate">
                                {item.label}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </aside>
    );
}

export default SideBar;


