"use client";
import React, { useEffect, useState } from "react";
import { CarCard } from "./CarCard";

export const PopularCarPage: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const cars = [
    {
      name: "Koenigsegg",
      type: "Sport",
      image: "/Car1.png",
      fuelCapacity: "90L",
      transmission: "Manual",
      capacity: "2 People",
      price: 99,
      favoriteIcon: "/icons/heart-filled.svg",
    },
    {
      name: "Nissan GT-R",
      type: "Sport",
      image: "/Car2.png",
      fuelCapacity: "80L",
      transmission: "Manual",
      capacity: "2 People",
      price: 80,
      discountedPrice: 100,
      favoriteIcon: "/icons/heart-outline.svg",
    },
    {
      name: "Rolls-Royce",
      type: "Sedan",
      image: "/Hero1.png",
      fuelCapacity: "70L",
      transmission: "Manual",
      capacity: "4 People",
      price: 96,
      favoriteIcon: "/icons/heart-filled.svg",
    },
    {
      name: "Nissan GT-R",
      type: "Sport",
      image: "/Car2.png",
      fuelCapacity: "80L",
      transmission: "Manual",
      capacity: "2 People",
      price: 80,
      discountedPrice: 100,
      favoriteIcon: "/icons/heart-outline.svg",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const interval = setInterval(() => {
      if (isMobile) {
        setOffset((prev) => (prev + 1) % cars.length);
      }
    }, 3000); // Change cards every 3 seconds

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, [isMobile, cars.length]);

  return (
    <div className="p-8 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Popular Car</h2>
        <a href="#" className="text-blue-600 hover:underline">
          View All
        </a>
      </div>

      {/* Render slider for mobile view */}
      {isMobile ? (
        <div className="overflow-hidden">
          <div
            className={`flex transition-transform duration-1000 ease-in-out`}
            style={{
              transform: `translateX(-${offset * 100}%)`,
            }}
          >
            {cars.map((car, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <CarCard {...car} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Render grid for desktop view */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cars.map((car, index) => (
            <CarCard key={index} {...car} />
          ))}
        </div>
      )}
    </div>
  );
};
