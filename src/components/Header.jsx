import { CiMenuBurger } from "react-icons/ci";
import { BiSearch } from "react-icons/bi";
import { MdKeyboardVoice } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Videos from "./videos";

function Header({ toggleSideBar, setSearchQuery }) {
  const navigate = useNavigate();
  return (
    <header className="px-4 sm:px-6 py-3 flex flex-col sm:flex-row justify-between items-center sticky top-0 z-50 bg-white shadow-md">
      {/* Top Row (Logo & Menu) */}
      <div className="w-full sm:w-auto flex justify-between items-center mb-3 sm:mb-0">
        <div className="flex gap-4 items-center">
          <CiMenuBurger 
            className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer hover:text-red-600 transition duration-200"
            onClick={toggleSideBar}
          />
          <img
            src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
            alt="YouTube Logo"
            className="w-[90px] h-auto"
          />
        </div>
      </div>

      {/* Center - Search bar */}
      <div className="w-full sm:w-[500px] flex items-center max-w-full mb-3 sm:mb-0">
        <div className="flex flex-grow items-center border border-zinc-700 rounded-l-full overflow-hidden">
          <input
            type="text"
            onChange={(e)=>setSearchQuery(e.target.value)}
            placeholder="Search"
            className="text-black px-3 py-2 w-full focus:outline-none text-sm"
          />
        </div>
        <button className="bg-gray-300 px-4 py-[10px] rounded-r-full hover:bg-zinc-700 transition duration-200 border border-zinc-700 border-l-0">
          <BiSearch className="text-white w-5 h-5" />
        </button>
        <button className="ml-2 sm:ml-3 bg-zinc-900 p-3 rounded-full hover:bg-zinc-700 transition duration-200">
          <MdKeyboardVoice className="text-white w-5 h-5" />
        </button>
      </div>

      {/* Right - Actions */}
      <div className="flex items-center gap-3 sm:gap-5">
        <button className="flex items-center gap-1 bg-gray-300 px-3 sm:px-4 py-2 rounded-full hover:bg-zinc-400 transition duration-200 text-sm">
          <span className="text-base">+</span>
          <span>Create</span>
        </button>
        <IoIosNotifications className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-red-500 transition duration-200" />
        <div className="flex gap-2 border border-blue-400 p-1 rounded-2xl cursor-pointer"
        onClick={() => navigate('/login')}>
        <FaRegUserCircle 
          className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer text-blue-500 hover:text-red-500 transition duration-200"
          
        />
        <h3 className="text-sm text-blue-500 font-medium">Sign in</h3>
        </div>

      </div>
    </header>
  );
}

export default Header;
