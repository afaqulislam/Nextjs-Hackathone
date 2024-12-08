import React from "react";
import Image from "next/image";
import { MdOutlineSwapVert } from "react-icons/md";

const HeroSection: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-12 py-8 bg-gray-50">
      {/* Cards Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Left Card */}
        <div className="bg-blue-500 text-white rounded-xl p-6 lg:p-8 shadow-lg relative overflow-hidden">
          <div className="max-w-full">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">
              The Best Platform for Car Rental
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-6">
              Ease of doing a car rental safely and reliably. Of course at a low
              price.
            </p>
            <button className="bg-blue-700 hover:bg-blue-600 text-white font-medium py-2 px-4 lg:px-6 rounded">
              Rental Car
            </button>
          </div>
          <div className="absolute bottom-0 right-0 w-36 sm:w-48 lg:w-56">
            <Image
              src="/Hero1.png" // Replace with the actual image path
              width={400}
              height={200}
              alt="Car Image"
              className="object-contain relative right-10"
            />
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-blue-600 text-white rounded-xl p-6 lg:p-8 shadow-lg relative overflow-hidden">
          <div className="max-w-full">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">
              Easy way to rent a car at a low price
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-6">
              Providing cheap car rental services and safe and comfortable
              facilities.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 lg:px-6 rounded">
              Rental Car
            </button>
          </div>
          <div className="absolute bottom-0 right-0 w-40  sm:w-48 lg:w-56">
            <Image
              src="/Hero2.png" // Replace with the actual image path
              width={406}
              height={116}
              alt="Car Image"
              className="object-contain relative right-10"
            />
          </div>
        </div>
      </div>

      {/* Booking Form Section */}
      <div className="mt-8 bg-white shadow-lg rounded-xl p-4 sm:p-6 lg:p-8 flex flex-wrap lg:flex-nowrap items-center justify-between space-y-4 lg:space-y-0 lg:space-x-4">
        {/* Pick-Up Section */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="pickup"
              name="booking-type"
              defaultChecked
              className="w-4 h-4 accent-blue-600"
            />
            <label htmlFor="pickup" className="text-sm sm:text-lg font-medium text-gray-700">
              Pick-Up
            </label>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Locations */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Locations
              </label>
              <select className="w-full border border-gray-300 rounded-lg p-2 text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500">
                <option>Select your city</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Date
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg p-2 text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Time
              </label>
              <input
                type="time"
                className="w-full border border-gray-300 rounded-lg p-2 text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex items-center justify-center">
          <button className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-sm shadow-md">
            <MdOutlineSwapVert className="w-6 h-6" />
          </button>
        </div>

        {/* Drop-Off Section */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="dropoff"
              name="booking-type"
              className="w-4 h-4 accent-blue-600"
            />
            <label htmlFor="dropoff" className="text-sm sm:text-lg font-medium text-gray-700">
              Drop-Off
            </label>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Locations */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Locations
              </label>
              <select className="w-full border border-gray-300 rounded-lg p-2 text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500">
                <option>Select your city</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Date
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg p-2 text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Time
              </label>
              <input
                type="time"
                className="w-full border border-gray-300 rounded-lg p-2 text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
