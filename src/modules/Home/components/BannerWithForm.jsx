import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const slides = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1750798783/feshia%20Images/f485edaabae2d8781953e293e65c57b7_u0fjuq.png',
    text: 'Explore courses that match your career aspirations!',
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1750798784/feshia%20Images/e_phuaht.png',
    text: 'Explore countries that match your career aspirations!',
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1750798784/feshia%20Images/ee_xqsqvy.png',
    text: 'Explore universities that match your career aspirations!',
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const [formOpen, setFormOpen] = useState(false);
  const [formShownOnce, setFormShownOnce] = useState(false);

  // Slide rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Show form after 3 minutes (180,000 ms)
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!formShownOnce) {
        setFormOpen(true);
        setFormShownOnce(true);
      }
    }, 180000); // 3 minutes

    return () => clearTimeout(timeout);
  }, [formShownOnce]);

  // Show form on exit intent
  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY < 50 && !formShownOnce) {
        setFormOpen(true);
        setFormShownOnce(true);
      }
    };
    document.addEventListener('mouseout', handleMouseLeave);
    return () => document.removeEventListener('mouseout', handleMouseLeave);
  }, [formShownOnce]);

  return (
    <div className="relative w-full h-[450px] -mt-20 lg:h-[700px] md:h-[470px] overflow-hidden flex">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${slides[current].image})`,
            opacity: 1,
            transition: 'background-image 0.5s ease-in-out',
          }}
        />
      </AnimatePresence>

      {/* Banner Text */}
      <div className="z-10 p-6 sm:p-10 md:pl-28 xl:pl-35 md:max-w-[58%] max-w-[100%] text-white self-center">
        <motion.div
          key={slides[current].id}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl lg:text-5xl  font-bold leading-snug"
        >
          {slides[current].text.includes('courses') && (
            <>
              <span className="text-white">Explore </span>
              <span className="text-pink-600">courses</span>
              <span className="text-white"> that match your career aspirations!</span>
            </>
          )}
          {slides[current].text.includes('countries') && (
            <>
              <span className="text-white">Explore </span>
              <span className="text-pink-600">countries</span>
              <span className="text-white"> that match your career aspirations!</span>
            </>
          )}
          {slides[current].text.includes('universities') && (
            <>
              <span className="text-white">Explore </span>
              <span className="text-pink-600">universities</span>
              <span className="text-white"> that match your career aspirations!</span>
            </>
          )}
        </motion.div>
      </div>

      {/* Form */}
      <AnimatePresence>
        {formOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5 }}
            className="absolute top-[100px] bottom-[30px] right-35 h-auto rounded-md w-full sm:w-[450px] bg-white z-20 flex items-center justify-center hidden md:flex overflow-hidden"
          >
            {/* Pink Header */}
            <div className="absolute top-0 left-0 right-0 bg-pink-500 text-white px-6 py-3 flex items-center justify-between">
              <h2 className="text-lg font-medium">Fill the Form</h2>
              {/* Close Button */}
              <button
                className="text-black hover:text-gray-200 bg-white bg-opacity-20 rounded-full p-1"
                onClick={() => setFormOpen(false)}
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Form Content */}
            <div className="w-full max-w-md pt-20 pb-6 px-6">
              <p className="text-gray-700 text-sm mb-4">
                Please provide your details to continue using Feshia
              </p>

              <form className="space-y-2">
                <div>
                  <label className="block text-sm mb-2 font-medium text-gray-700">Full Name</label>
                  <input
                    className="w-full p-2 border-1 border-pink-400 outline-none rounded-md placeholder-gray-400"
                    placeholder="Enter Your Name"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 font-medium text-gray-700">Email</label>
                  <input
                    className="w-full p-2 border-1 border-pink-400 outline-none rounded-md placeholder-gray-400"
                    placeholder="Enter Your Email"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 font-medium text-gray-700">Phone</label>
                  <input
                    className="w-full p-2 border-1 border-pink-400 outline-none rounded-md placeholder-gray-400"
                    placeholder=""
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 font-medium text-gray-700">Preferred Study Destination</label>
                  <input
                    className="w-full p-2 border-1 border-pink-400 outline-none rounded-md placeholder-gray-400"
                    placeholder="Q1(Jan-Mar)"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2 font-medium text-gray-700">Preferred study Year</label>
                    <input
                      className="w-full p-2 border-1 border-pink-400 outline-none rounded-md placeholder-gray-400"
                      placeholder="2025"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 font-medium text-gray-700">Preferred study Year</label>
                    <input
                      className="w-full p-2 border-1 border-pink-400 outline-none rounded-md placeholder-gray-400"
                      placeholder="Q1(Jan-Mar)"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-pink-500 hover:bg-pink-600 w-full py-2 rounded-md text-white font-medium mt-4"
                >
                  Submit
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Banner;
