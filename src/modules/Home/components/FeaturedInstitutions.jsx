import React from "react";

const institutions = Array(6).fill({
    title: "The Chinese University of Hong Kong",
    location: "Hong Kong, Hong Kong, SAR",
    rank: 49,
    scholarship: "No",
    students: 4367,
    image:
        "https://res.cloudinary.com/greenmouse-tech/image/upload/v1750803402/feshia%20Images/images_6_1_qksjbu.png",
});

const articles = Array(10).fill({
    title: "Top 4 reasons for studying Masters Abroad",
    date: "June 20, 2025",
});

const FeaturedInstitutions = () => {
    return (
        <div className="w-full px-4 section">
            <div className="Resizer">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-2xl text-black font-semibold">Featured Institutions</h2>
                    <a href="#" className="text-[#ED268F] underline cursor-pointer font-medium text-sm">
                        View More
                    </a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Institution Cards */}
                    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {institutions.map((inst, index) => (
                            <div
                                key={index}
                                className="border border-[#ED268F] rounded-lg overflow-hidden"
                            >
                                <img src={inst.image} alt={inst.title} className="w-full h-50 object-cover" />
                                <div className="p-6 text-sm">
                                    <h3 className="font-semibold text-base mb-3">{inst.title}</h3>
                                    <p className="text-gray-500 mb-3">{inst.location}</p>

                                    <div className="flex justify-between text-[#ED268F]">
                                        <div>
                                            <p>QS Rank</p>
                                            <p className="font-bold text-black leading-loose">{inst.rank}</p>
                                        </div>
                                        <div>
                                            <p>Scholarship</p>
                                            <p className="font-bold text-black leading-loose">{inst.scholarship}</p>
                                        </div>
                                        <div>
                                            <p>Intl. Student</p>
                                            <p className="font-bold text-black leading-loose">{inst.students}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Scrollable Article Sidebar */}
                    <div className="bg-gray-100 rounded-md p-4 max-h-[550px] overflow-y-auto custom-scrollbar scrollbar-hide scrollbar-track-gray-200">
                        <h3 className="text-2xl font-semibold mb-4">Articles</h3>
                        <ul className="space-y-4">
                            {articles.map((article, index) => (
                                <li key={index} className="text-sm">
                                    <p className="font-medium">{article.title}</p>
                                    <p className="text-gray-500 text-xs">Posted on {article.date}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 text-sm text-center font-medium underline text-[#ED268F] cursor-pointer">
                            View All
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedInstitutions;
