import React, { useState } from "react";
import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";
import CourseHighlights from "../../Components/CourseHighlights";

// Course Highlights
const certificateDetailCourseHighlights = [
  {
    id: 1,
    courseHighlightIcon: "images/interactive_learning.svg",
    courseHighlightIconAlt: "icon",
    courseHighlightHeading: "Fully interactive leaning",
    courseHighlightPara: "Interact, and communicate with your peers",
  },
  {
    id: 2,
    courseHighlightIcon: "images/modules.svg",
    courseHighlightIconAlt: "icon",
    courseHighlightHeading: "2 courses",
    courseHighlightPara: "Specialized skills coursers",
  },
  {
    id: 3,
    courseHighlightIcon: "images/weeks.svg",
    courseHighlightIconAlt: "icon",
    courseHighlightHeading: "6 weeks",
    courseHighlightPara: "at 6-8 hours a week",
  },
  {
    id: 4,
    courseHighlightIcon: "images/completion_cert.svg",
    courseHighlightIconAlt: "icon",
    courseHighlightHeading: "Completion Certificate",
    courseHighlightPara: "Shareable international certificate",
  },
];
// End Course Highlights

// Section Course Curriculum
const courseCurriculum = {
  title: "Program Curriculum",
  description:
    "Kickstart your learning of Python with this beginner-friendly self-paced course taught by an expert. Python is one of the most popular languages in the programming and data science world and demand for individuals who have the ability to apply Python has never been higher.",

  moduleBreakdown: [
    {
      breakDownImage: "/images/blue_list_A.svg",
      breakDownImageAlt: "icon",
      title: "module 1",
      breakDownInfo: "Introduction to user experience design 1",
    },
    {
      breakDownImage: "/images/blue_list_A.svg",
      breakDownImageAlt: "icon",
      title: "module 2",
      breakDownInfo: "Introduction to user experience design 2",
    },
    {
      breakDownImage: "/images/blue_list_A.svg",
      breakDownImageAlt: "icon",
      title: "module 3",
      breakDownInfo: "Introduction to user experience design 3",
    },
    {
      breakDownImage: "/images/blue_list_A.svg",
      breakDownImageAlt: "icon",
      title: "module 4",
      breakDownInfo: "Introduction to user experience design 4",
    },
    {
      breakDownImage: "/images/blue_list_A.svg",
      breakDownImageAlt: "icon",
      title: "module 5",
      breakDownInfo: "Introduction to user experience design 5",
    },
    {
      breakDownImage: "/images/blue_list_A.svg",
      breakDownImageAlt: "icon",
      title: "module 6",
      breakDownInfo: "Introduction to user experience design 6",
    },
    {
      breakDownImage: "/images/blue_list_A.svg",
      breakDownImageAlt: "icon",
      title: "module 7",
      breakDownInfo: "Introduction to user experience design 7",
    },
    {
      breakDownImage: "/images/blue_list_A.svg",
      breakDownImageAlt: "icon",
      title: "module 8",
      breakDownInfo: "Introduction to user experience design 8",
    },
    {
      breakDownImage: "/images/blue_list_A.svg",
      breakDownImageAlt: "icon",
      title: "module 9",
      breakDownInfo: "Introduction to user experience design 9",
    },
    {
      breakDownImage: "/images/blue_list_A.svg",
      breakDownImageAlt: "icon",
      title: "module 10",
      breakDownInfo: "Introduction to user experience design 10",
    },
  ],
};
// End Section Course Curriculum

const CertificateDetail = () => {
  const [courseBreakdown, setCourseBreakdown] = useState(false);

  return (
    <Layout>
      <section className="course-detail top-gap">
        <div className="wrapper padding 2xl:px-0">
          <div className="course-detail-content grid md:grid-cols-[65%_35%] gap-x-4 gap-y-10 ">
            <div className="detail">
              <ul className="flex items-center gap-3 order-1 md:order-2">
                <li className="border-r-2 border-[#888888] pe-3">
                  <img
                    className="w-16"
                    alt="image"
                    src="/images/exclusive-EDX.svg"
                  />
                </li>
                <li>
                  <img className="" alt="image" src="/images/harverd_CD.svg" />
                </li>
              </ul>
              <p className="font-Poppins font-medium text-textColor2 capitalize mt-2 mb-9">
                harverd university
              </p>

              <div className="mb-4 text-blackColor2">
                <h5 className="text-2xl sm:text-[32px] font-medium">
                  {" "}
                  Computer Science for Cybersecurity{" "}
                </h5>
              </div>
              <div className="instructor flex items-center gap-4 mb-10">
                <div className="relative inline-block size-12 rounded-full overflow-hidden">
                  <img
                    className="absolute w-full h-full object-cover"
                    src="/images/instructor-image.png"
                    alt="image"
                  />
                </div>
                <div className="font-medium text-blackColor2">
                  Instructor:
                  <Link
                    className="underline capitalize ps-1"
                    to="https://www.edx.org/bio/david-j-malan"
                    data-discover="true"
                  >
                    david J. malan
                  </Link>
                </div>
              </div>
              <div className="buttons flex flex-wrap gap-5">
                <Link
                  className="btn-blue-transparent btn-blue-fill"
                  to="/about"
                  data-discover="true"
                >
                  Register now
                </Link>
                <Link
                  className="btn-blue-transparent"
                  to="/course-detail"
                  data-discover="true"
                >
                  Get more information
                </Link>
              </div>
              <div className="next-info mt-5">
                <p className="text-blackColor2 capitalize font-medium">
                  next start date: <span>01 Feb 2025</span>
                </p>
              </div>
            </div>
            <div className="image flex justify-center  md:justify-end">
              <div>
                <img
                  className=""
                  src="/images/certificate-detail-page-A.webp"
                  alt="image"
                />
              </div>
            </div>
          </div>

          <CourseHighlights
            courseHighlightsData={certificateDetailCourseHighlights}
          />
        </div>
      </section>

      {/* <section className="overview">
       <div className="wrapper padding pt-0 2xl:px-0">
         <div className="overview-content grid md:grid-cols-[65%_35%] gap-y-8">
           <div className="text-content md:me-4 ">
             <h4 className="capitalize text-3xl md:text-[32px mb-4">
               {" "}
               Program Overview{" "}
             </h4>
             <p className="leading-7 max-w-[881px] mb-4 text-blackColor2">
               In collaboration with edX. This is CS50x , Harvard University's
               introduction to the intellectual enterprises of computer science
               and the art of programming for majors and non-majors alike, with
               or without prior programming experience. An entry-level course
               taught by David J. Malan, CS50x teaches students how to think
               algorithmically and solve problems efficiently. Topics include
               abstraction, algorithms, data structures, encapsulation, resource
               management, security, software engineering, and web development.
               Languages include C, Python, SQL, and JavaScript plus CSS and
               HTML.{" "}
             </p>
             <a
               className="colored-link underline capitalize font-medium"
               href="/course-detail"
             >
               Show More
             </a>
           </div>
           <div className="image md:ms-4">
             <div>
               <img
                 className="w-full rounded-3xl"
                 src="images/course-overview.png"
                 alt="image"
               />
             </div>
           </div>
         </div>
       </div>
     </section> */}

      <section className="overview">
        <div className="wrapper padding pt-0 2xl:px-0">
          <div className="overview-content grid md:grid-cols-[65%_35%] gap-y-8">
            <div className="text-content md:me-4 ">
              <h4 className="capitalize text-3xl md:text-[32px mb-4">
                {" "}
                About the program{" "}
              </h4>

              <ul className="list-disc ms-4 flex flex-col gap-2">
                {/* <li><span className="font-medium">Diversified electives: </span>
              Learn about marketing and strategy, finance, and entrepreneurship.</li>
              <li><span className="font-medium">Tight-knit professional network: </span>
              Take part in exciting opportunities, meet with accomplished leaders, and grow your global network.</li>
              <li><span className="font-medium">Practical education: </span>
              Gain real-world entrepreneurship skills and apply them to your work, thanks to integrations within the curriculum.</li> */}

                <li className="flex gap-2 items-start">
                  <img className="" alt="image" src="/images/black-A.svg" />{" "}
                  <span>
                    <span className="font-medium">Diversified electives:</span>{" "}
                    A broad and robust understanding of computer science and
                    programming.{" "}
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <img className="" alt="image" src="/images/black-A.svg" />{" "}
                  <span>
                    <span className="font-medium">
                      Tight-knit professional network:
                    </span>{" "}
                    Take part in exciting opportunities, meet with accomplished
                    leaders, and grow your global network.{" "}
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <img className="" alt="image" src="/images/black-A.svg" />{" "}
                  <span>
                    <span className="font-medium">Practical education:</span>{" "}
                    Gain real-world entrepreneurship skills and apply them to
                    your work, thanks to integrations within the curriculum.{" "}
                  </span>
                </li>
              </ul>
              {/* <img className="w-6 mt-4" src="images/black_A.svg" alt="icon" /> */}
            </div>
            <div className="image md:ms-4">
              <div>
                <img
                  className="w-full rounded-3xl"
                  src="images/course-overview.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="on-completion px-4">
        <div className="wrapper pb-[74px] lg:px-0">
          <div className="on-completion-content">
            <h5 className="mb-4 text-[20px]">
              On completion of this program you'll learn
            </h5>
            <ul className="list grid md:grid-cols-2 gap-x-6 gap-y-3 text-textColor">
              <li className="flex gap-3 items-start">
                <img className="" src="/images/black-A.svg" alt="image" />A
                broad and robust understanding of computer science and
                programming.
              </li>
              <li className="flex gap-3 items-start">
                {" "}
                <img className="" src="/images/black-A.svg" alt="image" />
                How to think algorithmically and solve programming problems
                efficiently
              </li>
              <li className="flex gap-3 items-start">
                {" "}
                <img className="" src="/images/black-A.svg" alt="image" />A
                broad and robust understanding of computer science and
                programming.
              </li>
              <li className="flex gap-3 items-start">
                {" "}
                <img className="" src="/images/black-A.svg" alt="image" />
                How to think algorithmically and solve programming problems
                efficiently
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="certificate margin-x">
        <div className="wrapper certificate bg-bgTintColor py-10 px-4 md:px-10 rounded-3xl relative">
          <div className="certificate-content flex flex-col md:flex-row gap-x-4 gap-y-8 items-center">
            <div className="text-content w-full md:w-[60%]">
              <h4 className="capitalize text-3xl md:text-[32px] mt-10 mb-4">
                about certificate
              </h4>
              <p className="max-w-[762px] leading-7 mb-7 text-[16px] text-blackColor2">
                Share what you've learned, and be a standout professional in
                your desired industry with a degree showcasing your knowledge
                gained from this degree is in collaboration with edX
              </p>
              <div className="flex items-end max-w-[590px] justify-between">
                <div>
                  <img
                    className="mb-3"
                    alt="image"
                    src="/images/edx_Harverd.svg"
                  />
                  <p className="text-textColor2 font-Poppins -mt-3 capitalize text-[16px]">
                    harvard university
                  </p>
                </div>
                <div className="social-media">
                  <ul className="flex gap-[10px]">
                    <li>
                      <a
                        rel="noopener noreferrer"
                        title="LinkedIn"
                        href="https://www.linkedin.com"
                        target="_blank"
                      >
                        <img alt="LinkedIn" src="images/certi_linkedin.svg" />
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noopener noreferrer"
                        title="Facebook"
                        href="https://www.facebook.com"
                        target="_blank"
                      >
                        <img alt="Facebook" src="images/certi_facebook.svg" />
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noopener noreferrer"
                        title="Twitter"
                        href="https://www.twitter.com"
                        target="_blank"
                      >
                        <img alt="Twitter" src="images/certi_twitter.svg" />
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noopener noreferrer"
                        title="Download"
                        href="https://www.example.com/download"
                        target="_blank"
                      >
                        <img alt="Download" src="images/certi_download.svg" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="image w-full md:w-[40%]">
              <div>
                <img
                  className="rounded-3xl"
                  alt="about certificate"
                  src="/images/certification.png"
                />
              </div>
            </div>
          </div>
          <div className="bg-white inline-block px-4 py-2 absolute top-0 left-10 xs:left-24 rounded-b-2xl">
            <div className="size-6  absolute top-0 -right-[24px] rounded-tl-[15px] shadow-[-12px_-4px_0px_#ffffff] " />
            <div className="size-6  absolute top-0 -left-[24px] rounded-tr-[15px] shadow-[12px_-4px_0px_#ffffff] " />
            <div className="capitalize relative">
              <span className="font-medium text-lg font-Poppins text-blackColor2">
                certificate
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="course-curriculum">
        <div className="wrapper padding pb-[50px] 2xl:px-0">
          <div className="course-curriculum-content grid md:grid-cols-[70%_30%]">
            <div className="text-content md:pe-5">
              <h4 className=" text-3xl md:text-[32px] mb-12 capitalize">
                {courseCurriculum.title}
              </h4>
              <div className="breakdowns border border-borderColor1 px-8 pt-4 rounded-3xl mb-[50px] duration-500">
                <p className="border-b border-borderColor2 pb-4 text-blackColor2 leading-7">
                  An introduction to the intellectual enterprises of computer
                  science and the art of programming.
                </p>
                <div className="breakdown-accordian duration-300">
                  <div className="accor mb-4">
                    <div
                      className={`title font-medium text-blackColor2 flex items-center gap-2 py-5 pb-1 cursor-pointer`}
                      onClick={() => setCourseBreakdown(!courseBreakdown)}
                    >
                      <div
                        className={`text-[24px] duration-300 ${
                          courseBreakdown ? "rotate-45 text-primaryColor" : ""
                        }`}
                      >
                        +
                      </div>
                      <div>
                        <p className="text-[18px] font-Poppins ">
                          Courses breakdown
                        </p>
                      </div>
                    </div>

                    <div className="content-bar overflow-hidden">
                      <div
                        className={`content overflow-hidden transition-all duration-500 ease-in-out   ${
                          courseBreakdown
                            ? "max-h-[600px] overflow-y-auto"
                            : "max-h-0 "
                        } `}
                      >
                        <h4 className="mb-10 mt-5">Self care for learning</h4>
                        <ul className="brekdown-bar flex flex-col gap-6 ">
                          {courseCurriculum.moduleBreakdown.map(
                            (item, index) => (
                              <li
                                key={index}
                                className="bar-item text-blackColor2 "
                              >
                                <div className="flex gap-2 items-center ">
                                  <div className="relative">
                                    <img
                                      src={item.breakDownImage}
                                      alt={item.breakDownImageAlt}
                                      className="module-image w-5"
                                    />
                                    <div className="vertical-line w-[1px] absolute left-1/2 h-16 bg-borderColor2 -z-10 "></div>
                                  </div>

                                  <div>
                                    <p className="font-medium capitalize leading-tight">
                                      {item.title}
                                    </p>
                                    <p className="font-semibold">
                                      {item.breakDownInfo}
                                    </p>
                                  </div>
                                </div>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="instructor">
                <h5 className="text-[22px] mb-[14px]">Instructor</h5>
                <div className=" mb-8 md:mb-0 border border-borderColor2 rounded-3xl max-w-[420px] p-5 flex flex-col xs:flex-row xs:items-center gap-4">
                  <div className="relative inline-block size-12 rounded-full overflow-hidden">
                    <img
                      className="absolute w-full h-full object-cover"
                      src="/images/instructor-image.png"
                      alt="image"
                    />
                  </div>
                  <div>
                    <Link
                      className="underline capitalize font-medium text-blackColor2 font-Poppins"
                      to="https://www.edx.org/bio/david-j-malan"
                      data-discover="true"
                    >
                      {" "}
                      david j malanaaa{" "}
                    </Link>
                    <p className="text-sm text-[#666666] py-2 font-Poppins font-medium">
                      Gordon McKay Professor of the Practice of Computer Science
                    </p>
                    <p className="text-sm text-blackColor2 font-medium font-Poppins">
                      Harvard University
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="details md:ps-5 md:mt-20">
              <h4 className=" text-2xl md:text-[28px] mb-7">Details to know</h4>
              <ul className="flex flex-col gap-y-5 font-medium text-blackColor2 font-Poppins">
                <li className="flex items-center gap-5">
                  <div>
                    <img src="/images/digital_certificate.svg" alt="image" />
                  </div>
                  <div>
                    <p className="leading-none pb-2">
                      International Digital Certificate
                    </p>
                    <p className="text-sm font-Montserrat">
                      Add to your linkedin, and social media profiles
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-5">
                  <div>
                    <img src="/images/lang.svg" alt="image" />
                  </div>
                  <div>
                    <p className="leading-none pb-1">Language</p>
                    <p className="text-sm font-Montserrat">
                      English (
                      <a
                        className="colored-link"
                        href="/course-detail"
                        data-discover="true"
                      >
                        22 language English
                      </a>
                      )
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-5">
                  <div>
                    <img src="/images/video.svg" alt="image" />
                  </div>
                  <div>
                    <p className="leading-none pb-1">Video Transcripts</p>
                    <p className="text-sm font-Montserrat">
                      English (
                      <a
                        className="colored-link"
                        href="/course-detail"
                        data-discover="true"
                      >
                        22 language English
                      </a>
                      )
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="course-intro margin-x">
        <div className="wrapper">
          <div className="course-intro-content relative ">
            <div
              className="intro bg-primaryColor text-white p-6 md:py-14 rounded-3xl md:px-16 md:rounded-50 lg:rounded-70 xl:rounded-90 md:w-[100%] lg:w-[56%] 
                   xl:w-[60%] relative z-10"
            >
              <div className=" lg:max-w-[620px]">
                <h2 className="heading-white font-medium lg:text-[46px] text-center lg:text-left">
                  Professional Certificate in Computer Science for Cybersecurity
                </h2>
                <p className=" md:max-w-[590px] mb-4 lg:mb-0  font-semibold text-center lg:text-left">
                  {" "}
                  Joined scheduled courses, pay as you go, and earn your
                  certification once you complete required courses.{" "}
                </p>
              </div>
              <div className="current-discount bg-blackColor text-white p-3 rounded-full size-36 xs:size-40 xl:size-44 flex flex-col justify-center items-center   absolute  lg:top-1/2 lg:-translate-y-1/2 right-1/2 translate-x-1/2 lg:translate-x-0 lg:-right-[70px] xl:-right-[65px] 2xl:-right-[85px]">
                <div className=" flex items-center">
                  <span className="text-[44px] lg:text-[58px]  font-bold leading-[0px] font-Poppins">
                    40
                  </span>
                  <div>
                    <span className="text-[22px] lg:text-[38px] font-medium leading-none -mt-3 font-Poppins">
                      %
                    </span>
                    <span className="uppercase leading-none -mt-1 block text-sm font-bold">
                      off
                    </span>
                  </div>
                </div>
                <div className="font-medium uppercase flex items-center justify-center flex-col mt-1">
                  <span className="lg:text-[23px] text-[22px] xl:text-[28px] leading-none font-bold font-Poppins">
                    current
                  </span>
                  <span className="xs:text-[18px] xl:text-[22px] leading-none font-medium font-Poppins">
                    COURSE
                  </span>
                </div>
              </div>
            </div>
            <div className="mx-5 xs:mx-6 lg:mx-0">
              <div className="price border-[1.5px] border-black rounded-b-50 lg:m-0 lg:rounded-50 -translate-y-2  lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:w-[90%] right-0 overflow-hidden ">
                <div className="lg:float-end text-blackColor2">
                  <div
                    className="price-content lg:max-w-[390px] xl:max-w-[450px] px-3 xl:px-8 pt-40 md:pt-36 lg:pt-4 pb-4 flex flex-col justify-center items-center lg:block 
                            "
                  >
                    <div className="before-price relative mb-2">
                      <div className="text-2xl md:text-[28px] font-Poppins">
                        R10,000
                      </div>
                      <div className="discount-line w-28 h-[2px] -m-1 bg-primaryColor absolute top-5 transform -rotate-[8deg]" />
                    </div>
                    <div className="current-price text-primaryColor font-Poppins">
                      <div>
                        <span className="font-bold text-4xl sm:text-6xl ">
                          R5000
                        </span>
                        <span className="text-2xl">/Certificate</span>
                      </div>
                    </div>
                    <p className="pt-3 py-[26px] text-center lg:text-left">
                      Students have the flexibility to choose and purchase
                      courses individually.
                    </p>
                    <button className="btn-smpl btn-white-transparent font-medium font-Montserrat h-11">
                      <Link to="/about">Register now</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="annual-subscription my-[70px] margin-x">
        <div className="wrapper">
          <div className="annual-subscription-content relative ">
            <div className="intro bg-blackColor text-white p-6 md:py-[55px] md:pb-[72px] rounded-3xl md:px-16 md:rounded-50 lg:rounded-70 xl:rounded-90 md:w-[100%] lg:w-[46%] xl:w-[45%] relative z-10">
              <div className=" lg:max-w-[620px]">
                <h2 className="heading-white lg:max-w-[420px] font-medium lg:text-[46px] mb-[14px]">
                  Annual Subscription
                </h2>
                <p className=" md:max-w-[449px] me-4 mb-3 lg:mb-0 text-white font-medium">
                  Unlock <strong>full</strong> catalogue access to our{" "}
                  <strong>top-rated</strong> interactive courses and
                  professional certificates.
                </p>
              </div>
              <div
                className="current-discount bg-bgGreen text-blackColor2 p-3 rounded-full size-36 xs:size-40 xl:size-[175px] flex flex-col justify-center items-center 
                      absolute  lg:top-1/2 lg:-translate-y-1/2 right-1/2 translate-x-1/2 lg:translate-x-0 lg:-right-[70px] xl:-right-[85px]"
              >
                <div className="flex items-center">
                  <span className=" text-[44px] lg:text-[58px] font-bold leading-[0px] font-Poppins">
                    40
                  </span>
                  <div>
                    <span className="text-[22px] lg:text-[38px] font-Poppins font-medium leading-none -mt-3">
                      %
                    </span>
                    <span className="uppercase leading-none -mt-1 block text-sm font-bold">
                      off
                    </span>
                  </div>
                </div>
                <div className="font-medium uppercase flex justify-center flex-col mt-1 lg:ms-3">
                  <span className="text-[20px] xs:text-[22px] xl:text-[28px] leading-none font-bold font-Poppins">
                    future
                  </span>
                  <span className="xs:text-[18px] xl:text-[23.5px] leading-none font-medium font-Poppins">
                    courses
                  </span>
                </div>
              </div>
            </div>
            <div className="mx-5 xs:mx-6 lg:mx-0">
              <div className="price border-[1.5px] border-black rounded-b-50 -mt-3 lg:m-0 lg:rounded-50  lg:absolute top-1/2 lg:-translate-y-1/2 w-full lg:w-[80%] right-0 overflow-hidden ">
                <div className="lg:float-end">
                  <div className="price-content  px-3 xl:px-10 pb-6 lg:pb-8 flex flex-col justify-center items-center lg:block pt-40 md:pt-32 lg:pt-8 ">
                    <ul className="flex flex-col gap-4 xl:pe-[40px] text-blackColor2">
                      <li className="flex gap-2">
                        <img
                          className="size-3 mt-[6px]"
                          src="/images/course-detail-A.webp"
                          alt="image"
                        />
                        Unlimited access to our top-rated 2500+ courses
                      </li>
                      <li className="flex  gap-2">
                        <img
                          className="size-3 mt-[6px]"
                          src="/images/course-detail-A.webp"
                          alt="image"
                        />
                        Specialized professional 1000+ certificates
                      </li>
                      <li className="flex  gap-2">
                        <img
                          className="size-3 mt-[6px]"
                          src="/images/course-detail-A.webp"
                          alt="image"
                        />
                        Live instructors or Learner support agents for all
                        courses
                      </li>
                      <li className="flex  gap-2">
                        <img
                          className="size-3 mt-[6px]"
                          src="/images/course-detail-A.webp"
                          alt="image"
                        />
                        Fully interactive, personalized learning experiences
                      </li>
                      <li className="flex  gap-2">
                        <img
                          className="size-3 mt-[6px]"
                          src="/images/course-detail-A.webp"
                          alt="image"
                        />
                        Proven career outcomes
                      </li>
                      <li className="flex  gap-2">
                        <img
                          className="size-3 mt-[6px]"
                          src="/images/course-detail-A.webp"
                          alt="image"
                        />
                        Internationally recognized certificates
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CertificateDetail;
