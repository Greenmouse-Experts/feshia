import React, { useState, useEffect, useRef } from 'react';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    student: false,
    institution: false,
    resources: false,
    about: false,
  });
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({
    student: false,
    institution: false,
    resources: false,
    about: false,
  });

  // Refs for dropdown elements
  const studentRef = useRef(null);
  const institutionRef = useRef(null);
  const resourcesRef = useRef(null);
  const aboutRef = useRef(null);
  const mobileStudentRef = useRef(null);
  const mobileAboutRef = useRef(null);
  const mobileInstitutionRef = useRef(null);
  const mobileResourcesRef = useRef(null);

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
        about: false,
      });
    }
  };

  // Handle click outside dropdowns to close them
  useEffect(() => {
    function handleClickOutside(event) {
      if (studentRef.current && !studentRef.current.contains(event.target)) {
        setDropdownOpen((prev) => ({ ...prev, student: false }));
      }
      if (institutionRef.current && !institutionRef.current.contains(event.target)) {
        setDropdownOpen((prev) => ({ ...prev, institution: false }));
      }
      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setDropdownOpen((prev) => ({ ...prev, about: false }));
      }
      if (resourcesRef.current && !resourcesRef.current.contains(event.target)) {
        setDropdownOpen((prev) => ({ ...prev, resources: false }));
      }
      if (mobileStudentRef.current && !mobileStudentRef.current.contains(event.target)) {
        setMobileDropdownOpen((prev) => ({ ...prev, student: false }));
      }
      if (mobileAboutRef.current && !mobileAboutRef.current.contains(event.target)) {
        setMobileDropdownOpen((prev) => ({ ...prev, about: false }));
      }
      if (mobileInstitutionRef.current && !mobileInstitutionRef.current.contains(event.target)) {
        setMobileDropdownOpen((prev) => ({ ...prev, institution: false }));
      }
      if (mobileResourcesRef.current && !mobileResourcesRef.current.contains(event.target)) {
        setMobileDropdownOpen((prev) => ({ ...prev, resources: false }));
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky z-50">
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
          <div className="hidden lg:flex items-center md:space-x-8 md:px-8 py-4 rounded-md bg-black/50 text-white">
            <div className="relative" ref={aboutRef}>
              <button
                onClick={() => toggleDropdown('about')}
                className="flex items-center gap-1 text-sm font-medium hover:text-pink-500 transition"
              >
                About Us <ChevronDownIcon className="w-4 h-4" />
              </button>
              {dropdownOpen.about && (
                <div className="absolute left-0 mt-2 w-44 bg-white text-black rounded-md shadow-lg z-10">
                  <Link to="/about" className="block px-4 py-2 text-sm hover:bg-gray-100">Our Story</Link>
                  <Link to="/what-we-do" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    What we do
                  </Link>
                  <Link to="/why-feshia" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Why Feshia
                  </Link>
                </div>
              )}
            </div>


            <div className="relative" ref={studentRef}>
              <button
                onClick={() => toggleDropdown('student')}
                className="flex items-center gap-1 text-sm font-medium hover:text-pink-500 transition"
              >
                For Student <ChevronDownIcon className="w-4 h-4" />
              </button>
              {dropdownOpen.student && (
                <div className="absolute left-0 mt-2 w-38 bg-white text-black rounded-md shadow-lg z-10">
                  <Link to="/book-appointment" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Book an Appointment
                  </Link>
                  <Link to="/student-blog" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Student Blog
                  </Link>
                </div>
              )}
            </div>

            <div className="relative" ref={institutionRef}>
              <button
                onClick={() => toggleDropdown('institution')}
                className="flex items-center gap-1 text-sm font-medium hover:text-pink-500 transition"
              >
                For Institution <ChevronDownIcon className="w-4 h-4" />
              </button>
              {dropdownOpen.institution && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
                  <Link to="/partners" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Partner with Feshia
                  </Link>
                  <Link to="/institution" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Institution Blog
                  </Link>
                  <Link to="/university-search" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    University Search
                  </Link>
                </div>
              )}
            </div>

            <Link to="/events" className="text-sm font-medium hover:text-pink-500 transition">Events</Link>

            <div className="relative" ref={resourcesRef}>
              <button
                onClick={() => toggleDropdown('resources')}
                className="flex items-center gap-1 text-sm font-medium hover:text-pink-500 transition"
              >
                Resources <ChevronDownIcon className="w-4 h-4" />
              </button>
              {dropdownOpen.resources && (
                <div className="absolute left-0 mt-2 w-28 bg-white text-black rounded-md shadow-lg z-10">
                  <Link to="/faqs" className="block px-4 py-2 text-sm hover:bg-gray-100">FAQs</Link>
                  {/* <Link to="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Our App</Link>
                  <Link to="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Videos</Link> */}
                </div>
              )}
            </div>
          </div>

          {/* Consultant Button */}
          <div className="hidden lg:flex">
            <Link
              to="/consultant"
              className="bg-pink-600 text-white px-4 py-3 rounded-md text-sm font-medium hover:bg-pink-700 transition"
            >
              Talk to a Consultant
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="bg-[#ED268F] text-white py-2 px-2 rounded-full flex items-center gap-2"
            >
              {isMobileMenuOpen ? (
                // Close icon (XMarkIcon or any SVG you prefer)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Your custom hamburger SVG
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-7 h-7 stroke-black"
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
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
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                <img
                  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1750848536/feshia%20Images/Frame_1_puzgs4.png"
                  alt="Feshia"
                  className="h-12 w-auto"
                  draggable="false"
                />
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <XMarkIcon className="h-6 w-6 text-black" />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="p-6 flex flex-col gap-4">
              {/* <a href="#" className="text-gray-800 font-medium py-2 hover:text-pink-600 transition" onClick={() => setIsMobileMenuOpen(false)}>
                About Us
              </a> */}

              {/* For  About Us Dropdown */}
              <div ref={mobileAboutRef}>
                <button
                  onClick={() => toggleMobileDropdown('about')}
                  className="flex items-center justify-between w-full text-black font-medium py-2 hover:text-pink-600 transition"
                >
                  About Us
                  <ChevronDownIcon className={`w-4 h-4 transition-transform ${mobileDropdownOpen.about ? 'rotate-180' : ''}`} />
                </button>
                {mobileDropdownOpen.about && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    <Link to="/about" className="text-black py-1 hover:text-pink-600 transition" onClick={() => setIsMobileMenuOpen(false)}>
                      Our Story
                    </Link>
                    <Link to="/what-we-do" className="text-black py-1 hover:text-pink-600 transition" onClick={() => setIsMobileMenuOpen(false)}>
                      What we do
                    </Link>
                    <Link to="/why-feshia" className="text-black py-1 hover:text-pink-600 transition" onClick={() => setIsMobileMenuOpen(false)}>
                      Why Feshia
                    </Link>
                  </div>
                )}
              </div>

              {/* For Student Dropdown */}
              <div ref={mobileStudentRef}>
                <button
                  onClick={() => toggleMobileDropdown('student')}
                  className="flex items-center justify-between w-full text-black font-medium py-2 hover:text-pink-600 transition"
                >
                  For Student
                  <ChevronDownIcon className={`w-4 h-4 transition-transform ${mobileDropdownOpen.student ? 'rotate-180' : ''}`} />
                </button>
                {mobileDropdownOpen.student && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    <Link to="/book-appointment" className="text-black py-1 hover:text-pink-600 transition" onClick={() => setIsMobileMenuOpen(false)}>
                      Book an Appointment
                    </Link>
                    <Link to="/student-blog" className="text-black py-1 hover:text-pink-600 transition" onClick={() => setIsMobileMenuOpen(false)}>
                      Student Blog
                    </Link>
                  </div>
                )}
              </div>

              {/* For Institution Dropdown */}
              <div ref={mobileInstitutionRef}>
                <button
                  onClick={() => toggleMobileDropdown('institution')}
                  className="flex items-center justify-between w-full text-black font-medium py-2 hover:text-pink-600 transition"
                >
                  For Institution
                  <ChevronDownIcon className={`w-4 h-4 transition-transform ${mobileDropdownOpen.institution ? 'rotate-180' : ''}`} />
                </button>
                {mobileDropdownOpen.institution && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">

                    <Link to="#" className="text-black py-1 hover:text-pink-600 transition" onClick={() => setIsMobileMenuOpen(false)}>
                      Partner with Feshia
                    </Link>
                    <Link to="/institution" className="text-black py-1 hover:text-pink-600 transition" onClick={() => setIsMobileMenuOpen(false)}>
                      Institution Blog
                    </Link>
                    <Link to="/university-search" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    University Search
                  </Link>
                  </div>
                )}
              </div>

              <Link to="/events" className="text-black font-medium py-2 hover:text-pink-600 transition">Events</Link>
             

              {/* Resources Dropdown */}
              <div ref={mobileResourcesRef}>
                <button
                  onClick={() => toggleMobileDropdown('resources')}
                  className="flex items-center justify-between w-full text-black font-medium py-2 hover:text-pink-600 transition"
                >
                  Resources
                  <ChevronDownIcon className={`w-4 h-4 transition-transform ${mobileDropdownOpen.resources ? 'rotate-180' : ''}`} />
                </button>
                {mobileDropdownOpen.resources && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    <Link to="/faqs" className="text-black py-1 hover:text-pink-600 transition" onClick={() => setIsMobileMenuOpen(false)}>
                      FAQs
                    </Link>
                    <Link to="#" className="text-black py-1 hover:text-pink-600 transition" onClick={() => setIsMobileMenuOpen(false)}>
                      Our App
                    </Link>
                    <Link to="#" className="text-black py-1 hover:text-pink-600 transition" onClick={() => setIsMobileMenuOpen(false)}>
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
                  onClick={() => setIsMobileMenuOpen(false)}
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