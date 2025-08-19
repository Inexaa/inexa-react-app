import React, { useContext, useEffect, useState } from "react";
import {
  CardElement,
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import Layout from "../../Components/Layout";
import Container from "../../Components/Container";
import axiosInstance from "../../api/axiosInstance";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SuccessPage from "./SuccessPage";

const Checkout = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  if (!user) {
    navigate("/");
  }
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [countries, setCountries] = useState([]);
  const firstPaymentAmount = import.meta.env.VITE_FIRST_PAYMENT_AMOUNT;
  const quarterlyPaymentAmount = import.meta.env.VITE_QUARTERLY_PAYMENT_AMOUNT;

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://countriesnow.space/api/v0.1/countries"
        );
        setCountries(response.data.data.map((country) => country.country)); // Assuming data is inside 'data' field
        setLoading(false);
      } catch (error) {
        setError("Error fetching country data");
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) return; // Ensure Stripe.js has loaded

    const cardNumberElement = elements.getElement(CardNumberElement);
    const cardExpiryElement = elements.getElement(CardExpiryElement);
    const cardCvcElement = elements.getElement(CardCvcElement);

    // Step 1: Create a PaymentMethod using Stripe's API
    const { error: paymentMethodError, paymentMethod } =
      await stripe.createPaymentMethod({
        type: "card",
        card: cardNumberElement,
        billing_details: {
          name: name, // Or pull from user context or form input
        },
      });

    if (paymentMethodError) {
      setError(paymentMethodError.message); // Handle error from payment method creation
      setLoading(false);
      return;
    }

    // Step 2: Get `userId` from your app's global state/context or session
    const userId = user?.id; // Assuming a function or context to fetch the logged-in user's ID

    // Step 3: Send `payment_method` and `userId` to your backend to create the checkout session
    try {
      const response = await axiosInstance.post("/payment/checkout", {
        payment_method: paymentMethod.id,
        userId: userId, // Send the `userId` as well
        name: name,
        country: country,
      });

      if (response.data.success) {
        setSuccess(true);

        // Store the payment and subscription details
        setPaymentDetails(response.data);
      } else {
        setError(response.data.message || "Checkout failed");
      }
    } catch (err) {
      console.error("Error in payment process:", err);
      setError("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Container>
        {success ? (
          <SuccessPage transactionDetails={paymentDetails} user={user} />
        ) : (
          <div className="pt-[91px] md:pt-[114px] pb-10 lg:pt-[152px] lg:pb-[142px]">
            <div
              className="lg:flex px-3 md:pl-[50px] md:pr-[53px] lg:px-5 gap-[70px] relative 
              lg:before:content-[''] lg:before:bg-[#D9D9D9] lg:before:w-[1px] lg:before:h-full lg:before:absolute lg:before:top-0 lg:before:left-1/2 
              lg:before:-translate-x-1/2"
            >
              <div className="lg:w-[50%]">
                <div className="mb-10 block lg:hidden">
                  <h3 className="text-[20px] leading-[30px] font-medium text-[#282828] pb-[8px] mb-[24px] border-b border-[#D9D9D9]">
                    In Your Cart
                  </h3>
                  <ul>
                    <li className="border-b border-[#D9D9D9] p-[16px_0]">
                      <div className="flex justify-between">
                        <div className="">
                          <h5 className="text-[12px] md:text-[14px] lg:text-[16px] font-medium lg:font-[600] leading-[17px] lg:leading-[24px] mb-2.5 md:mb-[14px] text-[#282828]">
                            Price
                          </h5>
                          <h6 className="text-[12px] md:text-[16px] font-medium leading-[20px] lg:leading-[24px] m-0 text-[#333333]">
                            ${firstPaymentAmount}.00 *
                          </h6>
                        </div>
                        <div className="">
                          <h5 className="text-[12px] md:text-[14px] lg:text-[16px] font-medium lg:font-[600] leading-[17px] lg:leading-[24px] mb-2.5 md:mb-[14px] text-[#282828]">
                            Quantity
                          </h5>
                          <h6 className="text-[12px] md:text-[16px] font-medium leading-[20px] lg:leading-[24px] m-0 text-[#333333]">
                            1
                          </h6>
                        </div>
                        <div className="">
                          <h5 className="text-[12px] md:text-[14px] lg:text-[16px] font-medium lg:font-[600] leading-[17px] lg:leading-[24px] mb-2.5 md:mb-[14px] text-[#282828]">
                            Subtotal
                          </h5>
                          <h6 className="text-[12px] md:text-[16px] font-medium leading-[20px] lg:leading-[24px] m-0 text-[#333333]">
                            ${firstPaymentAmount}.00*
                          </h6>
                        </div>
                      </div>
                    </li>
                    <li className=" p-[16px_0]">
                      <div className="flex justify-between mb-4 lg:mb-0">
                        <div className="">
                          <h5 className="text-[16px] md:text-[22px] font-[600] leading-[27px] lg:leading-[30px] m-0 lg:mb-[14px] text-[#282828]">
                            Total
                          </h5>
                        </div>
                        <div className="">
                          <h6 className="text-[16px] font-[500] leading-[27px] lg:leading-[30px] m-0 text-[#333333]">
                            ${firstPaymentAmount}.00 *
                          </h6>
                        </div>
                      </div>
                      <p className="text-[12px] md:text-[14px] leading-[17px] lg:leading-[20px] font-[500] text-[#333333]">
                        * This total contains an approximate conversion. You
                        will be charged ${firstPaymentAmount}.00 USD as 1st
                        payment for your annual subscription.
                      </p>
                    </li>
                  </ul>
                </div>
                {!success && (
                  <form
                    onSubmit={handleSubmit}
                    className="mb-8 lg:mb-0 checkout-form"
                  >
                    <h3 className="text-[20px] leading-[35px] lg:leading-[30px] font-medium text-[#282828] pb-[8px] mb-[24px] border-b border-[#D9D9D9]">
                      Checkout
                    </h3>
                    <div className="grid gap-4 mb-6">
                      <h4 className="text-[#282828] text-[18px] leading-[27px] block font-Poppins font-medium m-0">
                        Billing Information
                      </h4>
                      <div className="grid gap-2">
                        <label className="block text-[16px] leading-[24px] text-[#333333] font-[500]">
                          Name{" "}
                          <span className="required text-[12px]">
                            (required)
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="Input your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="w-full h-[50px] flex items-center px-[16px] border border-[rgba(0,0,0,.2)] rounded-[10px] font-Montserrat text-[14px] text-[#CCCCCC] font-medium"
                        />
                      </div>
                      <div className="">
                        <label className="block text-[16px] leading-[24px] text-[#333333] font-[500]">
                          Country{" "}
                          <span className="required text-[12px]">
                            (required)
                          </span>
                        </label>
                        <select
                          className="w-full h-[50px] flex items-center px-[16px] border border-[rgba(0,0,0,.2)] rounded-[10px] font-Montserrat text-[14px] text-[#CCCCCC] font-medium"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          required
                        >
                          <option value="">Select your country</option>
                          {countries.map((country, index) => (
                            <option key={index} value={country}>
                              {country}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="mb-6">
                      <h4 className="mb-2 text-[18px] leading-[27px] text-[#333333] font-medium font-Poppins m-0">
                        Payment Methods
                      </h4>
                      <div className="card-box border border-[#CCCCCC] rounded-[10px] p-[20px]">
                        <h5 className="mb-4 flex gap-4 items-center text-[18px] leading-[27px] text-[#3322FF] font-medium font-Poppins">
                          <i>
                            <svg
                              width="23"
                              height="19"
                              viewBox="0 0 23 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.617676 15.3828C0.617676 16.1109 0.906913 16.8092 1.42176 17.3241C1.93661 17.8389 2.63489 18.1281 3.36299 18.1281H19.8349C20.563 18.1281 21.2612 17.8389 21.7761 17.3241C22.2909 16.8092 22.5802 16.1109 22.5802 15.3828V7.83322H0.617676V15.3828ZM3.85322 11.657C3.85322 11.267 4.00817 10.8929 4.28398 10.6171C4.55979 10.3413 4.93387 10.1863 5.32393 10.1863H7.67705C8.06711 10.1863 8.44119 10.3413 8.717 10.6171C8.99281 10.8929 9.14775 11.267 9.14775 11.657V12.6375C9.14775 13.0276 8.99281 13.4016 8.717 13.6775C8.44119 13.9533 8.06711 14.1082 7.67705 14.1082H5.32393C4.93387 14.1082 4.55979 13.9533 4.28398 13.6775C4.00817 13.4016 3.85322 13.0276 3.85322 12.6375V11.657ZM19.8349 0.871887H3.36299C2.63489 0.871887 1.93661 1.16112 1.42176 1.67597C0.906913 2.19082 0.617676 2.8891 0.617676 3.6172V4.89181H22.5802V3.6172C22.5802 2.8891 22.2909 2.19082 21.7761 1.67597C21.2612 1.16112 20.563 0.871887 19.8349 0.871887Z"
                                fill="#3322FF"
                              />
                            </svg>
                          </i>
                          <span>Card</span>
                        </h5>
                        <div className="checkout-input">
                          <div className="w-full mb-[10px] md:mb-[17px] grid gap-2">
                            <label
                              className="block text-[16px] leading-[24px] text-[#333333] font-[500]"
                              htmlFor="card-number"
                            >
                              Card Number
                            </label>
                            <div id="card-number">
                              <CardNumberElement />
                            </div>
                          </div>
                          <div className="md:flex grid gap-[10px] md:gap-[60px]">
                            <div className="w-full grid gap-2">
                              <label
                                className="block text-[16px] leading-[24px] text-[#333333] font-[500]"
                                htmlFor="expiry-date"
                              >
                                Expiry Date
                              </label>
                              <div id="expiry-date">
                                <CardExpiryElement />
                              </div>
                            </div>
                            <div className="w-full grid gap-2">
                              <label
                                className="block text-[16px] leading-[24px] text-[#333333] font-[500]"
                                htmlFor="cvc"
                              >
                                CVC
                              </label>
                              <div id="cvc">
                                <CardCvcElement />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={!stripe || loading}
                      className="place-order-btn p-[14px_40px] bg-[#3322FF] rounded-[10px] text-[#fff]"
                    >
                      {loading ? "Processing…" : "Place Order"}
                    </button>

                    {error && <div className="error">{error}</div>}
                  </form>
                )}
                {success && (
                  <SuccessPage
                    transactionDetails={paymentDetails}
                    user={user}
                  />
                )}
              </div>
              <div className="lg:w-[50%]">
                <div className="mb-[30px] hidden lg:block">
                  <h3 className="text-[20px] leading-[30px] font-medium text-[#282828] pb-[8px] mb-[24px] border-b border-[#D9D9D9]">
                    In Your Cart
                  </h3>
                  <ul>
                    <li className="border-b border-[#D9D9D9] p-[16px_0]">
                      <div className="flex justify-between">
                        <div className="">
                          <h5 className="text-[16px] font-[600] leading-[24px] mb-[14px] text-[#282828]">
                            Price
                          </h5>
                          <h6 className="text-[16px] font-[500] leading-[24px] m-0 text-[#333333]">
                            ${firstPaymentAmount}.00 *
                          </h6>
                        </div>
                        <div className="">
                          <h5 className="text-[16px] font-[600] leading-[24px] mb-[14px] text-[#282828]">
                            Quantity
                          </h5>
                          <h6 className="text-[16px] font-[500] leading-[24px] m-0 text-[#333333]">
                            1
                          </h6>
                        </div>
                        <div className="">
                          <h5 className="text-[16px] font-[600] leading-[24px] mb-[14px] text-[#282828]">
                            Subtotal
                          </h5>
                          <h6 className="text-[16px] font-[500] leading-[24px] m-0 text-[#333333]">
                            ${firstPaymentAmount}.00*
                          </h6>
                        </div>
                      </div>
                    </li>
                    <li className=" p-[16px_0]">
                      <div className="flex justify-between">
                        <div className="">
                          <h5 className="text-[22px] font-[600] leading-[30px] mb-[14px] text-[#282828]">
                            Total
                          </h5>
                        </div>
                        <div className="">
                          <h6 className="text-[16px] font-[500] leading-[24px] m-0 text-[#333333]">
                            ${firstPaymentAmount}.00 *
                          </h6>
                        </div>
                      </div>
                      <p className="text-[14px] leading-[20px] font-[500] text-[#333333]">
                        * This total contains an approximate conversion. You
                        will be charged ${firstPaymentAmount}.00 USD as 1st
                        payment for your annual subscription.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="mb-[60px]">
                  {/* <Container className=""> */}
                  <div className=" grid gap-5 max-[767px]:w-full max-[767px]:max-w-[320px] max-[1024px]:w-[634px] max-[1024px]:mx-auto">
                    <ul className="w-full grid md:grid lg:gap-[60px] md:gap-[30px] gap-[60px] md:pl-4 md:items-baseline justify-center">
                      <li className="w-full md:h-[136px] lg:h-[160px] border-[1px] border-[#111111] rounded-[35px]  grid md:flex items-center">
                        <div className="bg-[#282828] rounded-[35px] lg:rounded-[30px] -m-5 lg:-m-4 pt-[18px] pb-10 lg:py-2.5 px-[42px] md:px-11 lg:px-[20px] flex w-[calc(100%+40px)] md:w-[190px] items-center relative h-[190px] md:h-[calc(100%+16px)] lg:h-[calc(100%+32px)] ">
                          <h2
                            className="text-white text-[24px] md:text-[18px] lg:text-[16px] -tracking-[.05em] leading-[24px] lg:leading-[22px] font-Poppins font-medium !m-0 max-[767px]:!mb-4 max-[1024px]:!mb-4
                          hidden md:block"
                          >
                            Annual <br /> Subscription
                            <span className="block md:hidden text-[22px] text-white font-Montserrat font-medium ">
                              Unlock{" "}
                              <strong className="font-bold text-[20px]">
                                full
                              </strong>{" "}
                              catalogue access to our{" "}
                              <strong className="font-bold text-[20px]">
                                top-rated
                              </strong>{" "}
                              courses and professional certificates.
                            </span>
                          </h2>
                          <h2
                            className="text-white text-[24px] md:text-[18px] lg:text-[16px] -tracking-[.05em] leading-[24px] lg:leading-[22px] font-Poppins 
                            font-medium !m-0 max-[767px]:!mb-4 max-[1024px]:!mb-4 block md:hidden"
                          >
                            Annual Subscription
                            <span className="block md:hidden text-[14px] text-white font-Montserrat font-medium mt-1.5 leading-[24px]">
                              Unlock{" "}
                              <strong className="font-bold text-[20px]">
                                full
                              </strong>{" "}
                              catalogue access to our <br />
                              <strong className="font-bold text-[20px]">
                                top-rated
                              </strong>{" "}
                              courses and professional certificates.
                            </span>
                          </h2>
                          <div className="size-20 md:size-[50px] absolute -bottom-10 md:top-1/2 max-[767px]:left-1/2 md:-right-[25px] max-[767px]:-translate-x-1/2 md:-translate-y-1/2 rounded-full  grid md:flex items-center justify-center bg-[#CCDD00]">
                            <img
                              src="../images/edX.png"
                              alt=""
                              className="max-[1024px]:w-[36px] w-[36px]"
                            />
                          </div>
                        </div>
                        <div className="max-[767px]:px-2 max-[767px]:pt-[80px] max-[767px]:pb-[30px] md:pl-[58px] lg:pl-[52px] lg:pr-5">
                          <ul className="grid gap-3 md:gap-2">
                            <li className="flex gap-2 items-center">
                              <i className="max-[1024px]:w-[6px]">
                                <img src="../images/logo-icon.svg" alt="" />
                              </i>
                              <span className="text-[14px] md:text-[8px] lg:text-[10px] text-[#282828] font-medium font-Montserrat leading-[17px] md:leading-[10px] lg:leading-[14px]">
                                Unlimited access to our top-rated courses.
                              </span>
                            </li>
                            <li className="flex gap-2 items-center">
                              <i className="max-[1024px]:w-[6px]">
                                <img src="../images/logo-icon.svg" alt="" />
                              </i>
                              <span className="text-[14px] md:text-[8px] lg:text-[10px] text-[#282828] font-medium font-Montserrat leading-[17px] md:leading-[10px] lg:leading-[14px]">
                                Specialized professional certificates.
                              </span>
                            </li>
                            <li className="flex gap-2 items-center">
                              <i className="max-[1024px]:w-[6px]">
                                <img src="../images/logo-icon.svg" alt="" />
                              </i>
                              <span className="text-[14px] md:text-[8px] lg:text-[10px] text-[#282828] font-medium font-Montserrat leading-[17px] md:leading-[10px] lg:leading-[14px]">
                                Exclusive World-class Content.
                              </span>
                            </li>
                            <li className="flex gap-2 items-center">
                              <i className="max-[1024px]:w-[6px]">
                                <img src="../images/logo-icon.svg" alt="" />
                              </i>
                              <span className="text-[14px] md:text-[8px] lg:text-[10px] text-[#282828] font-medium font-Montserrat leading-[17px] md:leading-[10px] lg:leading-[14px]">
                                Global learning experiences.
                              </span>
                            </li>
                            <li className="flex gap-2 items-center">
                              <i className="max-[1024px]:w-[6px]">
                                <img src="../images/logo-icon.svg" alt="" />
                              </i>
                              <span className="text-[14px] md:text-[8px] lg:text-[10px] text-[#282828] font-medium font-Montserrat leading-[17px] md:leading-[10px] lg:leading-[14px]">
                                Proven career outcomes.
                              </span>
                            </li>
                            <li className="flex gap-2 items-center">
                              <i className="max-[1024px]:w-[6px]">
                                <img src="../images/logo-icon.svg" alt="" />
                              </i>
                              <span className="text-[14px] md:text-[8px] lg:text-[10px] text-[#282828] font-medium font-Montserrat leading-[17px] md:leading-[10px] lg:leading-[14px]">
                                Internationally recognized certificates.
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="w-full md:w-[200px] max-[767px]:flex max-[767px]:flex-col max-[767px]:justify-center 
                          max-[767px]:items-center  max-[767px]:pb-4 max-[767px]:px-5 max-[1024px]:pl-10"
                        >
                          <p className="flex text-[#282828] text-[28px] font-bold font-Poppins items-center leading-[45px]">
                            ${firstPaymentAmount}
                            <sub className="text-[14px] font-Montserrat font-medium leading-[100%] pt-2 pl-2 max-[1024px]:whitespace-nowrap">
                              / 1{" "}
                              <sup className="text-[10px] font-Montserrat font-medium leading-[100%] -ml-[5px]">
                                st
                              </sup>{" "}
                              Payment
                            </sub>{" "}
                            <sup className="text-[10px] font-Poppins font-medium leading-[100%] top-[4px] pl-0.5 hidden lg:block">
                              1
                            </sup>
                          </p>
                          <div className="gap-0.5 grid">
                            <p className="text-[10px] text-[#363636] font-Montserrat leading-[12px] relative pl-2.5">
                              <sup className="absolute left-0 text-[9px] pr-1 top-1">
                                1
                              </sup>
                              Registration applies to the first payment of $
                              {firstPaymentAmount}.00, after which plans are
                              converted to quartely.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="w-full md:h-[136px] lg:h-[160px] border-[1px] border-[#111111] rounded-[35px]  grid md:flex items-center">
                        <div
                          className="bg-[#CCDD00] rounded-[35px] lg:rounded-[30px] -m-5 lg:-m-4 pt-[18px] pb-10 lg:py-2.5 px-[42px] md:px-5 lg:px-[20px] flex w-[calc(100%+40px)] 
                        md:w-[190px] items-center relative h-[190px] md:h-[calc(100%+16px)] lg:h-[calc(100%+32px)] "
                        >
                          <h2 className="text-[#282828] text-[24px] md:text-[18px] lg:text-[16px] -tracking-[.05em] leading-[28px] md:leading-[24px] lg:leading-[22px] font-Poppins font-medium !m-0">
                            Inexa's Uniquely <br /> Designed <br /> Learning{" "}
                            <br />
                            Experiences
                          </h2>
                          <div
                            className="size-20 md:size-[50px] absolute -bottom-10 md:top-1/2 max-[767px]:left-1/2 md:-right-[25px] max-[767px]:-translate-x-1/2 
                          md:-translate-y-1/2 rounded-full  grid md:flex items-center justify-center bg-[#282828]"
                          >
                            <img
                              src="../images/logoIconWhite.png"
                              alt=""
                              className="max-[767px]:w-[36px] md:w-[22px]"
                            />
                          </div>
                        </div>
                        <div className="max-[767px]:px-2 max-[767px]:pt-[80px] max-[767px]:pb-[30px] md:pl-[58px] lg:pl-[52px] lg:pr-5">
                          <ul className="grid gap-2">
                            <li className="flex gap-2 items-center">
                              <i className="max-[1024px]:w-[6px]">
                                <img src="../images/logo-icon.svg" alt="" />
                              </i>
                              <span className="text-[14px] md:text-[8px] lg:text-[10px] text-[#282828] font-medium font-Montserrat leading-[17px] md:leading-[10px] lg:leading-[14px]">
                                Fully interactive learning experiences.
                              </span>
                            </li>
                            <li className="flex gap-2 items-center">
                              <i className="max-[1024px]:w-[6px]">
                                <img src="../images/logo-icon.svg" alt="" />
                              </i>
                              <span className="text-[14px] md:text-[8px] lg:text-[10px] text-[#282828] font-medium font-Montserrat leading-[17px] md:leading-[10px] lg:leading-[14px]">
                                specialized subject matter experts.
                              </span>
                            </li>
                            <li className="flex gap-2 items-center">
                              <i className="max-[1024px]:w-[6px]">
                                <img src="../images/logo-icon.svg" alt="" />
                              </i>
                              <span className="text-[14px] md:text-[8px] lg:text-[10px] text-[#282828] font-medium font-Montserrat leading-[17px] md:leading-[10px] lg:leading-[14px]">
                                Impactful learning journeys.
                              </span>
                            </li>
                            <li className="flex gap-2 items-center">
                              <i className="max-[1024px]:w-[6px]">
                                <img src="../images/logo-icon.svg" alt="" />
                              </i>
                              <span className="text-[14px] md:text-[8px] lg:text-[10px] text-[#282828] font-medium font-Montserrat leading-[17px] md:leading-[10px] lg:leading-[14px]">
                                Global cost-effective programs.
                              </span>
                            </li>
                            <li className="flex gap-2 items-center">
                              <i className="max-[1024px]:w-[6px]">
                                <img src="../images/logo-icon.svg" alt="" />
                              </i>
                              <span className="text-[14px] md:text-[8px] lg:text-[10px] text-[#282828] font-medium font-Montserrat leading-[17px] md:leading-[10px] lg:leading-[14px]">
                                Real-world practical application.
                              </span>
                            </li>
                            <li className="flex gap-2 items-center">
                              <i className="max-[1024px]:w-[6px]">
                                <img src="../images/logo-icon.svg" alt="" />
                              </i>
                              <span className="text-[14px] md:text-[8px] lg:text-[10px] text-[#282828] font-medium font-Montserrat leading-[17px] md:leading-[10px] lg:leading-[14px]">
                                Tailored Programs for enterprises worldwide.
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div
                          className="w-full md:w-[200px] max-[767px]:flex max-[767px]:flex-col max-[767px]:justify-center 
                          max-[767px]:items-center  max-[767px]:pb-4 max-[767px]:px-5 max-[1024px]:pl-10"
                        >
                          <p className="flex text-[#3322FF] text-[28px] font-bold font-Poppins items-center leading-[42px]">
                            ${quarterlyPaymentAmount}
                            <sub className="text-[14px] font-Montserrat font-medium leading-[100%] pt-2 pl-2">
                              / Quarterly
                            </sub>{" "}
                            <sup className="text-[10px] font-Poppins font-medium leading-[100%] top-[5px] pl-0.5">
                              12
                            </sup>
                          </p>
                          <div className="gap-0.5 grid max-[1024px]:px-2">
                            <p className="text-[10px] text-[#363636] font-Montserrat leading-[12px] relative pl-2.5">
                              <sup className="absolute left-0 text-[9px] pr-1 top-1">
                                1
                              </sup>
                              Three quarterly payments of $
                              {quarterlyPaymentAmount}.00.
                            </p>
                            <p className="text-[10px] text-[#363636] font-Montserrat leading-[12px] relative pl-2.5">
                              <sup className="absolute left-0 text-[9px] pr-1 top-1">
                                2
                              </sup>
                              Total price of $
                              {firstPaymentAmount + quarterlyPaymentAmount * 3}{" "}
                              for 1st payment of ${firstPaymentAmount}.00 +
                              three quarterly payments of $
                              {quarterlyPaymentAmount}.00 for an annual
                              subscription.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* </Container> */}
                </div>
                <div className="max-[767px]:w-full max-[1024px]:w-[634px] max-[1024px]:mx-auto max-[1024px]:p-2.5">
                  <h5 className="text-[14px] font-[600] leading-[20px] mb-[20px]">
                    Important Note
                  </h5>
                  <p className="text-[14px] font-[500] leading-[20px]">
                    To enhance your learning experience, we offer access to
                    Learner Support Agents and Online Instructors:
                  </p>
                  <ul className="mt-[8px]">
                    <li class="flex gap-2 items-center">
                      <i>
                        <img alt="" src="../images/logo-icon.svg" />
                      </i>
                      <span class="text-[14px] text-[#282828] font-medium font-Montserrat leading-[20px]">
                        Learner Support Agents are assigned to courses with
                        three or more active learners.
                      </span>
                    </li>
                    <li class="flex gap-2 items-center">
                      <i>
                        <img alt="" src="../images/logo-icon.svg" />
                      </i>
                      <span class="text-[14px] text-[#282828] font-medium font-Montserrat leading-[20px]">
                        Online Instructors drive our top courses to ensure the
                        highest quality learning experiences.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </Layout>
  );
};

export default Checkout;
