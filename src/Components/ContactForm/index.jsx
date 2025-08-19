import { useState } from "react";
import FormButton from "../Buttons/FormButton";
import { IoIosWarning } from "react-icons/io";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import { sendContactForm } from "../../api/contact";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { parsePhoneNumberFromString } from "libphonenumber-js";

const ContactForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    call: "",
    message: "",
  });

  // Focus states
  const [isFullNameFocused, setIsFullNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isMobileNumberFocused, setIsMobileNumberFocused] = useState(false);
  const [isMessageFocused, setIsMessageFocused] = useState(false);
  const [countryCode, setCountryCode] = useState("us");

  // Submission states
  const [successMessage, setSuccessMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Error states
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    call: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Handle phone number change
  const handlePhoneChange = (value, country) => {
    console.log('res value :>> ', value, country);
    const phoneNumber = "+" + value || "";
    setFormData((prev) => ({
      ...prev,
      mobileNumber: phoneNumber || "",
    }));

    // Clear error when user starts typing
    if (!validatePhoneNumber(phoneNumber)) {
      setErrors((prev) => ({
        ...prev,
        mobileNumber: "Please enter a valid mobile number",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        mobileNumber: "",
      }));
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Validate phone number
  const validatePhoneNumber = (phoneNumber) => {
    const parsedNumber = parsePhoneNumberFromString(phoneNumber);
    return parsedNumber?.isValid() ?? false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    let isValid = true;
    const newErrors = {
      fullName: "",
      email: "",
      mobileNumber: "",
      call: "",
      message: "",
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
      isValid = false;
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Name must be at least 3 characters long";
      isValid = false;
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Validate phone number
    if (!formData.mobileNumber) {
      newErrors.mobileNumber = "Please enter your mobile number";
      isValid = false;
    } else if (!validatePhoneNumber(formData.mobileNumber)) {
      newErrors.mobileNumber = "Please enter a valid mobile number";
      isValid = false;
    }

    // Validate WhatsApp call selection
    if (!formData.call) {
      newErrors.call = "Please select an option";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      try {
        // Simulate API call (replace with actual submission)
        await sendContactForm(formData).then((res) => {
          if (res.status === 200) {
            // On successful submission
            setSuccessMessage(true);

            // Reset form (optional)
            setFormData({
              fullName: "",
              email: "",
              mobileNumber: "",
              call: "",
              message: "",
            });
          }
        });
      } catch (error) {
        console.error("Form submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setIsSubmitting(false);
    }
  };

  const closeSuccessMessage = () => {
    setSuccessMessage(false);
  };

  return (
    <>
      <form
        className="flex flex-col gap-8 md:w-[244px] lg:w-auto"
        onSubmit={handleSubmit}
      >
        {/* Full Name Input */}
        <div className="input-item relative">
          <input
            className={`input-field name ${errors.fullName ? "border-errorColor" : ""
              } ${formData.fullName ? "bg-white" : ""}`}
            type="text"
            name="fullName"
            id="fullName"
            value={formData.fullName}
            onFocus={() => setIsFullNameFocused(true)}
            onBlur={() => setIsFullNameFocused(false)}
            onChange={handleChange}
          />
          <div
            className={`floating-placeholder ${isFullNameFocused || formData.fullName
              ? "transform -translate-y-4 text-[12px] text-headingColor "
              : ""
              }`}
          >
            Full name
          </div>
          {errors.fullName && (
            <div className="error-div flex items-center gap-2">
              <IoIosWarning className="error-icon" />
              <p className="error">{errors.fullName}</p>
            </div>
          )}
        </div>

        {/* Email Input */}
        <div className="input-item relative">
          <input
            className={`input-field email ${errors.email ? "border-errorColor" : ""
              } ${formData.email ? "bg-white" : ""}`}
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
            onChange={handleChange}
          />
          <div
            className={`floating-placeholder ${isEmailFocused || formData.email
              ? "transform -translate-y-4 text-[12px] text-headingColor "
              : ""
              }`}
          >
            Email
          </div>
          {errors.email && (
            <div className="error-div flex items-center gap-2">
              <IoIosWarning className="error-icon" />
              <p className="error">{errors.email}</p>
            </div>
          )}
        </div>

        {/* Mobile Number Input with PhoneInput */}
        <div className="input-item relative">
          <PhoneInput
            country={countryCode}
            value={formData.mobileNumber}
            onCountryChange={setCountryCode}
            onChange={handlePhoneChange}
            enableSearch
          />
          <div
            className={`floating-placeholder ${isMobileNumberFocused || formData.mobileNumber
              ? "transform -translate-y-4 text-[12px] text-headingColor "
              : ""
              }`}
          >
            Mobile Phone
          </div>
          {errors.mobileNumber && (
            <div className="error-div flex items-center gap-2">
              <IoIosWarning className="error-icon" />
              <p className="error">{errors.mobileNumber}</p>
            </div>
          )}
        </div>

        {/* WhatsApp Call Section */}
        <div
          className={`input-item whatsapp-call border-b border-borderColor pb-8 ${errors.call ? "border-errorColor" : ""
            }`}
        >
          <p className="input-label mb-2 flex flex-wrap gap-x-3 items-center">
            <span className="font-medium">WhatsApp Call </span>
            <span className="text-[10px] leading-tight xs:leading-normal">
              (Request a WhatsApp callback)
            </span>
          </p>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 relative">
              <input
                className="cursor-pointer footer-radio"
                type="radio"
                id="yes-call"
                name="call"
                value="yes"
                checked={formData.call === "yes"}
                onChange={handleChange}
              />
              <label
                className="input-label cursor-pointer text-sm text-[#111] font-semibold"
                htmlFor="yes-call"
              >
                Call me back
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="cursor-pointer footer-radio"
                type="radio"
                id="no-call"
                name="call"
                value="no"
                checked={formData.call === "no"}
                onChange={handleChange}
              />
              <label
                className={`input-label cursor-pointer text-sm text-[#111] font-semibold`}
                htmlFor="no-call"
              >
                No
              </label>
            </div>
          </div>
          {errors.call && (
            <div className="error-div flex items-center gap-2">
              <IoIosWarning className="error-icon" />
              <p className="error">{errors.call}</p>
            </div>
          )}
        </div>

        {/* Message Input */}
        <div className="input-item relative">
          <textarea
            className={`input-field resize-none h-20 tracking-wide leading-[27px] mt-3  ${formData.message ? "bg-white" : ""
              }`}
            name="message"
            id="message"
            rows="7"
            value={formData.message}
            onFocus={() => setIsMessageFocused(true)}
            onBlur={() => setIsMessageFocused(false)}
            onChange={handleChange}
          />
          <div
            className={`floating-placeholder ${isMessageFocused || formData.message
              ? "transform -translate-y-4 text-[12px] text-headingColor "
              : ""
              }`}
          >
            Message
          </div>
        </div>

        <FormButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </FormButton>
      </form>

      {/* Success Message Modal */}
      {successMessage && (
        <div
          className="fixed inset-0 rounded-none bg-black bg-opacity-90 z-30 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeSuccessMessage}
        >
          <div className="bg-whiteColor rounded-xl p-8 max-w-2xl w-full text-center">
            <div className="flex justify-center mb-4">
              {/* <IoCheckmarkCircle className="text-green-500 text-6xl" /> */}
              <img src="/images/A.webp" alt="image" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-green-500">
              Form has been Submitted Successfully!
            </h3>
            <p className="mb-6 text-textColor2 font-normal leading-normal">
              Thank you for contacting us. <br /> We'll get back to you soon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="btn-smpl btn-white-transparent "
                onClick={closeSuccessMessage}
              >
                Go to Home
              </Link>
              <button
                className="btn-blue-transparent"
                onClick={closeSuccessMessage}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
