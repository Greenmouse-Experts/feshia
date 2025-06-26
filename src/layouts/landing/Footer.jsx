import React from 'react';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="bg-black text-white only-top px-4">
            <div className="Resizer mx-auto">
                {/* Desktop Layout */}
                <div className="px-4">
                    <div className="hidden md:grid md:grid-cols-5 gap-8 mb-8">
                        {/* CONTACT */}
                        <div className="col-span-2">
                            <h3 className="text-white text-lg font-bold mb-4">CONTACT</h3>
                            <ul className="space-y-4 text-sm">
                                <li>
                                    <strong>Nigeria</strong>
                                    <ul className="space-y-3 mt-3 ml-4 text-base">
                                        <li className="flex items-center mr-10">
                                            <MapPinIcon className="h-4 w-4 text-[#ED268F] mr-2" />
                                            7 Ikorodu Road, Maryland Behind Maryland BRT Bus Stop Maryland Lagos - Nigeria
                                        </li>
                                        <li className="flex items-center">
                                            <PhoneIcon className="h-4 w-4 text-[#ED268F] mr-2" />
                                            +234 901 994 7067
                                        </li>
                                        <li className="flex items-center">
                                            <EnvelopeIcon className="h-4 w-4 text-[#ED268F] mr-2" />
                                            nigeriaoffice@feshia.com
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Australia</strong>
                                    <ul className="space-y-3 mt-3 ml-4 text-base">
                                        <li className="flex items-center">
                                            <MapPinIcon className="h-4 w-4 text-pink-600 mr-2" />
                                            Box 221, Flinders Lane, VIC 8009
                                        </li>
                                        <li className="flex items-center">
                                            <PhoneIcon className="h-4 w-4 text-pink-600 mr-2" />
                                            +61 412 581 295
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        {/* COMPANY */}
                        <div className="col-span-1">
                            <h3 className="text-white text-lg font-bold mb-4">COMPANY</h3>
                            <ul className="space-y-4 text-base">
                                <li>About Us</li>
                                <li>For Student</li>
                                <li>For Institution</li>
                                <li>Resources</li>
                                <li>Events</li>
                                <li>Apply Now</li>
                            </ul>
                        </div>

                        {/* QUICK LINKS */}
                        <div className="col-span-1">
                            <h3 className="text-white text-lg font-bold mb-4">QUICK LINKS</h3>
                            <ul className="space-y-4 text-base">
                                <li>Articles</li>
                                <li>Contact Us</li>
                                <li>Disclaimer</li>
                                <li>FAQs</li>
                                <li>Privacy Policy</li>
                                <li>Terms & Condition</li>
                            </ul>
                        </div>

                        {/* STUDY ABROAD */}
                        <div className="col-span-1">
                            <h3 className="text-white text-lg font-bold mb-4">STUDY ABROAD</h3>
                            <ul className="space-y-4 text-base">
                                <li>Australia</li>
                                <li>Canada</li>
                                <li>United Kingdom</li>
                                <li>United States</li>
                                <li>Germany</li>
                                <li>Netherlands</li>
                                <li>France</li>
                            </ul>
                        </div>
                    </div>


                    {/* Newsletter Section */}
                    <div className="Resizer flex-col md:flex-row justify-between items-center w-full hidden md:block">
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h3 className="text-white text-base md:text-base font-bold mb-3">NEWSLETTER</h3>
                            <form className="flex">
                                <input
                                    type="email"
                                    placeholder="Enter your Email"
                                    className="p-4 w-full text-xs bg-white rounded-l-sm italic text-black outline-none"
                                />
                                <button
                                    type="submit"
                                    className="bg-pink-600 hover:bg-pink-700 text-white px-4 flex items-center justify-center rounded-r-sm"
                                >
                                    <PaperAirplaneIcon className="w-5 h-5 transform rotate-45" />
                                </button>
                            </form>
                            
                        </div>

                        <div className="w-full md:w-auto -mt-20 flex justify-center md:justify-end">
                            <Link to="/">
                                <img
                                    src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1750848536/feshia%20Images/Frame_1_puzgs4.png"
                                    alt="Feshia"
                                    className="h-16 w-auto"
                                    draggable="false"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyright Text */}
                <div className="flex flex-col items-center justify-center mt-8 text-center">
                    <div className="hidden md:block">
                        <p className="text-base text-center mt-8">©️ {new Date().getFullYear()} Feshia, All Rights Reserved</p>
                    </div>
                </div>


                {/* Mobile Layout */}
                <div className="md:hidden">
                    <div className="space-y-8">
                        {/* CONTACT */}
                        <div>
                            <h3 className="text-white text-lg font-bold mb-4">CONTACT</h3>
                            <ul className="space-y-4 text-sm">
                                <li>
                                    <strong>Nigeria</strong>
                                    <ul className="space-y-2 mt-2">
                                        <li>
                                            7 Ikordodu Road, Maryland Behind
                                            Maryland BRT Bus Stop Maryland Lagos - Nigeria
                                        </li>
                                        <li>
                                            +234 901 994 7067
                                        </li>
                                        <li>
                                            nigeriaoffice@feshia.com
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Australia</strong>
                                    <ul className="space-y-2 mt-2">
                                        <li>
                                            Box 221, Flinders Lane, VIC 8009
                                        </li>
                                        <li>
                                            +61 412 581 295
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        {/* COMPANY */}
                        <div>
                            <h3 className="text-white text-lg font-bold mb-4">COMPANY</h3>
                            <ul className="space-y-4 text-sm">
                                <li>About Us</li>
                                <li>For Student</li>
                                <li>For Institution</li>
                                <li>Resources</li>
                                <li>Events</li>
                                <li>Apply Now</li>
                            </ul>
                        </div>

                        {/* QUICK LINKS */}
                        <div>
                            <h3 className="text-white text-lg font-bold mb-4">QUICK LINKS</h3>
                            <ul className="space-y-4 text-sm">
                                <li>Articles</li>
                                <li>Contact Us</li>
                                <li>Disclaimer</li>
                                <li>FAQs</li>
                                <li>Privacy Policy</li>
                                <li>Terms & Condition</li>
                            </ul>
                        </div>

                        {/* STUDY ABROAD */}
                        <div>
                            <h3 className="text-white text-lg font-bold mb-4">STUDY ABROAD</h3>
                            <ul className="space-y-4">
                                <li>Australia</li>
                                <li>Canada</li>
                                <li>United Kingdom</li>
                                <li>United States</li>
                                <li>Germany</li>
                                <li>Netherlands</li>
                                <li>France</li>
                            </ul>
                        </div>

                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h3 className="text-white text-base md:text-base font-bold mb-3">NEWSLETTER</h3>
                            <form className="flex">
                                <input
                                    type="email"
                                    placeholder="Enter your Email"
                                    className="p-4 w-full text-xs bg-white rounded-l-sm italic text-black outline-none"
                                />
                                <button
                                    type="submit"
                                    className="bg-pink-600 hover:bg-pink-700 text-white px-4 flex items-center justify-center rounded-r-sm"
                                >
                                    <PaperAirplaneIcon className="w-5 h-5 transform rotate-45" />
                                </button>
                            </form>
                        </div>

                        <div className="flex flex-col items-center justify-center mt-8 text-center">
                            <Link to="/">
                                <img
                                    src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1750848536/feshia%20Images/Frame_1_puzgs4.png"
                                    alt="Feshia"
                                    className="h-16 w-auto"
                                    draggable="false"
                                />
                            </Link>
                            <p className="text-xs mt-4">©️ {new Date().getFullYear()} Feshia, All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;