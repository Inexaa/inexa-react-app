import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiEyeOff } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa6";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "../../../api/axiosInstance";
import SentEmail from "../SentEmail";
import { toast } from "react-toastify";

const SignUp = ({ switchToSignIn, closeModals }) => {
  
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [sentEmail, setSentEmail] = useState(false);
  
  const handlePasswordType = () => {
    setPasswordVisible(!passwordVisible);
  };
  // Define validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });
  // Initial form values
  const initialValues = {
    email: "",
  };
  // Form submission handler
  const handleSubmit = async (values, { setSubmitting, setStatus }) => {
    try {
      const response = await axios.post('/auth/signup', {
        email: values.email
      });
     
      if (response.status) {
        localStorage.setItem("email", values.email);
        toast.success(response.message)
        setSentEmail(true);
      }else{
        console.log(response) ;
        toast.error(response.message)
      }
    } catch (error) {
      console.log(error, "error");
      setStatus({ error: "Signup failed. Please try again." });
      toast.error(error.message)
    }
    setSubmitting(false);
  };
  return (
    <>
     {!sentEmail && 
      <div className="signup-container h-[90vh] overflow-auto px-6 pb-8 pt-8 mx-4 w-full md:w-max max-w-full sm:min-w-[548px] rounded-30 sm:rounded-50 drop-down-gradient-2 text-white">
        <div className="close-popup-icon md:hidden flex text-4xl absolute right-3 top-1 bg-blackColor2 size-7 items-center justify-center rounded-full cursor-pointer shadow-lg" onClick={closeModals}>
          &times;
        </div>
        <div className="signup-content">
          <div className="sign-up-heading text-center text-white pb-[50px]">
            <h4 className="text-2xl xs:text-[32px] font-semibold leading-10 text-white mb-5">Sign up</h4>
            <p className="max-w-[350px] mx-auto leading-[30px]">Start your learning journey with Inexa from top universities and businesses.</p>
          </div>
         
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, status }) => (
              <Form className="sign-up-fields flex flex-col gap-4 sm:w-[329px] mx-auto">
                <div className="input-item">
                  <label className="log-label-white" htmlFor="email">Email address</label>
                  <Field
                    className="log-input-item"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email address"
                  />
                  <ErrorMessage name="email" component="p" className="text-red-400" />
                </div>
               
                {status && status.error && (
                  <div className="text-red-400">{status.error}</div>
                )}
                <div className="divider mx-auto flex items-center justify-center gap-4 my-7 w-full md:w-[360px]">
                  <div className="line w-full h-[1px] bg-[#CBCAD7]"></div>
                  <span className="font-medium text-lg">or</span>
                  <div className="line w-full h-[1px] bg-[#CBCAD7]"></div>
                </div>
               
                <div className="log-opts grid postXs:grid-cols-2 gap-4 w-full sm:w-[360px] mx-auto">
                  <Link className="log-btn-white flex items-center lg:justify-between" to="https://www.google.com">
                    <img className="w-[18px]" src="/images/Google_1new.svg" alt="image" />
                    Continue with Google
                  </Link>
                  <Link className="log-btn-white flex items-center lg:justify-between" to="https://www.google.com">
                    <img className="w-[18px]" src="/images/Apple_1new.svg" alt="image" />
                    Continue with Apple
                  </Link>
                  <Link className="log-btn-white flex items-center lg:justify-between" to="https://www.google.com">
                    <img className="w-[18px]" src="/images/MICROSOFT-1.svg" alt="image" />
                    Continue with Microsoft
                  </Link>
                  <Link className="log-btn-white flex items-center lg:justify-between" to="https://www.google.com">
                    <img className="w-[18px]" src="/images/facebook_1.svg" alt="image" />
                    Continue with Facebook
                  </Link>
                </div>
               
                <div className="input-item">
                  <button
                    className="btn-blue w-full mt-6 font-Montserrat font-semibold text-[20px]"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Signing up..." : "Sign up"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
         
          <div className="other-log-opts">
            <div className="exist-accnt text-center pb-5 mt-12">
              <p className="text-white font-normal">
                Already on Inexa? <Link className="white-link font-medium underline" to="#" onClick={switchToSignIn}> Log in </Link>
              </p>
            </div>
            <div className="w-full sm:w-[424px] h-[1px] bg-[#CBCAD7] mx-auto"></div>
            <p className="text-white text-center mt-10">
              I Accept Inexa's <Link className="white-link underline px-1 font-medium" to="/about-us"> Terms of Use </Link> and
              <Link className="white-link underline px-1 font-medium" to="/about-us"> Privacy Notice </Link>
            </p>
          </div>
        </div>
      </div>}
     
      {/* SentEmailPopup */}
      {sentEmail && (
        <SentEmail />
      )}
    </>
  );
};
export default SignUp;

