import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiEyeOff } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa6";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "../../../api/axiosInstance";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = ({ switchToSignUp, switchToForgotPassword, closeModals }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loginError, setLoginError] = useState("");

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Define validation schema with Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email")
      .required("Email address is required"),
    password: Yup.string()
      .min(4, "Min 4 chars")
      .required("Password is required")
  });

  // Initial form values
  const initialValues = {
    email: "",
    password: ""
  };

  // Form submission handler
  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const response = await axios.post('/auth/signin', {
        email: values.email,
        password: values.password
      });
      
      // Check if response has status code 200
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        toast.success(response.data.message || "Login successful!");
        // You can add redirect logic here
      } else {
        toast.error(response.data.message || "Login failed", {
          className: 'toast-error-border'
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoginError("Login failed. Please check your credentials.");
      
      // Get error message from response if available
      const errorMessage = error.response?.data?.message || "Login failed. Check credentials.";
      toast.error(errorMessage, {
        className: 'toast-error-border'
      });
      
      setFieldError("email", " "); // Trigger field error styling without message
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
    <div className="signin-container max-h-[90vh] overflow-auto px-6 pb-8 pt-8 mx-4 w-full md:w-max max-w-full sm:min-w-[548px] rounded-30 sm:rounded-50 drop-down-gradient-2 text-white">
      <div className="close-popup-icon md:hidden flex text-4xl absolute right-3 top-1 bg-blackColor2 size-7 items-center justify-center rounded-full cursor-pointer shadow-lg" onClick={closeModals}>
        &times;
      </div>
      <div className="signin-content">
        <div className="signin-heading text-center pb-[50px] ">
          <h4 className="text-2xl xs:text-3xl font-semibold leading-10 text-white mb-5">Welcome back</h4>
          <p className="max-w-[350px] mx-auto leading-[30px]">Start your learning journey with Inexa from top universities and businesses.</p>
        </div>
        
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="sign-up-fields flex flex-col gap-4 sm:w-[329px] mx-auto">
              {loginError && (
                <div className="bg-red-500 bg-opacity-20 p-2 rounded text-red-400 text-sm text-center">
                  {loginError}
                </div>
              )}
              
              <div className="input-item">
                <label className="log-label-white" htmlFor="email">Email address</label>
                <Field
                  className={`log-input-item ${errors.email && touched.email ? "border-red-500" : ""}`}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                />
                <ErrorMessage name="email" component="p" className="text-red-400 text-sm mt-1" />
              </div>
              
              <div className="input-item">
                <label className="log-label-white" htmlFor="password">Password</label>
                <div className="relative">
                  <Field
                    className={`log-input-item ${errors.password && touched.password ? "border-red-500" : ""}`}
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                  />
                  <div className="absolute text-white right-4 top-1/2 -translate-y-1/2 cursor-pointer" onClick={togglePassword}>
                    {passwordVisible ? <FaRegEye /> : <FiEyeOff />}
                  </div>
                </div>
                <ErrorMessage name="password" component="p" className="text-red-400 text-sm mt-1" />
              </div>
              
              <Link className="capitalize underline flex justify-center xs:justify-end" to="#" onClick={switchToForgotPassword}>
                forgot password?
              </Link>
              
              <div className="input-item">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-blue w-full mt-6 cursor-pointer font-Montserrat font-semibold text-[20px]"
                >
                  {isSubmitting ? "Logging in..." : "Log in"}
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <div className="other-log-opts">
          <div className="divider mx-auto flex items-center justify-center gap-4 my-7 w-full sm:w-[360px]">
            <div className="line w-full h-[1px] bg-[#cbcad7]"></div>
            <span className="font-medium text-lg">or</span>
            <div className="line w-full h-[1px] bg-[#cbcad7]"></div>
          </div>
          <div className="log-opts grid postXs:grid-cols-2 gap-4 w-full sm:w-[360px] mx-auto">
            <Link className="log-btn-white flex items-center lg:justify-between" to="https://www.google.com">
              <img className="w-[18px]" src="/images/Google_1.svg" alt="image" />
              Continue with Google
            </Link>
            <Link className="log-btn-white flex items-center lg:justify-between" to="https://www.google.com">
              <img className="w-[18px]" src="/images/Apple_1.svg" alt="image" />
              Continue with Apple
            </Link>
            <Link className="log-btn-white flex items-center lg:justify-between" to="https://www.google.com">
              <img className="w-[18px]" src="images/MICROSOFT-1.svg" alt="image" />
              Continue with Microsoft
            </Link>
            <Link className="log-btn-white flex items-center lg:justify-between" to="https://www.google.com">
              <img className="w-[18px]" src="/images/facebook_1.svg" alt="image" />
              Continue with Facebook
            </Link>
          </div>
          <div className="exist-accnt text-center mt-10">
            <p className="">
              New on Inexa?
              <Link className="font-medium underline" to="" onClick={switchToSignUp}> Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignIn;