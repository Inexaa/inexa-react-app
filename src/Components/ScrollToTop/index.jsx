import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    if (sessionStorage.getItem("isPageReloaded")) {
      sessionStorage.removeItem("isPageReloaded");
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [location]);

  useEffect(() => {
    sessionStorage.setItem("isPageReloaded", "true");
  }, []);

  return null;
};

export default ScrollToTop;

// ================================================


// import { useEffect, useRef } from 'react';
// import { useLocation } from 'react-router-dom';

// const ScrollToTop = () => {
//   const { pathname } = useLocation();
//   const isFirstLoad = useRef(true);

//   useEffect(() => {
//     if (isFirstLoad.current) {
//       // Skip scrolling on first page load (e.g. refresh)
//       isFirstLoad.current = false;
//       return;
//     }

//     // Smooth scroll to top on route change (not on refresh)
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   }, [pathname]);

//   return null;
// };

// export default ScrollToTop;
