import React from 'react';

const ConnectSection = ({ leftImageUrl, rightImageUrl }) => {
    return (
        <div
            className="w-full h-[300px] md:h-[350px] section flex flex-col md:flex-row items-center justify-between px-4"
            style={{
                backgroundImage: leftImageUrl ? `url(${leftImageUrl})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Text on the right */}
            <div className="text-white text-center md:text-left mb-6 md:mb-0 md:ml-28">
                <h2 className="text-3xl md:text-4xl font-bold max-w-xl mb-4 leading-snug">
                    Connect with us for free Consultation on your options
                </h2>
                <button className="px-6 py-3 bg-red-500 text-sm text-white rounded-lg hover:bg-red-600 outline-none">
                    Apply Now
                </button>
            </div>
            
        </div>
    );
};

export default ConnectSection;
