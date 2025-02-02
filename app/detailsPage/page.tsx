'use client'

import { useState } from 'react'
import Image from "next/image"
import { LayoutDashboard, Car, BarChart2, Wallet2, Inbox, Calendar, Settings, HelpCircle, Moon, LogOut, Menu, X } from 'lucide-react'
export default function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

    const car = { price: 80 }; // Example car object with a price property

    return (
        <div className="flex flex-col h-screen bg-gray-50 lg:flex-row">
            {/* Sidebar */}
            <div className={`${sidebarOpen ? 'block' : 'hidden'} lg:block fixed inset-y-0 left-0 z-50 w-64 bg-white border-r transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}>
                <div className="flex justify-between items-center p-6">
                    <h1 className="text-xl font-bold text-gray-800">MAIN MENU</h1>
                    <button onClick={toggleSidebar} className="lg:hidden" title="Close Sidebar">
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <nav className="px-4 space-y-2">
                    <a href="#" className="flex items-center px-4 py-3 text-sm bg-blue-50 text-blue-600 rounded-lg">
                        <LayoutDashboard className="w-5 h-5 mr-3" />
                        Dashboard
                    </a>
                    <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                        <Car className="w-5 h-5 mr-3" />
                        Car Rent
                    </a>
                    <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                        <BarChart2 className="w-5 h-5 mr-3" />
                        Insight
                    </a>
                    <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                        <Wallet2 className="w-5 h-5 mr-3" />
                        Reimburse
                    </a>
                    <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                        <Inbox className="w-5 h-5 mr-3" />
                        Inbox
                    </a>
                    <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                        <Calendar className="w-5 h-5 mr-3" />
                        Calendar
                    </a>
                </nav>

                <div className="absolute bottom-0 left-0 w-full p-4 border-t bg-white">
                    <nav className="space-y-2">
                        <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                            <Settings className="w-5 h-5 mr-3" />
                            Settings
                        </a>
                        <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                            <HelpCircle className="w-5 h-5 mr-3" />
                            Help & Center
                        </a>
                        <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                            <Moon className="w-5 h-5 mr-3" />
                            Dark Mode
                        </a>
                        <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                            <LogOut className="w-5 h-5 mr-3" />
                            Log Out
                        </a>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-auto">
                <div className="p-4 lg:hidden">
                    <button onClick={toggleSidebar} className="p-2 bg-white rounded-md shadow" title="Toggle Sidebar">
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
                    {/* Details Rental */}
                    <div className="bg-white p-6 rounded-xl">
                        <h2 className="text-lg font-semibold mb-4">Details Rental</h2>

                        <div className="bg-gray-100 h-50 rounded-lg mb-6">
                            <Image
                                src={`/Maps.png`}
                                alt="Nissan GT-R"
                                width={550}
                                height={200} />
                        </div>

                        <div className="flex items-start gap-4">
                            <Image
                                src={`/preview-1.png`}
                                alt="Nissan GT-R"
                                width={120}
                                height={80}
                                className="rounded-lg"
                            />
                            <div>
                                <h3 className="text-lg font-semibold">Nissan GT - R</h3>
                                <p className="text-sm text-gray-500">Sport Car</p>
                                <p className="text-xs text-gray-400 mt-2">#9761</p>
                            </div>
                        </div>

                        <div className="mt-6 space-y-4">
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
                                    <label
                                        htmlFor="pickup"
                                        className="text-sm sm:text-lg font-medium text-gray-700"
                                    >
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
                                            <option>Karachi</option>
                                            <option>Lahore</option>
                                            <option>Islamabad</option>
                                            <option>Multan</option>
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

                            {/* Drop-Off Section */}
                            <div className="flex-1 space-y-4">
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        id="dropoff"
                                        name="booking-type"
                                        className="w-4 h-4 accent-blue-600"
                                    />
                                    <label
                                        htmlFor="dropoff"
                                        className="text-sm sm:text-lg font-medium text-gray-700"
                                    >
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
                                            <option>Karachi</option>
                                            <option>Lahore</option>
                                            <option>Islamabad</option>
                                            <option>Multan</option>
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

                        <div className="mt-6 pt-6 border-t">
                            <div className="flex justify-between items-center">
                                <p className="text-lg font-semibold">Total Rental Price</p>
                                <p className="text-2xl font-bold">${car.price.toFixed(2)}</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                                Overall price and includes rental discount
                            </p>
                        </div>
                    </div>

                    {/* Top 5 Car Rental & Recent Transaction */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl">
                            <h2 className="text-lg font-semibold mb-4">Top 5 Car Rental</h2>
                            <div className="flex flex-col sm:flex-row justify-between items-center">
                                <div className="relative w-40 h-40 mb-4 sm:mb-0">
                                    <div className="w-40 h-40 rounded-full border-8 border-blue-100">
                                        <div className="w-40 h-40 rounded-full border-8 border-blue-500 border-t-transparent transform -rotate-45"></div>
                                    </div>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                        <div className="text-2xl font-bold">72,030</div>
                                        <div className="text-sm text-gray-500">Rental Car</div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                        <span className="text-sm">Sport Car</span>
                                        <span className="text-sm font-semibold ml-auto">17,439</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                                        <span className="text-sm">SUV</span>
                                        <span className="text-sm font-semibold ml-auto">9,478</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                                        <span className="text-sm">Coupe</span>
                                        <span className="text-sm font-semibold ml-auto">18,197</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-blue-200 rounded-full"></div>
                                        <span className="text-sm">Hatchback</span>
                                        <span className="text-sm font-semibold ml-auto">12,510</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-blue-100 rounded-full"></div>
                                        <span className="text-sm">MPV</span>
                                        <span className="text-sm font-semibold ml-auto">14,406</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold">Recent Transaction</h2>
                                <a href="#" className="text-sm text-blue-500">View All</a>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { name: "Nissan GT - R", type: "Sport Car", price: "$80.00", date: "20 July", image: "/Car1.png" },
                                    { name: "Koenigisegg", type: "Sport Car", price: "$99.00", date: "19 July", image: "/Hero1.png" },
                                    { name: "Rolls - Royce", type: "Sport Car", price: "$96.00", date: "18 July", image: "/Car2.png" },
                                    { name: "CR - V", type: "SUV", price: "$80.00", date: "17 July", image: "/Car-1.png" },
                                ].map((car, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <Image
                                                src={car.image || "/placeholder.svg"}
                                                alt={car.name}
                                                width={64}
                                                height={48}
                                                className="rounded-lg"
                                            />
                                            <div>
                                                <h3 className="font-semibold">{car.name}</h3>
                                                <p className="text-sm text-gray-500">{car.type}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold">{car.price}</p>
                                            <p className="text-sm text-gray-500">{car.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

