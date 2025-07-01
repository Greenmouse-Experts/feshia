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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Add your image and content here */}
                        <div className="p-4 bg-gray-100 rounded-lg">
                            <img src="your-image-url" alt="Description" className="w-full h-48 object-cover rounded" />
                            <h3 className="text-lg font-semibold mt-2">Item 1</h3>
                            <p className="text-gray-600 mt-2">Add your description here.</p>
                        </div>
                        <div className="p-4 bg-gray-100 rounded-lg">
                            <img src="your-image-url" alt="Description" className="w-full h-48 object-cover rounded" />
                            <h3 className="text-lg font-semibold mt-2">Item 2</h3>
                            <p className="text-gray-600 mt-2">Add your description here.</p>
                        </div>
                        <div className="p-4 bg-gray-100 rounded-lg">
                            <img src="your-image-url" alt="Description" className="w-full h-48 object-cover rounded" />
                            <h3 className="text-lg font-semibold mt-2">Item 3</h3>
                            <p className="text-gray-600 mt-2">Add your description here.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default WhyFeshia;
