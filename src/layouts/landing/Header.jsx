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
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({
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

  const toggleMobileDropdown = (key) => {
    setMobileDropdownOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Reset mobile dropdowns when closing menu
    if (isMobileMenuOpen) {
      setMobileDropdownOpen({
        student: false,
        institution: false,
        resources: false,
      });
    }
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
            <Link to="/about" className="text-sm font-medium hover:text-pink-500 transition">About Us</Link>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('student')}
                className="flex items-center gap-1 text-sm font-medium hover:text-pink-500 transition"
              >
                For Student <ChevronDownIcon className="w-4 h-4" />
              </button>
              {dropdownOpen.student && (

                <div className="absolute left-0 mt-2 w-38 bg-white text-black rounded-md shadow-lg z-10">
                  <Link to="/what-we-do" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    What we do
                  </Link>
                  <Link to="/book-appointment" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Book an Appointment
                  </Link>
                  <Link to="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Student Blog
                  </Link>
                </div>

              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('institution')}
                className="flex items-center gap-1 text-sm font-medium hover:text-pink-500 transition"
              >
                For Institution <ChevronDownIcon className="w-4 h-4" />
              </button>
              {dropdownOpen.institution && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
                  <Link to="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Why Feshia
                  </Link>
                  <Link to="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Partner with Feshia
                  </Link>
                  <Link to="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Institution Blog
                  </Link>
                </div>

              )}
            </div>

            <a href="#" className="text-sm font-medium hover:text-pink-500 transition">Events</a>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('resources')}
                className="flex items-center gap-1 text-sm font-medium hover:text-pink-500 transition"
              >
                Resources <ChevronDownIcon className="w-4 h-4" />
              </button>
              {dropdownOpen.resources && (
                <div className="absolute left-0 mt-2 w-28 bg-white text-black rounded-md shadow-lg z-10">
                  <Link to="#" className="block px-4 py-2 text-sm hover:bg-gray-100">FAQs</Link>
                  <Link to="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Our App</Link>
                  <Link to="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Videos</Link>
                </div>

              )}
            </div>
          </div>

          {/* Consultant Button */}
          <div className="hidden md:flex">
            <Link
              to="/consultant"
              className="bg-pink-600 text-white px-4 py-3 rounded-md text-sm font-medium hover:bg-pink-700 transition"
            >
              Talk to a Consultant
            </Link>

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
          <div className="fixed right-0 top-0 w-72 bg-white text-black h-full overflow-y-auto shadow-lg">
            {/* Mobile Menu Header with Logo */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <Link to="/" onClick={toggleMobileMenu}>
                <img
                  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1750848536/feshia%20Images/Frame_1_puzgs4.png"
                  alt="Feshia"
                  className="h-12 w-auto"
                  draggable="false"
                />
              </Link>
              <button onClick={toggleMobileMenu}>
                <XMarkIcon className="h-6 w-6 text-black" />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="p-6 flex flex-col gap-4">
              <a href="#" className="text-gray-800 font-medium py-2 hover:text-pink-600 transition">
                About Us
              </a>

              {/* For Student Dropdown */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown('student')}
                  className="flex items-center justify-between w-full text-gray-800 font-medium py-2 hover:text-pink-600 transition"
                >
                  For Student
                  <ChevronDownIcon className={`w-4 h-4 transition-transform ${mobileDropdownOpen.student ? 'rotate-180' : ''}`} />
                </button>
                {mobileDropdownOpen.student && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    <Link to="/what-we-do" className="text-gray-600 py-1 hover:text-pink-600 transition">
                      What we do
                    </Link>
                    <Link to="/book-appointment" className="text-gray-600 py-1 hover:text-pink-600 transition">
                      Book an Appointment
                    </Link>
                    <Link to="#" className="text-gray-600 py-1 hover:text-pink-600 transition">
                      Student Blog
                    </Link>
                  </div>

                )}
              </div>

              {/* For Institution Dropdown */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown('institution')}
                  className="flex items-center justify-between w-full text-gray-800 font-medium py-2 hover:text-pink-600 transition"
                >
                  For Institution
                  <ChevronDownIcon className={`w-4 h-4 transition-transform ${mobileDropdownOpen.institution ? 'rotate-180' : ''}`} />
                </button>
                {mobileDropdownOpen.institution && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    <Link to="#" className="text-gray-600 py-1 hover:text-pink-600 transition">
                      Why Feshia
                    </Link>
                    <Link to="#" className="text-gray-600 py-1 hover:text-pink-600 transition">
                      Partner with Feshia
                    </Link>
                    <Link to="#" className="text-gray-600 py-1 hover:text-pink-600 transition">
                      Institution Blog
                    </Link>
                  </div>

                )}
              </div>

              <a href="#" className="text-gray-800 font-medium py-2 hover:text-pink-600 transition">
                Events
              </a>

              {/* Resources Dropdown */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown('resources')}
                  className="flex items-center justify-between w-full text-gray-800 font-medium py-2 hover:text-pink-600 transition"
                >
                  Resources
                  <ChevronDownIcon className={`w-4 h-4 transition-transform ${mobileDropdownOpen.resources ? 'rotate-180' : ''}`} />
                </button>
                {mobileDropdownOpen.resources && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    <Link to="#" className="text-gray-600 py-1 hover:text-pink-600 transition">
                      FAQs
                    </Link>
                    <Link to="#" className="text-gray-600 py-1 hover:text-pink-600 transition">
                      Our App
                    </Link>
                    <Link to="#" className="text-gray-600 py-1 hover:text-pink-600 transition">
                      Videos
                    </Link>
                  </div>

                )}
              </div>

              {/* Talk to Consultant Button */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <Link
                  to="/consultant"
                  className="block w-full bg-pink-600 text-white px-4 py-3 rounded-md text-sm font-medium hover:bg-pink-700 transition text-center"
                  onClick={toggleMobileMenu}
                >
                  Talk to a Consultant
                </Link>

              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;