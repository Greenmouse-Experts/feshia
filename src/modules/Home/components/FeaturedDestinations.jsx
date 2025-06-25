import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const destinations = [
    { name: "London", image: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1750805151/feshia%20Images/Flag-United-Kingdom_rv8ion.png" },
    { name: "Germany", image: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1750805151/feshia%20Images/Flag-Germany_tbmgk4.png" },
    { name: "United States", image: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1750805151/feshia%20Images/Flag_of_the_United_States.svg_pajvmj.png" },
    { name: "China", image: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1750805151/feshia%20Images/istockphoto-1041713402-612x612_ik6kvv.png" },
    { name: "Russia", image: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1750805151/feshia%20Images/i_mtsmrj.png" },
    { name: "London", image: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1750805151/feshia%20Images/Flag-United-Kingdom_rv8ion.png" },
    { name: "Germany", image: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1750805151/feshia%20Images/Flag-Germany_tbmgk4.png" },
    // Add more if needed
];

const FeaturedDestinations = () => {
    const scrollRef = useRef(null);

    const ITEM_WIDTH = 250; 
    const ITEMS_PER_SCROLL = 5;
    const SCROLL_AMOUNT = ITEM_WIDTH * ITEMS_PER_SCROLL;

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="w-full px-4 mb-16 relative">
            <div className="Resizer">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-2xl font-semibold">Featured Study Destinations</h2>
                    <a href="#" className="text-[#FD0B0B] text-base underline font-medium">
                        View More
                    </a>
                </div>

                {/* Arrows */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute md:left-18 top-1/2 transform -translate-y-1/2 z-10 bg-black cursor-pointer text-white rounded-full p-2"
                >
                    <FaChevronLeft size={16} />
                </button>

                <button
                    onClick={() => scroll("right")}
                    className="absolute md:right-18 right top-1/2 transform -translate-y-1/2 z-10 bg-black cursor-pointer text-white rounded-full p-2"
                >
                    <FaChevronRight size={16} />
                </button>

                {/* Destination Flags */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide px-10 py-4 scroll-smooth"
                >
                    {destinations.map((dest, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center text-center"
                            style={{ minWidth: `${ITEM_WIDTH}px` }}
                        >
                            <div className="w-full h-full rounded-full overflow-hidden">
                                <img
                                    src={dest.image}
                                    alt={dest.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="mt-4 font-medium text-sm text-black">{dest.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedDestinations;
