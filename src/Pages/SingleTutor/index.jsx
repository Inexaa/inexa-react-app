
import React from "react";
import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";

import { FaXTwitter } from "react-icons/fa6";
// import { SlSocialLinkedin } from "react-icons/sl";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import SingleTutorCourse from "../../Components/SingleTutorCourse";
import "./singleTutor.css"



const SingleTutor = () => {
  return (
    <>
      <Layout>
        <section className="tutor-profile bg-[url('/images/tutor-bg.png')] bg-no-repeat top-gap">
          <div className="wrapper padding 2xl:px-0">
            <div className="tutor-profile-content flex flex-col md:flex-row gap-y-10 ">
            
              <div className="team-member-wrapper md:w-[35%] md:me-5">
               <div className="group team-member border border-borderColor2 max-w-[350px] rounded-30 overflow-hidden">
                <div className="image relative w-full h-[316px] bg-borderColor2 rounded-30 overflow-hidden">
                 <Link to="/about"> <img className="absolute h-full object-cover rounded-30 object-right-top group-hover:object-center duration-300 ease-linear" src="/images/tutor-image-1.jpg" alt="tutor" /></Link>
                  <div className="stream text-[40px] font-medium -rotate-90 w-max absolute -right-24 bottom-32 font-Poppins text-whiteColor">Data Science</div>
                  
                </div>
                <div className="member-info px-5 pt-12 pb-7 bg-white relative z-[2]">
                      <div className="rounded-border absolute w-[70px] h-[64px] bg-white bottom-[144px] left-[42px] rounded-t-full border-none">  </div>
                  <div className="socials bg-gray-40 w-14 h-[180px] absolute bottom-[145px]  left-[49px] flex justify-center items-end rounded-full overflow-hidden">
                    <div className="main-icon bg-blackColor2 size-14  z-10 flex items-center justify-center rounded-full ">
                      <img src="/images/team_A_white.svg" alt="icon" />
                    </div>
                    <ul className="social-icons absolute bg-blackColor2 text-white w-14 flex flex-col  items-center pt-5  pb-5 gap-4 rounded-full translate-y-36 z-[10] group-hover:translate-y-0 transition transform duration-300 ease-linear">
                      <li className="hover:text-primaryColor duration-300"><Link to="https://www.linkedin.com" target="_blank"><FaLinkedinIn /></Link></li>
                      <li className="hover:text-primaryColor duration-300"><Link to="https://www.youtube.com" target="_blank"> <FaYoutube /></Link></li>
                      <li className="hover:text-primaryColor duration-300"><Link to="https://www.twitter.com" target="_blank"><FaXTwitter /></Link></li>
                      <li className="hover:text-primaryColor duration-300"><Link to="https://www.facebook.com" target="_blank"><FaFacebookF /></Link></li>
                    </ul>
                  </div>
                  <div className="about-info">
                    <Link to="/" className=" text-headingColor text-[20px] capitalize font-Poppins font-medium mb-[13px]">Alan Begham</Link>
                    <p className="text-primaryColor capitalize mb-[5px]">data science</p>
                    <a className="text-[#555555] font-medium" href="mailto:alan@inexa.com">alan@inexa.com</a>
                  </div>
                  
                </div>
              </div>
              </div>
              <div className="tutor-info md:w-[65%] md:ms-5">
                <div className="title">
                  <div className="subheading subheading-black">bio</div>
                  <h2 className="heading-black capitalize mb-4">alan begham</h2>
                </div>
                <div className="field text-blackColor2 capitalize font-medium mb-4">
                  data science
                </div>
                <p className=" text-[#555555] xl:leading-10">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="courses">
          <div className="wrapper padding 2xl:px-0 pt-10 pb-32 courses border-t">
            <div className="courses-content ">
              <div className="title mb-[52px]">
                <h3 className="capitalize">courses - english</h3>
              </div>
              <SingleTutorCourse />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default SingleTutor;
