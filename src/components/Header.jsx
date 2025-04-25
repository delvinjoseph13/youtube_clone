import { CiMenuBurger, CiSettings } from "react-icons/ci";
import { BiSearch } from "react-icons/bi";
import { MdKeyboardVoice, MdOutlineSwitchAccount, MdOutlineHelpOutline } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaRegUserCircle, FaGoogle } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import { useNavigate, Link } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "../utils/userContext.jsx";

function Header({ toggleSideBar, setSearchQuery }) {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);//context api
  const [showDropDown, setShowDropDown] = useState(false);
  const avatar = user?.avatar;//comming from the userContext.js

  return (
    <header className="px-2 sm:px-4 py-2 flex items-center justify-between sticky top-0 z-50 bg-white shadow-sm gap-2 sm:gap-4">
      {/* Left Section */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <CiMenuBurger
          className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-red-600 transition-colors"
          onClick={toggleSideBar}
          aria-label="Toggle menu"
        />
        <Link to="/" className="flex items-center">
          <img
            src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
            alt="YouTube"
            className="w-[70px] sm:w-[90px] h-auto"
          />
        </Link>
      </div>

      {/* Center Search */}
      <div className="flex flex-1 max-w-[600px] min-w-[100px]">
        <div className="flex flex-grow items-center border border-gray-300 rounded-l-full overflow-hidden focus-within:border-blue-500 transition-colors">
          <input
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            className="w-full px-2 sm:px-3 py-1 text-sm focus:outline-none bg-transparent"
            aria-label="Search videos"
          />
        </div>
        <button 
          className="bg-gray-100 hover:bg-gray-200 px-2 sm:px-3 py-1 rounded-r-full border-l-0 transition-colors flex-shrink-0"
          aria-label="Search"
        >
          <BiSearch className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button 
          className="ml-1 bg-gray-100 hover:bg-gray-200 p-1 sm:p-2 rounded-full transition-colors flex-shrink-0"
          aria-label="Voice search"
        >
          <MdKeyboardVoice className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
        <button 
          className="hidden xs:flex items-center gap-1 bg-gray-100 hover:bg-gray-200 px-2 sm:px-3 py-1 rounded-full transition-colors text-sm"
          aria-label="Create"
        >
          <span className="text-lg">+</span>
          <span className="hidden sm:inline">Create</span>
        </button>
        
        <IoIosNotifications className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-red-500 transition-colors flex-shrink-0" />

        {user ? (
          <div className="relative">
            <button
              onClick={() => setShowDropDown(!showDropDown)}
              className="flex items-center p-1 rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
              aria-label="User menu"
            >
              {avatar ? (
                <img
                  src={`http://localhost:5000${avatar}`}
                  alt="Profile"
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
                />
              ) : (
                <FaRegUserCircle className="w-6 h-6 text-gray-600 hover:text-red-500" />
              )}
            </button>

            {/* Dropdown Menu */}
            {showDropDown && (
              <div className="absolute right-0 mt-2 w-72 bg-white border rounded-md shadow-lg p-3 z-50 ">
                <div className="p-2 flex items-center gap-2 border-b-1 border-gray-300">
                  <div className="rounded-full">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img
                        src={`http://localhost:5000${avatar}`}
                        alt="User Image"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-black font-medium">{user.name}</p>
                    <p className="text-black font-medium">{user.email}</p>
                    <Link
                      to={`/channel/user/${user.name}`}
                      className="text-sm text-blue-500"
                    >
                      View Your Channel
                    </Link>
                  </div>
                </div>
                <div></div>

                <div>
                  <div className="flex flex-col gap-2 mt-2 border-b-1 border-gray-300">
                    <div className="flex items-center gap-4 px-2  py-2 rounded-lg hover:bg-gray-300 cursor-pointer transition duration-200">
                      <span className="text-xl">{<FaGoogle />}</span>
                      <span>Google Account</span>
                    </div>
                    <div className="flex items-center gap-4 px-2  py-2 rounded-lg hover:bg-gray-300 cursor-pointer transition duration-200">
                      <span className="text-xl">
                        {<MdOutlineSwitchAccount />}
                      </span>
                      <span>Switch Account</span>
                    </div>
                    <div className="flex items-center gap-4 px-2  py-2 rounded-lg hover:bg-gray-300 cursor-pointer transition duration-200">
                      <span className="text-xl">{<GoSignOut />}</span>
                      <button
                        className="flex items-center gap-4 px-2  py-2 rounded-lg hover:bg-gray-300 cursor-pointer transition duration-200"
                        onClick={() => {
                          setUser(null);
                          setShowDropDown(false);
                          navigate("/login");
                        }}
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-4 px-2  py-2 rounded-lg hover:bg-gray-300 cursor-pointer transition duration-200">
                      <span className="text-xl">
                        {<MdOutlineHelpOutline />}
                      </span>
                      <span>Help</span>
                    </div>
                    <div className="flex items-center gap-4 px-2  py-2 rounded-lg hover:bg-gray-300 cursor-pointer transition duration-200">
                      <span className="text-xl">{<CiSettings />}</span>
                      <span>Settings</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-1 text-sm text-blue-500 hover:text-blue-600 px-2 py-1 rounded-full"
          >
            <FaRegUserCircle className="w-5 h-5" />
            <span className="hidden sm:inline">Sign In</span>
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;