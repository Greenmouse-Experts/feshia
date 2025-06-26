import BreadcrumbBanner from './components/BreadcrumbBanner';

const AboutUs = () => {
    return (
        <>
            <BreadcrumbBanner
                title="ABOUT US"
                currentPage="About Us"
                backgroundImage="https://res.cloudinary.com/greenmouse-tech/image/upload/v1750951745/feshia%20Images/download_zilecf.jpg"
            />
            <div className="bg-white section">
                <div className="flex flex-col md:flex-row items-center lg:pl-28 px-4">
                    <div className="md:w-2/3 pr-8">
                    <h2 className="text-3xl font-bold text-black mb-4">LEARN ABOUT US</h2>
                        <p className="text-black mb-2 leading-loose">
                            Feshia is simply an international education and information hub, driven by modern
                            technology. We understand the importance of international education and the
                            difficulties many potential international students face on a daily basis - in their
                            respective countries; The step-by-step application process to any University and
                            College around the world, the student visa application processes vis-a-vis the
                            immigration policy of any country, career guide, global education fairs, the transition
                            from local schools to international schools, all of these are what Feshia is providing
                            effortlessly.
                        </p>
                        <p className="text-black leading-loose mb-2">
                            Feshia stands as a linkage between potential international students and their choice
                            global Universities/Colleges. The hub guides and register students for international
                            examinations; Pearson - PTE and NCLEX.
                        </p>
                        <p className="text-black leading-loose">
                            In concise, Feshia is a one stop shop for potential international students across Africa
                            and the world at large.
                        </p>
                    </div>
                    <div className="md:w-1/3 mt-4 md:mt-0">
                        <div className="relative">
                            <div className="">
                                <img
                                    src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1750953830/feshia%20Images/Group_1171275362_1_xttfjo.png"
                                    alt="Students"
                                    className="w-auto h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;

