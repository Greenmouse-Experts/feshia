import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

    // Desktop settings - exactly 5 items per view
    const DESKTOP_ITEM_WIDTH = 270; // Reduced from 200 for better fit
    const DESKTOP_ITEMS_PER_SCROLL = 5;
    const DESKTOP_SCROLL_AMOUNT = DESKTOP_ITEM_WIDTH * DESKTOP_ITEMS_PER_SCROLL;

    // Mobile settings - show 2 items with smaller width
    const MOBILE_ITEM_WIDTH = 140;
    const MOBILE_ITEMS_PER_SCROLL = 2;
    const MOBILE_SCROLL_AMOUNT = MOBILE_ITEM_WIDTH * MOBILE_ITEMS_PER_SCROLL;

    const scroll = (direction) => {
        if (scrollRef.current) {
            const isMobile = window.innerWidth < 768;
            const scrollAmount = isMobile ? MOBILE_SCROLL_AMOUNT : DESKTOP_SCROLL_AMOUNT;
            
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="w-full px-4 section relative">
            <div className="Resizer mx-auto">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl font-semibold">Featured Study Destinations</h2>
                    <a href="#" className="text-[#FD0B0B] text-base underline font-medium hidden md:block">
                        View More
                    </a>
                </div>

                {/* Desktop Arrows - Hidden on Mobile */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 md:mt-7 mt-2 md:left-28 top-1/2 transform -translate-y-1/2 z-10 bg-black cursor-pointer text-white rounded-full p-2 hidden md:block hover:bg-gray-800 transition-colors"
                >
                    <ChevronLeft size={16} />
                </button>

                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 md:mt-7 mt-2  md:right-28 top-1/2 transform -translate-y-1/2 z-10 bg-black cursor-pointer text-white rounded-full p-2 hidden md:block hover:bg-gray-800 transition-colors"
                >
                    <ChevronRight size={16} />
                </button>

                {/* Destination Flags */}
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto md:overflow-hidden scrollbar-hide md:px-6 px-2 scroll-smooth touch-pan-x"
                    style={{
                        WebkitOverflowScrolling: 'touch',
                        scrollSnapType: 'x mandatory',
                    }}
                >
                    {destinations.map((dest, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center text-center flex-shrink-0"
                            style={{ 
                                minWidth: window.innerWidth >= 768 ? `${DESKTOP_ITEM_WIDTH}px` : `${MOBILE_ITEM_WIDTH}px`,
                                scrollSnapAlign: 'start'
                            }}
                        >
                            {/* Controlled image sizes for mobile and desktop */}
                            <div className="w-28 h-28 md:w-auto md:h-52 rounded-full overflow-hidden">
                                <img
                                    src={dest.image}
                                    alt={dest.name}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                                />
                            </div>
                            <p className="mt-3 md:mt-4 font-medium text-lg text-black">{dest.name}</p>
                        </div>
                    ))}
                </div>

                {/* Mobile Scroll Indicator Dots */}
                <div className="flex justify-center mt-4 md:hidden">
                    <div className="flex gap-2">
                        {Array.from({ length: Math.ceil(destinations.length / 2) }).map((_, idx) => (
                            <div
                                key={idx}
                                className="w-2 h-2 rounded-full bg-gray-300"
                            />
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                /* Hide scrollbar on mobile while keeping functionality */
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
};

export default FeaturedDestinations;