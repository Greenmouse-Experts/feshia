import React from 'react';
import { Link } from 'react-router-dom';

const BreadcrumbBanner = ({ title, currentPage, backgroundImage }) => {
  return (
    <div
      className="w-full h-[300px] -mt-20 md:h-[400px] flex items-center justify-center bg-center bg-cover relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      
      {/* Text Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">{title}</h1>
        <div className="text-sm md:text-base">
          <Link to="/" className="text-white hover:underline">Home</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-300 underline">{currentPage}</span>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbBanner;
