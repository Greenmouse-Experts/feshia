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

const articles = [
    {
        title: "Top 4 reasons for studying Masters Abroad",
        date: "June 20, 2025",
        image: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1750803402/feshia%20Images/images_6_1_qksjbu.png"
    },
    {
        title: "Best Universities for Engineering in Canada",
        date: "June 18, 2025",
        image: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1750803402/feshia%20Images/images_6_1_qksjbu.png"
    },
    {
        title: "Scholarship Opportunities in Australia",
        date: "June 15, 2025",
        image: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1750803402/feshia%20Images/images_6_1_qksjbu.png"
    },
    {
        title: "Student Life in European Universities",
        date: "June 12, 2025",
        image: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1750803402/feshia%20Images/images_6_1_qksjbu.png"
    },
    {
        title: "How to Prepare for IELTS Exam",
        date: "June 10, 2025",
        image: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1750803402/feshia%20Images/images_6_1_qksjbu.png"
    },
    {
        title: "MBA Programs in Top US Universities",
        date: "June 8, 2025",
        image: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1750803402/feshia%20Images/images_6_1_qksjbu.png"
    },
    {
        title: "Study Abroad Application Timeline",
        date: "June 5, 2025",
        image: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1750803402/feshia%20Images/images_6_1_qksjbu.png"
    },
    {
        title: "Understanding Student Visa Requirements",
        date: "June 3, 2025",
        image: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1750803402/feshia%20Images/images_6_1_qksjbu.png"
    },
    {
        title: "Cost of Living for International Students",
        date: "June 1, 2025",
        image: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1750803402/feshia%20Images/images_6_1_qksjbu.png"
    },
    {
        title: "Top Medical Schools Around the World",
        date: "May 28, 2025",
        image: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1750803402/feshia%20Images/images_6_1_qksjbu.png"
    }
];

const FeaturedInstitutions = () => {
    return (
        <div className="w-full px-4 section bg-[#F4F4F4]">
            <div className="Resizer">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl text-black font-semibold">Featured Institutions</h2>
                    <a href="#" className="text-[#ED268F] underline cursor-pointer font-medium text-sm hidden md:block">
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
                                    <h3 className="font-semibold text-lg mb-3">{inst.title}</h3>
                                    <p className="text-gray-500 text-base mb-3">{inst.location}</p>

                                    <div className="text-[#ED268F]">
                                        {/* Top row with QS Rank and Scholarship */}
                                        <div className="flex justify-between mb-3">
                                            <div>
                                                <p className="text-base">QS Rank</p>
                                                <p className="font-bold text-black leading-tight">{inst.rank}</p>
                                            </div>
                                            <div>
                                                <p className="text-base">Scholarship</p>
                                                <p className="font-bold text-black leading-tight">{inst.scholarship}</p>
                                            </div>
                                        </div>

                                        {/* Bottom row with Intl. Student */}
                                        <div>
                                            <p className="text-base">Intl. Student</p>
                                            <p className="font-bold text-black leading-tight">{inst.students}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Articles Sidebar with Images */}
                    <div className="bg-[#F4F4F4] border border-gray-200 rounded-lg p-4 custom-scrollbar max-h-[900px] overflow-y-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-2xl font-semibold text-gray-800">Articles</h3>
                            
                        </div>

                        <div className="space-y-4">
                            {articles.map((article, index) => (
                                <div key={index} className="flex gap-3 pb-4 border-b border-gray-100 last:border-b-0">
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-medium text-lg text-gray-800 leading-tight mb-1 line-clamp-2">
                                            {article.title}
                                        </h4>
                                        <p className="text-base text-gray-500">
                                            Posted on {article.date}
                                        </p>

                                    </div>
                                </div>
                            ))}
                            <p className="text-center">
                            <a href="#" className="text-[#000000] underline  cursor-pointer font-bold text-sm">
                            View All
                            </a>
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedInstitutions;