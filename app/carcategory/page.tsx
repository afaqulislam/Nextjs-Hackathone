"use client";

import * as React from "react";
import { Heart } from "lucide-react";
import Sidebar from "../components/Sidebar";
import { MdOutlineSwapVert } from "react-icons/md";
import { CarCard } from "../cars/CarCard";
import Link from "next/link";

interface Car {
    id: number;
    name: string;
    type: string;
    image: string;
    fuelCapacity: string;
    transmission: string;
    capacity: string;
    price: number;
    discountedPrice?: number;
    isFavorite: boolean;
    onFavoriteToggle: () => void;
}

const cars: Car[] = [
    {
        id: 1,
        name: "Koenigsegg",
        type: "Sport",
        image: "/Car1.png",
        fuelCapacity: "90L",
        transmission: "Manual",
        capacity: "2 People",
        price: 99,
        isFavorite: false,
        onFavoriteToggle: () => { },
    },
    {
        id: 2,
        name: "Nissan GT-R",
        type: "Sport",
        image: "/Car2.png",
        fuelCapacity: "80L",
        transmission: "Manual",
        capacity: "2 People",
        price: 80,
        discountedPrice: 100,
        isFavorite: false,
        onFavoriteToggle: () => { },
    },
    {
        id: 3,
        name: "Rolls-Royce",
        type: "Sedan",
        image: "/Hero1.png",
        fuelCapacity: "70L",
        transmission: "Manual",
        capacity: "4 People",
        price: 96,
        isFavorite: false,
        onFavoriteToggle: () => { },
    },
    {
        id: 4,
        name: "All New Rush",
        type: "SUV",
        image: "/Car.png",
        fuelCapacity: "80L",
        transmission: "Manual",
        capacity: "2 People",
        price: 72,
        isFavorite: false,
        onFavoriteToggle: () => { },
    },
    {
        id: 5,
        name: "CR - V",
        type: "SUV",
        image: "/Car-1.png",
        fuelCapacity: "80L",
        transmission: "Manual",
        capacity: "2 People",
        price: 72,
        isFavorite: false,
        onFavoriteToggle: () => { },
    },
    {
        id: 6,
        name: "All New Terios",
        type: "SUV",
        image: "/Car-2.png",
        fuelCapacity: "80L",
        transmission: "Manual",
        capacity: "2 People",
        price: 74,
        discountedPrice: 100,
        isFavorite: false,
        onFavoriteToggle: () => { },
    },
    {
        id: 7,
        name: "MG ZX Exclusice",
        type: "SUV",
        image: "/Car-4.png",
        fuelCapacity: "80L",
        transmission: "Manual",
        capacity: "2 People",
        price: 74,
        discountedPrice: 100,
        isFavorite: false,
        onFavoriteToggle: () => { },
    },
    {
        id: 8,
        name: "New MG ZS",
        type: "Hatchback",
        image: "/Car-5.png",
        fuelCapacity: "80L",
        transmission: "Manual",
        capacity: "2 People",
        price: 76,
        discountedPrice: 100,
        isFavorite: false,
        onFavoriteToggle: () => { },
    },
    {
        id: 9,
        name: "MG ZX Excite",
        type: "SUV",
        image: "/Car-6.png",
        fuelCapacity: "80L",
        transmission: "Manual",
        capacity: "2 People",
        price: 74,
        discountedPrice: 100,
        isFavorite: false,
        onFavoriteToggle: () => { },
    },
];

export default function CarRental() {
    const [favorites, setFavorites] = React.useState<number[]>([]);
    const [priceRange, setPriceRange] = React.useState<number[]>([0, 100]); // Default value
    const [sidebarOpen, setSidebarOpen] = React.useState(false)
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen)


    return (
        <div className="flex gap-8 p-6 mx-auto">
            {/* Sidebar */}
            <div className="w-1/1">
                <Sidebar
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    isOpen={sidebarOpen}
                    onToggle={toggleSidebar}
                />
            </div>

            {/* Main Content Section */}
            <div className="w-3/4 flex flex-col gap-8">
                {/* Booking Form Section */}
                <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 lg:p-8 flex flex-wrap lg:flex-nowrap items-center justify-between space-y-4 lg:space-y-0 lg:space-x-4">
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
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Locations</label>
                                <select className="w-full border border-gray-300 rounded-lg p-2 text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500">
                                    <option>Select your city</option>
                                    <option>Karachi</option>
                                    <option>Lahore</option>
                                    <option>Islamabad</option>
                                    <option>Multan</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Date</label>
                                <input
                                    type="date"
                                    className="w-full border border-gray-300 rounded-lg p-2 text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Time</label>
                                <input
                                    type="time"
                                    className="w-full border border-gray-300 rounded-lg p-2 text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <button className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-sm shadow-md">
                            <MdOutlineSwapVert className="w-6 h-6" />
                        </button>
                    </div>

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
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Locations</label>
                                <select className="w-full border border-gray-300 rounded-lg p-2 text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500">
                                    <option>Select your city</option>
                                    <option>Karachi</option>
                                    <option>Lahore</option>
                                    <option>Islamabad</option>
                                    <option>Multan</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Date</label>
                                <input
                                    type="date"
                                    className="w-full border border-gray-300 rounded-lg p-2 text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Time</label>
                                <input
                                    type="time"
                                    className="w-full border border-gray-300 rounded-lg p-2 text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cars.map((car) => (
                        <CarCard
                            key={car.id}
                            name={car.name}
                            type={car.type}
                            image={car.image}
                            fuelCapacity={car.fuelCapacity}
                            transmission={car.transmission}
                            capacity={car.capacity}
                            price={car.price}
                            discountedPrice={car.discountedPrice}
                            isFavorite={favorites.includes(car.id)}
                            onFavoriteToggle={() => {
                                setFavorites((prev) => (prev.includes(car.id) ? prev.filter((id) => id !== car.id) : [...prev, car.id]))
                            }}
                        />
                    ))}
                </div>
                <div className="flex text-center items-center justify-center py-10">
                    <Link href={"/"} className="py-3 px-8 bg-blue-600 text-white hover:bg-blue-500 rounded-md transition duration-300 ease-in-out">
                        Show more cars
                    </Link>
                </div>
            </div>
        </div>
    );
}
