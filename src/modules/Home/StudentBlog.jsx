import React, { useState } from 'react';
import BreadcrumbBanner from './components/BreadcrumbBanner';

const StudentBlog = () => {
    const [activeTab, setActiveTab] = useState('all');

    // Dummy data for articles
    const articles = [
        // Canada Articles
        { id: 1, country: 'Canada', title: 'What to Know Before Studying in Canada as a Student', date: 'Jun 15, 2025', image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1750962359/feshia%20Images/1_1_ub0w25.jpg' },
        { id: 2, country: 'Canada', title: 'Top Universities in Canada for International Students', date: 'Jun 10, 2025', image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1750962359/feshia%20Images/1_1_ub0w25.jpg' },
        { id: 3, country: 'Canada', title: 'Visa Process Simplified for Canada Immigration', date: 'Jun 05, 2025', image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1750962359/feshia%20Images/1_1_ub0w25.jpg' },
        { id: 4, country: 'Canada', title: 'Living Costs in Canada: A Student Guide', date: 'Jun 01, 2025', image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1750962359/feshia%20Images/1_1_ub0w25.jpg' },
        { id: 5, country: 'Canada', title: 'Scholarships Available for Canadian Studies', date: 'May 28, 2025', image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1750962359/feshia%20Images/1_1_ub0w25.jpg' },
        { id: 6, country: 'Canada', title: 'Cultural Adaptation Tips for Canada', date: 'May 20, 2025', image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1750962359/feshia%20Images/1_1_ub0w25.jpg' },

        // United States Articles
        { id: 7, country: 'United States', title: 'Best US Colleges for Engineering', date: 'Jun 14, 2025', image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1750803402/feshia%20Images/images_6_1_qksjbu.png' },
        { id: 8, country: 'United States', title: 'Understanding US Student Visa Requirements', date: 'Jun 12, 2025', image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1750803402/feshia%20Images/images_6_1_qksjbu.png' },
        { id: 9, country: 'United States', title: 'Life as an International Student in the US', date: 'Jun 08, 2025', image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1750803402/feshia%20Images/images_6_1_qksjbu.png' },

        // United Kingdom Articles
        { id: 10, country: 'United Kingdom', title: 'Top UK Universities for Business Studies', date: 'Jun 13, 2025', image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1750962359/feshia%20Images/1_1_ub0w25.jpg' },
        { id: 11, country: 'United Kingdom', title: 'UK Immigration Rules for Students', date: 'Jun 09, 2025', image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1750962359/feshia%20Images/1_1_ub0w25.jpg' },
        { id: 12, country: 'United Kingdom', title: 'Exploring London as a Student', date: 'Jun 04, 2025', image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1750962359/feshia%20Images/1_1_ub0w25.jpg' },

        // Australia Articles
        { id: 13, country: 'Australia', title: 'Study Opportunities in Australian Universities', date: 'Jun 16, 2025', image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1750962359/feshia%20Images/1_1_ub0w25.jpg' },
        { id: 14, country: 'Australia', title: 'Australian Visa Application Tips', date: 'Jun 11, 2025', image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1750962359/feshia%20Images/1_1_ub0w25.jpg' },
        { id: 15, country: 'Australia', title: 'Living in Sydney: Student Life', date: 'Jun 07, 2025', image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1750962359/feshia%20Images/1_1_ub0w25.jpg' },
    ];

    // Filter articles based on active tab
    const filteredArticles = activeTab === 'all'
        ? articles
        : articles.filter(article => article.country.toLowerCase() === activeTab.toLowerCase());

    return (
        <>
            <BreadcrumbBanner
                title="STUDENT BLOG"
                currentPage="Studnet Blog"
                backgroundImage="https://res.cloudinary.com/greenmouse-tech/image/upload/v1750961764/feshia%20Images/1_olgpau.jpg"
            />
            <div className="section px-4">
                <div className="Resizer bg-white ">
                    <div className="max-w-3xl text-center mx-auto mb-10">
                        <h2 className="text-2xl font-bold mb-4">STAY UP TO DATE</h2>
                        <p className="text-black mb-6">
                            At Feshia, we strive to connect learners with endless educational possibilities from universities
                            worldwide, empowering them to shape their future through knowledge and exploration.
                        </p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex justify-center w-auto space-x-6 mb-10 overflow-x-auto rounded-lg">
                        <div className="bg-gray-200 p-3 rounded-lg">
                            <button
                                className={`px-4 py-2 rounded-full cursor-pointer ${activeTab === 'all' ? 'bg-[#ED268F] text-white' : 'bg-transparent text-black'}`}
                                onClick={() => setActiveTab('all')}
                            >
                                All Article
                            </button>
                            <button
                                className={`px-4 py-2 rounded-full cursor-pointer ${activeTab === 'canada' ? 'bg-[#ED268F] text-white' : 'bg-transparent text-black'}`}
                                onClick={() => setActiveTab('canada')}
                            >
                                Canada
                            </button>
                            <button
                                className={`px-4 py-2 rounded-full cursor-pointer ${activeTab === 'united states' ? 'bg-[#ED268F] text-white' : 'bg-transparent text-black'}`}
                                onClick={() => setActiveTab('united states')}
                            >
                                United State
                            </button>
                            <button
                                className={`px-4 py-2 rounded-full cursor-pointer ${activeTab === 'united kingdom' ? 'bg-[#ED268F] text-white' : 'bg-transparent text-black'}`}
                                onClick={() => setActiveTab('united kingdom')}
                            >
                                United Kingdom
                            </button>
                            <button
                                className={`px-4 py-2 rounded-full cursor-pointer ${activeTab === 'australia' ? 'bg-[#ED268F] text-white' : 'bg-transparent text-black'}`}
                                onClick={() => setActiveTab('australia')}
                            >
                                Australia
                            </button>
                        </div>
                    </div>

                    {/* Article Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredArticles.map((article) => (
                            <div key={article.id} className="bg-[#F6F6F6] p-2 rounded-lg overflow-hidden">
                                <img src={article.image} alt={article.title} className="w-full rounded h-auto object-cover" />
                                <div className="p-2">
                                    <div className="flex justify-end mb-4">
                                        <span className="inline-block bg-[#ED268F] text-white text-xs px-2 py-1 rounded">
                                            {article.country}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-medium mb-2">{article.title}</h3>
                                    <p className="text-base mt-10 text-gray-500">{article.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudentBlog;