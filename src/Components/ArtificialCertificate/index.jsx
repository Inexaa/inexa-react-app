import React, { useState } from "react";
import { Link } from "react-router-dom";

const freeOnlineCourses = [
  {
    courseImage: "/images/course-1.png",
    courseImageAlt: "image",
    sponsorImage: "/images/course-edx.png",
    sponsorImageAlt: "image",
    freeCourseTitle: "Course Name 1",
    btnText: "Course",
    btnLink: "https://www.google.com/",
  },
  {
    courseImage: "/images/course-1.png",
    courseImageAlt: "image",
    sponsorImage: "/images/course-edx.png",
    sponsorImageAlt: "image",
    freeCourseTitle: "The Science of Happiness",
    btnText: "Course",
    btnLink: "https://www.google.com/",
  },
  {
    courseImage: "/images/course-1.png",
    courseImageAlt: "image",
    sponsorImage: "/images/course-edx.png",
    sponsorImageAlt: "image",
    freeCourseTitle: "Remote Work Revolution for Everyone",
    btnText: "Course",
    btnLink: "https://www.google.com/",
  },
  {
    courseImage: "/images/course-1.png",
    courseImageAlt: "image",
    sponsorImage: "/images/course-edx.png",
    sponsorImageAlt: "image",
    freeCourseTitle: "CS50's Introduction to Programming with Python",
    btnText: "Course",
    btnLink: "https://www.google.com/",
  },
  {
    courseImage: "/images/course-1.png",
    courseImageAlt: "image",
    sponsorImage: "/images/course-edx.png",
    sponsorImageAlt: "image",
    freeCourseTitle: "Data Visualization and Building Dashboards",
    btnText: "Course",
    btnLink: "https://www.google.com/",
  },
  {
    courseImage: "/images/course-1.png",
    courseImageAlt: "image",
    sponsorImage: "/images/course-edx.png",
    sponsorImageAlt: "image",
    freeCourseTitle: "Six Sigma Part 2: Analyze, Improve, Control",
    btnText: "Course",
    btnLink: "https://www.google.com/",
  },
  {
    courseImage: "/images/course-1.png",
    courseImageAlt: "image",
    sponsorImage: "/images/course-edx.png",
    sponsorImageAlt: "image",
    freeCourseTitle: "CS50's AI with Python",
    btnText: "Course",
    btnLink: "https://www.google.com/",
  },
  {
    courseImage: "/images/course-1.png",
    courseImageAlt: "image",
    sponsorImage: "/images/course-edx.png",
    sponsorImageAlt: "image",
    freeCourseTitle: "Analyzing Data with Excel",
    btnText: "Course",
    btnLink: "https://www.google.com/",
  },
  {
    courseImage: "/images/course-1.png",
    courseImageAlt: "image",
    sponsorImage: "/images/course-edx.png",
    sponsorImageAlt: "image",
    freeCourseTitle: "The Science of Generosity",
    btnText: "Course",
    btnLink: "https://www.google.com/",
  },
  {
    courseImage: "/images/course-1.png",
    courseImageAlt: "image",
    sponsorImage: "/images/course-edx.png",
    sponsorImageAlt: "image",
    freeCourseTitle: "Entrepreneurial Operations",
    btnText: "Course",
    btnLink: "https://www.google.com/",
  },
  {
    courseImage: "/images/course-1.png",
    courseImageAlt: "image",
    sponsorImage: "/images/course-edx.png",
    sponsorImageAlt: "image",
    freeCourseTitle: "Marketing Management",
    btnText: "Course",
    btnLink: "https://www.google.com/",
  },
];

const TakeCourseCertificate = () => {
  const [visibleCourses, setVisibleCourses] = useState(4);
  const totalCourses = freeOnlineCourses.length;

  const handleShowMore = () => {
    if (visibleCourses < totalCourses) {
      setVisibleCourses((prev) => prev + 4);
    } else {
      setVisibleCourses(4); // Reset to initial state
    }
  };

  return (
    <div className="various-courses-content">
      <div className="courses w-full">
        <div className="courses-widgets grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6">
          {freeOnlineCourses.slice(0, visibleCourses).map((item, index) => (
            <div
              key={index}
              className="course-widget shadow-2xl rounded-2xl overflow-hidden"
            >
              <div className="image relative">
                <img className="w-full" src={item.courseImage} alt={item.courseImageAlt} />
                <div className="sponsor-image shadow-lg inline-block rounded-lg p-1 -mt-10 ms-4 bg-white">
                  <img className="w-[110px]" src={item.sponsorImage} alt={item.sponsorImageAlt} />
                </div>
              </div>
              <div className="content p-6">
                <h6 className="text-lg font-semibold mb-10">{item.freeCourseTitle}</h6>
                <p>edx</p>
                <Link
                  className="border px-4 py-1 rounded-lg border-[#A4A4A4] text-[#000000] bg-[#D6D6D6] mt-1 inline-block"
                  to={item.btnLink}
                >
                  {item.btnText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Show More / Show Less Button */}
      <div className="text-center mt-10">
        <button
          className="font-normal text-lg border-b-[1px] border-black mt-1 focus:outline-none"
          onClick={handleShowMore}
        >
          {visibleCourses < totalCourses ? "Show More" : "Show Less"}
        </button>
      </div>
    </div>
  );
};

export default TakeCourseCertificate;
