import React from "react";
import harverdImage from "../../assets/images/harverd.webp";
import edx2u from "../../assets/images/edx-by-2u-white.png";
import logo from "../../assets/images/logoBlk.png";
import computer from "../../assets/images/computer.svg";
import icon from "../../assets/images/A-icon.svg";
import { Link } from "react-router-dom";
import Button from "../Button";
import BlueButton from "../Buttons/BlueButton";

const popularCourse = [
  {
    instituteLogo: harverdImage,
    instituteName: "harverd university",
    courseType: "course",
    coursetitle: "Harvard: CS50's Introduction to Computer Science",
    courseButtonLink: "/about-us",
    courseLink: "https://www.google.com",
    courseInfo: "Fully interactive learning",
    duration: "4",
    date: "1 jan 2025",
    sponserLogo: edx2u,
    supportedBy: icon,
  },
  {
    instituteLogo: harverdImage,
    instituteName: "harverd university",
    courseType: "professional certificate",
    coursetitle: "Harvard: CS50's Introduction to Computer Science",
    courseButtonLink: "/about-us",
    courseLink: "https://www.google.com",
    courseInfo: "Fully interactive learning",
    duration: "4",
    date: "1 jan 2025",
    sponserLogo: edx2u,
    supportedBy: icon,
  },
  {
    instituteLogo: harverdImage,
    instituteName: "harverd university",
    courseType: "course",
    coursetitle: "Harvard: CS50's Introduction to Computer Science",
    courseButtonLink: "/about-us",
    courseLink: "https://www.google.com",
    courseInfo: "Fully interactive learning",
    duration: "4",
    date: "1 jan 2025",
    sponserLogo: edx2u,
    supportedBy: icon,
  },
  {
    instituteLogo: harverdImage,
    instituteName: "harverd university",
    courseType: "exclusive course",
    coursetitle: "Harvard: CS50's Introduction to Computer Science",
    courseButtonLink: "/about-us",
    courseLink: "https://www.google.com",
    courseInfo: "Fully interactive learning",
    duration: "4",
    date: "1 jan 2025",
    sponserLogo: edx2u,
    supportedBy: icon,
  },
];

// const courses = {
//   popularCourse: [
//     {
//           instituteLogo :harverdImage,
//           instituteName: "harverd university",
//           courseType: "course" ,
//           coursetitle: "Harvard: CS50's Introduction to Computer Science",
//           courseButtonLink: "/about-us",
//           courseLink: "https://www.google.com",
//           courseInfo: "Fully interactive learning",
//           duration: "4",
//           date: "1 jan 2025",
//           sponserLogo: edx2u,
//           supportedBy: icon,
//         },
//         {
//           instituteLogo :harverdImage,
//           instituteName: "harverd university",
//           courseType: "professional certificate" ,
//           coursetitle: "Harvard: CS50's Introduction to Computer Science",
//           courseButtonLink: "/about-us",
//           courseLink: "https://www.google.com",
//           courseInfo: "Fully interactive learning",
//           duration: "4",
//           date: "1 jan 2025",
//           sponserLogo: edx2u,
//           supportedBy: icon,
//         },
//         {
//           instituteLogo :harverdImage,
//           instituteName: "harverd university",
//           courseType: "course" ,
//           coursetitle: "Harvard: CS50's Introduction to Computer Science",
//           courseButtonLink: "/about-us",
//           courseLink: "https://www.google.com",
//           courseInfo: "Fully interactive learning",
//           duration: "4",
//           date: "1 jan 2025",
//           sponserLogo: edx2u,
//           supportedBy: icon,
//         },
//         {
//           instituteLogo :harverdImage,
//           instituteName: "harverd university",
//           courseType: "exclusive course" ,
//           coursetitle: "Harvard: CS50's Introduction to Computer Science",
//           courseButtonLink: "/about-us",
//           courseLink: "https://www.google.com",
//           courseInfo: "Fully interactive learning",
//           duration: "4",
//           date: "1 jan 2025",
//           sponserLogo: edx2u,
//           supportedBy: icon,
//         },
//   ],

//   educationCourse :[
//     {

//         instituteLogo :harverdImage,
//         instituteName: "harverd university",
//         courseType: "exclusive course" ,
//         coursetitle: "Harvard: CS50's Introduction to Computer Science",
//         courseButtonLink: "/about-us",
//         courseLink: "https://www.google.com",
//         courseInfo: "Fully interactive learning",
//         duration: "4",
//         date: "1 jan 2025",
//         sponserLogo: edx2u,
//         supportedBy: icon,
//       },
//     {

//         instituteLogo :harverdImage,
//         instituteName: "harverd university",
//         courseType: "exclusive course" ,
//         coursetitle: "Harvard: CS50's Introduction to Computer Science",
//         courseButtonLink: "/about-us",
//         courseLink: "https://www.google.com",
//         courseInfo: "Fully interactive learning",
//         duration: "4",
//         date: "1 jan 2025",
//         sponserLogo: edx2u,
//         supportedBy: icon,
//       },
//     {

//         instituteLogo :harverdImage,
//         instituteName: "harverd university",
//         courseType: "exclusive course" ,
//         coursetitle: "Harvard: CS50's Introduction to Computer Science",
//         courseButtonLink: "/about-us",
//         courseLink: "https://www.google.com",
//         courseInfo: "Fully interactive learning",
//         duration: "4",
//         date: "1 jan 2025",
//         sponserLogo: edx2u,
//         supportedBy: icon,
//       },
//     {

//         instituteLogo :harverdImage,
//         instituteName: "harverd university",
//         courseType: "exclusive course" ,
//         coursetitle: "Harvard: CS50's Introduction to Computer Science",
//         courseButtonLink: "/about-us",
//         courseLink: "https://www.google.com",
//         courseInfo: "Fully interactive learning",
//         duration: "4",
//         date: "1 jan 2025",
//         sponserLogo: edx2u,
//         supportedBy: icon,
//       },
//   ],

//   degreeCourse: [
//     {
//       instituteLogo :harverdImage,
//         instituteName: "harverd university",
//         courseType: "degree" ,
//         coursetitle: "Harvard: CS50's Introduction to Computer Science",
//         courseButtonLink: "/about-us",
//         courseLink: "https://www.google.com",
//         courseInfo: "Fully interactive learning",
//         duration: "4",
//         date: "1 jan 2025",
//         sponserLogo: edx2u,
//         supportedBy: icon,
//     },
//     {
//       instituteLogo :harverdImage,
//         instituteName: "harverd university",
//         courseType: "degree" ,
//         coursetitle: "Harvard: CS50's Introduction to Computer Science",
//         courseButtonLink: "/about-us",
//         courseLink: "https://www.google.com",
//         courseInfo: "Fully interactive learning",
//         duration: "4",
//         date: "1 jan 2025",
//         sponserLogo: edx2u,
//         supportedBy: icon,
//     },
//     {
//       instituteLogo :harverdImage,
//         instituteName: "harverd university",
//         courseType: "degree" ,
//         coursetitle: "Harvard: CS50's Introduction to Computer Science",
//         courseButtonLink: "/about-us",
//         courseLink: "https://www.google.com",
//         courseInfo: "Fully interactive learning",
//         duration: "4",
//         date: "1 jan 2025",
//         sponserLogo: edx2u,
//         supportedBy: icon,
//     },
//   ],
// }

const categoryBgColors = {
  course: "bg-green",
  "professional certificate": "bg-blue",
  "exclusive course": "bg-black",
};

const Courses = ({
  subtitle = "subtitle",
  tagline = "tagline",
  heading = "heading",
  para = "para",
}) => {
  //  const filteredCourses = popularCourse.filter(course => course.courseType === category);
  
  return (
    <>
      <section className="courses">
        <div className="wrapper padding ">

          <div className="title mb-12">
            {subtitle && (
              <div className="font-semibold mb-2">/ {subtitle} /</div>
            )}
            <h3 className="md:text-3xl">{tagline}</h3>
            <h2 data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">{heading}</h2>
            <p>{para}</p>
          </div>

          <div className=" courses">
            <div className="coursrs-widgets grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 gap-x-10">
              {/* <div className="course-widget w-80 relative overflow-hidden shadow-xl bg-whiteColor rounded-2xl  ">
              <div className="course-widget-content p-5   ">
                <div className="image">
                  <img className="w-40 mb-2" src={harverdImage} alt="image" />
                  <p className="capitalize text-sm">harverd university</p>
                </div>
                <button className="bg-primaryColor text-whiteColor py-2 px-4 rounded-full capitalize mt-8 mb-4">
                  course
                </button>
                <div className="course-title">
                  Harvard: CS50's Introduction to Computer Science
                </div>
                <ul className="features">
                  <li>
                    
                    <img
                      className="inline-block me-2"
                      src={computer}
                      alt="image"
                    />
                    Fully interactive learning
                  </li>

                  <li>
                    
                    <img
                      className="inline-block me-2"
                      src={computer}
                      alt="image"
                    />
                    4 weeks
                  </li>
                  <li>
                    
                    <img
                      className="inline-block me-2"
                      src={computer}
                      alt="image"
                    />
                    Intermediate
                  </li>
                  <li> 
                    <img
                      className="inline-block me-2"
                      src={computer}
                      alt="image"
                    />
                    01 Jan 25
                  </li>
                </ul>
                <div className="flex justify-center mt-5 mb-8">
                  <img className="w-16" src={edx2u} alt="image" />
                </div>
                <div className="flex gap-3 items-center">
                  <p>supported by</p>
                  <div>
                    <img className="w-20" src={logo} alt="image" />
                  </div>
                </div>
                
              </div>

              <div className=" side-icon flex size-16 justify-center items-center shadow-custom-inset rounded-tl-3xl float-end absolute bottom-0 right-0">
                  <div className=" size-10 bg-blackColor flex justify-center items-center rounded-full">
                    <div>
                      <img className="w-5" src={icon} alt="icon" />
                    </div>
                  </div>
                </div>
              
            </div> */}
              {popularCourse.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="course-widget group relative overflow-hidden shadow-xl bg-indigo-10 rounded-2xl   bg-whiteColor rounded-2x md:hover:scale-[1.01] duration-300 "
                  >
                    <div className="course-widget-content p-5  ">
                      <div className="image">
                        <img
                          className="w-40 mb-2"
                          src={item.instituteLogo}
                          alt="image"
                        />
                        <p className="capitalize text-sm">
                          {item.instituteName}
                        </p>
                      </div>
                      <div className="mt-8 mb-10">
                        <button>
                          <Link
                            to={item.courseButtonLink}
                            className={`${
                              categoryBgColors[item.courseType] ||
                              "bg-gray-500 "
                            } `}
                          >
                            {item.courseType}
                          </Link>
                        </button>
                      </div>
                      <div className="course-title">
                        <a href={item.courseLink}>{item.coursetitle}</a>
                      </div>
                      <ul className="features group-hover:text-blackColor duration-300">
                        <li>
                          <img
                            className="inline-block me-2"
                            src={computer}
                            alt="image"
                          />
                          Fully interactive learning aqaqa
                        </li>

                        <li>
                          <img
                            className="inline-block me-2"
                            src={computer}
                            alt="image"
                          />
                          4 weeks
                        </li>
                        <li>
                          <img
                            className="inline-block me-2"
                            src={computer}
                            alt="image"
                          />
                          Intermediate
                        </li>
                        <li>
                          <img
                            className="inline-block me-2"
                            src={computer}
                            alt="image"
                          />
                          01 Jan 25
                        </li>
                      </ul>
                      <div className="flex justify-center mt-5 mb-8">
                        <img className="w-16" src={edx2u} alt="image" />
                      </div>
                      <div className="flex gap-3 items-center">
                        <p>supported by</p>
                        <div>
                          <img className="w-20" src={logo} alt="image" />
                        </div>
                      </div>
                    </div>
                    {/* <div className="flex gap-3 items-center">
                        <p>supported by</p>
                        <div>
                          <img className="w-20" src={logo} alt="image" />
                        </div>
                      </div> */}

                    <div className=" side-icon flex size-16 justify-center items-center shadow-custom-inset rounded-tl-3xl float-end absolute bottom-0 right-0">
                      <div className=" size-10 bg-blackColor flex justify-center items-center rounded-full">
                        <div>
                          <img className="w-3" src={icon} alt="icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="buttons flex flex-wrap justify-center md:justify-start items-center gap-5 mt-8">
            <a className="btn-blue" href="#">
              show 8 more 2222
            </a>
            <BlueButton children="view all" />
          </div>
        </div>
      </section>
    </>
  );
};


export default Courses;

