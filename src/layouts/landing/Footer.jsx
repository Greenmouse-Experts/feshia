import React from 'react';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="bg-black text-white only-top px-4">
            <div className="Resizer mx-auto">

                {/* Desktop Layout */}
                <div className="px-4">
                    <div className="hidden md:grid lg:grid-cols-5 md:grid-cols-3 gap-8 mb-8">
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
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/student-blog">For Student</Link></li>
                                <li><Link to="/institution">For Institution</Link></li>
                                <li><Link to="#">Resources</Link></li>
                                <li><Link to="/events">Events</Link></li>
                                <li><Link to="#">Apply Now</Link></li>
                                <li><Link to="/university-search">University Search</Link></li>

                            </ul>
                            ⁠

                        </div>

                        {/* QUICK LINKS */}
                        <div className="col-span-1">
                            <h3 className="text-white text-lg font-bold mb-4">QUICK LINKS</h3>
                            <ul className="space-y-4 text-base">
                                <li><Link to="/why-feshia"></Link>Why Feshia</li>
                                <li>Contact Us</li>
                                <li>Disclaimer</li>
                                <li><Link to="/faqs">FAQs</Link></li>
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

                    <div className="items-center justify-center hidden md:flex">
                        <div className="bg-[#333] p-6 rounded-md w-full max-w-md sm:max-w-lg flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-6">
                            {/* Left: Newsletter Form */}
                            <div className="flex-1 w-full">
                                <h3 className="text-white text-base md:text-base font-bold mb-3">NEWSLETTER</h3>
                                <form action="">
                                    <input
                                        type="email"
                                        placeholder="Enter your Email"
                                        className="p-4 w-full text-xs bg-white rounded mb-3 italic text-black outline-none" required
                                    />
                                    <button type="submit" className="w-full bg-[#ED268F] hover:bg-pink-600 cursor-pointer text-white text-sm font-semibold py-2 rounded-md transition duration-300">
                                        Send
                                    </button>
                                </form>
                            </div>

                            {/* Right: Logo */}
                            <div className="flex-shrink-0 hidden md:block">
                                <img
                                    src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1750848536/feshia%20Images/Frame_1_puzgs4.png"
                                    alt="Feshia Logo"
                                    className="h-20"
                                    draggable="false"
                                />
                            </div>
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
                                    <ul className="space-y-3 mt-3 ml-4 text-base">
                                        <li className="flex items-center mr-10">
                                            <MapPinIcon className="h-9 w-9 text-[#ED268F] mr-2" />
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
                        <div>
                            <h3 className="text-white text-lg font-bold mb-4">COMPANY</h3>
                            <ul className="space-y-4 text-sm">
                                <li>About Us</li>
                                <li>For Student</li>
                                <li><Link to="/institution">For Institution</Link></li>
                                <li>Resources</li>
                                <li><Link to="/events">Events</Link></li>
                                <li>Apply Now</li>
                                <li><Link to="/university-search">University Search</Link></li>
                            </ul>
                        </div>

                        {/* QUICK LINKS */}
                        <div>
                            <h3 className="text-white text-lg font-bold mb-4">QUICK LINKS</h3>
                            <ul className="space-y-4 text-sm">
                                <li><Link to="/why-feshia"></Link>Why Feshia</li>
                                <li>Contact Us</li>
                                <li>Disclaimer</li>
                                <li><Link to="/faqs">FAQs</Link></li>
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

                        <div className="items-center justify-center md:flex">
                            <div className="bg-[#333] p-6 rounded-md w-full max-w-md sm:max-w-lg flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-6">
                                {/* Left: Newsletter Form */}
                                <div className="flex-1 w-full">
                                    <h3 className="text-white text-base md:text-base font-bold mb-3">NEWSLETTER</h3>
                                    <form action="">
                                        <input
                                            type="email"
                                            placeholder="Enter your Email"
                                            className="p-4 w-full text-xs bg-white rounded mb-3 italic text-black outline-none" required
                                        />
                                        <button type="submit" className="w-full bg-[#ED268F] hover:bg-pink-600 cursor-pointer text-white text-sm font-semibold py-2 rounded-md transition duration-300">
                                            Send
                                        </button>
                                    </form>
                                </div>

                                {/* Right: Logo */}
                                <div className="flex-shrink-0 ">
                                    <img
                                        src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1750848536/feshia%20Images/Frame_1_puzgs4.png"
                                        alt="Feshia Logo"
                                        className="h-20"
                                        draggable="false"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-8 text-center">
                            <p className="text-base mt-4">©️ {new Date().getFullYear()} Feshia, All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;