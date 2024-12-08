import Image from "next/image";
import React from "react";
import { CiSliderHorizontal, CiSearch } from "react-icons/ci";
import { FaHeart, FaBell, FaCog } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
      {/* Logo */}
      <div className="text-[20px] md:text-[32px] font-bold text-blue-600">
        MORENT
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex items-center border px-4 mx-5 rounded-full w-full md:w-[492px] h-[44px] shadow-md bg-white">
        <button
          type="button"
          className="text-gray-500 hover:text-gray-700 mr-3 focus:outline-none"
        >
          <CiSearch className="w-5 h-5" />
        </button>
        <input
          type="text"
          placeholder="Search something here"
          className="flex-grow text-sm border-none outline-none bg-transparent text-gray-700 placeholder-gray-400"
        />
        <button
          type="button"
          className="text-gray-500 hover:text-gray-700 ml-3 focus:outline-none"
        >
          <CiSliderHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Icons */}
      <div className="hidden md:flex items-center space-x-4 md:space-x-6">
        <button
          className="text-gray-500 hover:text-blue-600"
          aria-label="Favorites"
        >
          <FaHeart className="w-6 h-6" />
        </button>
        <button
          className="text-gray-500 hover:text-blue-600"
          aria-label="Notifications"
        >
          <FaBell className="w-6 h-6" />
        </button>
        <button
          className="text-gray-500 hover:text-blue-600"
          aria-label="Settings"
        >
          <FaCog className="w-6 h-6" />
        </button>

        {/* Profile */}
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border border-gray-300">
          <Image
            src="/profile.png" // Replace with the actual image path
            alt="Profile Picture"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex items-center md:hidden space-x-3">
        {/* Search Bar for Mobile */}
        <div className="flex items-center border px-3 rounded-full w-full mx-2 h-[40px] shadow-md bg-white">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-700 mr-2 focus:outline-none"
          >
            <CiSearch className="w-5 h-5" />
          </button>
          <input
            type="text"
            placeholder="Search something here"
            className="flex-grow text-sm border-none outline-none bg-transparent text-gray-700 placeholder-gray-400"
          />
          <button
            type="button"
            className="text-gray-500 hover:text-gray-700 ml-2 focus:outline-none"
          >
            <CiSliderHorizontal className="w-5 h-5" />
          </button>
        </div>

        {/* Profile for Mobile */}
        <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-300">
          <Image
            src="/profile.png" // Replace with the actual image path
            alt="Profile Picture"
            width={32}
            height={32}
            className="object-cover"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
