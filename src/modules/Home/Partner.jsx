import React, { useState } from 'react';
import BreadcrumbBanner from './components/BreadcrumbBanner';


const PARTNERS = () => {
    const [activeTab, setActiveTab] = useState('institutions');
    return (
        <>
            <BreadcrumbBanner
                title="PARTNER WITH US"
                currentPage="Partner with us"
                backgroundImage="https://res.cloudinary.com/greenmouse-tech/image/upload/v1751390134/feshia%20Images/p_jwlqbw.jpg"
            />
            <div className="section px-4">
                <div className="bg-white Resizer">
                    <div className="text-center mb-6">
                        <h2 className="md:text-3xl text-2xl font-bold mb-4">GET IN TOUCH WITH US</h2>
                        <p className="text-black mb-4 leading-loose">
                            At Feshia, we believe in the power of collaboration to create meaningful impact. Partner with us to unlock new opportunities, reach wider audiences, and drive innovation in the beauty industry. Whether you're a supplier, distributor, influencer, or brand passionate about quality and sustainability, let's join forces to redefine beauty together. Contact us today to explore partnership possibilities and embark on a journey of growth and success with Feshia.
                        </p>
                    </div>
                    <div className="flex justify-center w-auto space-x-6 mb-10 overflow-x-auto rounded-lg">
                        <div className=" bg-gray-200 p-3 rounded-lg">
                            <button
                                className={`px-6 py-2 rounded-l-lg ${activeTab === 'institutions' ? 'bg-[#ED268F] text-white' : 'bg-gray-200 text-gray-700'}`}
                                onClick={() => setActiveTab('institutions')}
                            >
                                For Institutions
                            </button>
                            <button
                                className={`px-6 py-2 rounded-r-lg ${activeTab === 'subagents' ? 'bg-[#ED268F] text-white' : 'bg-gray-200 text-gray-700'}`}
                                onClick={() => setActiveTab('subagents')}
                            >
                                Sub Agents
                            </button>
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gray-200 p-6 rounded-lg">
                            {activeTab === 'institutions' && (
                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-black mb-2">First Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your first name"
                                            className="w-full p-3 bg-white rounded outline-none"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-black mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your last name"
                                            className="w-full p-3 bg-white rounded outline-none"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-black mb-2">Partnership Type</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your type more"
                                            className="w-full p-3 bg-white rounded outline-none"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-black mb-2">Email</label>
                                        <input
                                            type="email"
                                            placeholder="Enter verified"
                                            className="w-full p-3 bg-white rounded outline-none"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-black mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            placeholder="Enter your phone number"
                                            className="w-full p-3 bg-white rounded outline-none"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-black mb-2">Institution Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your institution"
                                            className="w-full p-3 bg-white rounded outline-none"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-black mb-2">Institution Website</label>
                                        <input
                                            type="url"
                                            placeholder="Enter your website"
                                            className="w-full p-3 bg-white rounded outline-none"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-black mb-2">Message</label>
                                        <textarea
                                            placeholder="Enter your message"
                                            className="w-full p-3 bg-white rounded outline-none h-32"
                                            required
                                        />
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            id="notRobot"
                                            className="w-4 h-4 text-[#ED268F] bg-white rounded border-gray-300 focus:ring-[#ED268F]"
                                            required
                                        />
                                        <label htmlFor="notRobot" className="text-black">
                                            I'm not a robot
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-[#ED268F] text-white p-3 rounded outline-none"
                                    >
                                        Submit
                                    </button>
                                </form>
                            )}
                            {activeTab === 'subagents' && (
                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-black mb-2">First Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your first name"
                                            className="w-full p-3 bg-white rounded outline-none"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-black mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your last name"
                                            className="w-full p-3 bg-white rounded outline-none"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-black mb-2">Partnership Type</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your type more"
                                            className="w-full p-3 bg-white rounded outline-none"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-black mb-2">Email</label>
                                        <input
                                            type="email"
                                            placeholder="Enter verified"
                                            className="w-full p-3 bg-white rounded outline-none"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-black mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            placeholder="Enter your phone number"
                                            className="w-full p-3 bg-white rounded outline-none"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-black mb-2">Agency Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your agency"
                                            className="w-full p-3 bg-white rounded outline-none"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-black mb-2">Agency Website</label>
                                        <input
                                            type="url"
                                            placeholder="Enter your website"
                                            className="w-full p-3 bg-white rounded outline-none"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-black mb-2">Message</label>
                                        <textarea
                                            placeholder="Enter your message"
                                            className="w-full p-3 bg-white rounded outline-none h-32"
                                            required
                                        />
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            id="notRobot"
                                            className="w-4 h-4 text-[#ED268F] bg-white rounded border-gray-300 focus:ring-[#ED268F]"
                                            required
                                        />
                                        <label htmlFor="notRobot" className="text-black">
                                            I'm not a robot
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full cursor-pointer bg-[#ED268F] text-white p-3 rounded outline-none"
                                    >
                                        Submit
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PARTNERS;