import React, { useState } from 'react';
import BreadcrumbBanner from './components/BreadcrumbBanner';
import { Search } from 'lucide-react';



const UNIVERSITYSEARCH = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');

    const countries = [
        'United Kingdom',
        'Canada',
        'Australia',
        'United States',
        'Germany',
        'France',
        'Netherlands',
        'Japan',
        'South Korea',
        'Singapore',
        'Switzerland',
        'Sweden',
        'Norway',
        'Denmark',
        'Italy',
        'Spain',
        'New Zealand',
        'Ireland',
        'Belgium',
        'Austria'
    ];

    const handleSearch = () => {
        console.log('Searching for:', searchTerm, 'in', selectedCountry);
        // Add your search logic here
    };

    const handleCountrySelect = (country) => {
        setSelectedCountry(country === selectedCountry ? '' : country);
    };

    return (
        <>
            <BreadcrumbBanner
                title="UNIVERSITY SEARCH"
                currentPage=" University search"
                backgroundImage="https://res.cloudinary.com/greenmouse-tech/image/upload/v1751390134/feshia%20Images/p_jwlqbw.jpg"
            />
            <div className="w-full px-4 section">
                <div className="Resizer">
                    <div className="">
                        {/* Header */}
                        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 sm:mb-8">
                            Explore Top Universities
                        </h1>

                        {/* Search Bar */}
                        <div className="relative mb-8">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Enter a University"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-4 sm:px-6 py-3 sm:py-4 pr-12 sm:pr-14 
                         border-2 border-pink-300 rounded-xl text-base sm:text-lg
                         outline-none 
                         placeholder-gray-400 transition-all duration-200"
                                />
                                <button
                                    onClick={handleSearch}
                                    className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2
                         p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                                >
                                    <Search className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
                                </button>
                            </div>
                        </div>

                        {/* Country Filter Buttons */}
                        <div className="space-y-4">
                            {/* Mobile: Stack vertically on small screens */}
                            <div className="flex flex-wrap gap-2 sm:gap-3 md:hidden">
                                {countries.map((country, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleCountrySelect(country)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                           ${selectedCountry === country
                                                ? 'bg-gray-800 text-white shadow-md'
                                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                            }`}
                                    >
                                        {country}
                                    </button>
                                ))}
                            </div>

                            {/* Desktop: Horizontal scroll on medium+ screens */}
                            <div className="hidden md:flex gap-3 overflow-x-auto pb-2">
                                {countries.map((country, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleCountrySelect(country)}
                                        className={`px-6 py-3 rounded-full text-base font-medium whitespace-nowrap
                           transition-all duration-200 flex-shrink-0
                           ${selectedCountry === country
                                                ? 'bg-gray-800 text-white shadow-md transform scale-105'
                                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-sm'
                                            }`}
                                    >
                                        {country}
                                    </button>
                                ))}
                            </div>

                            {/* Tablet: Two rows */}
                            <div className="hidden sm:grid md:hidden grid-cols-2 gap-3">
                                {countries.map((country, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleCountrySelect(country)}
                                        className={`px-5 py-3 rounded-full text-sm font-medium transition-all duration-200
                           ${selectedCountry === country
                                                ? 'bg-gray-800 text-white shadow-md'
                                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                            }`}
                                    >
                                        {country}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Selected Country Display */}
                        {selectedCountry && (
                            <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                                <p className="text-gray-600">
                                    Showing universities in: <span className="font-semibold text-gray-900">{selectedCountry}</span>
                                </p>
                            </div>
                        )}

                        {/* Search Results Placeholder */}
                        {searchTerm && (
                            <div className="mt-6 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                                <p className="text-gray-600">
                                    Search results for: <span className="font-semibold text-gray-900">"{searchTerm}"</span>
                                    {selectedCountry && <span> in {selectedCountry}</span>}
                                </p>
                                <div className="mt-4 space-y-3">
                                    {[1, 2, 3].map((item) => (
                                        <div key={item} className="p-4 bg-gray-50 rounded-lg">
                                            <div className="h-4 bg-gray-300 rounded animate-pulse mb-2"></div>
                                            <div className="h-3 bg-gray-200 rounded animate-pulse w-3/4"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default UNIVERSITYSEARCH;