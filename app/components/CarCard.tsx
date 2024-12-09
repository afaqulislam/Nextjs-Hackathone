import React from "react";
import { BsFuelPumpDieselFill } from "react-icons/bs";
import { MdOutlinePlaylistAddCheckCircle } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { AiOutlineHeart } from "react-icons/ai"; // Import the heart icon
import Image from "next/image";
// Define the types for the CarCard component props
type CarCardProps = {
  name: string;
  type: string;
  image: string;
  fuelCapacity: string;
  transmission: string;
  capacity: string;
  price: number;
  discountedPrice?: number;
};

// CarCard Component
export const CarCard: React.FC<CarCardProps> = ({
  name,
  type,
  image,
  fuelCapacity,
  transmission,
  capacity,
  price,
  discountedPrice,
}) => {
  return (
    <div className="relative flex flex-col bg-white rounded-lg shadow-lg p-4 w-full max-w-sm">
      {/* Favorite Icon */}
      <div className="absolute top-4 right-4">
        <AiOutlineHeart className="w-6 h-6 text-gray-400 cursor-pointer hover:text-red-500" />
      </div>

      {/* Car Name and Type */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-400">{type}</p>
      </div>

      {/* Car Image */}
      <Image
        src={image}
        alt={name}
        width={300}
        height={200}
        className="w-full object-contain mb-4 h-40"
      />

      {/* Features */}
      <div className="flex justify-between text-sm text-gray-500 mb-4">
        <div className="flex items-center gap-2">
          <BsFuelPumpDieselFill className="w-4 h-4" />
          <span>{fuelCapacity}</span>
        </div>
        <div className="flex items-center gap-2">
          <MdOutlinePlaylistAddCheckCircle className="w-4 h-4" />
          <span>{transmission}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaUserGroup className="w-4 h-4" />
          <span>{capacity}</span>
        </div>
      </div>

      {/* Price and Button */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-bold text-gray-800">${price}.00/day</p>
          {discountedPrice && (
            <p className="text-sm text-gray-400 line-through">
              ${discountedPrice}.00
            </p>
          )}
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-500">
          Rent Now
        </button>
      </div>
    </div>
  );
};
