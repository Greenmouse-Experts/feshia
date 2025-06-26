import LandingLayout from "../layouts/landing";
import LandingHomepage from "../modules/Home";
import AboutUs from "../modules/Home/About";
import ConsultationForm from "../modules/Home/Consultant";
import WhatWeDo from "../modules/Home/WhatWeDo";
import BookAnApppointment from "../modules/Home/BookApppointment";
import StudentAnBlog from "../modules/Home/StudentBlog";
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
    ],
  },
];
