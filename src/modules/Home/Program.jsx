import React, { useState } from 'react';
import BreadcrumbBanner from './components/BreadcrumbBanner';



const ProgramSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [duration, setDuration] = useState('');
    const [tuition, setTuition] = useState('');
    const [scholarship, setScholarship] = useState('');
    const [programType, setProgramType] = useState('');
    const [amount, setAmount] = useState('');
    const [level, setLevel] = useState('');
    const [activeTab, setActiveTab] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const programsPerPage = 12;

    // Expanded program data
    const programs = [
        { id: 1, title: 'Bachelor of Environmental Management and Science', university: 'Australian National University', duration: '36 Months', amount: '15,000 ZAR', scholarship: 'Yes', level: 'Bachelors', image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=250&fit=crop' },
        { id: 2, title: 'Master of Business Administration', university: 'University of Cape Town', duration: '24 Months', amount: '25,000 ZAR', scholarship: 'No', level: 'Masters', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop' },
        { id: 3, title: 'Bachelor of Computer Science', university: 'University of Witwatersrand', duration: '36 Months', amount: '18,000 ZAR', scholarship: 'Yes', level: 'Bachelors', image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop' },
        { id: 4, title: 'Master of Environmental Science', university: 'Stellenbosch University', duration: '24 Months', amount: '22,000 ZAR', scholarship: 'Yes', level: 'Masters', image: 'https://images.unsplash.com/photo-1574192324001-ee41e18ed679?w=400&h=250&fit=crop' },
        { id: 5, title: 'Bachelor of Business Management', university: 'University of Johannesburg', duration: '36 Months', amount: '16,000 ZAR', scholarship: 'No', level: 'Bachelors', image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=250&fit=crop' },
        { id: 6, title: 'Certification in Data Science', university: 'University of Pretoria', duration: '12 Months', amount: '8,000 ZAR', scholarship: 'Yes', level: 'Certification', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop' },
        { id: 7, title: 'PhD in Environmental Studies', university: 'Rhodes University', duration: '48 Months', amount: '30,000 ZAR', scholarship: 'Yes', level: 'Research', image: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=400&h=250&fit=crop' },
        { id: 8, title: 'Bachelor of Engineering', university: 'University of Cape Town', duration: '48 Months', amount: '28,000 ZAR', scholarship: 'No', level: 'Bachelors', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop' },
        { id: 9, title: 'MBA in Finance', university: 'GIBS Business School', duration: '18 Months', amount: '35,000 ZAR', scholarship: 'No', level: 'MBA', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop' },
        { id: 10, title: 'PND in Education', university: 'University of South Africa', duration: '12 Months', amount: '12,000 ZAR', scholarship: 'Yes', level: 'PND', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop' },
        { id: 11, title: 'Bachelor of Psychology', university: 'University of KwaZulu-Natal', duration: '36 Months', amount: '17,000 ZAR', scholarship: 'Yes', level: 'Bachelors', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop' },
        { id: 12, title: 'Master of Information Technology', university: 'University of Western Cape', duration: '24 Months', amount: '24,000 ZAR', scholarship: 'No', level: 'Masters', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop' },
        { id: 13, title: 'Bachelor of Law', university: 'University of Pretoria', duration: '36 Months', amount: '20,000 ZAR', scholarship: 'Yes', level: 'Bachelors', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop' },
        { id: 14, title: 'Master of Public Health', university: 'University of Cape Town', duration: '24 Months', amount: '23,000 ZAR', scholarship: 'Yes', level: 'Masters', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop' },
        { id: 15, title: 'Bachelor of Medicine', university: 'University of Witwatersrand', duration: '72 Months', amount: '45,000 ZAR', scholarship: 'No', level: 'Bachelors', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop' },
    ];

    const filteredPrograms = programs.filter(prog => {
        const matchesSearch = prog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            prog.university.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDuration = !duration || prog.duration === duration;
        const matchesTuition = !tuition || prog.amount === tuition;
        const matchesScholarship = !scholarship || prog.scholarship === scholarship;
        const matchesProgramType = !programType || prog.title.toLowerCase().includes(programType.toLowerCase());
        const matchesAmount = !amount || prog.amount === amount;
        const matchesLevel = !level || prog.level === level;

        return matchesSearch && matchesDuration && matchesTuition && matchesScholarship &&
            matchesProgramType && matchesAmount && matchesLevel;
    });

    const indexOfLastProgram = currentPage * programsPerPage;
    const indexOfFirstProgram = indexOfLastProgram - programsPerPage;
    const currentPrograms = filteredPrograms.slice(indexOfFirstProgram, indexOfLastProgram);
    const totalPages = Math.ceil(filteredPrograms.length / programsPerPage);

    const handleSearch = () => {
        console.log({ searchTerm, duration, tuition, scholarship, programType, amount, level });
        setCurrentPage(1);
    };

    const clearFilters = () => {
        setSearchTerm('');
        setDuration('');
        setTuition('');
        setScholarship('');
        setProgramType('');
        setAmount('');
        setLevel('');
        setCurrentPage(1);
    };

    return (
        <div className="">
            <BreadcrumbBanner
                title="PROGRAMS"
                currentPage="Programs"
                backgroundImage="https://res.cloudinary.com/greenmouse-tech/image/upload/v1751393796/feshia%20Images/1_1_tfw17r.jpg"
            />

            {/* Search Section */}
            <div className="w-full px-4 only-top bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 lg:mb-0">Search for a program</h2>
                        <div className="flex items-center space-x-4">
                            <div className="bg-[#ED268F] text-white px-4 py-2 rounded-lg font-semibold">
                                {filteredPrograms.length} programs found
                            </div>
                            <button
                                onClick={clearFilters}
                                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                            >
                                Clear Filters
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 bg-gray-100 p-4 rounded-xl">
                        <div className="lg:col-span-3">
                            <input
                                type="text"
                                placeholder="Search programs..."
                                className="w-full p-3 border-none outline-none bg-white rounded-lg"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="lg:col-span-2">
                            <select
                                className="w-full p-3 border-none outline-none bg-white rounded-lg"
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                            >
                                <option value="">All Durations</option>
                                <option value="12 Months">12 Months</option>
                                <option value="18 Months">18 Months</option>
                                <option value="24 Months">24 Months</option>
                                <option value="36 Months">36 Months</option>
                                <option value="48 Months">48 Months</option>
                                <option value="72 Months">72 Months</option>
                            </select>
                        </div>
                        <div className="lg:col-span-2">
                            <select
                                className="w-full p-3 border-none outline-none bg-white rounded-lg"
                                value={tuition}
                                onChange={(e) => setTuition(e.target.value)}
                            >
                                <option value="">All Tuition</option>
                                <option value="8,000 ZAR">8,000 ZAR</option>
                                <option value="12,000 ZAR">12,000 ZAR</option>
                                <option value="15,000 ZAR">15,000 ZAR</option>
                                <option value="16,000 ZAR">16,000 ZAR</option>
                                <option value="17,000 ZAR">17,000 ZAR</option>
                                <option value="18,000 ZAR">18,000 ZAR</option>
                                <option value="20,000 ZAR">20,000 ZAR</option>
                                <option value="22,000 ZAR">22,000 ZAR</option>
                                <option value="23,000 ZAR">23,000 ZAR</option>
                                <option value="24,000 ZAR">24,000 ZAR</option>
                                <option value="25,000 ZAR">25,000 ZAR</option>
                                <option value="28,000 ZAR">28,000 ZAR</option>
                                <option value="30,000 ZAR">30,000 ZAR</option>
                                <option value="35,000 ZAR">35,000 ZAR</option>
                                <option value="45,000 ZAR">45,000 ZAR</option>
                            </select>
                        </div>
                        <div className="lg:col-span-2">
                            <select
                                className="w-full p-3 border-none outline-none bg-white rounded-lg"
                                value={scholarship}
                                onChange={(e) => setScholarship(e.target.value)}
                            >
                                <option value="">All Scholarships</option>
                                <option value="Yes">Available</option>
                                <option value="No">Not Available</option>
                            </select>
                        </div>
                        <div className="lg:col-span-2">
                            <select
                                className="w-full p-3 border-none outline-none bg-white rounded-lg"
                                value={level}
                                onChange={(e) => setLevel(e.target.value)}
                            >
                                <option value="">All Levels</option>
                                <option value="Bachelors">Bachelors</option>
                                <option value="Masters">Masters</option>
                                <option value="PND">PND</option>
                                <option value="MBA">MBA</option>
                                <option value="Research">Research</option>
                                <option value="Certification">Certification</option>
                            </select>
                        </div>
                        <div className="lg:col-span-1">
                            <button
                                className="w-full bg-[#ED268F] text-white p-3 rounded-lg mx-auto cursor-pointer hover:bg-[#d41e7a] transition-colors"
                                onClick={handleSearch}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-auto" viewBox="0 0 31 31" fill="currentColor">
                                    <path d="M22.7313 19.9921H21.2949L20.7857 19.5015C21.9221 18.1821 22.7526 16.628 23.2178 14.9504C23.683 13.2728 23.7715 11.5132 23.4768 9.79748C22.6222 4.74558 18.4038 0.711336 13.3125 0.0934776C11.5226 -0.13283 9.70465 0.0530836 7.99771 0.636991C6.29076 1.2209 4.74008 2.18732 3.46434 3.46231C2.18861 4.73731 1.22161 6.28707 0.637364 7.99302C0.0531147 9.69897 -0.132908 11.5159 0.0935325 13.3047C0.711753 18.393 4.74837 22.6089 9.80323 23.463C11.52 23.7575 13.2806 23.6691 14.9592 23.2042C16.6378 22.7392 18.1928 21.9092 19.5129 20.7735L20.0039 21.2824V22.718L27.7316 30.4412C28.4771 31.1863 29.6954 31.1863 30.4409 30.4412C31.1864 29.6961 31.1864 28.4786 30.4409 27.7335L22.7313 19.9921ZM11.8215 19.9921C7.29398 19.9921 3.63921 16.3395 3.63921 11.8146C3.63921 7.2897 7.29398 3.63707 11.8215 3.63707C16.3491 3.63707 20.0039 7.2897 20.0039 11.8146C20.0039 16.3395 16.3491 19.9921 11.8215 19.9921Z" fill="white" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filter Tabs Section */}
            <div className="w-full section px-4 ">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                        <div className="w-full md:w-1/3">
                            <select
                                className="w-full p-3 border border-[#ED268F] text-sm rounded-lg bg-white outline-none"
                                value={activeTab}
                                onChange={(e) => setActiveTab(e.target.value)}
                            >
                                <option value="all">All Filters</option>
                                <option value="duration">Filter by Duration</option>
                                <option value="amount">Filter by Amount</option>
                                <option value="level">Filter by Level</option>
                            </select>
                        </div>
                    </div>

                    {/* Dynamic Filter Sections */}
                    {activeTab === 'duration' && (
                        <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border">
                            <h3 className="text-lg font-semibold mb-4 text-gray-800">Filter by Duration</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                {['12 Months', '18 Months', '24 Months', '36 Months', '48 Months', '72 Months'].map(dur => (
                                    <label key={dur} className="flex items-center space-x-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 text-[#ED268F] border-gray-300 rounded focus:ring-[#ED268F]"
                                            checked={duration === dur}
                                            onChange={(e) => setDuration(e.target.checked ? dur : '')}
                                        />
                                        <span className="text-sm text-gray-700">{dur}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'amount' && (
                        <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border">
                            <h3 className="text-lg font-semibold mb-4 text-gray-800">Filter by Amount</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Enter amount (e.g., 15,000 ZAR)"
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#ED268F] focus:border-transparent"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                                <div className="text-sm text-gray-600 flex items-center">
                                    <span>Range: 8,000 ZAR - 45,000 ZAR</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'level' && (
                        <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border">
                            <h3 className="text-lg font-semibold mb-4 text-gray-800">Filter by Academic Level</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                {['Bachelors', 'Masters', 'PND', 'MBA', 'Research', 'Certification'].map(lvl => (
                                    <label key={lvl} className="flex items-center space-x-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 text-[#ED268F] border-gray-300 rounded focus:ring-[#ED268F]"
                                            checked={level === lvl}
                                            onChange={(e) => setLevel(e.target.checked ? lvl : '')}
                                        />
                                        <span className="text-sm text-gray-700">{lvl}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Programs Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {currentPrograms.map(program => (
                            <div key={program.id} className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-[#ED268FB8]">
                                <div className="relative">
                                    <img
                                        src={program.image}
                                        alt={program.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-3 right-3">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${program.scholarship === 'Yes'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-red-100 text-red-800'
                                            }`}>
                                            {program.scholarship === 'Yes' ? 'Scholarship' : 'No Scholarship'}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-bold mb-2 text-gray-800 line-clamp-2">{program.title}</h3>
                                    <p className="text-gray-600 mb-3 font-medium">{program.university}</p>
                                    {/* Top row with QS Rank and Scholarship */}
                                    <div className="flex justify-between mb-3">
                                        <div>
                                            <p className="text-base text-[#ED268F]">Tuition</p>
                                            <p className="text-lg text-black leading-tight">{program.amount}</p>
                                        </div>
                                        <div>
                                            <p className="text-base text-[#ED268F]">Duration</p>
                                            <p className="text-lg text-black leading-tight">{program.duration}</p>
                                        </div>
                                    </div>

                                    {/* Bottom row with level */}
                                    <div>
                                        <p className="text-base text-[#ED268F]">Level</p>
                                        <p className="text-lg text-black leading-tight">{program.level}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* No Results Message */}
                    {filteredPrograms.length === 0 && (
                        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                            <div className="text-gray-400 mb-4">
                                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-600 mb-2">No programs found</h3>
                            <p className="text-gray-500 mb-4">Try adjusting your search criteria</p>
                            <button
                                onClick={clearFilters}
                                className="bg-[#ED268F] text-white px-6 py-2 rounded-lg hover:bg-[#d41e7a] transition-colors"
                            >
                                Clear All Filters
                            </button>
                        </div>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 bg-white p-4 rounded-lg">
                            <div className="text-gray-600 mb-4 sm:mb-0">
                                Showing {indexOfFirstProgram + 1} to {Math.min(indexOfLastProgram, filteredPrograms.length)} of {filteredPrograms.length} programs
                            </div>
                            <div className="flex items-center space-x-2">
                                <button
                                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                >
                                    Previous
                                </button>

                                {/* Page Numbers */}
                                <div className="flex space-x-1">
                                    {[...Array(Math.min(5, totalPages))].map((_, index) => {
                                        const pageNum = currentPage <= 3 ? index + 1 : currentPage - 2 + index;
                                        if (pageNum > totalPages) return null;
                                        return (
                                            <button
                                                key={pageNum}
                                                className={`px-3 py-2 rounded-lg transition-colors ${currentPage === pageNum
                                                    ? 'bg-[#ED268F] text-white'
                                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                                    }`}
                                                onClick={() => setCurrentPage(pageNum)}
                                            >
                                                {pageNum}
                                            </button>
                                        );
                                    })}
                                </div>

                                <button
                                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProgramSearch;