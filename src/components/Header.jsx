    import { CiMenuBurger } from "react-icons/ci";
    import { BiSearch } from "react-icons/bi";
    import { MdKeyboardVoice } from "react-icons/md";
    import { IoIosNotifications } from "react-icons/io";
    import { FaRegUserCircle } from "react-icons/fa";

    function Header(props) {
    return (
        <header className="px-6 py-3 flex justify-between items-center sticky top-0 z-50">
        {/* Left - Menu & Logo */}
        <div className="flex gap-6 items-center">
            <CiMenuBurger 
            className="w-7 h-7 cursor-pointer hover:text-red-600 transition duration-200"
            onClick={props.toggleSideBar}
             />
            <img
            src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
            alt="YouTube Logo"
            width="93px"
            height="20px"
            />
        </div>

        {/* Center - Search bar */}
        <div className="flex items-center w-[500px] max-w-full">
            <div className="flex flex-grow items-center  border border-zinc-700 rounded-l-full overflow-hidden">
            <input
                type="text"
                placeholder="Search"
                className="text-black px-4 py-2 w-full focus:outline-none"
            />
            </div>
            <button className="bg-gray-300 px-4 py-[10px] rounded-r-full hover:bg-zinc-700 transition duration-200 border border-zinc-700 border-l-0">
            <BiSearch className="text-white w-5 h-5" />
            </button>
            <button className="ml-3 bg-zinc-900 p-3 rounded-full hover:bg-zinc-700 transition duration-200">
            <MdKeyboardVoice className="text-white w-5 h-5" />
            </button>
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-5">
            <button className="flex items-center gap-1 bg-gray-300 px-4 py-2 rounded-full hover:bg-zinc-700 transition duration-200">
            <span className="text-lg">+</span>
            <span className="text-sm">Create</span>
            </button>
            <IoIosNotifications className="w-6 h-6 cursor-pointer hover:text-red-500 transition duration-200" />
            <FaRegUserCircle className="w-6 h-6 cursor-pointer hover:text-red-500 transition duration-200" />
        </div>
        </header>
    );
    }

    export default Header;
