import React from 'react';
import BreadcrumbBanner from './components/BreadcrumbBanner';


const ConsultationForm = () => {
    return (
        <>
            <BreadcrumbBanner
                title="TALK TO A CONSULTANT"
                currentPage="Talk to a Consultant"
                backgroundImage="https://res.cloudinary.com/greenmouse-tech/image/upload/v1750949116/feshia%20Images/p_hvc9sf.jpg"
            />
            <div className="w-full px-4 section">
                <div className="max-w-xl mx-auto rounded-xl bg-[#E6E6E6]">
                    <h2 className="text-xl font-bold bg-[#ED268F] text-white p-4 rounded-t-xl">
                        Free consultation request!
                    </h2>
                    <p className="text-black pl-6 pr-6 pt-6">
                        One of our experienced consultants will be in touch with you shortly.
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
                            <label className="block text-black mb-3">Message</label>
                            <textarea
                                placeholder="Enter your message"
                                className="w-full p-3 bg-white rounded outline-none italic h-34" required
                            />
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
        </>
    );
};

export default ConsultationForm;
