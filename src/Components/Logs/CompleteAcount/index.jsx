import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import { FiEyeOff } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa6";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import "./completeAccount.css" ;

const CompleteAccount = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Define validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required')
  });

  // Initial form values
  const initialValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    password: ''
  };

  // Handle form submission
  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    console.log('Form values:', values);
    // Add your API call or other submission logic here
    setTimeout(() => {
      setSubmitting(false);
      // resetForm();
    }, 500);
  };

  // Create a custom component for PhoneInput to integrate with Formik
  const PhoneInputField = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);
    
    return (
      <div className="input-item">
        {label && <label className='mb-3 block text-headingColor'>{label}</label>}
        <div className={`phone-input-container ${meta.touched && meta.error ? 'error' : ''}`}>
          <PhoneInput
            international
            defaultCountry="RU"
            value={field.value}
            onChange={(value) => helpers.setValue(value)}
          />
        </div>
        {meta.touched && meta.error && (
          <div className="text-red-500 text-sm mt-1 mb-2">{meta.error}</div>
        )}
      </div>
    );
  };

  return (
    <>
      <div className='complete-account'>
        {/* Custom styles for PhoneInput */}
       
        <div className="complete-account-content border-2 w-[596px] p-7 rounded-[12px]">
          <div className='flex justify-center'>
            <img className='w-[150px] mb-[30px]' src="images/inexa_innovative.svg" alt="image" />
          </div>
          <div className="form-content border border-[#d0d0d0] rounded-[12px] py-10 px-6">
            <div className="heading-content flex flex-col justify-center items-center">
              <h4 className='text-[32px] mb-7'>Complete your Account</h4>
            </div>
            
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form className="form w-[362px] mx-auto flex flex-col gap-y-5">
                  <div className="input-item">
                    <Field
                      className={`item-input-field ${errors.firstName && touched.firstName ? 'border-red-500' : 'border-[#b8b8b8]'
                      } `}
                      type="text"
                      name="firstName"
                      id="first-name"
                      placeholder='First Name'
                    />
                    <ErrorMessage name="firstName" component="div" className="item-error-field" />
                  </div>
                  
                  <div className="input-item">
                    <Field
                      className={`item-input-field ${
                        errors.lastName && touched.lastName ? 'border-red-500' : 'border-[#b8b8b8]'
                      } `}
                      type="text"
                      name="lastName"
                      id="last-name"
                      placeholder='Last Name'
                    />
                    <ErrorMessage name="lastName" component="div" className="item-error-field" />
                  </div>
                  
                  <PhoneInputField
                    name="phoneNumber"
                    placeholder="Phone Number"
                  />
                  
                  <div className="item-input-field relative">
                    <label className='mb-3 block text-headingColor' htmlFor="password">Password</label>
                    <Field
                      className={`input-field !h-[35px] ${
                        errors.password && touched.password ? 'border-red-500' : 'border-[#b8b8b8]'
                      } `}
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                    />
                    <div 
                      className='cursor-pointer absolute right-3 top-[44px]'
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FiEyeOff /> : <FaRegEye />}
                    </div>
                    <ErrorMessage name="password" component="div" className="item-field-error" />
                  </div>
                  
                  <div className="item-input-field mt-4">
                    <button 
                      type="submit" 
                      className='btn-smpl btn-white-transparent w-full'
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Complete Account'}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompleteAccount;