import React, { useState } from 'react';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    student: false,
    institution: false,
    resources: false,
  });

  const toggleDropdown = (key) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky z-50 ">
      <div className="Resizer">
        <div className="sm:px-6 flex items-center justify-between h-16 py-10 relative">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1750848536/feshia%20Images/Frame_1_puzgs4.png"
                alt="Feshia"
                className="h-16 w-auto"
                draggable="false"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center  md:space-x-8 xl:px-8 md:px-8 py-4 rounded-md bg-black/50 text-white xl:ml-24">
            <a href="#" className="text-sm font-medium hover:text-pink-500 transition">About Us</a>

            <div className="relative">
              <button onClick={() => toggleDropdown('student')} className="flex items-center gap-1 text-sm font-medium hover:text-pink-500 transition">
                For Student <ChevronDownIcon className="w-4 h-4" />
              </button>
              {dropdownOpen.student && (
                <div className="absolute left-0 mt-2 w-38 bg-white text-black rounded-md shadow-lg z-10">
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">What we do</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Book an Appointment</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Student Blog</a>
                </div>
              )}
            </div>

            <div className="relative">
              <button onClick={() => toggleDropdown('institution')} className="flex items-center gap-1 text-sm font-medium hover:text-pink-500 transition">
                For Institution <ChevronDownIcon className="w-4 h-4" />
              </button>
              {dropdownOpen.institution && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Why Feshia</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Partner with Feshia</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Institution Blog</a>
                </div>
              )}
            </div>

            <a href="#" className="text-sm font-medium hover:text-pink-500 transition">Events</a>

            <div className="relative">
              <button onClick={() => toggleDropdown('resources')} className="flex items-center gap-1 text-sm font-medium hover:text-pink-500 transition">
                Resources <ChevronDownIcon className="w-4 h-4" />
              </button>
              {dropdownOpen.resources && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Option 1</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Option 2</a>
                </div>
              )}
            </div>
          </div>

          {/* Consultant Button */}
          <div className="hidden md:flex">
            <a
              href="#"
              className="bg-pink-600 text-white px-4 py-3 rounded-md text-sm font-medium hover:bg-pink-700 transition"
            >
              Talk to a Consultant
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-pink-600 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              {isMobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 backdrop-blur-sm">
          <div className="fixed right-0 top-0 w-72 bg-white text-black h-full p-6 overflow-y-auto">
            <button onClick={toggleMobileMenu} className="absolute top-4 right-4">
              <XMarkIcon className="h-6 w-6 text-black" />
            </button>
            <div className="mt-12 flex flex-col gap-4">
              <a href="#">About Us</a>
              <a href="#">For Student</a>
              <a href="#">For Institution</a>
              <a href="#">Events</a>
              <a href="#">Resources</a>
              <a href="#" className="text-pink-600 font-semibold">Talk to a Consultant</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
