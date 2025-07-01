import React from 'react';
import BreadcrumbBanner from './components/BreadcrumbBanner';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaBuilding } from 'react-icons/fa';



const ConsultationForm = () => {
    return (
        <>
            <BreadcrumbBanner
                title="TALK TO A CONSULTANT"
                currentPage="Talk to a Consultant"
                backgroundImage="https://res.cloudinary.com/greenmouse-tech/image/upload/v1750949116/feshia%20Images/p_hvc9sf.jpg"
            />
            <div className="w-full px-4 section">
                <div className="Resizer">
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Left Sidebar with Office Details */}
                        <div className="w-full md:w-1/2  rounded-lg space-y-6">
                            <div className="rounded-lg bg-[#E6E6E6] p-6">
                                <h3 className="font-bold text-lg mb-2">Nigeria</h3>
                                <p className="flex items-center mb-2"><FaMapMarkerAlt className="text-black mr-2" />7 Ikorodu Road, Maryland Behind Maryland BRT Bus Stop Maryland Lagos - Nigeria</p>
                                <p className="flex items-center mb-2"><FaPhoneAlt className="text-black mr-2" />+234 901 994 7067</p>
                                <p className="flex items-center mb-2"><FaEnvelope className="text-black mr-2" />nigeriaoffice@feshia.com</p>
                            </div>
                            <div className="rounded-lg bg-[#E6E6E6] p-6">
                                <h3 className="font-bold text-lg mb-2">Australia</h3>
                                <p className="flex items-center mb-2"><FaBuilding className="text-black mr-2" />Box 221, Flinders Lane, VIC 8009</p>
                                <p className="flex items-center mb-2"><FaPhoneAlt className="text-black mr-2" />+6142 581 295</p>
                                <p className="flex items-center mb-2"><FaEnvelope className="text-black mr-2" />australiadmissions@feshia.com</p>
                            </div>
                            <div className="rounded-lg bg-[#E6E6E6] p-6">
                                <h3 className="font-bold text-lg mb-2">Email</h3>
                                <p className="mb-2">info@feshia.com</p>
                                <p className="mb-2">admissions@feshia.com</p>
                                <p className="mb-2">partnership@feshia.com</p>
                                <p className="mb-2">ukadmissions@feshia.com</p>
                                <p className="mb-2">usaadmissions@feshia.com</p>
                                <p className="mb-2">asiadmissions@feshia.com</p>
                                <p className="mb-2">preregistration@feshia.com</p>
                                <p className="mb-2">ukoffice@feshia.com</p>
                                <p className="mb-2">australiadmissions@feshia.com</p>
                                <p className="mb-2">canadaadmissions@feshia.com</p>
                                <p className="mb-2">europeadmissions@feshia.com</p>
                                <p className="mb-2">newzealandadmissions@feshia.com</p>
                                <p className="mb-2">canaadoffice@feshia.com</p>
                                <p className="mb-2">austrliaoffice@feshia.com</p>
                                <p className="mb-2">usaoffice@feshia.com</p>
                            </div>
                        </div>
                        {/* Right Form Section */}
                        <div className="w-full md:w-1/2">
                            <div className="rounded-xl bg-[#E6E6E6]">
                                <h2 className="text-xl font-bold bg-[#ED268F] text-white p-6 rounded-t-xl">
                                    Free consultation request!
                                </h2>
                                <p className="text-black pl-6 pr-8 pt-8">
                                    One of our experienced consultants will be in touch with you shortly.
                                </p>
                                <form className="space-y-4 p-6">
                                    <div>
                                        <label className="block text-black mb-3">Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            className="w-full p-5 bg-white rounded outline-none italic"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-black mb-3">Email</label>
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="w-full p-5 bg-white italic rounded outline-none"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-black mb-3">Phone Number</label>
                                        <input
                                            type="tel"
                                            placeholder="Enter your phone number"
                                            className="w-full p-5 bg-white rounded outline-none italic"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-black mb-3">Message</label>
                                        <textarea
                                            placeholder="Enter your message"
                                            className="w-full p-5 bg-white rounded outline-none italic h-64"
                                            required
                                        />
                                    </div>
                                    <div className="flex items-center space-x-4">
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
                                        className="w-full bg-[#ED268F] cursor-pointer text-white p-2 rounded outline-none"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Map Section */}
            <div className="">
                <iframe
                    className="w-full h-64 md:h-96 rounded-lg"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3963.5910969401957!2d3.3667731!3d6.5731784!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93aca0c4d4e1%3A0x393f3ac49c0d35f6!2sMaryland%20BRT%20Terminal!5e0!3m2!1sen!2sng!4v1751389686478!5m2!1sen!2sng"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </>
    );
};

export default ConsultationForm;
