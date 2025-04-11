import { CiMenuBurger,CiSettings } from "react-icons/ci";
import { BiSearch } from "react-icons/bi";
import { MdKeyboardVoice,MdOutlineSwitchAccount,MdOutlineHelpOutline  } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaRegUserCircle,FaGoogle } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import { useNavigate,Link } from "react-router-dom";
import { useState } from "react";
import Videos from "./videos";
import { useContext } from "react";
import UserContext from "../utils/userContext";

function Header({ toggleSideBar, setSearchQuery }) {
  const navigate = useNavigate();
  const {user,setUser}=useContext(UserContext);
  const [showDropDown,setShowDropDown]=useState(false)
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
        {
            user ? (
                  <div className="relative">
                    <div className="flex items-center gap-2 border border-blue-400 p-1 rounded-2xl cursor-pointer"
                    onClick={()=>setShowDropDown((prev)=>!prev)}>
                      <FaRegUserCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 hover:text-red-500 transition duration-200" />
                      <h3 className="text-sm text-blue-500 font-medium">{user.name}</h3>
                    </div>

                    {
                      showDropDown  && (
                             <div className="absolute right-0 mt-2 w-64 bg-white border rounded-md shadow-lg p-3 z-50 ">
                              <div className="p-2 flex items-center gap-2 border-b-1 border-gray-300">
                                <div className="rounded-full">
                                <img src="profile pic" alt="User Image"  />
                                </div>
                                <div>
                                  <p className="text-black font-medium">{user.name}</p>
                                  <p className="text-black font-medium">{user.email}</p>
                                  <Link to="/channel/user/ddsd" className="text-sm text-blue-500">View Your Channel</Link>
                                </div>
                              </div>
                              <div>

                              </div>

                              <div>                              
                              <div className="flex flex-col gap-2 mt-2 border-b-1 border-gray-300">
                                <div className="flex items-center gap-4 px-2  py-2 rounded-lg hover:bg-gray-300 cursor-pointer transition duration-200">
                                <span className="text-xl">{<FaGoogle/>}</span>
                                  <span>Google Account</span>
                                </div>
                                <div className="flex items-center gap-4 px-2  py-2 rounded-lg hover:bg-gray-300 cursor-pointer transition duration-200">
                                <span className="text-xl">{<MdOutlineSwitchAccount/>}</span>
                                  <span>Switch Account</span>
                                </div>
                                <div className="flex items-center gap-4 px-2  py-2 rounded-lg hover:bg-gray-300 cursor-pointer transition duration-200">
                                  <span className="text-xl">{<GoSignOut/>}</span>
                                  <button className="flex items-center gap-4 px-2  py-2 rounded-lg hover:bg-gray-300 cursor-pointer transition duration-200"
                                  onClick={()=>{
                                    setUser(null)
                                    setShowDropDown(false);
                                    navigate('/login')
                                  }
                                  
                                    
                                  }>Sign out</button>
                                </div>

                              </div>
                              <div className="flex flex-col">
                              <div className="flex items-center gap-4 px-2  py-2 rounded-lg hover:bg-gray-300 cursor-pointer transition duration-200">
                                <span className="text-xl">{<MdOutlineHelpOutline/>}</span>
                                  <span>Help</span>
                                </div>
                                <div className="flex items-center gap-4 px-2  py-2 rounded-lg hover:bg-gray-300 cursor-pointer transition duration-200">
                                <span className="text-xl">{<CiSettings/>}</span>
                                  <span>Settings</span>
                                </div>
                              </div>
                              </div>
                             </div>
                      ) 
                    }

                  </div>
            ) : (
              <div className="flex gap-2 border border-blue-400 p-1 rounded-2xl cursor-pointer"
              onClick={() => navigate('/login')}>
              <FaRegUserCircle 
                className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer text-blue-500 hover:text-red-500 transition duration-200"
                
              />
              <h3 className="text-sm text-blue-500 font-medium">sign in</h3>
              </div>
            )
        }


      </div>
    </header>
  );
}

export default Header;
