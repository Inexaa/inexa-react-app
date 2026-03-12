import { useState, useEffect } from "react";
import { IoIosWarning, IoMdClose } from "react-icons/io";
import { submitEnquiry } from "../../api/enquiry";

const EnquiryPopup = ({
  courseId,
  courseTitle,
  user,
  onClose,
  onSuccess,
  sourcePage,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
  });

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        fullName:
          user.first_name && user.last_name
            ? `${user.first_name} ${user.last_name}`.trim()
            : prev.fullName,
        email: user.email || prev.email,
      }));
    }
  }, [user]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    let isValid = true;
    const newErrors = {
      fullName: "",
      email: "",
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
      isValid = false;
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Name must be at least 3 characters long";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      try {
        const response = await submitEnquiry({
          full_name: formData.fullName.trim(),
          email: formData.email.trim(),
          phone: null,
          whatsapp_callback: false,
          course_id: courseId || null,
          course_title: courseTitle || null,
          source_page: sourcePage || window.location.pathname,
        });

        if (response.status === 201) {
          setShowSuccess(true);
          if (onSuccess) {
            onSuccess(courseId);
          }
        }
      } catch (error) {
        console.error("Enquiry submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (showSuccess) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        onClick={handleBackdropClick}
      >
        <div className="bg-white rounded-xl p-8 max-w-md w-full text-center relative shadow-2xl">
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            onClick={onClose}
            aria-label="Close"
          >
            <IoMdClose size={24} />
          </button>
          <div className="flex justify-center mb-4">
            <img src="/images/A.webp" alt="Success" className="w-20 h-20" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-green-500">
            Thank You!
          </h3>
          <p className="mb-6 text-gray-600 font-normal leading-normal">
            Your enquiry has been submitted successfully.
            <br />
            Our team will contact you shortly.
          </p>
          <button
            className="btn-blue-transparent px-8 py-2"
            onClick={onClose}
          >
            Continue Browsing
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl p-6 md:p-8 max-w-md w-full relative max-h-[90vh] overflow-y-auto shadow-2xl">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          onClick={onClose}
          aria-label="Close"
        >
          <IoMdClose size={24} />
        </button>

        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
            Interested in this program?
          </h2>
          <p className="text-gray-600 text-sm">
            Share your details and our counselors will reach out to help you.
          </p>
          {courseTitle && (
            <p className="text-blue-600 text-sm mt-2 font-medium truncate">
              {courseTitle}
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="input-item relative">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name *
            </label>
            <input
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              }`}
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && (
              <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                <IoIosWarning />
                <span>{errors.fullName}</span>
              </div>
            )}
          </div>

          <div className="input-item relative">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email *
            </label>
            <input
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                <IoIosWarning />
                <span>{errors.email}</span>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
          >
            {isSubmitting ? "Submitting..." : "Get in Touch"}
          </button>

          <p className="text-xs text-gray-500 text-center">
            By submitting, you agree to be contacted by our team regarding this
            program.
          </p>
        </form>
      </div>
    </div>
  );
};

export default EnquiryPopup;
