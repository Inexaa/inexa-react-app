// import React, { useState } from "react";
// import Layout from "../../Components/Layout";
// import { IoCard } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import { HiOutlineXMark } from "react-icons/hi2";
// import { FaAngleDown } from "react-icons/fa6";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";
// import './purchaseNow.css';


// const PurchaseNow = () => {
//   const [name, setName] = useState("")
//   const [phoneNumber, setPhoneNumber] = useState();
//   const [cardNumber, setCardNumber] = useState(null);
//   const [expiryDate, setExpiryDate] = useState("");
//   const [cvv, setCvv] = useState("");

//   // const [error, setError] = useState(false);
//   const [error, setError] = useState(false);
//   const [cardNumError, setCardNumError] = useState(false);

//  const [showProfessionalCert, setShowProfessionalCert] = useState(true);
// const [showCourseIntro, setShowCourseIntro] = useState(true);

//   const cardNumberChange = (e) => {
//     let value = e.target.value.replace(/\D/g, "");
//     value = value.slice(0, 16);
//     if (value.length > 4) {
//       value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
//     }
//     setCardNumber(value);
//   };

//  const  cardBlurHandler = (e) => {
//    if(cardNumber.length === 0){
//     setCardNumError("enter num")
//    }
//  }

//   const expiryDateChange = (e) => {
//     let value = e.target.value.replace(/\D/g, "");
//     if (value.length > 2){
//       value = value.slice(0, 2) + "/" + value.slice(2, 4);
//     }
//     setExpiryDate(value);
//   };

//   const cvvChange = (e) => {
//     let value = e.target.value.replace(/\D/g, "");
//     if (value.length > 3) {
//       value = value.slice(0,3)
//     }
//     setCvv(value);
//   };

//   const nameHandler  = (e) =>{
//     let value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
//     setName(value)
    
//   }

//   const nameChangehandler = () =>{
//      setError(false);
//   }
//   const nameBlurHandler = (e) => {
//     if (e.target.value.length == 0){
//     setError("Please enter your name");
//     } else if (e.target.value.length <= 3) {
//       setError("Name must be more than 3 characters");
//     } else {
//       setError("");
//     }
//   }

//   const submitHandler =(e)=>{
//     e.preventDefault();
//     if (name.length == 0) {
//       setError("Please enter your name");
//     }
//   }

//   return (
//     <>
//       <Layout>
//         <section className="checkout-cart top-gap">
//           <div className="wrapper padding 2xl:px-0 pb-[134px]">
//             <div className="checkout-cart-content flex flex-wrap ">
//               <div className="checkout w-full lg:w-1/2">
//                 <p className="text-[20px] font-medium font-Poppins text-headingColor capitalize border-b border-borderColor4 lg:border-r border-r-borderColor4 
//                 p-[13px] ps-0">
//                   checkout
//                 </p>
//                 <div className="billing-info py-[30px] lg:border-r border-r-borderColor4 pe-10">
//                   <p className="capitalize text-lg font-medium mb-7 text-headingColor font-Poppins">billing information </p>
//                   <div className="billing-details">
//                     <form id="billing-form" className="flex flex-col gap-4" action=""
//                     onSubmit={submitHandler}>
//                       <div className="input-item">
//                         <label className="label billing-label" htmlFor="name">
//                           Name (required)
//                         </label>
//                         <br />
//                         <input
//                           className="input billing-input"
//                           type="text"
//                           name=""
//                           id="name"
//                           value={name}
//                           onChange={nameHandler}
//                           onBlur={nameBlurHandler}
//                           onFocus={nameChangehandler}
//                         />
//                         {<p className={`text-red-500`}>{error}</p>}
//                       </div>
//                       <div className="input-item relative">
//                         <label
//                           className="label billing-label font-Poppins"
//                           htmlFor="country"
//                         >
//                           Country (required)
//                         </label>
//                         <br />
//                         <div className="select-country-optns relative">

//                           <PhoneInput className="billing-input" international defaultCountry="US"value={phoneNumber}
//                             onChange={setPhoneNumber} />

//                           {/* <FaAngleDown className="absolute text-blackColor2 text-xs right-3 top-1/2 -translate-y-1/2 pointer-events-none" /> */}
//                         </div>
//                       </div>
//                       <div className="input-item">
//                         <p className="text-lg capitalize text-blackColor2 font-medium font-Poppins"> payment methods</p>
//                         <div className="payment-methods-content border border-[#cccccc] px-4 py-5  mt-3">
//                           <div className="card flex items-center gap-3 mb-5 capitalize text-primaryColor text-lg font-medium">
//                             <span>
//                               <IoCard />
//                             </span>
//                             <span>card</span>
//                           </div>
//                           <div className="card-info">
//                             <div className="input-item relative">
//                               <label className="label billing-label "htmlFor="card-num" >Card Number</label>
//                               <br />
//                               <div className="relative card-number">
//                                 <input
//                                   className="input billing-input "
//                                   type="text"
//                                   name=""
//                                   id="card-num"
//                                   placeholder="1234 1234 1234 1234"
//                                   value={cardNumber}
//                                   onChange={cardNumberChange}
//                                   onBlur={cardBlurHandler}
//                                 />
//                                 {<p className={`text-red-500`}>{cardNumError}</p>}
//                                 <div className="card-types pointer-events-none flex gap-1 items-center absolute right-3 top-20 xs:top-1/2 -translate-y-1/2">
//                                   <img src="/images/dis+mstr.png" alt="image" />
//                                   <img className="w-10" src="/images/visa.png" alt="image" />
//                                   <img src="/images/amEx.webp" alt="image" />
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="card-date flex flex-wrap xs:flex-nowrap w-full gap-x-8 gap-y-4 mt-14 xs:mt-4">
//                               <div className="input-item w-full">
//                                 <label
//                                   className="label billing-label"
//                                   htmlFor="date"
//                                 >
//                                   Expiration date
//                                 </label>{" "}
//                                 <br />
//                                 <input
//                                   className="input billing-input "
//                                   type="text"
//                                   placeholder="MM/YY"
//                                   value={expiryDate}
//                                   onChange={expiryDateChange}
//                                 />
//                               </div>
//                               <div className="input-item w-full">
//                                 <label
//                                   className="label billing-label"
//                                   htmlFor="date"
//                                 >
//                                   Security code
//                                 </label>
//                                 <br />
//                                 <div className="cvv relative">
//                                   <input
//                                     className="input billing-input"
//                                     type="text"
//                                     placeholder="CVV"
//                                     value={cvv}
//                                     onChange={cvvChange}
//                                   />
//                                   <img
//                                     className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
//                                     src="/images/cvv.png"
//                                     alt="image"
//                                   />
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="paypal border border-borderColor4 px-4 py-3 mt-[10px]">
//                           <img src="/images/paypal.png" alt="image" />
//                         </div>
//                         <input className="btn-smpl btn-white-transparent my-5" type="submit" value="Place Order" />
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//               <div className="cart w-full lg:w-1/2">
//                 <p className="text-[20px] font-medium capitalize border-b border-borderColor4  p-[13px]"> in your cart  </p>
//                 <div className="cart-totals mt-6 mb-14  lg:px-10">
//                   <img src="/images/EDx_HVD.svg" alt="image" />
//                   <p className="font-medium capitalize text-headingColor font-Poppins"> harverd university</p>
//                   <div className="table w-full  overflow-x-auto mt-10 mb-[18px]">
//                     <table className="w-full">
//                       <thead className="text-sm capitalize ">
//                         <tr>
//                           <th className="font-medium text-headingColor text-start pb-[14px] w-1/3">
//                             price
//                           </th>
//                           <th className="font-medium text-headingColor text-start pb-[14px] w-1/3">
//                             quantity
//                           </th>
//                           <th className="font-medium text-headingColor text-start pb-[14px] w-1/3">
//                             subtotal
//                           </th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         <tr>
//                           <td className="pb-[22px] font-medium text-textColor">$18,485*</td>
//                           <td className="pb-[22px] font-medium text-textColor">1</td>
//                           <td className="pb-[22px] font-medium text-textColor">$18,485*</td>
//                         </tr>
//                         <tr>
//                           <td className="text-[22px] font-medium text-headingColor ">
//                             Total
//                           </td>
//                           <td></td>
//                           <td className=" font-medium text-textColor">
//                             $18,485*
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </div>
//                   <p className="text-sm font-medium text-textColor">
//                     * This total contains an approximate conversion. You will be charged $219.00 USD.</p>
//                 </div>

//                 <div className="annual-subscription margin-x ps-[14px] mb-[35px]">
//                   <div className="annual-subscription-content relative">
//                     <div className="heading-side xl:h-[120px] flex items-center relative bg-blackColor2 rounded-40 px-8 py-[18px]  sm:w-1/2 md:w-[50%] xl:w-[45%] ">
//                       <h4 className="heading lg:text-[28px] text-white font-medium  mb-0 text-center sm:text-left w-full sm:max-w-[210px] sm:me-8 xl:me-0 ">
//                         Annual Subscription
//                       </h4>
//                       <div
//                         className="discount-bar bg-bgGreen text-blackColor2 size-[75px] rounded-full flex justify-center items-center 
//                           absolute top-40  xs:top-32 sm:top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 sm:translate-x-0 sm:-right-8 lg:-right-5 xl:-right-9"
//                       >
//                         <div className="discount-bar-content">
//                           <div className="total-off flex items-center">
//                             <div className="off font-bold text-[26px] leading-none font-Poppins">40
//                             </div>
//                             <div className="percentage">
//                               <span className="block leading-none font-bold text-[17px]">
//                                 %
//                               </span>
//                               <span className="block leading-none uppercase text-[7px] font-bold">
//                                 off
//                               </span>
//                             </div>
//                           </div>
//                           <div className="current-course text-center">
//                             <span className="uppercase font-bold text-[13px] block leading-none  font-Poppins "> future </span>
//                             <span className="block uppercase leading-none font-medium text-[10.5px]  font-Poppins"> courses </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="discount-side border-[1.5px]  border-black rounded-t-40 rounded-b-40 py-5 px-5 sm:absolute -z-10 w-full sm:top-1/2 sm:-translate-y-1/2">
//                       <div className="discount-side-content flex justify-center sm:justify-end pt-20 sm:pt-0">
//                         <ul className="flex flex-col gap-3 font-medium text-[9px] text-headingColor 2xl:pe-[54px]">
//                           <li className="flex  gap-2">
//                             <img
//                               className="size-2 mt-1"
//                               alt="image"
//                               src="/images/course-detail-A.webp"
//                             />
//                             Unlimited access to our top-rated courses
//                           </li>
//                           <li className="flex  gap-2">
//                             <img
//                               className="size-2 mt-1"
//                               alt="image"
//                               src="/images/course-detail-A.webp"
//                             />
//                             Specialized professional certificates
//                           </li>
//                           <li className="flex  gap-2">
//                             <img
//                               className="size-2 mt-1"
//                               alt="image"
//                               src="/images/course-detail-A.webp"
//                             />
//                             Internationally recognized certificates
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className={`course-intro margin-x ps-[14px] mb-[35px] ${showCourseIntro ? "block" : "hidden"}`}>
//                   <div className="course-intro-content relative">
//                     <div className={`remove-mark absolute bg-blackColor2 text-white p-1 rounded-full z-10 cursor-pointer`} onClick={()=>setShowCourseIntro(false)}>
//                       <HiOutlineXMark />
//                     </div>
//                     <div className="heading-side xs:h-[120px] flex items-center relative bg-bgGreen rounded-40 px-8 py-6  sm:w-1/2 md:w-[60%] xl:w-3/5">
//                       <h4 className="heading text-[19px] font-medium  mb-0 text-center sm:text-left sm:max-w-[290px] sm:me-8 xl:me-0">
//                         HarvardX: CS50's Introduction to Computer Science
//                       </h4>
//                       <div
//                         className="discount-bar  bg-blackColor2 text-white size-[77px] rounded-full flex justify-center items-center 
//                           absolute top-40 xs:top-36 sm:top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 sm:translate-x-0 sm:-right-8 lg:-right-5 xl:-right-9"
//                       >
//                         <div className="discount-bar-content">
//                           <div className="total-off flex items-center mb-1">
//                             <div className="off font-bold text-[26px] leading-none font-Poppins">
//                               40
//                             </div>
//                             <div className="percentage">
//                               <span className="block leading-none font-semibold text-lg text-[17px]">
//                                 %
//                               </span>
//                               <span className="block leading-none font-semibold uppercase text-[7px] ">
//                                 off
//                               </span>
//                             </div>
//                           </div>
//                           <div className="current-course text-center">
//                             <span className="uppercase font-bold block leading-none font-Poppins text-[11px]">
//                               current
//                             </span>
//                             <span className="block uppercase font-medium font-Poppins leading-none text-[10.5px]">
//                               course
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="discount-side border-[1.5px]  border-black rounded-t-40 rounded-b-40 py-5 px-5 sm:absolute -z-10 w-full top-1/2 sm:-translate-y-1/2">
//                       <div className="discount-side-content flex justify-center text-center sm:text-left sm:justify-end pt-16 sm:pt-0">
//                         <div className="discount-data  xl:w-1/4 ">
//                           <div className="discount relative ">
//                             <span className="text-lg font-Poppins text-headingColor">R10,000</span>
//                             <div className="discount-line right-9 sm:-left-1 w-[74px] h-[2px] bg-primaryColor absolute -rotate-[5deg] top-3"></div>
//                           </div>
//                           <div className="price text-primaryColor">
//                             <span className="text-[23px] font-bold font-Poppins">R5000</span>
//                             <span className="capitalize font-medium text-xs">/ course</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className={`professional-certificate margin-x ps-[14px] ${showProfessionalCert ? "block" : "hidden"}`}>
//                   <div className="professional-certificate-content relative">
//                     <div className="remove-mark absolute bg-blackColor2 text-white p-1 rounded-full z-10 cursor-pointer" onClick={()=>setShowProfessionalCert(false)}>
//                       <HiOutlineXMark />
//                     </div>
//                     <div className="heading-side xl:h-[120px] flex items-center relative bg-primaryColor rounded-40 px-8 py-7  sm:w-1/2 md:w-[60%] xl:w-[55%] ">
//                       <h4 className="heading text-[18px] text-white font-medium  mb-0 text-center sm:text-left sm:max-w-[210px] sm:me-8 xl:me-0">
//                         Professional Certificate in Computer Science for Cybersecurity{" "}
//                       </h4>
//                       <div
//                         className="discount-bar bg-blackColor2 text-white size-24 rounded-full flex justify-center items-center 
//                           absolute top-48 ss:top-40 xs:top-40 sm:top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 sm:translate-x-0 sm:-right-8 lg:-right-5 xl:-right-9"
//                       >
//                         <div className="discount-bar-content">
//                           <div className="total-off flex items-center mb-1">
//                             <div className="off font-bold text-[26px] leading-none font-Poppins">
//                               40
//                             </div>
//                             <div className="percentage">
//                               <span className="block leading-none font-semibold text-lg text-[17px]">
//                                 %
//                               </span>
//                               <span className="block leading-none font-semibold uppercase text-[7px] ">
//                                 off
//                               </span>
//                             </div>
//                           </div>
//                           <div className="current-course text-center">
//                             <span className="uppercase font-bold block leading-none font-Poppins text-[11px]">
//                               current
//                             </span>
//                             <span className="block uppercase font-medium font-Poppins leading-none text-[8.5px]">
//                               certificate
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="discount-side border-[1.5px]  border-black rounded-t-40 rounded-b-40 py-5 px-5 sm:absolute -z-10 w-full top-1/2 sm:-translate-y-1/2">
//                       <div className="discount-side-content flex justify-center text-center sm:text-left sm:justify-end pt-20 sm:pt-0">
//                         <div className="discount-data  ">
//                           <div className="discount relative ">
//                             <span className="text-lg font-Poppins text-headingColor ">R10,000</span>
//                             <div className="discount-line right-9 sm:left-0 w-[74px] h-[2px] bg-primaryColor absolute -rotate-[5deg] top-3"></div>
//                           </div>
//                           <div className="price text-primaryColor">
//                             <span className="text-[23px] font-bold font-Poppins">R5000</span>
//                             <span className="capitalize text-xs font-medium">/ certificate</span>
//                           </div>
                          
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </Layout>
//     </>
//   );
// };

// export default PurchaseNow;


import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Layout from "../../Components/Layout";
import { IoCard } from "react-icons/io5";
import { Link } from "react-router-dom";
import { HiOutlineXMark } from "react-icons/hi2";
import { FaAngleDown } from "react-icons/fa6";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import './purchaseNow.css';

const PurchaseNow = () => {
  const [showProfessionalCert, setShowProfessionalCert] = useState(true);
  const [showCourseIntro, setShowCourseIntro] = useState(true);

  // Validation schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .matches(/^[a-zA-Z\s]*$/, 'Name can only contain letters and spaces')
      .required('Please enter your name'),
    phoneNumber: Yup.string()
      .required('Phone number is required'),
    cardNumber: Yup.string()
      .min(16, 'Card number must be at least 16 digits')
      .required('Enter card number'),
    expiryDate: Yup.string()
      .matches(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, 'Please enter a valid expiry date (MM/YY)')
      .required('Expiry date is required'),
    cvv: Yup.string()
      .matches(/^[0-9]{3,4}$/, 'Please enter a valid CVV')
      .required('CVV is required')
  });

  // Initial values
  const initialValues = {
    name: '',
    phoneNumber: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  };

  // Format card number with spaces
  const formatCardNumber = (value) => {
    let cleanValue = value.replace(/\D/g, "");
    cleanValue = cleanValue.slice(0, 16);
    if (cleanValue.length > 4) {
      cleanValue = cleanValue.replace(/(\d{4})(?=\d)/g, "$1 ");
    }
    return cleanValue;
  };

  // Format expiry date
  const formatExpiryDate = (value) => {
    let cleanValue = value.replace(/\D/g, "");
    if (cleanValue.length > 2) {
      cleanValue = cleanValue.slice(0, 2) + "/" + cleanValue.slice(2, 4);
    }
    return cleanValue;
  };

  // Format CVV
  const formatCVV = (value) => {
    let cleanValue = value.replace(/\D/g, "");
    if (cleanValue.length > 3) {
      cleanValue = cleanValue.slice(0, 3);
    }
    return cleanValue;
  };

  // Handle form submission
  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Form submitted with values:', values);
    // Add your submission logic here
    setSubmitting(false);
  };

  return (
    <>
      <Layout>
        <section className="checkout-cart top-gap">
          <div className="wrapper padding 2xl:px-0 pb-[134px]">
            <div className="checkout-cart-content flex flex-wrap ">
              <div className="checkout w-full lg:w-1/2">
                <p className="text-[20px] font-medium font-Poppins text-headingColor capitalize border-b border-borderColor4 lg:border-r border-r-borderColor4 
                p-[13px] ps-0">
                  checkout
                </p>
                <div className="billing-info py-[30px] lg:border-r border-r-borderColor4 pe-10">
                  <p className="capitalize text-lg font-medium mb-7 text-headingColor font-Poppins">billing information </p>
                  <div className="billing-details">
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={handleSubmit}
                    >
                      {({ values, setFieldValue, isSubmitting }) => (
                        <Form id="billing-form" className="flex flex-col gap-4">
                          {/* Name Field */}
                          <div className="input-item">
                            <label className="label billing-label" htmlFor="name">
                              Name (required)
                            </label>
                            <br />
                            <Field name="name">
                              {({ field }) => (
                                <input
                                  {...field}
                                  className="input billing-input"
                                  type="text"
                                  id="name"
                                  value={values.name}
                                  onChange={(e) => {
                                    const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                                    setFieldValue('name', value);
                                  }}
                                />
                              )}
                            </Field>
                            <ErrorMessage name="name" component="p" className="text-red-500" />
                          </div>

                          {/* Phone Number Field */}
                          <div className="input-item relative">
                            <label
                              className="label billing-label font-Poppins"
                              htmlFor="phoneNumber"
                            >
                              Country (required)
                            </label>
                            <br />
                            <div className="select-country-optns relative">
                              <PhoneInput 
                                className="billing-input" 
                                international 
                                defaultCountry="US"
                                value={values.phoneNumber}
                                onChange={(value) => setFieldValue('phoneNumber', value)}
                              />
                              <ErrorMessage name="phoneNumber" component="p" className="text-red-500" />
                            </div>
                          </div>

                          {/* Payment Methods */}
                          <div className="input-item">
                            <p className="text-lg capitalize text-blackColor2 font-medium font-Poppins"> payment methods</p>
                            <div className="payment-methods-content border border-[#cccccc] px-4 py-5  mt-3">
                              <div className="card flex items-center gap-3 mb-5 capitalize text-primaryColor text-lg font-medium">
                                <span>
                                  <IoCard />
                                </span>
                                <span>card</span>
                              </div>
                              
                              <div className="card-info">
                                {/* Card Number */}
                                <div className="input-item relative">
                                  <label className="label billing-label" htmlFor="cardNumber">
                                    Card Number
                                  </label>
                                  <br />
                                  <div className="relative card-number">
                                    <Field name="cardNumber">
                                      {({ field }) => (
                                        <input
                                          {...field}
                                          className="input billing-input"
                                          type="text"
                                          id="cardNumber"
                                          placeholder="1234 1234 1234 1234"
                                          value={values.cardNumber}
                                          onChange={(e) => {
                                            const formatted = formatCardNumber(e.target.value);
                                            setFieldValue('cardNumber', formatted);
                                          }}
                                        />
                                      )}
                                    </Field>
                                    <div className="card-types pointer-events-none flex gap-1 items-center absolute right-3 top-20 xs:top-1/2 -translate-y-1/2">
                                      <img src="/images/dis+mstr.png" alt="image" />
                                      <img className="w-10" src="/images/visa.png" alt="image" />
                                      <img src="/images/amEx.webp" alt="image" />
                                    </div>
                                  </div>
                                  <ErrorMessage name="cardNumber" component="p" className="text-red-500" />
                                </div>

                                {/* Expiry Date and CVV */}
                                <div className="card-date flex flex-wrap xs:flex-nowrap w-full gap-x-8 gap-y-4 mt-14 xs:mt-4">
                                  <div className="input-item w-full">
                                    <label className="label billing-label" htmlFor="expiryDate">
                                      Expiration date
                                    </label>
                                    <br />
                                    <Field name="expiryDate">
                                      {({ field }) => (
                                        <input
                                          {...field}
                                          className="input billing-input"
                                          type="text"
                                          id="expiryDate"
                                          placeholder="MM/YY"
                                          value={values.expiryDate}
                                          onChange={(e) => {
                                            const formatted = formatExpiryDate(e.target.value);
                                            setFieldValue('expiryDate', formatted);
                                          }}
                                        />
                                      )}
                                    </Field>
                                    <ErrorMessage name="expiryDate" component="p" className="text-red-500" />
                                  </div>
                                  
                                  <div className="input-item w-full">
                                    <label className="label billing-label" htmlFor="cvv">
                                      Security code
                                    </label>
                                    <br />
                                    <div className="cvv relative">
                                      <Field name="cvv">
                                        {({ field }) => (
                                          <input
                                            {...field}
                                            className="input billing-input"
                                            type="text"
                                            id="cvv"
                                            placeholder="CVV"
                                            value={values.cvv}
                                            onChange={(e) => {
                                              const formatted = formatCVV(e.target.value);
                                              setFieldValue('cvv', formatted);
                                            }}
                                          />
                                        )}
                                      </Field>
                                      <ErrorMessage name="cvv" component="p" className="text-red-500" />
                                      <img
                                        className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
                                        src="/images/cvv.png"
                                        alt="image"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {/* PayPal Option */}
                            <div className="paypal border border-borderColor4 px-4 py-3 mt-[10px]">
                              <img src="/images/paypal.png" alt="image" />
                            </div>
                            
                            {/* Submit Button */}
                            <button
                              className="btn-smpl btn-white-transparent my-5"
                              type="submit"
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? 'Processing...' : 'Place Order'}
                            </button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
              
              <div className="cart w-full lg:w-1/2">
                <p className="text-[20px] font-medium capitalize border-b border-borderColor4  p-[13px]"> in your cart  </p>
                <div className="cart-totals mt-6 mb-14  lg:px-10">
                  <img src="/images/EDx_HVD.svg" alt="image" />
                  <p className="font-medium capitalize text-headingColor font-Poppins"> harverd university</p>
                  <div className="table w-full  overflow-x-auto mt-10 mb-[18px]">
                    <table className="w-full">
                      <thead className="text-sm capitalize ">
                        <tr>
                          <th className="font-medium text-headingColor text-start pb-[14px] w-1/3">
                            price
                          </th>
                          <th className="font-medium text-headingColor text-start pb-[14px] w-1/3">
                            quantity
                          </th>
                          <th className="font-medium text-headingColor text-start pb-[14px] w-1/3">
                            subtotal
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="pb-[22px] font-medium text-textColor">$18,485*</td>
                          <td className="pb-[22px] font-medium text-textColor">1</td>
                          <td className="pb-[22px] font-medium text-textColor">$18,485*</td>
                        </tr>
                        <tr>
                          <td className="text-[22px] font-medium text-headingColor ">
                            Total
                          </td>
                          <td></td>
                          <td className=" font-medium text-textColor">
                            $18,485*
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm font-medium text-textColor">
                    * This total contains an approximate conversion. You will be charged $219.00 USD.</p>
                </div>

                <div className="annual-subscription margin-x ps-[14px] mb-[35px]">
                  <div className="annual-subscription-content relative">
                    <div className="heading-side xl:h-[120px] flex items-center relative bg-blackColor2 rounded-40 px-8 py-[18px]  sm:w-1/2 md:w-[50%] xl:w-[45%] ">
                      <h4 className="heading lg:text-[28px] text-white font-medium  mb-0 text-center sm:text-left w-full sm:max-w-[210px] sm:me-8 xl:me-0 ">
                        Annual Subscription
                      </h4>
                      <div
                        className="discount-bar bg-bgGreen text-blackColor2 size-[75px] rounded-full flex justify-center items-center 
                          absolute top-40  xs:top-32 sm:top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 sm:translate-x-0 sm:-right-8 lg:-right-5 xl:-right-9"
                      >
                        <div className="discount-bar-content">
                          <div className="total-off flex items-center">
                            <div className="off font-bold text-[26px] leading-none font-Poppins">40
                            </div>
                            <div className="percentage">
                              <span className="block leading-none font-bold text-[17px]">
                                %
                              </span>
                              <span className="block leading-none uppercase text-[7px] font-bold">
                                off
                              </span>
                            </div>
                          </div>
                          <div className="current-course text-center">
                            <span className="uppercase font-bold text-[13px] block leading-none  font-Poppins "> future </span>
                            <span className="block uppercase leading-none font-medium text-[10.5px]  font-Poppins"> courses </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="discount-side border-[1.5px]  border-black rounded-t-40 rounded-b-40 py-5 px-5 sm:absolute -z-10 w-full sm:top-1/2 sm:-translate-y-1/2">
                      <div className="discount-side-content flex justify-center sm:justify-end pt-20 sm:pt-0">
                        <ul className="flex flex-col gap-3 font-medium text-[9px] text-headingColor 2xl:pe-[54px]">
                          <li className="flex  gap-2">
                            <img
                              className="size-2 mt-1"
                              alt="image"
                              src="/images/course-detail-A.webp"
                            />
                            Unlimited access to our top-rated courses
                          </li>
                          <li className="flex  gap-2">
                            <img
                              className="size-2 mt-1"
                              alt="image"
                              src="/images/course-detail-A.webp"
                            />
                            Specialized professional certificates
                          </li>
                          <li className="flex  gap-2">
                            <img
                              className="size-2 mt-1"
                              alt="image"
                              src="/images/course-detail-A.webp"
                            />
                            Internationally recognized certificates
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`course-intro margin-x ps-[14px] mb-[35px] ${showCourseIntro ? "block" : "hidden"}`}>
                  <div className="course-intro-content relative">
                    <div className={`remove-mark absolute bg-blackColor2 text-white p-1 rounded-full z-10 cursor-pointer`} onClick={()=>setShowCourseIntro(false)}>
                      <HiOutlineXMark />
                    </div>
                    <div className="heading-side xs:h-[120px] flex items-center relative bg-bgGreen rounded-40 px-8 py-6  sm:w-1/2 md:w-[60%] xl:w-3/5">
                      <h4 className="heading text-[19px] font-medium  mb-0 text-center sm:text-left sm:max-w-[290px] sm:me-8 xl:me-0">
                        HarvardX: CS50's Introduction to Computer Science
                      </h4>
                      <div
                        className="discount-bar  bg-blackColor2 text-white size-[77px] rounded-full flex justify-center items-center 
                          absolute top-40 xs:top-36 sm:top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 sm:translate-x-0 sm:-right-8 lg:-right-5 xl:-right-9"
                      >
                        <div className="discount-bar-content">
                          <div className="total-off flex items-center mb-1">
                            <div className="off font-bold text-[26px] leading-none font-Poppins">
                              40
                            </div>
                            <div className="percentage">
                              <span className="block leading-none font-semibold text-lg text-[17px]">
                                %
                              </span>
                              <span className="block leading-none font-semibold uppercase text-[7px] ">
                                off
                              </span>
                            </div>
                          </div>
                          <div className="current-course text-center">
                            <span className="uppercase font-bold block leading-none font-Poppins text-[11px]">
                              current
                            </span>
                            <span className="block uppercase font-medium font-Poppins leading-none text-[10.5px]">
                              course
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="discount-side border-[1.5px]  border-black rounded-t-40 rounded-b-40 py-5 px-5 sm:absolute -z-10 w-full top-1/2 sm:-translate-y-1/2">
                      <div className="discount-side-content flex justify-center text-center sm:text-left sm:justify-end pt-16 sm:pt-0">
                        <div className="discount-data  xl:w-1/4 ">
                          <div className="discount relative ">
                            <span className="text-lg font-Poppins text-headingColor">R10,000</span>
                            <div className="discount-line right-9 sm:-left-1 w-[74px] h-[2px] bg-primaryColor absolute -rotate-[5deg] top-3"></div>
                          </div>
                          <div className="price text-primaryColor">
                            <span className="text-[23px] font-bold font-Poppins">R5000</span>
                            <span className="capitalize font-medium text-xs">/ course</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`professional-certificate margin-x ps-[14px] ${showProfessionalCert ? "block" : "hidden"}`}>
                  <div className="professional-certificate-content relative">
                    <div className="remove-mark absolute bg-blackColor2 text-white p-1 rounded-full z-10 cursor-pointer" onClick={()=>setShowProfessionalCert(false)}>
                      <HiOutlineXMark />
                    </div>
                    <div className="heading-side xl:h-[120px] flex items-center relative bg-primaryColor rounded-40 px-8 py-7  sm:w-1/2 md:w-[60%] xl:w-[55%] ">
                      <h4 className="heading text-[18px] text-white font-medium  mb-0 text-center sm:text-left sm:max-w-[210px] sm:me-8 xl:me-0">
                        Professional Certificate in Computer Science for Cybersecurity{" "}
                      </h4>
                      <div
                        className="discount-bar bg-blackColor2 text-white size-24 rounded-full flex justify-center items-center 
                          absolute top-48 ss:top-40 xs:top-40 sm:top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 sm:translate-x-0 sm:-right-8 lg:-right-5 xl:-right-9"
                      >
                        <div className="discount-bar-content">
                          <div className="total-off flex items-center mb-1">
                            <div className="off font-bold text-[26px] leading-none font-Poppins">
                              40
                            </div>
                            <div className="percentage">
                              <span className="block leading-none font-semibold text-lg text-[17px]">
                                %
                              </span>
                              <span className="block leading-none font-semibold uppercase text-[7px] ">
                                off
                              </span>
                            </div>
                          </div>
                          <div className="current-course text-center">
                            <span className="uppercase font-bold block leading-none font-Poppins text-[11px]">
                              current
                            </span>
                            <span className="block uppercase font-medium font-Poppins leading-none text-[8.5px]">
                              certificate
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="discount-side border-[1.5px]  border-black rounded-t-40 rounded-b-40 py-5 px-5 sm:absolute -z-10 w-full top-1/2 sm:-translate-y-1/2">
                      <div className="discount-side-content flex justify-center text-center sm:text-left sm:justify-end pt-20 sm:pt-0">
                        <div className="discount-data  ">
                          <div className="discount relative ">
                            <span className="text-lg font-Poppins text-headingColor ">R10,000</span>
                            <div className="discount-line right-9 sm:left-0 w-[74px] h-[2px] bg-primaryColor absolute -rotate-[5deg] top-3"></div>
                          </div>
                          <div className="price text-primaryColor">
                            <span className="text-[23px] font-bold font-Poppins">R5000</span>
                            <span className="capitalize text-xs font-medium">/ certificate</span>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default PurchaseNow;