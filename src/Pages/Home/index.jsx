import React, { useState, useEffect, useRef } from "react";
import Layout from "../../Components/Layout";
import WhiteButton from "../../Components/Buttons/WhiteButton";
import NumberCounter from "../../Components/NumberCounter";
import Testimonial from "../../Components/Testimonial";
import Business from "../../Components/Business";
import Team from "../../Components/Team";
import CourseWidget from "../../Components/CourseWidget";
import ExploreInexa from "../../Components/ExploreInexa";
import { Link } from "react-router-dom";
// import { professionalCertificate } from "./professionalCerti";
// import { educationPrograms } from "./educationPrograms";
import BlueButton from "../../Components/Buttons/BlueButton";
// import { degreePrograms } from "./degreePrograms";
import HomeCarousel from "../../Components/HomeCarousel";
import Container from "../../Components/Container";

import "./home.css";
import axiosInstance from "../../api/axiosInstance";

// Number Counter Data
const homeCounterVals = [
  {
    id: 1,
    countNum: 5000,
    countTitle: "Digital Online Offerings",
    counterSuffix: "M",
  },
  {
    id: 2,
    countNum: 37,
    countTitle: "of 50 Top World Universities",
    counterSuffix: "M",
  },
  {
    id: 3,
    countNum: 200,
    countTitle: "Countries with Registered edX Learners",
    counterSuffix: "M",
  },
  {
    id: 4,
    countNum: 91,
    countTitle: "Learner Network",
    counterSuffix: "M",
  },
];
// End Number Counter Data

const Home = () => {
  // ======== Top Typing Animation ===========
  const words = ["Life", "Future", "Career"];
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    // Define the function to handle window resizing
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Attach event listener to window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty array means this effect runs only once when the component mounts

  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [letterIndex, setLetterIndex] = useState(0);

  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  // const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const currentWord = words[currentIndex];
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const pauseBetweenWords = 1500;

    let timeout;

    if (!isDeleting) {
      // Typing effect (letter by letter)
      if (letterIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.substring(0, letterIndex + 1));
          setLetterIndex(letterIndex + 1);
        }, typingSpeed);
      } else {
        // Pause after typing
        timeout = setTimeout(() => setIsDeleting(true), pauseBetweenWords);
      }
    } else {
      // Deleting effect (letter by letter)
      if (letterIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.substring(0, letterIndex - 1));
          setLetterIndex(letterIndex - 1);
        }, deletingSpeed);
      } else {
        // Move to next word
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, letterIndex]);
  // ======== End Top Typing Animation ===========

  ////////// Courses Section /////////////
  const [displayCount, setDisplayCount] = useState({
    professionalCert: 5,
    educationPrograms: 5,
    degreePrograms: 5,
  });

  // Refs for each section
  const professionalCertRef = useRef(null);
  const educationProgramsRef = useRef(null);
  const degreeProgramsRef = useRef(null);

  // Toggle a specific section
  const toggleSection = (sectionKey) => {
    const currentCount = displayCount[sectionKey];
    const newCount = currentCount === 5 ? 15 : 5;

    setDisplayCount({
      ...displayCount,
      [sectionKey]: newCount,
    });

    // If collapsing (showing less), scroll to that section's top
    if (newCount === 5) {
      const sectionRef =
        sectionKey === "professionalCert"
          ? professionalCertRef
          : sectionKey === "educationPrograms"
          ? educationProgramsRef
          : degreeProgramsRef;

      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  ///////////// End Courses Section /////////////////

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);

        const response = await axiosInstance.get("/courses/popular");
        setCourses(response?.data || []);
        // Object.keys(response?.data?.data).forEach((key) => {
        //   const course = response?.data?.data[key];
        //   setFavorites((course || []).map(() => false));
        // })
        setLoading(false);
      } catch (err) {
        console.warn("err :>> ", err);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
      <Layout>
        <div className="body-lines wrapper relative">
          <div className="line-1 body-line left-[10%] 2xl:left-[12%] 3xl:left-[20%]  " />
          <div className="line-2 body-line left-[37%] 3xl:left-[40%]" />
          <div className="line-3 body-line left-[64%] 3xl:left-[61%] " />
          <div className="line-4 body-line left-[90%] 2xl:left-[88%] 3xl:left-[80%]" />
        </div>

        <section className="home-top pt-[71px] md:pt-[106px] lg:pt-[84px] pb-10 md:pb-[29px] lg:pb-0">
          <Container>
            <div
              className="flex lg:pr-2 lg:px-10 items-center lg:py-2 justify-between 
            max-[767px]:flex-wrap max-[767px]:flex-col-reverse gap-6 md:gap-0"
            >
              <div className="w-full md:w-[466px] lg:w-[60%] max-[767px]:text-center">
                <h1
                  className="text-blackColor2 text-[24px] md:text-[30px] lg:text-[54px] leading-[36px] md:leading-[60px] lg:leading-[72px] lg:-tracking-[.05em] mb-0 capi"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <span className="text-[#3322FF] font-semibold">Interact</span>{" "}
                  with Live Experts.{" "}
                  <span className="text-[#3322FF] font-semibold">
                    Experience
                  </span>{" "}
                  a Unique Journey.{" "}
                  <span className="text-[#3322FF] font-semibold">
                    Accelerate
                  </span>{" "}
                  your{" "}
                  <span className="word-flip-container inline-block">
                    life.
                    {/* {displayText.split("").map((char, index) => (
                      <span
                        key={index}
                        className="flip-letter"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {char}
                      </span>
                    ))} */}
                    {/* <span className="blinking-cursor">.</span> */}
                  </span>
                </h1>
              </div>
              <div className="w-full md:w-[300px] lg:w-[520px] lg:mr-0 ">
                <img
                  src="/images/topA.webp"
                  alt="image"
                  className="h-[297px] md:h-[242px] lg:h-[474px] max-[767px]:mx-auto"
                />
              </div>
            </div>
          </Container>
        </section>

        <section className="main-info">
          <Container>
            <div className=" bg-blackColor2 rounded-[24px] pt-10 pb-[27px] pl-[27px] pr-[18px] md:pl-[15px] md:pr-[24px] md:pt-[57px] md:pb-[37px] lg:py-8 lg:px-10 overflow-hidden">
              <div
                className="hero-content relative hero-content-img text-white mb-[26px] md:mb-[42px] lg:mb-[80px] before:content-[''] before:absolute before:top-[42px] 
                lg:before:top-0 before:-left-[15px] lg:before:left-[-180px]"
              >
                <div className="md:pl-[249px] lg:pl-[588px] w-full z-10 relative">
                  <div className="title md:px-0">
                    <div className="subheading subheading-white !mb-1 md:!mb-0 font-Montserrat text-[14px] md:text-[16px] font-medium leading-[21px] md:leading-[28px] tracking-[.02em]">
                      about
                    </div>
                    <h2 className="animated-text flex flex-wrap text-white leading-[36px] md:leading-[60px] lg:leading-[72px] text-[24px] md:text-[36px] lg:text-[54px] lg:-tracking-[.05em] font-medium mb-6 md:mb-4 !p-0">
                      <span className="word">
                        <span
                          data-aos="fade-up"
                          data-aos-delay="100"
                          className="text-[]"
                        >
                          E
                        </span>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="150"
                          className="text-[]"
                        >
                          m
                        </span>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="200"
                          className="text-[]"
                        >
                          p
                        </span>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="250"
                          className="text-[]"
                        >
                          o
                        </span>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="300"
                          className="text-[]"
                        >
                          w
                        </span>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="350"
                          className="text-[]"
                        >
                          e
                        </span>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="400"
                          className="text-[]"
                        >
                          r
                        </span>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="450"
                          className="text-[]"
                        >
                          i
                        </span>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="500"
                          className="text-[]"
                        >
                          n
                        </span>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="550"
                          className="text-[]"
                        >
                          g
                        </span>
                      </span>
                      <div className="word">
                        <span
                          data-aos="fade-up"
                          data-aos-delay="600"
                          className="text-[]"
                        >
                          K
                        </span>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="650"
                          className="text-[]"
                        >
                          n
                        </span>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="700"
                          className="text-[]"
                        >
                          o
                        </span>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="750"
                          className="text-[]"
                        >
                          w
                        </span>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="800"
                          className="text-[]"
                        >
                          l
                        </span>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="850"
                          className="text-[]"
                        >
                          e
                        </span>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="900"
                          className="text-[]"
                        >
                          d
                        </span>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="1000"
                          className="text-[]"
                        >
                          g
                        </span>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="1050"
                          className="text-[]"
                        >
                          e
                        </span>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="1100"
                          className="text-[]"
                        >
                          .
                        </span>
                      </div>
                      <div className="word">
                        <span
                          data-aos="fade-up"
                          data-aos-delay="1150"
                          className="text-[]"
                        >
                          T
                        </span>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="1200"
                          className="text-[]"
                        >
                          r
                        </span>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="1250"
                          className="text-[]"
                        >
                          a
                        </span>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="1300"
                          className="text-[]"
                        >
                          n
                        </span>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="1350"
                          className="text-[]"
                        >
                          s
                        </span>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="1400"
                          className="text-[]"
                        >
                          f
                        </span>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="1450"
                          className="text-[]"
                        >
                          o
                        </span>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="1500"
                          className="text-[]"
                        >
                          r
                        </span>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="1550"
                          className="text-[]"
                        >
                          m
                        </span>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="1600"
                          className="text-[]"
                        >
                          i
                        </span>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="1650"
                          className="text-[]"
                        >
                          n
                        </span>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="1700"
                          className="text-[]"
                        >
                          g
                        </span>
                      </div>
                      <div className="word">
                        <span
                          data-aos="fade-up"
                          data-aos-delay="1750"
                          className="text-[]"
                        >
                          L
                        </span>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="1800"
                          className="text-[]"
                        >
                          i
                        </span>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="1850"
                          className="text-[]"
                        >
                          v
                        </span>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="1900"
                          className="text-[]"
                        >
                          e
                        </span>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="1950"
                          className="text-[]"
                        >
                          s
                        </span>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="2000"
                          className="text-[]"
                        >
                          .
                        </span>
                      </div>
                    </h2>

                    <div className="text-content md:ml-[31px] lg:ml-[40px]">
                      <p className="leading-[23px] md:leading-[30px] lg:leading-[28px] text-[14px] lg:text-[16px] font-medium mb-6 -tracking-[.02em]">
                        Inexa transforms lives, organizations, and nations
                        through learning around the world. The widespread talent
                        shortages that impact growth, productivity, and
                        innovation. Each Inexa program is deeply focused with
                        experts that unlock learning with personalized support,
                        and verify complete mastery of competencies.
                      </p>
                      <ul
                        className="hidden md:flex flex-col gap-4 lg:gap-2 tb-bg-red-400 mb-6
                      [&>li>span]:-tracking-[.02em] [&>li>span]:leading-[17px] lg:[&>li>span]:leading-[28px] [&>li>span]:text-[14px] lg:[&>li>span]:text-[16px] [&>li>span]:font-medium"
                      >
                        <li className="flex gap-x-2">
                          <div className="pt-1">
                            <img
                              className="w-[9px] min-w-[9px] rotate-90"
                              src="/images/icn_wht_2.svg"
                              alt="image"
                            />
                          </div>
                          <span>Live instructor-led online courses. </span>
                        </li>
                        <li className="flex gap-x-2">
                          <div className="pt-1">
                            <img
                              className="w-[9px] min-w-[9px] rotate-90"
                              src="/images/icn_wht_2.svg"
                              alt="image"
                            />
                          </div>
                          <span>
                            Drive impact learning experiences with in-depth
                            development programs.
                          </span>
                        </li>
                        <li className="flex gap-x-2">
                          <div className="pt-1">
                            <img
                              className="w-[9px] min-w-[9px] rotate-90"
                              src="/images/icn_wht_2.svg"
                              alt="image"
                            />
                          </div>
                          <span>
                            Cost-effective approach to improve global learning.{" "}
                          </span>
                        </li>
                      </ul>
                      <div className="button">
                        <WhiteButton btnText="Explore More" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="partnerships text-white grid md:gap-0 gap-6 md:flex lg:items-center mb-2 md:mb-[50px] max-[1024px]:justify-between z-10 relative">
                <div className="md:w-[300px] lg:w-[588px] ">
                  <h3 className="text-white text-[20px] md:text-[24px] lg:text-[36px] font-medium leading-[32px] md:leading-[44px] lg:leading-[48px] -tracking-[.05em] mb-0 font-Poppins">
                    Strategic Partnerships that <br /> Empower Global Knowledge{" "}
                    <br />
                    Transformation
                  </h3>
                </div>
                <div className="md:w-[calc(100%-326px)] lg:w-[calc(100%-588px)] md:pl-[13px] lg:pl-10 pt-1.5 lg:pt-0">
                  <p className="leading-[23px] md:leading-[24px] lg:leading-[28px] text-[14px] md:text-[15px] lg:text-[16px] font-medium -tracking-[.02em]">
                    edX is a global online learning platform from 2U, Inc. In
                    partnership with world-class institutions, edX offers
                    thousands of job-relevant programs that prepare learners for
                    every career moment. Learn more at{" "}
                    <Link
                      to="https://www.edx.org/"
                      target="_blank"
                      className="underline"
                    >
                      edx.org
                    </Link>
                    .
                  </p>
                </div>
              </div>

              <div className="counter-home mb-6 md:mb-12 lg:mb-[80px]">
                <NumberCounter
                  counterValues={homeCounterVals}
                  headingClass={"counter-stroke text-center md:text-left"}
                  paraClass={"text-white lg:max-w-[390px]"}
                />
              </div>

              <div className="grid gap-4 md:flex text-whiteitems-center mb-2 md:mb-8 lg:mb-[80px]">
                <div className="max-[767px]:flex max-[767px]:justify-end md:pt-10 md:w-[265px] lg:w-[588px]">
                  <ul
                    className="relative flex items-center gap-3 md:gap-[50px] before:content-[''] before:bg-white before:h-full before:w-[2px]
                  before:absolute before:left-[66px] md:before:left-[112px] lg:before:left-[184px] before:top-0 max-[767px]:w-fit ml-auto md:ml-0"
                  >
                    <li>
                      <img
                        className="w-[61px] md:w-[91px] lg:w-[160px]"
                        src="/images/LoGoInexa.svg"
                        alt="image"
                      />
                    </li>
                    <li>
                      <img
                        className="w-[50px] md:w-[72px] lg:w-[120px]"
                        src="/images/edx-white.svg"
                        alt="image"
                      />
                    </li>
                  </ul>
                </div>
                <div className="grid gap-2 md:gap-4 md:w-[calc(100%-265px)] lg:w-[calc(100%-588px)] pl-0 lg:pl-10">
                  <h3 className="heading-white text-[20px] md:text-[24px] lg:text-[36px] font-medium leading-[32px] md:leading-[40px] lg:leading-[48px] md:-tracking-[.05em] mb-0">
                    Inexa has Partnered with edX to offer Professional
                    Certificates and Specialized Courses to Enterprises
                  </h3>
                  <p className="leading-[23px] md:leading-[26px] lg:leading-[28px] text-[14px] md:text-[15px] lg:text-[16px] font-medium md:-tracking-[.02em] text-white">
                    Together with top-ranked universities and organizations at
                    the forefront of their fields, edX offers thousands of
                    job-relevant programs across nearly every career discipline,
                    including artificial intelligence, sustainability, and
                    finance.
                  </p>
                </div>
              </div>

              <div className="">
                <p className="text-white text-[15px] md:text-[16px] lg:text-[24px] font-Poppins leading-[26px] md:leading-[24px] lg:leading-[40px] font-medium -tracking-[.05em]">
                  edX partners with hundreds of top institutions, including{" "}
                  <strong className="text-[#CCDD00] text-[18px] md:text-[16px]">
                    Harvard, MIT, and Google
                  </strong>
                  .
                </p>
              </div>
            </div>
          </Container>
        </section>

        <Container>
          <section
            className="lg:mx-4 2xl:mx-auto wrapper rounded-[24px] overflow-hidden carousel relative h-[100px]  lg:h-[120px] 
          -mt-11 pt-11 border-[#282828] border-[1px] border-t-0"
          >
            <HomeCarousel />
          </section>
        </Container>

        {courses?.courses_certificates?.length > 0 && (
          <section
            className="professional-certificates pt-[53px] md:pt-[43px] lg:pt-[64px] pb-10"
            ref={professionalCertRef}
            style={{ scrollMarginTop: "100px", overflow: "visible" }}
          >
            <Container className="lg:px-10">
              <div className="title pb-2 md:pb-1">
                <div className="subheading text-[14px] md:text-[16px] font-medium lg:-tracking-[.02em] leading-[21px] md:leading-[28px] mb-2">
                  explore
                </div>
                <div className="course-tagline text-[16px] md:text-[20px] lg:text-[24px] font-medium font-Poppins text-blackColor2 leading-[24px] md:leading-[30px] lg:leading-[36px] lg:-tracking-[.05em] mb-2 lg:mb-1">
                  Courses and Professional Certificates
                </div>

                <h2
                  className="animated-text flex flex-wrap !pb-0 p-0 m-0 text-[20px] md:text-[28px] lg:text-[40px] font-medium 
              [&>div]:leading-[30px] md:[&>div]:leading-[42px] lg:[&>div]:leading-[60px] 
              [&>div>span]:leading-[30px] md:[&>div>span]:leading-[42px] lg:[&>div>span]:leading-[60px] lg:[&>div>span]:-tracking-[.05em] lg:-tracking-[.05em]"
                >
                  <div className="word">
                    <span
                      data-aos="fade-up"
                      data-aos-delay="100"
                      className="max-[767px]:leading-[30px] text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                    >
                      M
                    </span>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="150"
                      className="max-[767px]:leading-[30px] text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                    >
                      o
                    </span>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="200"
                      className="max-[767px]:leading-[30px] text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                    >
                      s
                    </span>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="250"
                      className="max-[767px]:leading-[30px] text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                    >
                      t
                    </span>
                  </div>
                  <div className="word">
                    <span
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="max-[767px]:leading-[30px] text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                    >
                      P
                    </span>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="350"
                      className="max-[767px]:leading-[30px] text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                    >
                      o
                    </span>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="400"
                      className="max-[767px]:leading-[30px] text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                    >
                      p
                    </span>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="450"
                      className="max-[767px]:leading-[30px] text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                    >
                      u
                    </span>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="max-[767px]:leading-[30px] text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                    >
                      l
                    </span>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="550"
                      className="max-[767px]:leading-[30px] text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                    >
                      a
                    </span>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="600"
                      className="max-[767px]:leading-[30px] text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                    >
                      r
                    </span>
                  </div>
                  <div className="word">
                    <span
                      data-aos="fade-up"
                      data-aos-delay="650"
                      className="max-[767px]:leading-[30px] text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                    >
                      C
                    </span>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="700"
                      className="max-[767px]:leading-[30px] text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                    >
                      o
                    </span>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="750"
                      className="max-[767px]:leading-[30px] text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                    >
                      u
                    </span>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="800"
                      className="max-[767px]:leading-[30px] text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                    >
                      r
                    </span>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="850"
                      className="max-[767px]:leading-[30px] text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                    >
                      s
                    </span>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="900"
                      className="max-[767px]:leading-[30px] text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                    >
                      e
                    </span>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="950"
                      className="max-[767px]:leading-[30px] text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                    >
                      s
                    </span>
                  </div>
                  <div className="word">
                    <span
                      data-aos="fade-up"
                      data-aos-delay="1000"
                      className="max-[767px]:leading-[30px] text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                    >
                      a
                    </span>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="1050"
                      className="max-[767px]:leading-[30px] text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                    >
                      n
                    </span>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="1100"
                      className="max-[767px]:leading-[30px] text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                    >
                      d
                    </span>
                  </div>
                  <div className="word">
                    <span
                      data-aos="fade-up"
                      data-aos-delay="1150"
                      className="max-[767px]:leading-[30px] text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                    >
                      C
                    </span>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="1200"
                      className="max-[767px]:leading-[30px] text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                    >
                      e
                    </span>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="1250"
                      className="max-[767px]:leading-[30px] text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                    >
                      r
                    </span>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="1300"
                      className="max-[767px]:leading-[30px] text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                    >
                      t
                    </span>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="1350"
                      className="max-[767px]:leading-[30px] text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                    >
                      i
                    </span>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="1400"
                      className="max-[767px]:leading-[30px] text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                    >
                      f
                    </span>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="1450"
                      className="max-[767px]:leading-[30px] text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                    >
                      i
                    </span>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="1500"
                      className="max-[767px]:leading-[30px] text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                    >
                      c
                    </span>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="1550"
                      className="max-[767px]:leading-[30px] text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                    >
                      a
                    </span>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="1600"
                      className="max-[767px]:leading-[30px] text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                    >
                      t
                    </span>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="1650"
                      className="max-[767px]:leading-[30px] text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                    >
                      e
                    </span>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="1700"
                      className="max-[767px]:leading-[30px] text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                    >
                      s
                    </span>
                  </div>
                </h2>
              </div>
              <p className="text-[#666666] leading-[23px] md:leading-[17px] lg:leading-[22px] text-[14px] lg:text-[16px] font-medium lg:-tracking-[.02em]">
                Learn from global experts and gain the knowledge, and skills you
                need from the world's leading universities.
              </p>
              <div
                className={`course-widgets ${!isMobile ? "grid gap-8" : ""}`}
              >
                <CourseWidget
                  courseData={courses?.courses_certificates?.slice(
                    0,
                    displayCount.professionalCert
                  )}
                  isMobile={isMobile}
                />
                {!isMobile && courses?.courses_certificates?.length > 5 && (
                  <div className="course-btns hidden lg:flex justify-end flex-wrap gap-5">
                    <button
                      className="btn-smpl btn-white-transparent h-[40px] min-w-[156px]"
                      onClick={() => toggleSection("professionalCert")}
                    >
                      {displayCount.professionalCert === 5
                        ? "Show 10 more"
                        : "Show less"}
                    </button>
                    <BlueButton
                      btnText="View all"
                      link="/courses"
                      className="h-[40px] w-[139px]"
                    />
                  </div>
                )}
              </div>
            </Container>
          </section>
        )}

        {courses?.micro_masters_bachelors?.length > 0 && (
          <section
            className="education-programs pb-10"
            ref={educationProgramsRef}
            style={{ scrollMarginTop: "150px", overflow: "visible" }}
          >
            <Container className="lg:px-10">
              <div className="title gap-2 md:gap-1 grid pb-2 md:pb-1">
                <div className="course-tagline text-[16px] md:text-[20px] lg:text-[24px] font-medium font-Poppins text-blackColor2 lg:-tracking-[.05em]">
                  MicroMasters and MicroBachelors Programs
                </div>
                <h2
                  className="animated-text flex flex-wrap 
                [&>div]:leading-[30px] md:[&>div]:leading-[42px] lg:[&>div]:leading-[55px] 
                [&>div>span]:leading-[30px] md:[&>div>span]:leading-[42px] lg:[&>div>span]:leading-[64px] !pb-0 !mb-0 
                lg:-tracking-[.05em]"
                >
                  <div className="word">
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="100"
                    >
                      E
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="150"
                    >
                      x
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="200"
                    >
                      p
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="250"
                    >
                      l
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="300"
                    >
                      o
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="350"
                    >
                      r
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="400"
                    >
                      e
                    </span>
                  </div>
                  <div className="word">
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="450"
                    >
                      o
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="500"
                    >
                      u
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="550"
                    >
                      r
                    </span>
                  </div>
                  <div className="word">
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="600"
                    >
                      M
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="650"
                    >
                      i
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="700"
                    >
                      c
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="750"
                    >
                      r
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="800"
                    >
                      o
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="850"
                    >
                      M
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="900"
                    >
                      a
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="950"
                    >
                      s
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="1000"
                    >
                      t
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="1050"
                    >
                      e
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="1100"
                    >
                      r
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="1150"
                    >
                      s
                    </span>
                  </div>
                  <div className="word">
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="1200"
                    >
                      a
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="1250"
                    >
                      n
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="1300"
                    >
                      d
                    </span>
                  </div>

                  <div className="word">
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="1350"
                    >
                      M
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="1400"
                    >
                      i
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="1450"
                    >
                      c
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="1500"
                    >
                      r
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="1550"
                    >
                      o
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="1650"
                    >
                      b
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="1700"
                    >
                      a
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="1750"
                    >
                      c
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="1800"
                    >
                      h
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="1850"
                    >
                      e
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="1900"
                    >
                      l
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="1950"
                    >
                      o
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="2000"
                    >
                      r
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="2050"
                    >
                      s
                    </span>
                  </div>
                  <div className="word">
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="2100"
                    >
                      P
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="2150"
                    >
                      r
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="2200"
                    >
                      o
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="2250"
                    >
                      g
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="2300"
                    >
                      r
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="2350"
                    >
                      a
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="2400"
                    >
                      m
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] font-medium"
                      data-aos-delay="2450"
                    >
                      s
                    </span>
                  </div>
                </h2>
              </div>
              <p className="text-[#666666] leading-[23px] md:leading-[17px] lg:leading-[22px] text-[14px] lg:text-[16px] font-medium lg:-tracking-[.02em]">
                Study With Flexibility — Embark on a transformative leadership
                journey, and position yourself for success.
              </p>
              <div
                className={`course-widgets ${!isMobile ? "grid gap-8" : ""}`}
              >
                <CourseWidget
                  courseData={courses?.micro_masters_bachelors?.slice(
                    0,
                    displayCount.educationPrograms
                  )}
                  isMobile={isMobile}
                />
                {!isMobile && courses?.micro_masters_bachelors?.length > 5 && (
                  <div className="course-btns hidden lg:flex justify-end flex-wrap gap-5">
                    <button
                      className="btn-smpl btn-white-transparent h-[40px] -tracking-[.02em] min-w-[156px]"
                      onClick={() => toggleSection("educationPrograms")}
                    >
                      {displayCount.educationPrograms === 5
                        ? "Show 10 more"
                        : "Show less"}
                    </button>
                    <BlueButton
                      btnText="View all"
                      link="/courses"
                      className="h-[40px] -tracking-[.02em]"
                    />
                  </div>
                )}
              </div>
            </Container>
          </section>
        )}

        {courses?.degree?.length > 0 && (
          <section
            className="degree-programs pb-[100px] lg:pb-10"
            ref={degreeProgramsRef}
            style={{ scrollMarginTop: "150px", overflow: "visible" }}
          >
            <Container className="lg:px-10">
              <div className="title grid gap-2 lg:gap-1 pb-1 lg:pb-1">
                <div className="text-[16px] md:text-[20px] lg:text-[24px] leading-[24px] md:leading-[30px] lg:leading-[36px] font-medium lg:-tracking-[.05em] font-Poppins text-[#282828]">
                  Degree Programs
                </div>
                <h2
                  className="animated-text flex flex-wrap !p-0 !m-0 leading-[100%]
                [&>div>span]:text-[20px] md:[&>div>span]:text-[28px] lg:[&>div>span]:text-[40px] [&>div>span]:font-medium 
                [&>div>span]:leading-[30px] md:[&>div>span]:leading-[42px] lg:[&>div>span]:leading-[64px] 
                lg:[&>div>span]:-tracking-[.05em]"
                >
                  <div className="word">
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="100"
                    >
                      E
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="150"
                    >
                      x
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="200"
                    >
                      p
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="250"
                    >
                      l
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="300"
                    >
                      o
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="350"
                    >
                      r
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="400"
                    >
                      e
                    </span>
                  </div>
                  <div className="word">
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="450"
                    >
                      a
                    </span>
                  </div>
                  <div className="word">
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="500"
                    >
                      D
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="550"
                    >
                      e
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="600"
                    >
                      g
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="650"
                    >
                      r
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="700"
                    >
                      e
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="700"
                    >
                      e
                    </span>
                  </div>
                  <div className="word">
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="750"
                    >
                      f
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="800"
                    >
                      r
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="850"
                    >
                      o
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="900"
                    >
                      m
                    </span>
                  </div>
                  <div className="word">
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="950"
                    >
                      a
                    </span>
                  </div>
                  <div className="word">
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="1000"
                    >
                      P
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="1050"
                    >
                      r
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="1100"
                    >
                      e
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="1150"
                    >
                      s
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="1200"
                    >
                      t
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="1250"
                    >
                      i
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="1300"
                    >
                      g
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="1350"
                    >
                      i
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="1400"
                    >
                      o
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="1450"
                    >
                      u
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="1500"
                    >
                      s
                    </span>
                  </div>
                  <div className="word">
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="1550"
                    >
                      I
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="1600"
                    >
                      n
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="1650"
                    >
                      s
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="1700"
                    >
                      t
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="1750"
                    >
                      i
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="1800"
                    >
                      t
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="1850"
                    >
                      u
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="1900"
                    >
                      t
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="1950"
                    >
                      i
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="2000"
                    >
                      o
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="2050"
                    >
                      n
                    </span>
                    <span
                      data-aos="fade-up"
                      className="text-[20px] md:text-[28px] lg:text-[40px] max-[767px]:leading-[30px]"
                      data-aos-delay="2100"
                    >
                      s
                    </span>
                  </div>
                </h2>
              </div>
              <p className="text-[#666666] leading-[23px] md:leading-[17px] lg:leading-[22px] text-[14px] lg:text-[16px] font-medium lg:-tracking-[.02em]">
                Earn a degree from global experts and gain the knowledge, and
                skills you need from the world's leading universities.
              </p>
              <div
                className={`course-widgets ${!isMobile ? "grid gap-8" : ""}`}
              >
                <CourseWidget
                  courseData={courses?.degree?.slice(
                    0,
                    displayCount.degreePrograms
                  )}
                  isMobile={isMobile}
                />
                {!isMobile && courses?.degree?.length > 5 && (
                  <div className="course-btns hidden lg:flex justify-end flex-wrap gap-5">
                    <button
                      className="btn-smpl btn-white-transparent"
                      onClick={() => toggleSection("degreePrograms")}
                    >
                      {displayCount.degreePrograms === 5
                        ? "Show 10 more"
                        : "Show less"}
                    </button>
                    <BlueButton btnText="View all" link="/courses" />
                  </div>
                )}
              </div>
            </Container>
          </section>
        )}

        <section className="course-widgets explore pt-[53px] md:pt-[43px] lg:pt-[64px] pb-10 lg:pb-[80px]">
          <Container className="lg:px-10">
            <div className="title mb-6">
              <h2 className="animated-text flex flex-wrap text-[18px] lg:text-[40px] leading-[33px] md:leading-[27px] lg:leading-[64px] lg:-tracking-[.05em] !p-0 m-0">
                <div className="word">
                  <span
                    data-aos="fade-up"
                    class="text-[18px] lg:text-[40px] font-medium"
                    data-aos-delay="100"
                  >
                    E
                  </span>
                  <span
                    data-aos="fade-up"
                    class="text-[18px] lg:text-[40px] font-medium"
                    data-aos-delay="150"
                  >
                    x
                  </span>
                  <span
                    data-aos="fade-up"
                    class="text-[18px] lg:text-[40px] font-medium"
                    data-aos-delay="200"
                  >
                    p
                  </span>
                  <span
                    data-aos="fade-up"
                    class="text-[18px] lg:text-[40px] font-medium"
                    data-aos-delay="250"
                  >
                    l
                  </span>
                  <span
                    data-aos="fade-up"
                    class="text-[18px] lg:text-[40px] font-medium"
                    data-aos-delay="300"
                  >
                    o
                  </span>
                  <span
                    data-aos="fade-up"
                    class="text-[18px] lg:text-[40px] font-medium"
                    data-aos-delay="350"
                  >
                    r
                  </span>
                  <span
                    data-aos="fade-up"
                    class="text-[18px] lg:text-[40px] font-medium"
                    data-aos-delay="400"
                  >
                    e
                  </span>
                </div>
                <div className="word">
                  <span
                    data-aos="fade-up"
                    class="text-[18px] lg:text-[40px] font-medium"
                    data-aos-delay="500"
                  >
                    P
                  </span>
                  <span
                    data-aos="fade-up"
                    class="text-[18px] lg:text-[40px] font-medium"
                    data-aos-delay="550"
                  >
                    o
                  </span>
                  <span
                    data-aos="fade-up"
                    class="text-[18px] lg:text-[40px] font-medium"
                    data-aos-delay="600"
                  >
                    p
                  </span>
                  <span
                    data-aos="fade-up"
                    class="text-[18px] lg:text-[40px] font-medium"
                    data-aos-delay="650"
                  >
                    u
                  </span>
                  <span
                    data-aos="fade-up"
                    class="text-[18px] lg:text-[40px] font-medium"
                    data-aos-delay="700"
                  >
                    l
                  </span>
                  <span
                    data-aos="fade-up"
                    class="text-[18px] lg:text-[40px] font-medium"
                    data-aos-delay="750"
                  >
                    a
                  </span>
                  <span
                    data-aos="fade-up"
                    class="text-[18px] lg:text-[40px] font-medium"
                    data-aos-delay="800"
                  >
                    r
                  </span>
                </div>

                <div className="word">
                  <span
                    data-aos="fade-up"
                    class="text-[18px] lg:text-[40px] font-medium"
                    data-aos-delay="850"
                  >
                    S
                  </span>
                  <span
                    data-aos="fade-up"
                    class="text-[18px] lg:text-[40px] font-medium"
                    data-aos-delay="900"
                  >
                    u
                  </span>
                  <span
                    data-aos="fade-up"
                    class="text-[18px] lg:text-[40px] font-medium"
                    data-aos-delay="950"
                  >
                    b
                  </span>
                  <span
                    data-aos="fade-up"
                    class="text-[18px] lg:text-[40px] font-medium"
                    data-aos-delay="1000"
                  >
                    j
                  </span>
                  <span
                    data-aos="fade-up"
                    class="text-[18px] lg:text-[40px] font-medium"
                    data-aos-delay="1050"
                  >
                    e
                  </span>
                  <span
                    data-aos="fade-up"
                    class="text-[18px] lg:text-[40px] font-medium"
                    data-aos-delay="1100"
                  >
                    c
                  </span>
                  <span
                    data-aos="fade-up"
                    class="text-[18px] lg:text-[40px] font-medium"
                    data-aos-delay="1150"
                  >
                    t
                  </span>
                  <span
                    data-aos="fade-up"
                    class="text-[18px] lg:text-[40px] font-medium"
                    data-aos-delay="1200"
                  >
                    s
                  </span>
                </div>
              </h2>
            </div>
            <ExploreInexa />
          </Container>
        </section>

        <Container>
          <Testimonial />
        </Container>

        <Container>
          <Business />
        </Container>

        <Container>
          <Team />
        </Container>
      </Layout>
    </>
  );
};

export default Home;
