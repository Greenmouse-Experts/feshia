import LandingLayout from "../layouts/landing";
import LandingHomepage from "../modules/Home";
import AboutUs from "../modules/Home/About";
import ConsultationForm from "../modules/Home/Consultant";
import WhatWeDo from "../modules/Home/WhatWeDo";
import BookAnApppointment from "../modules/Home/BookApppointment";
import StudentAnBlog from "../modules/Home/StudentBlog";
import Partners from "../modules/Home/Partner";
import Events from "../modules/Home/Event";
import FAQs from "../modules/Home/Faqs";
import Institution from "../modules/Home/Program";
import WhyFestia from "../modules/Home/WhyFeshia";
import UniversitySearch from "../modules/Home/University";

export const landingRooutes = [
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        index: true,
        element: <LandingHomepage />,
      },
      {
        path: 'about',
        element: <AboutUs />,
      },
      {
        path: 'consultant',
        element: <ConsultationForm />,
      },
      {
        path: 'what-we-do',
        element: <WhatWeDo />,
      },
      {
        path: 'book-appointment',
        element: <BookAnApppointment />,
      },
      {
        path: 'student-blog',
        element: <StudentAnBlog />,
      },
      {
        path: 'partners',
        element: <Partners />,
      },
      {
        path: 'events',
        element: <Events />,
      },
      {
        path: 'faqs',
        element: <FAQs />,
      },
      {
        path: 'institution',
        element: <Institution />,
      },
      {
        path: 'why-feshia',
        element: <WhyFestia />,
      },
      {
        path: 'university-search',
        element: <UniversitySearch />,
      },
    ],
  },
];
