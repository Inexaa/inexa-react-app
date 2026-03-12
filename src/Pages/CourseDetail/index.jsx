import React, { useState, useEffect, useRef, useMemo, useContext } from "react";
import Layout from "../../Components/Layout";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import CourseHighlights from "../../Components/CourseHighlights";
import axiosInstance from "../../api/axiosInstance";
import HtmlListWithIcon from "../../Components/HtmlListWithIcon";
import { parseModuleBreakdown } from "../../utils";
import Container from "../../Components/Container";
import { getCourseTypeStyles } from "../Courses2/AllCourses";
import { convertWeeksToMonths } from "../Courses2";
import { useCurrency } from "../../context/CurrencyContext";
import { UserContext } from "../../UserContext";
import EnquiryPopup from "../../Components/EnquiryPopup";
import useEnquiryPopup from "../../hooks/useEnquiryPopup";
//Section Prerequisities
const prerequisitesData = {
  title: "Prerequisites",
  description:
    "To optimize your success in this program, we've created a list of prerequisites and recommendations to help you prepare for the curriculum. Before enrolling, you should have the following knowledge:",
  requirements: [
    "Learn new concepts from industry experts",
    "Gain a foundational understanding of a subject or tool",
  ],
  additionalInfo:
    "You will also need to be able to communicate fluently and professionally in written and spoken English.",
  imageUrl: "/images/prerequisite.png",
  imageAlt: "Course prerequisites illustration",
};
//End Section Prerequisities

// Section About Certificate
const aboutCertificate = {
  tag: "certificate",
  title: "about certificate",
  description:
    "Share what you've learned, and be a standout professional in your desired industry with a certificate showcasing your knowledge gained from this course is in collaboration with edX",
  mainImage: "/images/certification.png",
  mainImageAlt: "about certificate",
  socialLinks: [
    {
      image: "/images/certi_linkedin.svg",
      alt: "LinkedIn",
      url: "https://www.linkedin.com",
    },
    {
      image: "/images/certi_facebook.svg",
      alt: "Facebook",
      url: "https://www.facebook.com",
    },
    {
      image: "/images/certi_twitter.svg",
      alt: "Twitter",
      url: "https://www.twitter.com",
    },
    {
      image: "/images/certi_download.svg",
      alt: "Download",
      url: "https://www.example.com/download",
    },
  ],
};
// End Section About Certificate

// Section Course Curriculum
const courseCurriculum = {
  title: "course curriculum",
  description:
    "Kickstart your learning of Python with this beginner-friendly self-paced course taught by an expert. Python is one of the most popular languages in the programming and data science world and demand for individuals who have the ability to apply Python has never been higher.",
};
// End Section Course Curriculum

const courseLevel = {
  introductory: "No prior experience is required",
  intermediate: "Some prior experience required",
  advanced: "Extensive prior experience required",
};

const heroImage = {
  course: "course-detail-page-A.png",
  "professional-certificate": "certificate-detail-page-A.png",
  micromasters: "micromasters-detail-page.png",
  microbachelors: "microbachelors-detail-page.png",
  degree: "degree-detail-page.png",
  xseries: "xseries-detail-page.png",
};
// Reusable modal for language lists
const LanguageListModal = ({ open, onClose, title, languages }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 rounded-none">
      <div className="bg-white rounded-lg p-6 min-w-[300px] max-w-[90vw]">
        <h3 className="text-lg font-bold mb-4">{title}</h3>
        <ul className="mb-4">
          {languages?.map((lang, idx) => (
            <li
              key={idx}
              className="py-1 px-2 border-b last:border-b-0 text-blackColor2"
            >
              {lang}
            </li>
          ))}
        </ul>
        <button
          className="btn-blue-transparent mt-2 px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const CourseDetail = () => {
  const location = useLocation();
  const [courseBreakdown1, setCourseBreakdown1] = useState(false);
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { courseId } = useParams();
  const [openLangModal, setOpenLangModal] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [descOverflow, setDescOverflow] = useState(false);
  const descRef = useRef(null);
  const navigate = useNavigate();
  
  const { user } = useContext(UserContext);
  
  const { 
    getDisplayPrice, 
    isLocalCurrency, 
    firstPaymentAmountUSD, 
    quarterlyPaymentAmountUSD,
    convertToLocalCurrency,
    formatCurrency
  } = useCurrency();
  
  const isProgram = courseData?.content_type === "program";
  
  const { showPopup, closePopup, markSubmitted } = useEnquiryPopup(
    !!courseData,  // Enable for all courses when data is loaded
    courseData?.id
  );

  // Helper to format course-specific pricing with currency conversion
  const formatCoursePrice = (amount) => {
    if (!amount) return '';
    const converted = convertToLocalCurrency(amount);
    return formatCurrency(converted);
  };

  const getPricingDisplay = () => {
    const pricing = courseData?.pricing;
    if (!pricing) return null;

    if (pricing.type === 'subscription') {
      return {
        type: 'subscription',
        mainPrice: getDisplayPrice("quarterly"),
        mainLabel: '/ Quarterly',
        firstPayment: getDisplayPrice("first"),
        total: getDisplayPrice("total"),
        usdTotal: firstPaymentAmountUSD + quarterlyPaymentAmountUSD * 3,
        quarterlyUsd: quarterlyPaymentAmountUSD,
        firstPaymentUsd: firstPaymentAmountUSD
      };
    }

    if (pricing.type === 'custom') {
      const totalAnnual = pricing.first_payment + (pricing.quarterly_payment * 3);
      return {
        type: 'custom',
        mainPrice: formatCoursePrice(pricing.quarterly_payment),
        mainLabel: '/ Quarterly',
        firstPayment: formatCoursePrice(pricing.first_payment),
        total: formatCoursePrice(totalAnnual),
        usdTotal: totalAnnual,
        quarterlyUsd: pricing.quarterly_payment,
        firstPaymentUsd: pricing.first_payment
      };
    }

    return null;
  };

  useEffect(() => {
    console.log("working :>> ");
    const fetchCourseData = async () => {
      try {
        const response = await axiosInstance.get(`/courses/slug/${courseId}`);
        setCourseData(response?.data?.data);
        setLoading(false);
      } catch (err) {
        navigate("/");
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [location]);

  useEffect(() => {
    if (descRef.current) {
      // Calculate the height of 8 lines
      const lineHeight = 30;
      const maxHeight = lineHeight * 12;
      console.log(
        "maxHeight :>> ",
        maxHeight,
        descRef.current.scrollHeight,
        descRef.current.scrollHeight > maxHeight + 1
      );
      setDescOverflow(descRef.current.scrollHeight > maxHeight + 1); // +1 for rounding
    }
  }, [courseData?.short_description, showFullDescription]);

  const moduleBreakdown = useMemo(
    () => parseModuleBreakdown(courseData?.course_modules),
    [courseData?.course_modules]
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Helper to format date as '01 Feb 2025'
  function formatDateLong(dateStr) {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .replace(/ /g, " ");
  }

  // Build highlights dynamically from API data
  const courseHighlightsData = [
    {
      id: 1,
      courseHighlightIcon: "/images/interactive_learning.svg",
      courseHighlightIconAlt: "icon",
      courseHighlightHeading: "Fully interactive learning",
      courseHighlightPara: "Interact, and communicate with your peers",
    },
    {
      id: 2,
      courseHighlightIcon: "/images/modules.svg",
      courseHighlightIconAlt: "icon",
      courseHighlightHeading: !isProgram
        ? "Modules"
        : courseData?.courses.length + " courses",
      courseHighlightPara: "Specialized skills courses",
    },
    {
      id: 3,
      courseHighlightIcon: "/images/course-duration.svg",
      courseHighlightIconAlt: "icon",
      courseHighlightHeading: `${convertWeeksToMonths(courseData?.weeks_to_complete) || "-"}`,
      courseHighlightPara: courseData?.efforts
        ? `at ${courseData.efforts.min_effort}-${courseData.efforts.max_effort} hours a week`
        : "",
    },
    {
      id: 4,
      courseHighlightIcon: !isProgram
        ? "/images/introductry.svg"
        : "/images/digital-certificate.svg",
      courseHighlightIconAlt: "icon",
      courseHighlightHeading: courseData?.course_level || "Introductory",
      courseHighlightPara: courseData?.course_level
        ? courseLevel[courseData?.course_level]
        : "",
    },
  ];
  const style = getCourseTypeStyles(courseData?.program_type_slug);

  return (
    <>
      <Layout>
        <section className="pt-[83px]">
          <Container>
            <div className="md:flex items-center md:pt-14px pb-10 lg:px-10 lg:py-[58px] max-[767px]:px-2.5">
              <div className="w-full md:w-[calc(100%-273px)] lg:w-[calc(100%-450px)]">
                <div className="grid gap-1 md:gap-2 mb-[27px] lg:mb-4">
                  <ul className="flex items-center gap-6 relative">
                    <li
                      className="relative before:content-[''] before:bg-[#888888] before:absolute before:-right-3 before:top-1/2 before:h-[38px] 
                  before:w-[1.38px] before:-translate-y-1/2 "
                    >
                      {courseData?.course_provider &&
                        courseData?.course_provider?.image && (
                          <img
                            className="w-20 "
                            alt={courseData?.course_provider?.name}
                            src={courseData?.course_provider?.image}
                          />
                        )}
                    </li>
                    <li>
                      {courseData?.owners &&
                        courseData?.owners?.certificate_logo_image_url && (
                          <img
                            className="lg:w-20 max-[767px]:max-h-[40px] max-[1024px]:max-h-[35px]"
                            alt={courseData?.owners?.name}
                            src={courseData?.owners?.certificate_logo_image_url}
                          />
                        )}
                    </li>
                  </ul>
                  <p className="font-Poppins text-[#666] text-[12px] md:text-[14px] lg:text-[16px] leading-[21px] lg:leading-[24px] font-medium">
                    {courseData?.owners?.name}
                  </p>
                </div>
                <div className="grid gap-4 md:gap-6 lg:gap-8 ">
                  <div className="grid gap-4 md:gap-6 lg:gap-[7px]">
                    <h5 className="text-[#282828] text-[21px] md:text-[32px] font-Poppins font-medium leading-[32px] md:leading-[52px] lg:leading-[150%] -tracking-[.02em] m-0">
                      {courseData?.title}
                    </h5>
                    {!isProgram && courseData?.programs.length > 0 && (
                      <p className="font-Montserrat text-[16px] font-medium text-[#282828] tracking-[.02em] leading-[28px] md:leading-[26px] lg:leading-[20px]">
                        This course is part of
                        {courseData?.programs?.map((program) => {
                          return (
                            <Link
                              className="text-[#3322FF] underline ml-1"
                              to={`/course/${program?.key}`}
                            >
                              {program?.title}
                            </Link>
                          );
                        })}
                      </p>
                    )}
                  </div>
                  <div className="grid md:flex flex-wrap gap-[19px] md:gap-x-[19px] md:gap-y-2 lg:gap-x-[18px] lg:gap-y-[18px] max-[767px]:mb-2">
                    {courseData?.staff &&
                      courseData?.staff?.map((staff) => {
                        return (
                          <div className="flex items-center gap-1.5 lg:gap-0">
                            <span>
                              <img
                                className="size-[35px] lg:size-[30px] rounded-full"
                                src={staff?.profile_image_url}
                                alt={staff?.family_name}
                              />
                            </span>
                            <p className="text-[#282828] text-[12px] lg:text-[14px] tracking-[.02em] font-Montserrat font-medium leading-[17px]">
                              Instructor:
                              <Link
                                className="underline capitalize pl-1 text-[12px] lg:text-[14px]"
                                to="#"
                                data-discover="true"
                              >
                                {" "}
                                {staff?.given_name}{" "}
                                {staff?.family_name}{" "}
                              </Link>
                            </p>
                          </div>
                        );
                      })}
                  </div>
                  <div className="buttons flex flex-wrap gap-2 md:gap-5">
                    <Link
                      className="btn-blue-transparent btn-blue-fill h-[40px] py-0 px-[22px] md:px-6 lg:px-8 flex items-center justify-center 
                      md:text-[14px] lg:text-[16px] -tracking-[.02em] font-medium font-Poppins min-w-min"
                      to="/checkout"
                      data-discover="true"
                    >
                      Register now
                    </Link>
                    <Link
                      className="btn-blue-transparent h-[40px] py-0 px-[22px] md:px-6 lg:px-8 flex items-center justify-center 
                      md:text-[14px] lg:text-[16px] -tracking-[.02em] font-medium font-Poppins min-w-min"
                      to="/course-detail"
                      data-discover="true"
                    >
                      Get more information
                    </Link>
                  </div>
                  <div className="next-info grid gap-6 md:gap-2 lg:gap-4 mt-2 md:m-0">
                    {courseData?.start_date && (
                      <p className="text-[12px] md:text-[14px] lg:text-[16px] text-[#282828] font-Montserrat font-medium -tracking-[.02em] leading-[15px] md:leading-[17px] lg:leading-[20px]">
                        Next Start Date:{" "}
                        <span> {formatDateLong(courseData?.start_date)}</span>
                      </p>
                    )}
                    {!isProgram && Number(courseData?.enrollment_count) > 0 && (
                      <p className="text-[12px] md:text-[14px] lg:text-[16px] text-[#282828] font-Montserrat font-medium -tracking-[.02em] leading-[15px] md:leading-[17px] lg:leading-[20px]">
                        <span className="text-[#0000FF]">
                          {Number(
                            courseData?.enrollment_count
                          ).toLocaleString()}{" "}
                        </span>
                        <span>already enrolled</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-[335px] md:w-[249px] lg:w-[424px] max-[767px]:mx-auto md:ml-auto">
                <img
                  className=""
                  src={`/images/${!isProgram
                    ? heroImage[courseData?.content_type ?? "course"]
                    : heroImage[courseData?.program_type_slug]
                    }`}
                  alt="image"
                />
              </div>
            </div>
          </Container>

          <div className="pb-12 md:mb-10 lg:mb-[72px]">
            <CourseHighlights courseHighlightsData={courseHighlightsData} />
          </div>
        </section>

        {
          courseData.short_description && (
            <Container>
              <div className="grid gap-10 md:gap-6 lg:gap-20 lg:px-10 mb-10 lg:mb-20">
                <section className="grid gap-10 md:gap-4 lg:gap-10">
                  <div className="grid md:flex justify-between lg:gap-[42px] md:gap-4 items-center">
                    <div className="w-full md:w-[calc(100%-326px)] grid gap-4 md:gap-2 lg:gap-0">
                      <h4 className="text-[#282828] text-[21px] md:text-[28px] lg:text-[32px] font-medium font-Poppins leading-[32px] md:leading-[42px] lg:leading-[48px] m-0">
                        {courseData.content_type} overview
                      </h4>
                      <div
                        ref={descRef}
                        className={` ${showFullDescription
                          ? ""
                          : "line-clamp-7 overflow-hidden [&>p]:text-[#282828] [&>p]:text-[14px] lg:[&>p]:text-[16px] [&>p]:font-medium [&>p]:leading-[28px] lg:[&>p]:leading-[33px] [&>p]:font-Montserrat"
                          }`}
                        style={
                          !showFullDescription
                            ? {
                              display: "-webkit-box",
                              WebkitLineClamp: 7,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                            }
                            : {}
                        }
                        dangerouslySetInnerHTML={{
                          __html: courseData.short_description,
                        }}
                      />
                      {descOverflow && (
                        <button
                          className="text-[#3322FF] text-[16px] font-medium leading-[30px] font-Montserrat underline md:mt-2 lg:mt-4 text-left"
                          onClick={() => setShowFullDescription((v) => !v)}
                        >
                          {showFullDescription ? "Show less" : "Show more"}
                        </button>
                      )}
                    </div>
                    <div className="w-full md:w-[310px] lg:w-[503px] mt-5 md:mt-0">
                      <div>
                        <img
                          className="w-full rounded-3xl max-[767px]:h-[172px]"
                          src={"/images/overview.png"}
                          alt={courseData.title}
                        />
                      </div>
                    </div>
                  </div>
                  {!isProgram && courseData?.skills.length > 0 && (
                    <div className="grid gap-4 md:gap-6">
                      <h4 className="text-[#282828] text-[21px] md:text-[22px] font-medium leading-[32px] md:leading-[33px] block font-Poppins !m-0">
                        Skills you'll gain
                      </h4>
                      <ul className="flex flex-wrap gap-x-2 gap-y-4 md:gap-4 lg:gap-x-4 lg:gap-y-6 ">
                        {courseData?.skills.map((item) => {
                          return (
                            <Link to="/courses">
                              <li
                                key={item}
                                className="bg-[#E9EBED] px-4 py-[11px] rounded-[8px] text-[12px] capitalize text-[#282828] font-Montserrat font-semibold leading-[15px]"
                              >
                                {item}
                              </li>
                            </Link>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </section>

                <section>
                  {courseData?.outcome && (
                    <div className="grid gap-[28px] md:gap-6 lg:gap-4">
                      <h5 className="text-[#282828] text-[21px] lg:text-[20px] font-Poppins font-medium leading-[32px] lg:leading-[30px] block !m-0">
                        On completion of this program you'll learn{" "}
                      </h5>
                      {courseData?.outcome && (
                        <HtmlListWithIcon
                          html={courseData.outcome}
                          ulClassName="grid gap-2.5 lg:gap-4"
                          liClassName="flex gap-1 items-start"
                          iconSrc="/images/black-A.svg"
                          iconAlt="list icon"
                        />
                      )}
                    </div>
                  )}
                </section>

                {
                  !isProgram && (
                    <section className="grid md:flex gap-4 md:gap-4 lg:gap-[38px] justify-between items-center">
                      <div className="grid gap-4 lg:gap-[15px] md:w-[calc(100%-332px)]">
                        <div className="grid gap-[14px]">
                          <h5 className="text-[21px] lg:text-[22px] text-[#282828] font-Poppins font-medium md:leading-[32px] lg:leading-[33px]  !m-0">
                            {prerequisitesData.title}
                          </h5>
                          <p className="text-[#282828] md:text-[14px] lg:text-[16px] leading-[28px] font-Montserrat font-medium ">
                            {prerequisitesData.description}
                          </p>
                        </div>
                        {courseData?.prerequisites && (
                          <HtmlListWithIcon
                            html={courseData.prerequisites}
                            ulClassName="grid md:gap-2 lg:gap-4"
                            liClassName="flex gap-1 items-start"
                            iconSrc="/images/black-A.svg"
                            iconAlt="list icon"
                            allowParagraph
                          />
                        )}
                        <p className="text-[#282828] text-[14px] lg:text-[16px] leading-[28px] font-Montserrat font-medium mt-2 md:mt-0">
                          {prerequisitesData.additionalInfo}
                        </p>
                      </div>

                      <div className=" md:w-[306px] lg:w-[457px]">
                        <img
                          className="rounded-[15px] max-[767px]:h-[205px] max-[767px]:mx-auto"
                          src={prerequisitesData.imageUrl}
                          alt={prerequisitesData.imageAlt}
                        />
                      </div>
                    </section>
                  )
                }
              </div>
            </Container>
          )
        }

        <section className="pb-10 md:pb-[54px] lg:pb-20">
          <Container>
            <div className="bg-[#E9EBED] rounded-[30px] max-[767px]:gap-[26px] max-[767px]:pt-[50px] max-[767px]:pb-10 grid md:flex items-center px-2.5 md:pl-[31px] md:pr-[34px] lg:pl-[42px] lg:pr-10 relative gap-4 justify-between">
              <div className="md:w-[calc(100%-311px)] lg:w-[calc(100%-500px)] md:pt-[46px] lg:pt-[82px] md:pb-4">
                <h4 className="text-[21px] md:text-[28px] lg:text-[32px] text-[#282828] font-medium -tracking-[.02em] leading-[32px] md:leading-[42px] lg:leading-[48px] font-Poppins !m-0 capitalize">
                  {aboutCertificate.title}
                </h4>
                <p className="text-[#282828] text-[16px] md:text-[14px] lg:text-[16px] font-medium leading-[32px] md:leading-[30px] font-Montserrat mt-[16px] mb-[38px] md:mb-[41px] lg:mb-[18px] ">
                  {aboutCertificate.description}
                </p>
                <div className="gap-[26px] md:gap-0 grid md:flex items-end lg:max-w-[590px] justify-between">
                  <div className="grid md:gap-2 lg:gap-1.5">
                    <ul className="flex items-center gap-3">
                      <li className="border-r-2 border-[#888888] pe-3">
                        {courseData?.course_provider &&
                          courseData?.course_provider?.image && (
                            <img
                              className="w-16"
                              alt={courseData?.course_provider?.name}
                              src={courseData?.course_provider?.image}
                            />
                          )}
                      </li>
                      <li>
                        {courseData?.owners &&
                          courseData?.owners?.certificate_logo_image_url && (
                            <img
                              className="max-[1024px]:h-10 lg:w-16"
                              alt={courseData?.owners?.name}
                              src={
                                courseData?.owners?.certificate_logo_image_url
                              }
                            />
                          )}
                      </li>
                    </ul>
                    <p className="font-Poppins text-[#282828] text-[16px] font-medium leading-[24px]">
                      {courseData?.owners?.name}
                    </p>
                  </div>
                  <div className="social-media max-[767px]:relative max-[767px]:right-auto max-[1024px]:absolute max-[1024px]:right-[90px]">
                    <ul className="flex gap-[10px]">
                      {aboutCertificate.socialLinks.map((item, index) => {
                        return (
                          <li key={index}>
                            <Link
                              to={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              title={item.alt}
                            >
                              <img src={item.image} alt={item.alt} />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="md:w-[295px] lg:w-[432px] md:pt-4 lg:pt-[41px] md:pb-9">
                <img
                  className="rounded-25 shadow-[0px_2px_20px_rgba(0,0,0,0.25)]"
                  src={aboutCertificate.mainImage}
                  alt={aboutCertificate.mainImageAlt}
                />
              </div>

              <div className="bg-white inline-block px-4 py-2 absolute top-0 max-[767px]:right-9 md:left-10 xs:left-24 rounded-b-2xl h-10">
                <div className="size-6  absolute top-0 -right-[24px] rounded-tl-[10px] shadow-[-12px_-4px_0px_#ffffff] " />
                <div className="size-6  absolute top-0 -left-[24px] rounded-tr-[10px] shadow-[12px_-4px_0px_#ffffff] " />
                <div className="capitalize relative">
                  <span className="font-medium text-lg font-Poppins text-blackColor2">
                    {aboutCertificate.tag}
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="pb-8 md:pb-6 lg:pb-8">
          <Container>
            <div className="md:px-[10px] lg:px-10">
              <h4 className="text-[#282828] md:text-[21px] lg:text-[32px] font-medium -tracking-[.02em] font-Poppins !m-0 !mb-4 md:!mb-6 lg:!mb-5 md:leading-[32px] lg:leading-[48px] capitalize">
                {courseCurriculum.title}
              </h4>
              <div className="grid gap-[26px] md:flex md:gap-6 lg:gap-[71px] md:flex-start lg:items-baseline">
                <div className="w-full md:w-[400px] lg:w-[876px]">
                  <div
                    className="breakdowns border border-[#E0E0E0] px-2.5 lg:px-6 pt-[30px] lg:pt-5 pb-[30px] lg:pb-6 
                  rounded-3xl md:mb-[50px] duration-500"
                  >
                    <p
                      className="border-b border-[#E0E0E0] pb-6 lg:pb-5 mb-6 text-[#282828] text-[14px] lg:text-[16px] -tracking-[.02em] leading-[28px] 
                    font-Montserrat font-medium"
                    >
                      {courseData?.title}{" "}
                      {isProgram && courseData?.program_type_name}
                    </p>
                    <div className="breakdown-accordian duration-300">
                      <div className="">
                        <div
                          className={`flex gap-2.5 lg:gap-[15px] `}
                          onClick={() => setCourseBreakdown1(!courseBreakdown1)}
                        >
                          <div
                            className={`flex items-center  duration-300 ${courseBreakdown1
                              ? "rotate-45 text-primaryColor"
                              : ""
                              } `}
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M18 11.3307H11.3333V17.9974C11.3333 18.351 11.1929 18.6902 10.9428 18.9402C10.6928 19.1903 10.3536 19.3307 10 19.3307C9.64638 19.3307 9.30724 19.1903 9.05719 18.9402C8.80714 18.6902 8.66666 18.351 8.66666 17.9974V11.3307H2C1.64638 11.3307 1.30724 11.1903 1.05719 10.9402C0.80714 10.6902 0.666664 10.351 0.666664 9.9974C0.666664 9.64377 0.80714 9.30464 1.05719 9.05459C1.30724 8.80454 1.64638 8.66406 2 8.66406H8.66666V1.9974C8.66666 1.64377 8.80714 1.30463 9.05719 1.05459C9.30724 0.804538 9.64638 0.664062 10 0.664062C10.3536 0.664062 10.6928 0.804538 10.9428 1.05459C11.1929 1.30463 11.3333 1.64377 11.3333 1.9974V8.66406H18C18.3536 8.66406 18.6928 8.80454 18.9428 9.05459C19.1929 9.30464 19.3333 9.64377 19.3333 9.9974C19.3333 10.351 19.1929 10.6902 18.9428 10.9402C18.6928 11.1903 18.3536 11.3307 18 11.3307Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-[18px] font-Poppins texzt-[#282828] -tracking-[.02em] font-medium leading-[27px] md:leading-[32px]">
                              {isProgram ? "Courses" : "Modules"} breakdown
                            </p>
                          </div>
                        </div>

                        <div className="content-bar overflow-hidden">
                          <div
                            className={`content overflow-hidden transition-all duration-500 ease-in-out ${courseBreakdown1
                              ? "max-h-[600px] overflow-y-auto"
                              : "max-h-0 "
                              } `}
                          >
                            {!isProgram && courseData?.course_modules ? (
                              <ul className="brekdown-bar flex flex-col gap-6 pt-6">
                                {moduleBreakdown.map((item, idx) => (
                                  <li
                                    key={idx}
                                    className="bar-item text-blackColor2"
                                  >
                                    <div className="flex gap-3 ">
                                      <div className="relative">
                                        <img
                                          src={item.breakDownImage}
                                          alt={item.breakDownImageAlt}
                                          className="module-image min-w-[20px] max-w-[20px]"
                                        />
                                        <div className="vertical-line w-[1px] absolute left-1/2 h-full bg-borderColor2 -z-10"></div>
                                      </div>
                                      <div className="grid gap-1">
                                        <p
                                          className="text-[14px] text-[#282828] font-medium font-Poppins capitalize leading-[21px]"
                                          dangerouslySetInnerHTML={{
                                            __html: item.title,
                                          }}
                                        />
                                        <div
                                          className="text-[12px] text-[#8E8E8E] font-medium font-Montserrat capitalize leading-[15px]"
                                          dangerouslySetInnerHTML={{
                                            __html: item.breakDownInfo,
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <ul className="brekdown-bar flex flex-col gap-6 pt-6">
                                {isProgram && courseData?.courses && (
                                  <ul className="brekdown-bar flex flex-col gap-6 pt-6">
                                    {courseData.courses.map((item, index) => (
                                      <li
                                        key={index}
                                        className="bar-item text-blackColor2"
                                      >
                                        <div className="flex gap-2 items-center justify-between w-full">
                                          <div className="flex gap-2 items-center">
                                            <div className="relative">
                                              <img
                                                src={"/images/blue_list_A.svg"}
                                                alt={item.course_title}
                                                className="module-image w-5"
                                              />
                                              <div className="vertical-line w-[1px] absolute left-1/2 h-16 bg-borderColor2 -z-10"></div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                              <span
                                                className="font-semibold text-[15px] text-blackColor2 truncate"
                                                style={{
                                                  maxWidth: 310,
                                                  display: "inline-block",
                                                  overflow: "hidden",
                                                  textOverflow: "ellipsis",
                                                  whiteSpace: "nowrap",
                                                  verticalAlign: "middle",
                                                }}
                                              >
                                                {item.course_title}
                                              </span>
                                              <span className="font-bold text-xl text-blackColor2">
                                                -
                                              </span>
                                              <span className="text-[15px] font-medium text-[#2A4DFF]">
                                                ({item.efforts.min_effort} -{" "}
                                                {item.efforts.max_effort} hours
                                                per week, for{" "}
                                                {convertWeeksToMonths(item.weeks_to_complete)})
                                              </span>
                                            </div>
                                          </div>
                                          <Link
                                            to={`/course/${item.key || item.slug
                                              }`}
                                            className="ml-4 px-7 py-2 rounded-full bg-[#2A4DFF] text-white font-semibold text-base hover:bg-[#1a2fcc] transition-colors duration-200"
                                            style={{
                                              minWidth: "max-content",
                                              textAlign: "center",
                                            }}
                                          >
                                            View Course
                                          </Link>
                                        </div>
                                        {item.short_description && (
                                          <div className="text-gray-400 text-sm mt-1 ml-10">
                                            {item.short_description}
                                          </div>
                                        )}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full  md:w-[300px] lg:w-[349px] grid gap-4 lg:gap-5">
                  <h4 className="text-[#282828] text-[21px] lg:text-[24px] font-medium leading-[32px] lg:leading-[36px] !m-0">
                    Details to know
                  </h4>
                  <ul className="grid gap-5 lg:gap-4">
                    <li className="flex items-center gap-4 md:gap-5">
                      <div className="min-w-[30px]">
                        <img
                          src="/images/digital_certificate.svg"
                          alt="image"
                        />
                      </div>
                      <div className="grid gap-2">
                        <p className="md:text-[14px] text-[16px] text-[#282828] font-Poppins font-medium leading-[24px] lg:leading-[21px]">
                          International Digital Certificate
                        </p>
                        <p className="text-[#282828] font-Montserrat text-[14px] lg:text-[12px] font-medium leading-[17px] lg:leading-[15px]">
                          Add to your linkedin, and social media profiles
                        </p>
                      </div>
                    </li>
                    {courseData?.available_languages.length > 0 && (
                      <li className="flex items-center gap-5">
                        <div className="min-w-[30px]">
                          <img src="/images/lang.svg" alt="image" />
                        </div>
                        <div className="grid gap-2">
                          <p className="md:text-[14px] lg:text-[14px] text-[#282828] font-Poppins font-medium leading-[24px] lg:leading-[21px]">
                            Language
                          </p>
                          <p className="text-[#282828] font-Montserrat text-[14px] lg:text-[12px] font-medium leading-[17px] lg:leading-[15px]">
                            English (
                            <a
                              className="text-[#3322FF] font-Montserrat text-[12px] font-medium leading-[15px]"
                              href="#"
                              data-discover="true"
                              onClick={(e) => {
                                e.preventDefault();
                                setOpenLangModal("available");
                              }}
                            >
                              {courseData?.available_languages.length} language
                              English
                            </a>
                            )
                          </p>
                          <LanguageListModal
                            open={openLangModal === "available"}
                            onClose={() => setOpenLangModal(null)}
                            title="Available Languages"
                            languages={courseData?.available_languages}
                          />
                        </div>
                      </li>
                    )}
                    {courseData?.transcript_languages.length > 0 && (
                      <li className="flex items-center gap-5">
                        <div className="min-w-[30px]">
                          <img src="/images/video.svg" alt="image" />
                        </div>
                        <div className="grid gap-2">
                          <p className="md:text-[14px] lg:text-[14px] text-[#282828] font-Poppins font-medium leading-[24px] lg:leading-[21px]">
                            Video Transcripts
                          </p>
                          <p className="text-[#282828] font-Montserrat text-[14px] lg:text-[12px] font-medium leading-[17px] lg:leading-[15px]">
                            English (
                            <a
                              className="text-[#3322FF] font-Montserrat text-[12px] font-medium leading-[15px]"
                              href="#"
                              data-discover="true"
                              onClick={(e) => {
                                e.preventDefault();
                                setOpenLangModal("transcript");
                              }}
                            >
                              {courseData?.transcript_languages.length} language
                              English
                            </a>
                            )
                          </p>
                          <LanguageListModal
                            open={openLangModal === "transcript"}
                            onClose={() => setOpenLangModal(null)}
                            title="Available Transcript Languages"
                            languages={courseData?.transcript_languages}
                          />
                        </div>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {courseData?.staff?.length > 0 && (
          <section className="pb-[60px] md:pb-[55px] lg:pb-20">
            <Container>
              <div className="lg:px-10 grid gap-5 md:gap-[25px] lg:gap-5">
                <h3 className="text-[22px] text-[#282828] leading-[28px] block !m-0 font-Poppins font-medium">
                  Instructors
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-x-5 md:gap-y-[25px] lg:gap-5">
                  {courseData?.staff?.length > 0 &&
                    courseData.staff.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white border-[#E0E0E0] border-[1px] rounded-[16px] p-3"
                      >
                        <div className="flex items-center gap-4">
                          <div className="">
                            <img
                              className="size-[64px] md:size-10 lg:size-[64px] rounded-full object-cover"
                              src={item?.profile_image_url}
                              alt={item?.family_name}
                            />
                          </div>
                          <div className="grid gap-1.5">
                            <h4 className="!m-0 font-Poppins text-[14px] text-[#3322FF] font-medium leading-[21px]">
                              {item?.given_name} {" "} {item?.family_name}
                            </h4>
                            <p className="text-[#666] text-[10px] leading-[15px] font-Poppins font-medium">
                              {item?.position_title}
                            </p>
                          </div>
                          <div className=" ml-auto">
                            {item?.organization_logo_image_url && (
                              <img
                                className="size-[64px] md:size-10 lg:size-[64px] rounded-full object-cover"
                                src={item?.organization_logo_image_url}
                                alt={item?.family_name}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </Container>
          </section>
        )}

        <section className="pb-[60px] md:pb-[55px] lg:pb-[104px]">
          <Container>
            <div className="lg:px-10 grid gap-5">
              <ul className="grid md:flex lg:grid gap-[60px] md:gap-[56px] md:pl-4 md:items-baseline justify-center">
                <li className="w-[320px] lg:w-full h-full lg:h-[210px] border-[1px] border-[#111111] rounded-[50px]  grid lg:flex items-center">
                  <div className="bg-[#CCDD00] rounded-[35px] lg:rounded-[60px] -m-5 lg:-m-4 pt-[18px] pb-10 lg:py-2.5 px-11 lg:px-[50px] w-[calc(100%+40px)] md:w-[calc(100%+50px)] lg:w-[535px] relative h-[309px] lg:h-[calc(100%+32px)] max-[1024px]:grid max-[1024px]:gap-4 " style={{ backgroundColor: style.bgColor, color: style.textColor }}>
                    <h2 className="text-[#282828] text-[24px] md:text-[28px] lg:text-[32px] -tracking-[.05em] leading-[28px] lg:leading-[48px] font-Poppins font-medium !m-0 max-[1024px]:max-w-[255px] mb-4 lg:mb-0" style={{ backgroundColor: style.bgColor, color: style.textColor }}>
                      Inexa's Uniquely Designed Interactive Learning Experiences
                    </h2>
                    <p className="text-[#282828] text-[14px] font-Montserrat leading-[24px] font-medium" style={{ color: style.textColor }}>
                      Fully interactive{" "}
                      <strong className="text-[20px] font-bold">3000+</strong>{" "}
                      learning experiences where you will{" "}
                      <strong className="text-[20px] font-bold">
                        interact
                      </strong>{" "}
                      with your peers, Inexa's instructors, and support agents.
                    </p>
                    <div className="size-20 lg:size-[100px] absolute -bottom-10 lg:top-1/2 max-[1024px]:left-1/2 lg:-right-[50px] max-[1024px]:-translate-x-1/2 lg:-translate-y-1/2 rounded-full  grid lg:flex items-center justify-center bg-[#282828]">
                      <img
                        src="../images/logoIconWhite.png"
                        alt=""
                        className="w-9"
                      />
                    </div>
                  </div>
                  <div className="max-[767px]:pt-[80px] max-[1024px]:pt-[58px] px-2.5 lg:pl-[102px] lg:pr-12">
                    <ul className="grid gap-3">
                      <li className="flex gap-3 items-center">
                        <i>
                          <img
                            className="max-[767px]:w-[8px]"
                            src="../images/logo-icon.svg"
                            alt=""
                          />
                        </i>
                        <span className="text-[14px] text-[#282828] font-medium font-Montserrat leading-[17px]">
                          Fully interactive learning experiences.
                        </span>
                      </li>
                      <li className="flex gap-3 items-center">
                        <i>
                          <img
                            className="max-[767px]:w-[8px]"
                            src="../images/logo-icon.svg"
                            alt=""
                          />
                        </i>
                        <span className="text-[14px] text-[#282828] font-medium font-Montserrat leading-[17px]">
                          specialized subject matter experts.
                        </span>
                      </li>
                      <li className="flex gap-3 items-center">
                        <i>
                          <img
                            className="max-[767px]:w-[8px]"
                            src="../images/logo-icon.svg"
                            alt=""
                          />
                        </i>
                        <span className="text-[14px] text-[#282828] font-medium font-Montserrat leading-[17px]">
                          Impactful learning journeys.
                        </span>
                      </li>
                      <li className="flex gap-3 items-center">
                        <i>
                          <img
                            className="max-[767px]:w-[8px]"
                            src="../images/logo-icon.svg"
                            alt=""
                          />
                        </i>
                        <span className="text-[14px] text-[#282828] font-medium font-Montserrat leading-[17px]">
                          Global cost-effective programs.
                        </span>
                      </li>
                      <li className="flex gap-3 items-center">
                        <i>
                          <img
                            className="max-[767px]:w-[8px]"
                            src="../images/logo-icon.svg"
                            alt=""
                          />
                        </i>
                        <span className="text-[14px] text-[#282828] font-medium font-Montserrat leading-[17px]">
                          Real-World Practical Application.
                        </span>
                      </li>
                      <li className="flex gap-3 items-center">
                        <i>
                          <img
                            className="max-[767px]:w-[8px]"
                            src="../images/logo-icon.svg"
                            alt=""
                          />
                        </i>
                        <span className="text-[14px] text-[#282828] font-medium font-Montserrat leading-[17px]">
                          Tailored programs for enterprises worldwide.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full max-[767px]:mx-auto max-[767px]:w-[264px] lg:w-[283px] max-[1024px]:flex max-[1024px]:flex-col max-[1024px]:justify-center max-[1024px]:items-center max-[1024px]:mt-4 max-[1024px]:pb-4">
                    {(() => {
                      const pricingInfo = getPricingDisplay();
                      if (pricingInfo?.type === 'subscription') {
                        return (
                          <>
                            <p className="flex text-[#3322FF] text-[48px] font-bold font-Poppins items-center leading-[48px]">
                              {pricingInfo.mainPrice}
                              <sub className="text-[16px] font-Montserrat font-medium leading-[100%] pt-2 pl-2">
                                {pricingInfo.mainLabel}
                              </sub>{" "}
                              <sup className="text-[10px] font-Poppins font-medium leading-[100%] top-[5px] pl-0.5">
                                12
                              </sup>
                            </p>
                            <Link to="/checkout" className="mt-[7px] mb-[11px] rounded-full bg-[#3322FF] h-[42px] w-[153px] text-[14px] text-white font-medium -tracking-[.02em] font-Poppins flex items-center justify-center">
                              Register Now
                            </Link>
                            <div className="gap-0.5 grid max-[1024px]:px-2">
                              <p className="text-[12px] text-[#363636] font-Montserrat leading-[15px] relative pl-2.5">
                                <sup className="absolute left-0 text-[9px] pr-1 top-1">
                                  1
                                </sup>
                                Three quarterly payments of {formatCoursePrice(pricingInfo.quarterlyUsd)}.
                              </p>
                              <p className="text-[12px] text-[#363636] font-Montserrat leading-[15px] relative pl-2.5">
                                <sup className="absolute left-0 text-[9px] pr-1 top-1">
                                  2
                                </sup>
                                Total: {pricingInfo.total} for annual subscription.
                              </p>
                            </div>
                          </>
                        );
                      } else if (pricingInfo?.type === 'custom') {
                        return (
                          <>
                            <p className="flex text-[#3322FF] text-[48px] font-bold font-Poppins items-center leading-[48px]">
                              {pricingInfo.mainPrice}
                              <sub className="text-[16px] font-Montserrat font-medium leading-[100%] pt-2 pl-2">
                                {pricingInfo.mainLabel}
                              </sub>{" "}
                              <sup className="text-[10px] font-Poppins font-medium leading-[100%] top-[5px] pl-0.5">
                                12
                              </sup>
                            </p>
                            <Link to="/checkout" className="mt-[7px] mb-[11px] rounded-full bg-[#3322FF] h-[42px] w-[153px] text-[14px] text-white font-medium -tracking-[.02em] font-Poppins flex items-center justify-center">
                              Enroll Now
                            </Link>
                            <div className="gap-0.5 grid max-[1024px]:px-2">
                              <p className="text-[12px] text-[#363636] font-Montserrat leading-[15px] relative pl-2.5">
                                <sup className="absolute left-0 text-[9px] pr-1 top-1">
                                  1
                                </sup>
                                Three quarterly payments of {formatCoursePrice(pricingInfo.quarterlyUsd)}.
                              </p>
                              <p className="text-[12px] text-[#363636] font-Montserrat leading-[15px] relative pl-2.5">
                                <sup className="absolute left-0 text-[9px] pr-1 top-1">
                                  2
                                </sup>
                                Total: {pricingInfo.total} for annual subscription.
                              </p>
                            </div>
                          </>
                        );
                      }
                      return null;
                    })()}
                  </div>
                </li>
                {courseData?.pricing?.type === 'subscription' && (
                  <li className="w-[320px] lg:w-full h-full lg:h-[210px] border-[1px] border-[#111111] rounded-[50px]  grid lg:flex items-center">
                    <div className="bg-[#282828] rounded-[35px] lg:rounded-[60px] -m-5 lg:-m-4 pt-[18px] pb-10 lg:py-2.5 px-11 lg:px-[50px]  w-[calc(100%+40px)] md:w-[calc(100%+50px)] lg:w-[535px] relative h-[309px] lg:h-[calc(100%+32px)] ">
                      <h2 className="text-white text-[24px] lg:text-[32px] -tracking-[.05em] leading-[24px] lg:leading-[48px] font-Poppins font-medium !m-0 max-[1024px]:!mb-4">
                        Annual <br /> Subscription
                      </h2>
                      <p className="text-white text-[14px] font-Montserrat leading-[24px] font-medium">
                        Unlock{" "}
                        <strong className="text-[20px] font-bold">full </strong>
                        catalogue access to our{" "}
                        <strong className="text-[20px] font-bold">
                          top-rated{" "}
                        </strong>{" "}
                        <br />
                        courses and professional certificates.
                      </p>
                      <div className="size-20 lg:size-[100px] absolute -bottom-10 lg:top-1/2 max-[1024px]:left-1/2 lg:-right-[50px] max-[1024px]:-translate-x-1/2 lg:-translate-y-1/2 rounded-full  grid lg:flex items-center justify-center bg-[#CCDD00]">
                        <img src="../images/edX.png" alt="" />
                      </div>
                    </div>
                    <div className="max-[767px]:pt-[80px] max-[1024px]:pt-[58px] px-2.5 lg:pl-[102px] lg:pr-12">
                      <ul className="grid gap-3">
                        <li className="flex gap-3 items-center">
                          <i>
                            <img
                              className="max-[767px]:w-[8px]"
                              src="../images/logo-icon.svg"
                              alt=""
                            />
                          </i>
                          <span className="text-[14px] text-[#282828] font-medium font-Montserrat leading-[17px]">
                            Unlimited access to our top-rated courses.
                          </span>
                        </li>
                        <li className="flex gap-3 items-center">
                          <i>
                            <img
                              className="max-[767px]:w-[8px]"
                              src="../images/logo-icon.svg"
                              alt=""
                            />
                          </i>
                          <span className="text-[14px] text-[#282828] font-medium font-Montserrat leading-[17px]">
                            Specialized professional certificates.
                          </span>
                        </li>
                        <li className="flex gap-3 items-center">
                          <i>
                            <img
                              className="max-[767px]:w-[8px]"
                              src="../images/logo-icon.svg"
                              alt=""
                            />
                          </i>
                          <span className="text-[14px] text-[#282828] font-medium font-Montserrat leading-[17px]">
                            Exclusive World-class Content.
                          </span>
                        </li>
                        <li className="flex gap-3 items-center">
                          <i>
                            <img
                              className="max-[767px]:w-[8px]"
                              src="../images/logo-icon.svg"
                              alt=""
                            />
                          </i>
                          <span className="text-[14px] text-[#282828] font-medium font-Montserrat leading-[17px]">
                            Global learning experiences.
                          </span>
                        </li>
                        <li className="flex gap-3 items-center">
                          <i>
                            <img
                              className="max-[767px]:w-[8px]"
                              src="../images/logo-icon.svg"
                              alt=""
                            />
                          </i>
                          <span className="text-[14px] text-[#282828] font-medium font-Montserrat leading-[17px]">
                            Proven career outcomes.
                          </span>
                        </li>
                        <li className="flex gap-3 items-center">
                          <i>
                            <img
                              className="max-[767px]:w-[8px]"
                              src="../images/logo-icon.svg"
                              alt=""
                            />
                          </i>
                          <span className="text-[14px] text-[#282828] font-medium font-Montserrat leading-[17px]">
                            Internationally recognized certificates.
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="w-full lg:w-[283px] max-[1024px]:flex max-[1024px]:flex-col max-[1024px]:justify-center 
                    max-[1024px]:items-center max-[1024px]:pb-4 max-[767px]:w-[264px] max-[767px]:mx-auto"
                    >
                      <p className="flex text-[#282828] text-[48px] font-bold font-Poppins items-center leading-[48px]">
                        {getDisplayPrice("first")}
                        <sub className="text-[16px] font-Montserrat font-medium leading-[100%] pt-2 pl-2">
                          / 1{" "}
                          <sup className="text-[10px] font-Montserrat font-medium leading-[100%] -ml-[5px]">
                            st
                          </sup>{" "}
                          Payment
                        </sub>{" "}
                        <sup className="text-[10px] font-Poppins font-medium leading-[100%] top-[4px] pl-0.5">
                          1
                        </sup>
                      </p>
                      <div className="gap-0.5 grid">
                        <p className="text-[12px] text-[#363636] font-Montserrat leading-[15px] relative pl-2.5">
                          <sup className="absolute left-0 text-[9px] pr-1 top-1">
                            1
                          </sup>
                          Registration applies to the first payment of {formatCoursePrice(firstPaymentAmountUSD)},
                          after which plans are converted to quarterly.
                        </p>
                      </div>
                    </div>
                  </li>
                )}
                {courseData?.pricing?.type === 'custom' && (
                  <li className="w-[320px] lg:w-full h-full lg:h-[210px] border-[1px] border-[#111111] rounded-[50px]  grid lg:flex items-center">
                    <div className="bg-[#282828] rounded-[35px] lg:rounded-[60px] -m-5 lg:-m-4 pt-[18px] pb-10 lg:py-2.5 px-11 lg:px-[50px]  w-[calc(100%+40px)] md:w-[calc(100%+50px)] lg:w-[535px] relative h-[309px] lg:h-[calc(100%+32px)] ">
                      <h2 className="text-white text-[24px] lg:text-[32px] -tracking-[.05em] leading-[24px] lg:leading-[48px] font-Poppins font-medium !m-0 max-[1024px]:!mb-4">
                        Program <br /> Enrollment
                      </h2>
                      <p className="text-white text-[14px] font-Montserrat leading-[24px] font-medium">
                        Enroll in this{" "}
                        <strong className="text-[20px] font-bold">exclusive </strong>
                        program with{" "}
                        <strong className="text-[20px] font-bold">
                          flexible{" "}
                        </strong>{" "}
                        <br />
                        payment options.
                      </p>
                      <div className="size-20 lg:size-[100px] absolute -bottom-10 lg:top-1/2 max-[1024px]:left-1/2 lg:-right-[50px] max-[1024px]:-translate-x-1/2 lg:-translate-y-1/2 rounded-full  grid lg:flex items-center justify-center bg-[#CCDD00]">
                        {courseData?.course_provider?.image ? (
                          <img src={courseData.course_provider.image} alt={courseData.course_provider.name} className="max-h-[50px] max-w-[80px]" />
                        ) : (
                          <img src="../images/edX.png" alt="" />
                        )}
                      </div>
                    </div>
                    <div className="max-[767px]:pt-[80px] max-[1024px]:pt-[58px] px-2.5 lg:pl-[102px] lg:pr-12">
                      <ul className="grid gap-3">
                        <li className="flex gap-3 items-center">
                          <i>
                            <img
                              className="max-[767px]:w-[8px]"
                              src="../images/logo-icon.svg"
                              alt=""
                            />
                          </i>
                          <span className="text-[14px] text-[#282828] font-medium font-Montserrat leading-[17px]">
                            Flexible quarterly payment plan.
                          </span>
                        </li>
                        <li className="flex gap-3 items-center">
                          <i>
                            <img
                              className="max-[767px]:w-[8px]"
                              src="../images/logo-icon.svg"
                              alt=""
                            />
                          </i>
                          <span className="text-[14px] text-[#282828] font-medium font-Montserrat leading-[17px]">
                            Industry-recognized certification.
                          </span>
                        </li>
                        <li className="flex gap-3 items-center">
                          <i>
                            <img
                              className="max-[767px]:w-[8px]"
                              src="../images/logo-icon.svg"
                              alt=""
                            />
                          </i>
                          <span className="text-[14px] text-[#282828] font-medium font-Montserrat leading-[17px]">
                            Expert-led interactive sessions.
                          </span>
                        </li>
                        <li className="flex gap-3 items-center">
                          <i>
                            <img
                              className="max-[767px]:w-[8px]"
                              src="../images/logo-icon.svg"
                              alt=""
                            />
                          </i>
                          <span className="text-[14px] text-[#282828] font-medium font-Montserrat leading-[17px]">
                            Career advancement opportunities.
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="w-full lg:w-[283px] max-[1024px]:flex max-[1024px]:flex-col max-[1024px]:justify-center 
                    max-[1024px]:items-center max-[1024px]:pb-4 max-[767px]:w-[264px] max-[767px]:mx-auto"
                    >
                      <p className="flex text-[#282828] text-[48px] font-bold font-Poppins items-center leading-[48px]">
                        {formatCoursePrice(courseData?.pricing?.first_payment)}
                        <sub className="text-[16px] font-Montserrat font-medium leading-[100%] pt-2 pl-2">
                          / 1{" "}
                          <sup className="text-[10px] font-Montserrat font-medium leading-[100%] -ml-[5px]">
                            st
                          </sup>{" "}
                          Payment
                        </sub>{" "}
                        <sup className="text-[10px] font-Poppins font-medium leading-[100%] top-[4px] pl-0.5">
                          1
                        </sup>
                      </p>
                      <div className="gap-0.5 grid">
                        <p className="text-[12px] text-[#363636] font-Montserrat leading-[15px] relative pl-2.5">
                          <sup className="absolute left-0 text-[9px] pr-1 top-1">
                            1
                          </sup>
                          Registration applies to the first payment of {formatCoursePrice(courseData?.pricing?.first_payment)},
                          after which plans are converted to quarterly.
                        </p>
                      </div>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </Container>
        </section>
        
        {showPopup && (
          <EnquiryPopup
            courseId={courseData?.id}
            courseTitle={courseData?.title}
            user={user}
            onClose={closePopup}
            onSuccess={markSubmitted}
            sourcePage={location.pathname}
          />
        )}
      </Layout>
    </>
  );
};

export default CourseDetail;
