import React, { useState } from 'react';
import BreadcrumbBanner from './components/BreadcrumbBanner';
const EventTabs = () => {
    const [activeTab, setActiveTab] = useState('upcoming');

    return (
        <>
            <BreadcrumbBanner
                title="EVENTS"
                currentPage="Events"
                backgroundImage="https://res.cloudinary.com/greenmouse-tech/image/upload/v1751391134/feshia%20Images/download_ux8dy2.jpg"
            />
            <div className="w-full px-4 section">
                <div className="bg-white Resizer">
                    <div className="text-center mb-6">
                        <h2 className="md:text-3xl mb-3 text-2xl font-bold">STAY INFORMED</h2>
                        <p className="text-black">Explore Upcoming Events and Workshops</p>
                    </div>
                    <div className="flex justify-center w-auto space-x-6 mb-10 overflow-x-auto rounded-lg">
                        <div className="bg-gray-200 p-3 rounded-lg">
                            <button
                                className={`px-4 py-2 rounded-lg ${activeTab === 'all' ? 'bg-[#ED268F] text-white' : 'bg-gray-200 text-gray-700 cursor-pointer'}`}
                                onClick={() => setActiveTab('all')}
                            >
                                All Article
                            </button>
                            <button
                                className={`px-4 py-2 ${activeTab === 'upcoming' ? 'bg-[#ED268F] text-white' : 'bg-gray-200 text-gray-700 cursor-pointer'}`}
                                onClick={() => setActiveTab('upcoming')}
                            >
                                Upcoming Events
                            </button>
                            <button
                                className={`px-4 py-2 rounded-r-lg ${activeTab === 'recent' ? 'bg-[#ED268F] text-white' : 'bg-gray-200 text-gray-700 cursor-pointer'}`}
                                onClick={() => setActiveTab('recent')}
                            >
                                Recent Events
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {activeTab === 'all' && (
                            <>
                                <div className="bg-[#F6F6F6] p-4 rounded-lg shadow-sm">
                                    <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1751391655/feshia%20Images/1_ar4zex.jpg" draggable="false" alt="Event 1" className="w-full h-auto object-cover rounded" />
                                    <h3 className="text-base mb-2 font-bold mt-5">How to Get Scholarship to Study Abroad</h3>
                                    <p className="text-black text-sm">Some Event Description</p>
                                    <p className="text-gray-400 mt-5 text-sm">Mar 23, 2024</p>
                                </div>
                                <div className="bg-[#F6F6F6] p-4 rounded-lg shadow-sm">
                                    <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1751391659/feshia%20Images/2_ehkihc.jpg"  draggable="false" alt="Event 2" className="w-full h-auto object-cover rounded" />
                                    <h3 className="text-base mb-2 font-bold mt-5">MTN Scholarships</h3>
                                    <p className="text-black text-sm">Some Event</p>
                                    <p className="text-gray-400 mt-5 text-sm">Mar 23, 2024</p>
                                </div>
                                <div className="bg-[#F6F6F6] p-4 rounded-lg shadow-sm">
                                    <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1751391655/feshia%20Images/1_ar4zex.jpg"  draggable="false" alt="Event 3" className="w-full h-auto object-cover rounded" />
                                    <h3 className="text-base mb-2 font-bold mt-5">How to Get Scholarship to Study Abroad</h3>
                                    <p className="text-black text-sm">Some Event</p>
                                    <p className="text-gray-400 mt-5 text-sm">Mar 23, 2024</p>
                                </div>
                            </>
                        )}
                        {activeTab === 'upcoming' && (
                            <>
                                <div className="bg-[#F6F6F6] p-4 rounded-lg shadow-sm">
                                    <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1751391655/feshia%20Images/1_ar4zex.jpg"  draggable="false" alt="Upcoming Event 1" className="w-full h-auto object-cover rounded" />
                                    <h3 className="text-base mb-2 font-bold mt-5">How to Get Scholarship to Study Abroad</h3>
                                    <p className="text-black text-sm">Some Event Description</p>
                                    <p className="text-gray-400 mt-5 text-sm">Mar 23, 2024</p>
                                </div>
                                <div className="bg-[#F6F6F6] p-4 rounded-lg shadow-sm">
                                    <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1751391659/feshia%20Images/2_ehkihc.jpg"  draggable="false" alt="Upcoming Event 2" className="w-full h-auto object-cover rounded" />
                                    <h3 className="text-base mb-2 font-bold mt-5">MTN Scholarships</h3>
                                    <p className="text-black text-sm">Some Event</p>
                                    <p className="text-gray-400 mt-5 text-sm">Mar 23, 2024</p>
                                </div>
                            </>
                        )}
                        {activeTab === 'recent' && (
                            <>
                                <div className="bg-[#F6F6F6] p-4 rounded-lg shadow-sm">
                                    <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1751391655/feshia%20Images/1_ar4zex.jpg"  draggable="false" alt="Recent Event 1" className="w-full h-auto object-cover rounded" />
                                    <h3 className="text-base mb-2 font-bold mt-5">How to Get Scholarship to Study Abroad</h3>
                                    <p className="text-black text-sm">Some Event</p>
                                    <p className="text-gray-400 mt-5 text-sm">Mar 23, 2024</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventTabs;