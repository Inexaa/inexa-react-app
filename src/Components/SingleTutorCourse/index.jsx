import React from "react";
import { Link } from "react-router-dom";

// const singleTutorCourse = [
//   {
//     CourseImage: "/images/course-2.png",
//     courseImageAlt: "course image",
//     courseTitle: "Applied Plotting, Charting & Data Representation in Python",
//     courseLink: "/about",
//   },
//   {
//     CourseImage: "/images/course-3.png",
//     courseImageAlt: "course image",
//     courseTitle: "Applied Plotting, Charting & Data Representation in Python",
//     courseLink: "/about",
//   },
//   {
//     CourseImage: "/images/course-4.png",
//     courseImageAlt: "course image",
//     courseTitle: "Applied Plotting, Charting & Data Representation in Python",
//     courseLink: "/about",
//   },
//   {
//     CourseImage: "/images/course-5.png",
//     courseImageAlt: "course image",
//     courseTitle: "Applied Plotting, Charting & Data Representation in Python",
//     courseLink: "/about",
//   },
 
// ];

const singleTutorCourse = [
  {
    CourseImage: "/images/harverd.webp",
    courseImageAlt: "course image",
    courseTitle: "Applied Plotting, Charting & Data Representation in Python",
    courseLink: "/about",
  },
  {
    CourseImage: "/images/co_brd_Standford.png",
    courseImageAlt: "course image",
    courseTitle: "Applied Plotting, Charting & Data Representation in Python",
    courseLink: "/about",
  },
  {
    CourseImage: "/images/co_brd_CAM.png",
    courseImageAlt: "course image",
    courseTitle: "Applied Plotting, Charting & Data Representation in Python",
    courseLink: "/about",
  },
  {
    CourseImage: "/images/co_brd_Said.png",
    courseImageAlt: "course image",
    courseTitle: "Applied Plotting, Charting & Data Representation in Python",
    courseLink: "/about",
  },
 
];

const SingleTutorCourse = () => {
  return (
    <>
      {/* <ul className="course-widgets grid  sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {singleTutorCourse.map((item, index) => {
          return (
            <Link to={item.courseLink}>
            <li key={index} className="group rounded-3xl shadow-[2.48px_2.48px_18.58px_0px_#1F1F1F80] hover:shadow-[2.48px_2.48px_18.58px_0px_#1F1F1F] overflow-hidden   duration-300">
              <div className="course-image w-full h-44 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 duration-300" src={item.CourseImage} alt={item.courseImageAlt} />
              </div>
              <div className="course-info py-5 px-10">
                <h4 className="leading-6 lg:leading-[30px] font-Montserrat text-[16px]"> {item.courseTitle}</h4>
              </div>
            </li></Link>
          );
        })}
      </ul> */}

      <ul className="course-widgets grid  sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {singleTutorCourse.map((item, index) => {
          return (
            <Link to={item.courseLink}>
            <li key={index} className="group py-5 px-6 sm:h-[210px] rounded-3xl shadow-[2.48px_2.48px_10px_0px_#1F1F1F40] hover:shadow-[2.48px_2.48px_18.58px_0px_#1F1F1F80] overflow-hidden   duration-300">
              <div className="course-image overflow-hidden">
                <img className="w-28"  
                src={item.CourseImage} alt={item.courseImageAlt} />
              </div>
              <div className="course-info pt-5 pb-1">
                <h4 className="leading-6 lg:leading-[30px] font-Montserrat text-[16px]"> {item.courseTitle}</h4>
              </div>
              <div className="sponsord-logo flex justify-end">
                <img className="w-28" src="images/inexa_edX.png" alt="image" />
              </div>
            </li></Link>
          );
        })}
      </ul>
    </>
  );
};

export default SingleTutorCourse;
