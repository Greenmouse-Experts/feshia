import React from 'react';

const HowItWorkForUs = () => {
    return (
        <div className="Resizer mx-auto section px-4">
            <div className="flex justify-between items-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900">How it Works?</h2>
                <button className="text-black border border-black px-6 py-3 cursor-pointer rounded-md font-medium transition hidden md:block hover:bg-[#ED268F] hover:text-white hover:border-transparent">
                    Book a Consultant
                </button>
            </div>
            {/* Desktop: Single image */}
            <div className="hidden md:block">
                <img
                    src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1751045539/feshia%20Images/Group_1171275378_1_h9ba6b.png"
                    draggable="false"
                    alt="How it works"
                />
            </div>
            {/* Mobile and Tablet: 3-column grid with placeholders */}
            <div className="md:hidden grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                    <img
                        src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1751388483/feshia%20Images/WhatsApp_Image_2025-07-01_at_15.53.14_yetak9.jpg"
                        draggable="false"
                        alt="How it works - Page 1"
                        className="w-full h-auto"
                    />
                </div>
                <div>
                    <img
                        src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1751388483/feshia%20Images/WhatsApp_Image_2025-07-01_at_15.53.15_1_remx97.jpg"
                        draggable="false"
                        alt="How it works - Page 2"
                        className="w-full h-auto"
                    />
                </div>
                <div>
                    <img
                        src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1751388483/feshia%20Images/WhatsApp_Image_2025-07-01_at_15.53.15_k6lami.jpg"
                        draggable="false"
                        alt="How it works - Page 2"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default HowItWorkForUs;