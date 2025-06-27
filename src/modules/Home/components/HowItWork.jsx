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
            <div>
                <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1751045539/feshia%20Images/Group_1171275378_1_h9ba6b.png" draggable="false" />
            </div>
        </div>
    );
};

export default HowItWorkForUs;