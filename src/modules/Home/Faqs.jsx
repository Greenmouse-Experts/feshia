import React, { useState } from 'react';
import BreadcrumbBanner from './components/BreadcrumbBanner';


const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { question: "Q. How does Feshia work?", answer: "Feshia works by connecting students with educational opportunities and partners to facilitate study abroad processes." },
        { question: "Q. How does Feshia work?", answer: "Feshia provides a platform for seamless application and consultation services for international education." },
        { question: "Q. How does Feshia work?", answer: "Our team assists with visa applications, scholarships, and more to ensure a smooth study abroad experience." },
        { question: "Q. How does Feshia work?", answer: "Feshia offers personalized guidance and support for students aiming to study overseas." },
        { question: "Q. How does Feshia work?", answer: "We collaborate with institutions to provide tailored educational pathways for our clients." },
        { question: "Q. How does Feshia work?", answer: "Feshia streamlines the process of finding and applying for global educational programs." },
    ];

    return (
        <>
        <BreadcrumbBanner
                title="FAQs"
                currentPage="FAQs"
                backgroundImage="https://res.cloudinary.com/greenmouse-tech/image/upload/v1751390134/feshia%20Images/p_jwlqbw.jpg"
            />
            <div className="w-full px-4 section">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-center text-xl font-bold mb-10">Answers to Our Most Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-lg shadow">
                                <button
                                    className="w-full text-left p-4 flex justify-between items-center"
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                >
                                    <span className="font-medium">{faq.question}</span>
                                    <span>{openIndex === index ? '▼' : '▶'}</span>
                                </button>
                                {openIndex === index && (
                                    <div className="p-4 leading-loose text-gray-600">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FAQSection;