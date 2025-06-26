import React from 'react';
import { Link } from 'react-router-dom';


const SearchBar = ({ bgImageUrl }) => {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-[300px] p-6"
            style={{
                backgroundImage: bgImageUrl ? `url(${bgImageUrl})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="bg-[#ED268F] p-3 rounded-lg flex flex-col md:flex-row gap-4 w-full max-w-4xl">
                {/* Dropdowns */}
                <select className="flex-1 px-4 py-3 rounded-md bg-white text-sm focus:outline-none">
                    <option>Category</option>
                </select>
                <select className="flex-1 px-4 py-3 rounded-md bg-white text-sm focus:outline-none">
                    <option>Country</option>
                </select>
                <select className="flex-1 px-4 py-3 rounded-md bg-white text-sm focus:outline-none">
                    <option>Course</option>
                </select>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mt-4">
                <button className="bg-[#ED268F] text-white px-14 py-3 cursor-pointer rounded-md font-medium transition">
                    Search
                </button>
                <Link to="/consultant">
                    <button className="bg-[#ED268F] text-white px-6 py-3 cursor-pointer rounded-md font-medium transition">
                        Talk to a Consultant
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default SearchBar;