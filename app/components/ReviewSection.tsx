"use client";
import { useState } from "react";

interface Review {
    id: number;
    name: string;
    date: string;
    role: string;
    text: string;
    image: string;
}

const ReviewsSection: React.FC = () => {
    const [visibleReviews, setVisibleReviews] = useState<number>(2);

    const reviews: Review[] = [
        {
            id: 1,
            name: "Alex Stanton",
            date: "21 July 2022",
            role: "CEO at Bukalapak",
            text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
            image: "/profile.png",
        },
        {
            id: 2,
            name: "Skylar Dias",
            date: "20 July 2022",
            role: "CEO at Amazon",
            text: "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
            image: "/review-2.png",
        },
        {
            id: 3,
            name: "Emma Watson",
            date: "19 July 2022",
            role: "Marketing Manager at Google",
            text: "Morent App offers fantastic services with excellent car options. Their support team is responsive and very professional.",
            image: "/profile.png",
        },
        {
            id: 4,
            name: "John Doe",
            date: "18 July 2022",
            role: "CTO at Microsoft",
            text: "Using Morent App has been a wonderful experience. Affordable prices and excellent car variety are their strong points.",
            image: "/review-2.png",
        },
    ];

    const handleShowMore = () => {
        setVisibleReviews((prev) => prev + 2);
    };

    return (
        <div className="py-12 max-w-[1450px] mx-auto px-4 md:px-6 lg:px-8">
            <div className="container mx-auto">
                {/* Header */}
                <div className="flex items-center space-x-4 md:space-x-6 mb-6">
                    <h2 className="text-2xl md:text-3xl font-semibold">Reviews</h2>
                    <span className="text-white bg-[#3563E9] px-4 py-2 rounded-lg">
                        {reviews.length}
                    </span>
                </div>

                {/* Reviews Section */}
                <div className="bg-white shadow-md rounded-lg">
                    {reviews.slice(0, visibleReviews).map((review) => (
                        <div
                            key={review.id}
                            className="p-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 w-full border-b last:border-none"
                        >
                            {/* User Image */}
                            <div className="flex-shrink-0">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-16 h-16 md:w-[70px] md:h-[70px] rounded-full"
                                />
                            </div>

                            {/* Review Content */}
                            <div className="flex-1">
                                <div className="flex flex-col sm:flex-row justify-between">
                                    <h3 className="text-lg md:text-xl font-bold">{review.name}</h3>
                                    <p className="text-gray-500 text-sm">{review.date}</p>
                                </div>

                                <div className="flex flex-col sm:flex-row justify-between mt-2">
                                    <p className="text-gray-400">{review.role}</p>
                                    <div className="flex justify-between mt-2">
                                    <img
                                        src="/reviews-star.png"
                                        alt="Stars"
                                        className="h-5"
                                    />
                                </div>                                </div>

                                <p className="mt-4 text-gray-600 leading-7 text-sm md:text-base">
                                    {review.text}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* "Show All" Button */}
                    {visibleReviews < reviews.length && (
                        <div className="text-center my-8">
                            <button
                                onClick={handleShowMore}
                                className="flex items-center justify-center space-x-2 text-blue-600 hover:underline mx-auto"
                            >
                                <span>Show All</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.7l3.71-3.47a.75.75 0 111.04 1.08l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 01.02-1.06z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ReviewsSection;
