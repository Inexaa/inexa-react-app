import React from "react";
import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";
import Filteraside from "../../Components/Fliteraside";
const CourseOnline = () => {
  return (
    <>
      <Layout>
        <section className="course-online margin-x top-gap ">
          <div className="wrapper px-4 py-4 md:py-9 md:px-10 my-[90px] bg-blackColor rounded-[25px]">
            <div className="courses-banner ">
              <div className="breadcrum">
                <p className="text-white flex items-center text-sm font-semibold">
                  Home
                  <img
                    src="/images/arrow_right_white.svg"
                    alt="arrow-icon"
                    className="px-2"
                  />
                  Courses
                </p>
                <h1 className="page-title text-white text-3xl md:text-6xl mb-0 py-5">
                  Courses
                </h1>
                <p className="text-white text-lg">
                  Fully interactive courses supported by Inexa are limited to
                  one per learner per year, including full support and a
                  sharable certificate of attendance.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="wrapper padding pt-0 margin-x px-0">
            <div className="course-left">
              <Filteraside></Filteraside>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default CourseOnline;
