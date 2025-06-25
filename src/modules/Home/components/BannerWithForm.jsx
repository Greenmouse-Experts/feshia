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
  const [formOpen, setFormOpen] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[450px] md:h-[750px] overflow-hidden flex">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div

          className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-500"
          style={{
            backgroundImage: `url(${slides[current].image})`, opacity: 1,
            transition: "background-image 0.5s ease-in-out",
          }}
        />
      </AnimatePresence>

      {/* Banner Text and Date */}
      <div className="z-10 p-6 sm:p-10 md:pl-4 lg:pl-24 max-w-3xl text-white self-center">
        <motion.div
          key={slides[current].id}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug"
        >
         {slides[current].text === 'Explore courses that match your career aspirations!' && (
            <>
              <span className="text-white">Explore </span>
              <span className="text-pink-600">courses</span>
              <span className="text-white"> that match your career aspirations!</span>
            </>
          )}
          {slides[current].text === 'Explore countries that match your career aspirations!' && (
            <>
              <span className="text-white">Explore </span>
              <span className="text-pink-600">countries</span>
              <span className="text-white"> that match your career aspirations!</span>
            </>
          )}
          {slides[current].text === 'Explore universities that match your career aspirations!' && (
            <>
              <span className="text-white">Explore </span>
              <span className="text-pink-600">universities</span>
              <span className="text-white"> that match your career aspirations!</span>
            </>
          )}
        </motion.div>
      </div>

      {/* Form Section */}
      <AnimatePresence>
        {formOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5 }}
            className="absolute top-[120px] bottom-[40px] right-35 h-auto rounded-md w-full sm:w-[480px] bg-white z-20 p-6 flex items-center justify-center hidden md:flex"

          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              onClick={() => setFormOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            <div className="w-full max-w-md">
              <h2 className="text-pink-600 text-base font-medium mb-4">
                Please provide your <span className="font-semibold">details to continue using Feshia</span>
              </h2>

              <form className="space-y-3">
                <div>
                  <label className="block text-sm mb-2 font-medium">Full name</label>
                  <input className="w-full p-2 border border-[#CCCCCC] outline-none italic rounded-md" placeholder="Full name" />
                </div>
                <div>
                  <label className="block text-sm mb-2 font-medium">Email</label>
                  <input className="w-full p-2 border border-[#CCCCCC] outline-none italic rounded-md" placeholder="Email" />
                </div>
                <div>
                  <label className="block text-sm mb-2 font-medium">Phone Number</label>
                  <input className="w-full p-2 border border-[#CCCCCC] outline-none italic rounded-md" placeholder="Phone" />
                </div>

                <div>
                  <label className="block text-sm mb-2 font-medium">Preferred Study Destination</label>
                  <select className="w-full p-2 border border-[#CCCCCC] italic outline-none rounded-md">
                    <option>Australia</option>
                    <option>UK</option>
                    <option>USA</option>
                    <option>Canada</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2 font-medium">Preferred Study Year</label>
                  <select className="w-full p-2 border border-[#CCCCCC] italic outline-none rounded-md">
                    <option>2025</option>
                    <option>2024</option>
                    <option>2023</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-3 font-medium">Preferred Intake</label>
                  <select className="w-full p-2 border border-[#CCCCCC] italic outline-none rounded-md">
                    <option>Q1 (Jan-Mar)</option>
                    <option>Q2 (Apr-Jun)</option>
                    <option>Q3 (Jul-Sep)</option>
                    <option>Q4 (Oct-Dec)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="bg-pink-600 hover:bg-pink-700 w-full py-2 rounded text-white font-semibold mt-3"
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