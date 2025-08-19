
// import React from 'react';
// import { Link } from 'react-router-dom';

// const ForgotPassword = ({ switchToSignIn, closeModals}) => {
  
//   return (
//       <div className="forgot-password-container max-h-[90vh] overflow-auto px-6 pb-8 pt-8 mx-4 w-full md:w-max max-w-full sm:min-w-[548px]  rounded-30 sm:rounded-50 drop-down-gradient-2 text-white">
//         <div className="close-popup-icon md:hidden flex text-4xl absolute right-3 top-1 bg-blackColor2 size-7 items-center justify-center rounded-full cursor-pointer shadow-lg" onClick={closeModals}>
//           &times;</div>
//         <div className="forgot-password-content">
//           <div className="forgot-password-heading text-center pb-[50px] ">
//             <h4 className="text-2xl xs:text-3xl font-semibold leading-10 text-white mb-5">Forgot password </h4>
//             <p className="max-w-[370px] mx-auto leading-[30px]"> Enter the email address you use on Inexa. We'll send you a link to reset your password. </p>
//           </div>
//           <form action="#" className="sign-up-fields flex flex-col gap-4 sm:w-[329px] mx-auto">
//             <div className="input-item">
//               <label className="log-label-white" htmlFor="email">Email address</label>
//               <input className="log-input-item rounded-full" type="email" name="email-address" id="email" placeholder="Enter your email address" />
//             </div>
//             <div className="input-item">
//               <input className="log-btn-blue w-full mt-3" type="submit" value="Join for Free" />
//             </div>
//             <div className="exist-accnt text-center mt-5">
//               <p className=""> Back to <Link className=" font-medium underline" to="#" onClick={switchToSignIn}> Log in</Link></p>
//             </div>
//           </form>
//         </div>
//       </div>
//   );
// };

// export default ForgotPassword;

import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from '../../../api/axiosInstance';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = ({ switchToSignIn, closeModals }) => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
  });

  // Initial form values
  const initialValues = {
    email: '',
  };

  // Form submission handler
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // API call using axios
    axios.post('/api/forgot-password', { email: values.email })
      .then(response => {
        // Success notification
        toast.success('Password reset link sent to your email!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        resetForm();
      })
      .catch(error => {
        // Error notification
        toast.error(error.response?.data?.message || 'Failed to send reset link. Please try again.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <>
      <div className="forgot-password-container max-h-[90vh] overflow-auto px-6 pb-8 pt-8 mx-4 w-full md:w-max max-w-full sm:min-w-[548px] rounded-30 sm:rounded-50 drop-down-gradient-2 text-white">
      {/* Toast Container for notifications */}
      <ToastContainer />
            
      <div 
        className="close-popup-icon md:hidden flex text-4xl absolute right-3 top-1 bg-blackColor2 size-7 items-center justify-center rounded-full cursor-pointer shadow-lg" 
        onClick={closeModals}
      >
        &times;
      </div>
      
      <div className="forgot-password-content">
        <div className="forgot-password-heading text-center pb-[50px]">
          <h4 className="text-2xl xs:text-3xl font-semibold leading-10 text-white mb-5">
            Forgot password
          </h4>
          <p className="max-w-[370px] mx-auto leading-[30px]">
            Enter the email address you use on Inexa. We'll send you a link to reset your password.
          </p>
        </div>
        
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="sign-up-fields flex flex-col gap-4 sm:w-[329px] mx-auto">
              <div className="input-item">
                <label className="log-label-white" htmlFor="email">
                  Email address
                </label>
                <Field
                  className="log-input-item rounded-full"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              
              <div className="input-item">
                <button
                  className="log-btn-blue w-full mt-3"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Reset Password'}
                </button>
              </div>
              
              <div className="exist-accnt text-center mt-5">
                <p className="">
                  Back to{' '}
                  <Link
                    className="font-medium underline"
                    to="#"
                    onClick={switchToSignIn}
                  >
                    Log in
                  </Link>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
    </>
  );
};

export default ForgotPassword;