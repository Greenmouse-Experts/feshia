import React from 'react';

const ConnectSection = ({ leftImageUrl, rightImageUrl }) => {
    return (
        <div
            className="w-full h-auto section flex flex-col md:flex-row items-center justify-between px-4"
            style={{
                backgroundImage: leftImageUrl ? `url(${leftImageUrl})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Text on the right */}
            <div className="text-white text-center md:text-left mb-6 md:mb-0 md:ml-8">
                <h2 className="text-2xl md:text-3xl font-bold max-w-lg mb-4 leading-snug">
                    Connect with us for free Consultation on your options
                </h2>
                <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none">
                    Apply Now
                </button>
            </div>
            {/* Image on the left */}
            {rightImageUrl && (
                <div className="w-full md:w-1/3 h-auto flex justify-center mb-4 md:mb-0">
                    <img
                        src={rightImageUrl}
                        alt="Left Side"
                        className="w-60 h-auto object-contain"
                    />
                </div>
            )}
        </div>
    );
};

export default ConnectSection;
