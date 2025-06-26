import React from 'react';
import BreadcrumbBanner from './components/BreadcrumbBanner';


const BookApppointment = () => {
    return (
        <>
            <BreadcrumbBanner
                title="BOOK AN APPOINTMENT"
                currentPage="Book an Apppointment"
                backgroundImage="https://res.cloudinary.com/greenmouse-tech/image/upload/v1750949116/feshia%20Images/p_hvc9sf.jpg"
            />
            <div className="w-full px-4 section">
                <div className="max-w-xl mx-auto rounded-xl bg-[#E6E6E6]">
                    <h2 className="text-xl font-bold bg-[#ED268F] text-white p-4 rounded-t-xl">
                        GET IN TOUCH WITH US
                    </h2>
                    <p className="text-black pl-6 pr-6 pt-6">
                        At Feshia, we strive to connect learners with endless educational possibilities from
                        universities worldwide, empowering them to shape their future through knowledge and
                        exploration.
                    </p>
                    <form className="space-y-4 p-6">
                        <div>
                            <label className="block text-black mb-3">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full p-3 bg-white rounded outline-none italic" required
                            />
                        </div>
                        <div>
                            <label className="block text-black mb-3">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-3 bg-white italic rounded outline-none" required
                            />
                        </div>
                        <div>
                            <label className="block text-black mb-3">Phone Number</label>
                            <input
                                type="tel"
                                placeholder="Enter your phone number"
                                className="w-full p-3 bg-white rounded outline-none italic" required
                            />
                        </div>
                        <div>
                            <label className="block text-black mb-3">Appointment Date</label>
                            <input
                                type="date"
                                placeholder="DD/MM/YYYY"
                                className="w-full p-3 bg-white rounded outline-none italic" required
                            />
                        </div>
                        <div>
                            <label className="block text-black mb-3">How do you want us to contact you?</label>
                            <select className="w-full p-3 bg-white rounded outline-none italic" required>
                                <option value="">Select an option</option>
                                <option value="email">Email</option>
                                <option value="phone">Phone</option>
                            </select>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="notRobot"
                                className="mr-2"
                                required
                            />
                            <label htmlFor="notRobot" className="text-black">I'm not a robot</label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#ED268F] cursor-pointer text-white p-3 rounded outline-none"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookApppointment;