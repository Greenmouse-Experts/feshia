import React from 'react';

const ConnectSection = ({ leftImageUrl, rightImageUrl }) => {
  return (
    <div
      className="w-full h-64 flex items-center justify-between px-8"
      style={{
        backgroundImage: leftImageUrl ? `url(${leftImageUrl})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-white ml-18">
        <h2 className="text-3xl font-bold max-w-lg  mb-4">
          Connect with us for free Consultation on your options
        </h2>
        <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none">
          Apply Now
        </button>
      </div>
      {rightImageUrl && (
        <div className="w-1/3 h-full flex items-center">
          <img
            src={rightImageUrl}
            alt="Right Side Image"
            className="w-full h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default ConnectSection;