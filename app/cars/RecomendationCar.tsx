'use client'
import React, { useState } from "react";
import { CarCard } from "./CarCard";
import Link from "next/link";

export const RecomendationCar: React.FC = () => {
  const initialCars = [
    {
      name: "All New Rush",
      type: "SUV",
      image: "/Car.png",
      fuelCapacity: "80L",
      transmission: "Manual",
      capacity: "2 People",
      price: 72,
      discountedPrice: 100,
      favoriteIcon: "/icons/heart-outline.svg",
    },
    {
      name: "CR  - V",
      type: "SUV",
      image: "/Car-1.png",
      fuelCapacity: "80L",
      transmission: "Manual",
      capacity: "2 People",
      price: 80,
      discountedPrice: 100,
      favoriteIcon: "/icons/heart-outline.svg",
    },
    {
      name: "All New Terios",
      type: "SUV",
      image: "/Car-2.png",
      fuelCapacity: "80L",
      transmission: "Manual",
      capacity: "2 People",
      price: 74,
      discountedPrice: 100,
      favoriteIcon: "/icons/heart-outline.svg",
    },
    {
      name: "CR  - V",
      type: "SUV",
      image: "/Car-3.png",
      fuelCapacity: "80L",
      transmission: "Manual",
      capacity: "2 People",
      price: 80,
      discountedPrice: 100,
      favoriteIcon: "/icons/heart-outline.svg",
    },
    {
      name: "MG ZX Exclusice",
      type: "SUV",
      image: "/Car-4.png",
      fuelCapacity: "80L",
      transmission: "Manual",
      capacity: "2 People",
      price: 76,
      discountedPrice: 100,
      favoriteIcon: "/icons/heart-outline.svg",
    },
    {
      name: "New MG ZS",
      type: "Hatchback",
      image: "/Car-5.png",
      fuelCapacity: "80L",
      transmission: "Manual",
      capacity: "2 People",
      price: 80,
      discountedPrice: 100,
      favoriteIcon: "/icons/heart-outline.svg",
    },
    {
      name: "MG ZX Excite",
      type: "SUV",
      image: "/Car-4.png",
      fuelCapacity: "80L",
      transmission: "Manual",
      capacity: "2 People",
      price: 74,
      discountedPrice: 100,
      favoriteIcon: "/icons/heart-outline.svg",
    },
    {
      name: "New MG ZS",
      type: "Hatchback",
      image: "/Car-6.png",
      fuelCapacity: "80L",
      transmission: "Manual",
      capacity: "2 People",
      price: 80,
      discountedPrice: 100,
      favoriteIcon: "/icons/heart-outline.svg",
    },
  ];

  const [cars, setCars] = useState(initialCars.map(car => ({ ...car, isFavorite: false })));

  const handleFavoriteToggle = (index: number) => {
    setCars(prevCars =>
      prevCars.map((car, i) =>
        i === index ? { ...car, isFavorite: !car.isFavorite } : car
      )
    );
  };

  return (
    <div className="p-8 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Recomendation Car</h2>
        <a href="#" className="text-blue-600 hover:underline">
          View All
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cars.map((car, index) => (
          <CarCard
            key={index}
            {...car}
            onFavoriteToggle={() => handleFavoriteToggle(index)}
          />
        ))}
      </div>
      <div className="flex text-center items-center justify-center py-10">
        <Link href={"/carcategory"} className="py-3 px-8 bg-blue-600 text-white hover:bg-blue-500 rounded-md transition duration-300 ease-in-out">
          Show more cars
        </Link>
      </div>
    </div>
  );
};

