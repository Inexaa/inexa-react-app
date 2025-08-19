import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./style.css";

const OnlineCourses = () => {
  const [isOpen, setIsOpen] = useState(false);
    const [favorites, setFavorites] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const coursesPerPage = 12;

    const handleFavorite = (id) => {
        setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
      };
  const courseData = [
    {
      id: 1,
      uniName: "Harvard University",
      uniLogo: "/images/harverd.webp",
      uniLogoAlt: "Harvard Logo",
      courseCat: "Exclusive course",
      courseCatLink: "/",
      courseTitle: "Harvard: CS50's Introduction to Computer Science",
      details: [
        "Fully interactive learning",
        "4 weeks",
        "Intermediate",
        "Starts: 01 Jan 25",
      ],
      courseicon: [
        "/images/int_learning.svg",
        "/images/duration_weeks.svg",
        "/images/graph_bar.svg",
        "/images/calendar.svg",
      ],
      sponsoredPlatform: "/images/course-box-edx2.png",
      sponsoredPlatformAlt: "EdX",
      cornerIcon: "/images/course-box-blackA.png",
      cornerIconAlt: "Icon",
      cornerIconLink: "https://www.google.com",
      sponsoredByLogo: "/images/course-sponser.svg",
      sponsoredByLogoAlt: "Sponsored By",
    },
    {
        id: 2,
        uniName: "Harvard University2",
        uniLogo: "/images/harverd.webp",
        uniLogoAlt: "Harvard Logo",
        courseCat: "Exclusive course",
        courseCatLink: "/",
        courseTitle: "Harvard: CS50's Introduction to Computer Science",
        details: [
          "Fully interactive learning",
          "4 weeks",
          "Intermediate",
          "Starts: 01 Jan 25",
        ],
        courseicon: [
          "/images/int_learning.svg",
          "/images/duration_weeks.svg",
          "/images/graph_bar.svg",
          "/images/calendar.svg",
        ],
        sponsoredPlatform: "/images/course-box-edx2.png",
        sponsoredPlatformAlt: "EdX",
        cornerIcon: "/images/course-box-blackA.png",
        cornerIconAlt: "Icon",
        cornerIconLink: "https://www.google.com",
        sponsoredByLogo: "/images/course-sponser.svg",
        sponsoredByLogoAlt: "Sponsored By",
      },
      {
        id: 3,
        uniName: "Harvard University3",
        uniLogo: "/images/harverd.webp",
        uniLogoAlt: "Harvard Logo",
        courseCat: "Exclusive course",
        courseCatLink: "/",
        courseTitle: "Harvard: CS50's Introduction to Computer Science",
        details: [
          "Fully interactive learning",
          "4 weeks",
          "Intermediate",
          "Starts: 01 Jan 25",
        ],
        courseicon: [
          "/images/int_learning.svg",
          "/images/duration_weeks.svg",
          "/images/graph_bar.svg",
          "/images/calendar.svg",
        ],
        sponsoredPlatform: "/images/course-box-edx2.png",
        sponsoredPlatformAlt: "EdX",
        cornerIcon: "/images/course-box-blackA.png",
        cornerIconAlt: "Icon",
        cornerIconLink: "https://www.google.com",
        sponsoredByLogo: "/images/course-sponser.svg",
        sponsoredByLogoAlt: "Sponsored By",
      },
      {
        id: 4,
        uniName: "Harvard University4",
        uniLogo: "/images/harverd.webp",
        uniLogoAlt: "Harvard Logo",
        courseCat: "Exclusive course",
        courseCatLink: "/",
        courseTitle: "Harvard: CS50's Introduction to Computer Science",
        details: [
          "Fully interactive learning",
          "4 weeks",
          "Intermediate",
          "Starts: 01 Jan 25",
        ],
        courseicon: [
          "/images/int_learning.svg",
        "/images/duration_weeks.svg",
        "/images/graph_bar.svg",
        "/images/calendar.svg",
        ],
        sponsoredPlatform: "/images/course-box-edx2.png",
        sponsoredPlatformAlt: "EdX",
        cornerIcon: "/images/course-box-blackA.png",
        cornerIconAlt: "Icon",
        cornerIconLink: "https://www.google.com",
        sponsoredByLogo: "/images/course-sponser.svg",
        sponsoredByLogoAlt: "Sponsored By",
      },
      {
        id: 5,
        uniName: "Harvard University5",
        uniLogo: "/images/harverd.webp",
        uniLogoAlt: "Harvard Logo",
        courseCat: "Exclusive course",
        courseCatLink: "/",
        courseTitle: "Harvard: CS50's Introduction to Computer Science",
        details: [
          "Fully interactive learning",
          "4 weeks",
          "Intermediate",
          "Starts: 01 Jan 25",
        ],
        courseicon: [
          "/images/int_learning.svg",
          "/images/duration_weeks.svg",
          "/images/graph_bar.svg",
          "/images/calendar.svg",
        ],
        sponsoredPlatform: "/images/course-box-edx2.png",
        sponsoredPlatformAlt: "EdX",
        cornerIcon: "/images/course-box-blackA.png",
        cornerIconAlt: "Icon",
        cornerIconLink: "https://www.google.com",
        sponsoredByLogo: "/images/course-sponser.svg",
        sponsoredByLogoAlt: "Sponsored By",
      },
      {
        id: 6,
        uniName: "Harvard University6",
        uniLogo: "/images/harverd.webp",
        uniLogoAlt: "Harvard Logo",
        courseCat: "Exclusive course",
        courseCatLink: "/",
        courseTitle: "Harvard: CS50's Introduction to Computer Science",
        details: [
          "Fully interactive learning",
          "4 weeks",
          "Intermediate",
          "Starts: 01 Jan 25",
        ],
        courseicon: [
          "/images/int_learning.svg",
          "/images/duration_weeks.svg",
          "/images/graph_bar.svg",
          "/images/calendar.svg",
        ],
        sponsoredPlatform: "/images/course-box-edx2.png",
        sponsoredPlatformAlt: "EdX",
        cornerIcon: "/images/course-box-blackA.png",
        cornerIconAlt: "Icon",
        cornerIconLink: "https://www.google.com",
        sponsoredByLogo: "/images/course-sponser.svg",
        sponsoredByLogoAlt: "Sponsored By",
      },
      {
        id: 7,
        uniName: "Harvard University7",
        uniLogo: "/images/harverd.webp",
        uniLogoAlt: "Harvard Logo",
        courseCat: "Exclusive course",
        courseCatLink: "/",
        courseTitle: "Harvard: CS50's Introduction to Computer Science",
        details: [
          "Fully interactive learning",
          "4 weeks",
          "Intermediate",
          "Starts: 01 Jan 25",
        ],
        courseicon: [
          "/images/int_learning.svg",
          "/images/duration_weeks.svg",
          "/images/graph_bar.svg",
          "/images/calendar.svg",
        ],
        sponsoredPlatform: "/images/course-box-edx2.png",
        sponsoredPlatformAlt: "EdX",
        cornerIcon: "/images/course-box-blackA.png",
        cornerIconAlt: "Icon",
        cornerIconLink: "https://www.google.com",
        sponsoredByLogo: "/images/course-sponser.svg",
        sponsoredByLogoAlt: "Sponsored By",
      },
      {
        id: 8,
        uniName: "Harvard University8",
        uniLogo: "/images/harverd.webp",
        uniLogoAlt: "Harvard Logo",
        courseCat: "Exclusive course",
        courseCatLink: "/",
        courseTitle: "Harvard: CS50's Introduction to Computer Science",
        details: [
          "Fully interactive learning",
          "4 weeks",
          "Intermediate",
          "Starts: 01 Jan 25",
        ],
        courseicon: [
          "/images/int_learning.svg",
          "/images/duration_weeks.svg",
          "/images/graph_bar.svg",
          "/images/calendar.svg",
        ],
        sponsoredPlatform: "/images/course-box-edx2.png",
        sponsoredPlatformAlt: "EdX",
        cornerIcon: "/images/course-box-blackA.png",
        cornerIconAlt: "Icon",
        cornerIconLink: "https://www.google.com",
        sponsoredByLogo: "/images/course-sponser.svg",
        sponsoredByLogoAlt: "Sponsored By",
      },
      {
        id: 9,
        uniName: "Harvard University9",
        uniLogo: "/images/harverd.webp",
        uniLogoAlt: "Harvard Logo",
        courseCat: "Exclusive course",
        courseCatLink: "/",
        courseTitle: "Harvard: CS50's Introduction to Computer Science",
        details: [
          "Fully interactive learning",
          "4 weeks",
          "Intermediate",
          "Starts: 01 Jan 25",
        ],
        courseicon: [
          "/images/int_learning.svg",
          "/images/duration_weeks.svg",
          "/images/graph_bar.svg",
          "/images/calendar.svg",
        ],
        sponsoredPlatform: "/images/course-box-edx2.png",
        sponsoredPlatformAlt: "EdX",
        cornerIcon: "/images/course-box-blackA.png",
        cornerIconAlt: "Icon",
        cornerIconLink: "https://www.google.com",
        sponsoredByLogo: "/images/course-sponser.svg",
        sponsoredByLogoAlt: "Sponsored By",
      },
      {
        id: 10,
        uniName: "Harvard University10",
        uniLogo: "/images/harverd.webp",
        uniLogoAlt: "Harvard Logo",
        courseCat: "Exclusive course",
        courseCatLink: "/",
        courseTitle: "Harvard: CS50's Introduction to Computer Science",
        details: [
          "Fully interactive learning",
          "4 weeks",
          "Intermediate",
          "Starts: 01 Jan 25",
        ],
        courseicon: [
          "/images/int_learning.svg",
          "/images/duration_weeks.svg",
          "/images/graph_bar.svg",
          "/images/calendar.svg",
        ],
        sponsoredPlatform: "/images/course-box-edx2.png",
        sponsoredPlatformAlt: "EdX",
        cornerIcon: "/images/course-box-blackA.png",
        cornerIconAlt: "Icon",
        cornerIconLink: "https://www.google.com",
        sponsoredByLogo: "/images/course-sponser.svg",
        sponsoredByLogoAlt: "Sponsored By",
      },{
        id: 11,
        uniName: "Harvard University11",
        uniLogo: "/images/harverd.webp",
        uniLogoAlt: "Harvard Logo",
        courseCat: "Exclusive course",
        courseCatLink: "/",
        courseTitle: "Harvard: CS50's Introduction to Computer Science",
        details: [
          "Fully interactive learning",
          "4 weeks",
          "Intermediate",
          "Starts: 01 Jan 25",
        ],
        courseicon: [
          "/images/int_learning.svg",
        "/images/duration_weeks.svg",
        "/images/graph_bar.svg",
        "/images/calendar.svg",
        ],
        sponsoredPlatform: "/images/course-box-edx2.png",
        sponsoredPlatformAlt: "EdX",
        cornerIcon: "/images/course-box-blackA.png",
        cornerIconAlt: "Icon",
        cornerIconLink: "https://www.google.com",
        sponsoredByLogo: "/images/course-sponser.svg",
        sponsoredByLogoAlt: "Sponsored By",
      },{
        id: 12,
        uniName: "Harvard University12",
        uniLogo: "/images/harverd.webp",
        uniLogoAlt: "Harvard Logo",
        courseCat: "Exclusive course",
        courseCatLink: "/",
        courseTitle: "Harvard: CS50's Introduction to Computer Science",
        details: [
          "Fully interactive learning",
          "4 weeks",
          "Intermediate",
          "Starts: 01 Jan 25",
        ],
        courseicon: [
          "/images/int_learning.svg",
          "/images/duration_weeks.svg",
          "/images/graph_bar.svg",
          "/images/calendar.svg",
        ],
        sponsoredPlatform: "/images/course-box-edx2.png",
        sponsoredPlatformAlt: "EdX",
        cornerIcon: "/images/course-box-blackA.png",
        cornerIconAlt: "Icon",
        cornerIconLink: "https://www.google.com",
        sponsoredByLogo: "/images/course-sponser.svg",
        sponsoredByLogoAlt: "Sponsored By",
      },
      {
        id: 13,
        uniName: "Harvard University13",
        uniLogo: "/images/harverd.webp",
        uniLogoAlt: "Harvard Logo",
        courseCat: "Exclusive course",
        courseCatLink: "/",
        courseTitle: "Harvard: CS50's Introduction to Computer Science",
        details: [
          "Fully interactive learning",
          "4 weeks",
          "Intermediate",
          "Starts: 01 Jan 25",
        ],
        courseicon: [
          "/images/int_learning.svg",
        "/images/duration_weeks.svg",
        "/images/graph_bar.svg",
        "/images/calendar.svg",
        ],
        sponsoredPlatform: "/images/course-box-edx2.png",
        sponsoredPlatformAlt: "EdX",
        cornerIcon: "/images/course-box-blackA.png",
        cornerIconAlt: "Icon",
        cornerIconLink: "https://www.google.com",
        sponsoredByLogo: "/images/course-sponser.svg",
        sponsoredByLogoAlt: "Sponsored By",
      },
      {
        id: 14,
        uniName: "Harvard University14",
        uniLogo: "/images/harverd.webp",
        uniLogoAlt: "Harvard Logo",
        courseCat: "Exclusive course",
        courseCatLink: "/",
        courseTitle: "Harvard: CS50's Introduction to Computer Science",
        details: [
          "Fully interactive learning",
          "4 weeks",
          "Intermediate",
          "Starts: 01 Jan 25",
        ],
        courseicon: [
          "/images/int_learning.svg",
          "/images/duration_weeks.svg",
          "/images/graph_bar.svg",
          "/images/calendar.svg",
        ],
        sponsoredPlatform: "/images/course-box-edx2.png",
        sponsoredPlatformAlt: "EdX",
        cornerIcon: "/images/course-box-blackA.png",
        cornerIconAlt: "Icon",
        cornerIconLink: "https://www.google.com",
        sponsoredByLogo: "/images/course-sponser.svg",
        sponsoredByLogoAlt: "Sponsored By",
      },
      {
        id: 15,
        uniName: "Harvard University15",
        uniLogo: "/images/harverd.webp",
        uniLogoAlt: "Harvard Logo",
        courseCat: "Exclusive course",
        courseCatLink: "/",
        courseTitle: "Harvard: CS50's Introduction to Computer Science",
        details: [
          "Fully interactive learning",
          "4 weeks",
          "Intermediate",
          "Starts: 01 Jan 25",
        ],
        courseicon: [
          "/images/int_learning.svg",
        "/images/duration_weeks.svg",
        "/images/graph_bar.svg",
        "/images/calendar.svg",
        ],
        sponsoredPlatform: "/images/course-box-edx2.png",
        sponsoredPlatformAlt: "EdX",
        cornerIcon: "/images/course-box-blackA.png",
        cornerIconAlt: "Icon",
        cornerIconLink: "https://www.google.com",
        sponsoredByLogo: "/images/course-sponser.svg",
        sponsoredByLogoAlt: "Sponsored By",
      },
      {
        id: 16,
        uniName: "Harvard University16",
        uniLogo: "/images/harverd.webp",
        uniLogoAlt: "Harvard Logo",
        courseCat: "Exclusive course",
        courseCatLink: "/",
        courseTitle: "Harvard: CS50's Introduction to Computer Science",
        details: [
          "Fully interactive learning",
          "4 weeks",
          "Intermediate",
          "Starts: 01 Jan 25",
        ],
        courseicon: [
          "/images/int_learning.svg",
        "/images/duration_weeks.svg",
        "/images/graph_bar.svg",
        "/images/calendar.svg",
        ],
        sponsoredPlatform: "/images/course-box-edx2.png",
        sponsoredPlatformAlt: "EdX",
        cornerIcon: "/images/course-box-blackA.png",
        cornerIconAlt: "Icon",
        cornerIconLink: "https://www.google.com",
        sponsoredByLogo: "/images/course-sponser.svg",
        sponsoredByLogoAlt: "Sponsored By",
      },
      {
        id: 17,
        uniName: "Harvard University17",
        uniLogo: "/images/harverd.webp",
        uniLogoAlt: "Harvard Logo",
        courseCat: "Exclusive course",
        courseCatLink: "/",
        courseTitle: "Harvard: CS50's Introduction to Computer Science",
        details: [
          "Fully interactive learning",
          "4 weeks",
          "Intermediate",
          "Starts: 01 Jan 25",
        ],
        courseicon: [
          "/images/int_learning.svg",
          "/images/duration_weeks.svg",
          "/images/graph_bar.svg",
          "/images/calendar.svg",
        ],
        sponsoredPlatform: "/images/course-box-edx2.png",
        sponsoredPlatformAlt: "EdX",
        cornerIcon: "/images/course-box-blackA.png",
        cornerIconAlt: "Icon",
        cornerIconLink: "https://www.google.com",
        sponsoredByLogo: "/images/course-sponser.svg",
        sponsoredByLogoAlt: "Sponsored By",
      },
  ];
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courseData.slice(indexOfFirstCourse, indexOfLastCourse);
  return (
    <section>
      <div className="wrapper padding pb-0 2xl:-me-4 ">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 2xl:px-[6px]">
          {currentCourses.map((course) => (
            <div key={course.id} className="course-widgets">
              <div className="group duration-300 hover:scale-[1.01]">
                <div className="relative bg-white p-6 course-box-shadow rounded-2xl rounded-bl-none">
                  {/* University Logo & Favorite Icon */}
                  <div className="flex justify-between items-center">
                    <img
                      className="w-36 lg:w-44 select-none"
                      src={course.uniLogo}
                      alt={course.uniLogoAlt}
                    />
                    {favorites[course.id] ? (
                      // <FaHeart
                      //   className="text-2xl text-primaryColor cursor-pointer"
                      //   onClick={() => handleFavorite(course.id)}
                      // />
                      <img
                        className=" text-primaryColor cursor-pointer select-none"
                        src="/images/heart_filled_1.svg"
                        alt="heart iocn"
                        onClick={() => handleFavorite(course.id)}
                      />
                    ) : (
                      // <CiHeart
                      //   className="text-2xl text-primaryColor cursor-pointer"
                      //   onClick={() => handleFavorite(course.id)}
                      // />
                      <img
                        className=" text-primaryColor cursor-pointer"
                        src="/images/heart_empty_1.2.svg"
                        alt="heart iocn"
                        onClick={() => handleFavorite(course.id)}
                      />
                    )}
                  </div>

                  {/* University Name */}
                  <div className="capitalize text-sm text-textColor2 mt-1 font-medium">
                    {course.uniName}
                  </div>

                  {/* Course Category */}
                  <div
                    className="mt-20 mb-[18px] capitalize course-btn text-[10px] font-Poppins font-medium cursor-default h-[25px]"
                    to={course.courseCatLink}
                  >
                    {course.courseCat}
                  </div>

                  {/* Course Title */}
                  <div className="text-lg font-medium leading-6 mb-6 font-Poppins text-headingColor">
                    {course.courseTitle}
                  </div>

                  {/* Course Details with Icons */}
                  <ul className="text-sm text-textColor duration-300 font-medium group-hover:text-black mb-6 flex flex-col gap-[14px]">
                    {course.details.map((detail, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <img
                          src={course.courseicon[index]}
                          alt="icon"
                          className="list-icon w-5 h-5 group-hover:brightness-[0.4] duration-300"
                        />
                        <span>{detail}</span> 
                      </li>
                    ))}
                  </ul>

                  {/* Sponsored Platform */}
                  <div className="my-4 absolute right-5 bottom-1">
                    <img
                      className="w-12"
                      src={course.sponsoredPlatform}
                      alt={course.sponsoredPlatformAlt}
                    />
                  </div>
                </div>

                {/* Sponsored Bar */}
                <div className="sponser-bar relative course-box-shadow-2 flex gap-2 items-center px-6 py-4 rounded-b-2xl w-[75%] h-[60px] bg-white">
                  <div className="absolute -top-1 left-0 h-2 w-full bg-white rounded-t-2xl"></div>
                  <div className="absolute -top-0 -right-10 w-10 h-10 border-l border-t border-borderColor2 bg-transparent rounded-tl-3xl corner-shadow"></div>
                  <Link
                    title="view full course"
                    className="absolute -right-12"
                    to={course.cornerIconLink}
                  >
                    <a
                      title="view full course"
                      className="corner-icon absolute -right-[4px] -top-5 duration-300  bg-blackColor2 size-11 flex items-center justify-center rounded-full group-hover:bg-primaryColor"
                      href="https://www.google.com"
                    >
                      <img
                        className="duration-300 hover:scale-110 w-3"
                        alt="icon"
                        src="images/list-A.webp"
                      />
                    </a>
                  </Link>
                  <div className="text-xs font-Poppins font-medium text-headingColor">
                    Supported by
                  </div>
                  <div>
                    <img
                      className="inline-block"
                      src={course.sponsoredByLogo}
                      alt={course.sponsoredByLogoAlt}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-20">
          <div className="flex justify-end space-x-2  w-[80%]">
            <button
              className="px-3 py-3 border rounded-full hover:bg-blackColor2 h-[41px] w-[41px] pagination-btn"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <img className="rotate-180" src="/images/arrow_right.svg" alt="previous"></img>
            </button>
            <span
              className="flex justify-items-center align-items-center border rounded-full bg-dark w-[41px] h-[41px]  bg-blackColor2 text-white font-semibold"
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              1
            </span>
            <span
              className="flex justify-items-center align-items-center   rounded-full w-[41px] h-[41px] hover:bg-blackColor2 hover:text-white"
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              2
            </span>

            <button
              className="px-3 py-3 border rounded-full hover:bg-blackColor2  h-[41px] w-[41px] pagination-btn"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={indexOfLastCourse >= courseData.length}
            >
              <img src="/images/arrow_right.svg" alt="next"></img>
            </button>
          </div>
          <div className="flex w-full justify-end items-center">
            <button className="btn-smpl group justify-center gap-x-4 min-w-[168px] border-blackColor2 hover:bg-blackColor2 hover:text-white">
              <span>Show more</span>  <span><img className="w-3 rotate-90 group-hover:brightness-[10] duration-300" src="/images/arrow_right.svg" alt="Dropdown Arrow" /></span></button>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineCourses;
