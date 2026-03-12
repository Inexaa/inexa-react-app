import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop/index";
import ScrollTopIcon from "./Components/ScrollTopIcon";
import CourseDetail from "./Pages/CourseDetail";
import CertificateDetail from "./Pages/CertificateDetail";
import CourseOnline from "./Pages/CourseOnline";
import TutorProfile from "./Pages/TutorProfile";
import PaidVersionCourse from "./Pages/PaidVersionCourse";
import OnlineCertificates from "./Pages/OnlineCertificates";
import PurchaseNow from "./Pages/PurchaseNow";
import AccountSetting from "./Pages/AccountSetting";
import UserVerification from "./Pages/Userverification";
import CourseAccess from "./Pages/CourseAccess";
import Courses2 from "./Pages/Courses2";
import ResetPassword from "./Pages/ResetPassword";
import VerifyEmail from "./Pages/VerifyEmail";
import { ToastContainer, toast } from 'react-toastify';

import "./App.css";
import "./assets/common.css";
import "aos/dist/aos.css";  // Import AOS styles
import AOS from "aos";        // Import AOS library
import { useEffect } from "react";
import ChatUs from "./Components/ChatUs";
import ComingSoon from "./Components/ComingSoon";
import StripeProvider from "./StripeProvider";
import Checkout from "./Pages/Checkout";
import { UserProvider } from "./UserContext";

function App() {

  // Animation Heading
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  // End Animation Heading
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/course/:courseId" element={<CourseDetail />} />
            <Route path="/certificate-detail" element={<CertificateDetail />} />
            <Route path="/online-courses" element={<CourseOnline />} />
            <Route path="/tutor-profile" element={<TutorProfile />} />
            <Route path="/paid-courses" element={<PaidVersionCourse />} />
            <Route path="/online-certificates" element={<OnlineCertificates />} />
            <Route path="/purchase-now" element={<PurchaseNow />} />
            <Route path="/account-setting" element={<AccountSetting />} />
            <Route path="/user-verification" element={<UserVerification />} />
            <Route path="/access-this-course" element={<CourseAccess />} />
            <Route path="/courses" element={<Courses2 />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route
              path="/checkout"
              element={
                <StripeProvider>
                  <Checkout />
                </StripeProvider>
              }
            />
          </Routes>
        </BrowserRouter>
        <ScrollTopIcon />
      </UserProvider>
    </>
  );
}

export default App;
