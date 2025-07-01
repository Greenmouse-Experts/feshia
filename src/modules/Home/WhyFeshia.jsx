import React from 'react';
import BreadcrumbBanner from './components/BreadcrumbBanner';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaBuilding } from 'react-icons/fa';



const WhyFeshia = () => {
    return (
        <>
            <BreadcrumbBanner
                title="WHY FESHIA"
                currentPage="Why Feshia"
                backgroundImage="https://res.cloudinary.com/greenmouse-tech/image/upload/v1751397175/feshia%20Images/1_2_yirzqg.jpg"
            />
            <div className="w-full px-4 section">
                <div className="Resizer">
                <div className="flex items-center justify-center ">
                        <div className="flex flex-col md:flex-row bg-white">
                            {/* Image Section */}
                            <div className="w-full md:w-1/2 p-4">
                                <img
                                    src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1751400541/feshia%20Images/Become_a_Partner_b2jver.jpg" // 
                                    alt="Professional"
                                    className="w-full h-auto object-cover rounded-lg"
                                />
                            </div>
                            {/* Text Section */}
                            <div className="w-full md:w-1/2 p-4 flex items-center justify-center md:justify-start">
                                <div>
                                    <h2 className="text-xl font-bold text-gray-800">Sincerity of Purpose</h2>
                                    <p className="mt-4 text-gray-600">
                                        Feshia works with undiluted sincerity of purpose and a high level of professionalism
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default WhyFeshia;
