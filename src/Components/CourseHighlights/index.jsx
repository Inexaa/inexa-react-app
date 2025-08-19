import React from "react";
import Container from "../Container";

const CourseHighlights = ({ courseHighlightsData }) => {
  return (
    <Container>
      <ul
        className="bg-[#282828] rounded-[20px] grid max-[767px]:grid-cols-1 max-[1024px]:grid-cols-2 lg:flex 
      gap-[30px] md:gap-[25px] lg:gap-[69px] px-[19px] pt-[39px] pb-[45px] md:px-[54px] md:py-[33px] lg:px-[63px] lg:py-[18px] justify-between"
      >
        {courseHighlightsData.map((highlight, index) => {
          return (
            <li
              key={index}
              className="highlight-tab flex items-center gap-[15px] md:gap-4 lg:gap-3"
            >
              <div>
                <img
                  className="md:size-[35px] lg:size-[30px]"
                  src={highlight.courseHighlightIcon}
                  alt={highlight.courseHighlightIconAlt}
                />
              </div>
              <div className="grid gap-1">
                <p className="text-white text-[16px] font-medium font-Montserrat leading-[22px]">
                  {highlight.courseHighlightHeading}
                </p>
                <p className="apitalize text-[14px] font-medium font-Montserrat leading-[17px] text-[#d8d8d8]">
                  {highlight.courseHighlightPara}{" "}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default CourseHighlights;
