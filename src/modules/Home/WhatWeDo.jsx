import React from 'react';
import BreadcrumbBanner from './components/BreadcrumbBanner';


const WhatWeDo = () => {
    return (
        <>
            <BreadcrumbBanner
                title="WHAT WE DO"
                currentPage="What We do"
                backgroundImage="https://res.cloudinary.com/greenmouse-tech/image/upload/v1750957660/feshia%20Images/PP_cj6nz1.jpg"
            />
            <div className="section px-4">
                <div className="bg-white Resizer">
                    <p className="text-center text-black mb-20">
                        We provide a range of services to help students achieve their academic and career goals.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-[#EFEBEB] p-4 rounded-tl-[50%] rounded-tr-[50%] text-center">
                            <div className="w-full h-auto mb-4"> 
                                <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1750957969/feshia%20Images/1_ksxhv0.png" alt="Document review" className="w-full h-full object-cover" draggable="false" />
                            </div>
                            <h3 className="text-xl pt-3 font-semibold mb-2">Document review</h3>
                            <p className="text-black pb-6">
                                We help to review students documents and advise on better choice of institution and country
                            </p>
                        </div>
                        <div className="bg-[#EFEBEB] p-4 rounded-tl-[50%] rounded-tr-[50%] text-center">
                            <div className="w-full h-auto mb-4">
                                <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1750957969/feshia%20Images/2_myinm0.png" alt="Application processing" className="w-full h-full object-cover" draggable="false" />
                            </div>
                            <h3 className="text-xl pt-3 font-semibold mb-2">Application processing</h3>
                            <p className="text-black pb-6">
                                We process applications to Universities and Colleges on behalf of students
                            </p>
                        </div>
                        <div className="bg-[#EFEBEB] p-4 rounded-tl-[50%] rounded-tr-[50%] text-center">
                            <div className="w-full h-auto mb-4">
                                <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1750957969/feshia%20Images/3_evlsp5.png" alt="Visa processing" className="w-full h-full object-cover" draggable="false" />
                            </div>
                            <h3 className="text-xl pt-3 font-semibold mb-2">Visa processing</h3>
                            <p className="text-black pb-6">
                                We process visas for our students into any country of their choice
                            </p>
                        </div>
                        <div className="bg-[#EFEBEB] p-4 rounded-tl-[50%] rounded-tr-[50%] text-center">
                            <div className="w-full h-auto mb-4">
                                <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1750957970/feshia%20Images/4_wifqyz.png" alt="Settling In" className="w-full h-full object-cover" draggable="false" />
                            </div>
                            <h3 className="text-xl pt-3 font-semibold mb-2">Settling In</h3>
                            <p className="text-black pb-6">
                                We settle student in their choice country and school in a better accommodation and conducive environment
                            </p>
                        </div>
                        <div className="bg-[#EFEBEB] p-4 rounded-tl-[50%] rounded-tr-[50%] text-center">
                            <div className="w-full h-auto mb-4">
                                <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1750957979/feshia%20Images/5_v8cwmh.png" alt="Connecting Opportunities" className="w-full h-full object-cover" draggable="false" />
                            </div>
                            <h3 className="text-xl pt-3 font-semibold mb-2">Connecting Opportunities</h3>
                            <p className="text-black pb-6">
                                We connect students to job fairs around the world and also expose students to entrepreneurship activities globally
                            </p>
                        </div>
                        <div className="bg-[#EFEBEB] p-4 rounded-tl-[50%] rounded-tr-[50%] text-center">
                            <div className="w-full h-auto mb-4">
                                <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1750957982/feshia%20Images/6_dmy3cd.png" alt="Smooth Transition" className="w-full h-full object-cover" draggable="false" />
                            </div>
                            <h3 className="text-xl pt-3 font-semibold mb-2">Smooth Transition</h3>
                            <p className="text-black pb-6">
                                We work with local high schools and University to achieve a clean transition to international Universities and colleges
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhatWeDo;