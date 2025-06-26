import React from 'react';

const FeaturedCourses = () => {
    const courses = [
        { id: 1, title: 'Business & Management', image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1750806312/feshia%20Images/Vector_mer9ta.png' },
        { id: 2, title: 'Pharmacy', image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1750806312/feshia%20Images/Vector_2_dpievh.png' },
        { id: 3, title: 'Law', image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1750806312/feshia%20Images/Vector_3_ly4afz.png' },
        { id: 4, title: 'Computer Science', image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1750806312/feshia%20Images/Vector_4_gilwuf.png' },
        { id: 5, title: 'Education & Training', image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1750806312/feshia%20Images/Vector_5_ws6pma.png' },
    ];

    return (
        <div className="Resizer mx-auto section px-4">
            <div className="flex justify-between items-center mb-12">
                <h2 className="text-2xl font-bold text-gray-900">Featured Courses</h2>
                <a
                        href="#"
                        className="text-[#FD0B0B] text-base underline font-medium hidden md:block"
                    >
                        View All
                    </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
                {courses.map((course) => (
                    <div
                        key={course.id}
                        className="bg-white border border-pink-200 rounded-lg p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
                    >
                        <div className="w-16 h-16 mb-4">
                            {/* Placeholder for image - replace with your image URL */}
                            {course.image ? (
                                <img src={course.image} alt={course.title} className="w-full h-full object-contain" />
                            ) : (
                                <div className="w-full h-full bg-pink-200 flex items-center justify-center">
                                    <span className="text-pink-600">Image</span>
                                </div>
                            )}
                        </div>
                        <p className="text-gray-800 text-base mt-3 font-medium">{course.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedCourses;