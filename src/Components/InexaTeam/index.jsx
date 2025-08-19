import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import Slider from "react-slick";
import { FaYoutube } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

const teamData = [
  {
    id: 1,
    memberName: "Alan Begham",
    memberDesignation: "CEO Inexa",
    memberImage: "/images/team-member.png",
    memberImageAlt: "team member",
    profileLink: "/tutor-profile",
    stream: "data science",
    socials: {
      youtube: "https://www.youtube.com/",
      linkedin: "https://www.linkedin.com/",
      twitter: "https://www.twitter.com/",
      instagram: "https://www.instagram.com/",
    },
    memberIcon: "/images/team_member_A.webp",
    memberIconAlt: "icon",
  },
  {
    id: 2,
    memberName: "Alan Begham 2",
    memberDesignation: "CEO Inexa",
    memberImage: "/images/team-member.png",
    memberImageAlt: "team member",
    profileLink: "/tutor-profile",
    stream: "data science",
    socials: {
      youtube: "https://www.youtube.com/",
      linkedin: "https://www.linkedin.com/",
      twitter: "https://www.twitter.com/",
      instagram: "https://www.instagram.com/",
    },
    memberIcon: "/images/team_member_A.webp",
    memberIconAlt: "icon",
  },
  {
    id: 3,
    memberName: "Alan Begham 3",
    memberDesignation: "CEO Inexa",
    memberImage: "/images/team-member.png",
    memberImageAlt: "team member",
    profileLink: "/tutor-profile",
    stream: "data science",
    socials: {
      youtube: "https://www.youtube.com/",
      linkedin: "https://www.linkedin.com/",
      twitter: "https://www.twitter.com/",
      instagram: "https://www.instagram.com/",
    },
    memberIcon: "/images/team_member_A.webp",
    memberIconAlt: "icon",
  },
  {
    id: 4,
    memberName: "Alan Begham 4",
    memberDesignation: "CEO Inexa",
    memberImage: "/images/team-member.png",
    memberImageAlt: "team member",
    profileLink: "/tutor-profile",
    stream: "data science",
    socials: {
      youtube: "https://www.youtube.com/",
      linkedin: "https://www.linkedin.com/",
      twitter: "https://www.twitter.com/",
      instagram: "https://www.instagram.com/",
    },
    memberIcon: "/images/team_member_A.webp",
    memberIconAlt: "icon",
  },
  {
    id: 5,
    memberName: "Alan Begham 5",
    memberDesignation: "CEO Inexa",
    memberImage: "/images/team-member.png",
    memberImageAlt: "team member",
    profileLink: "/tutor-profile",
    stream: "data science",
    socials: {
      youtube: "https://www.youtube.com/",
      linkedin: "https://www.linkedin.com/",
      twitter: "https://www.twitter.com/",
      instagram: "https://www.instagram.com/",
    },
    memberIcon: "/images/team_member_A.webp",
    memberIconAlt: "icon",
  },
];

const InexaTeam = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Check if the window width is less than 768px
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="team-members">
        <div className="team-members-content">
          {/* Desktop View (Grid) */}
          {!isMobile && (
            <div className="grid team-member-widgets md:grid-cols-3 gap-x-11 gap-y-9">
              {teamData.map((member) => (
                <div
                  key={member.id}
                  className="group team-member team-member-widget h-max border-[1.5px] border-borderColor2 rounded-30 overflow-hidden w-[190px] lg:w-[300px]"
                >
                  <div className="image relative w-full h-[198px] lg:h-[316px] bg-borderColor2 rounded-30 overflow-hidden">
                    <Link to="/tutor-profile">
                      <img
                        className="absolute h-full object-cover rounded-30 object-right-top group-hover:object-center duration-300 ease-linear"
                        src="/images/tutor-image-1.jpg"
                        alt="tutor"
                      />
                    </Link>
                    <div className="stream text-[18px] lg:text-[40px] font-medium -rotate-90 w-max absolute -right-10 lg:-right-[104px] bottom-14 lg:bottom-32 font-Poppins text-whiteColor">
                      Data Science
                    </div>
                  </div>
                  <div className="member-info bg-white relative z-[2] py-[18px] lg:py-6 pl-4 lg:pl-8 pr-2">
                    <div className="rounded-border absolute w-[46px] lg:w-[70px] h-[46px] lg:h-[64px] bg-white !bottom-12 lg:!bottom-[70px] left-[26px] lg:left-[42px] rounded-t-full border-none"></div>
                    <div className="socials bg-gray-40 w-14 h-[180px] absolute !bottom-[50px] lg:!bottom-[70px]  left-[21px] lg:left-[49px] flex justify-center items-end rounded-full overflow-hidden">
                      <div className="main-icon bg-blackColor2 size-[34px] lg:size-14  z-10 flex items-center justify-center rounded-full ">
                        <img src="/images/team_A_white.svg" alt="icon" />
                      </div>
                      <ul
                        className="social-icons absolute bg-blackColor2 text-white w-[34px] lg:w-14 hidden lg:flex flex-col  
                        items-center py-5 gap-4 rounded-full translate-y-[152px] z-[10] transition transform duration-300 ease-linear
                        "
                      >
                        <li className="hover:text-primaryColor duration-300">
                          <Link to="" target="_blank">
                            {/* <FaFacebookF /> */}
                            <img
                              src="/images/Instructors-User.svg"
                              alt="icon"
                            />
                          </Link>
                        </li>
                        <li className="hover:text-primaryColor duration-300">
                          <Link to="https://www.linkedin.com" target="_blank">
                            {/* <SlSocialLinkedin /> */}
                            <img
                              src="/images/Instructors-linkedin.svg"
                              alt="icon"
                            />
                          </Link>
                        </li>
                        <li className="hover:text-primaryColor duration-300">
                          <Link to="https://www.youtube.com" target="_blank">
                            {/* <FaYoutube /> */}
                            <img
                              src="/images/Instructors-youtube.svg"
                              alt="icon"
                            />
                          </Link>
                        </li>
                        <li className="hover:text-primaryColor duration-300">
                          <Link to="https://www.twitter.com" target="_blank">
                            {/* <FaXTwitter /> */}
                            <img
                              src="/images/Instructors-twitter.svg"
                              alt="icon"
                            />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="about-info ">
                      <Link
                        to="/"
                        className=" text-headingColor text-[14px] lg:text-[20px] capitalize font-Poppins font-medium leading-[21px] lg:leading-[30px]"
                      >
                        Alan Begham
                      </Link>
                      {/* <p className="text-[#9b9b9b] font-medium">
                        / CEO Inexa /
                      </p> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Mobile View (Slick Slider) */}
          {isMobile && (
            <div className="inexa-team-mobile block md:hidden mobile-carousel">
              <Slider {...settings}>
                {teamData.map((member) => (
                  <div key={member.id} className="px-1 mobile-carousel">
                    <div
                      key={member.id}
                      className="group team-member team-member-widget h-max border border-borderColor2 max-w-[350px] rounded-30 overflow-hidden"
                    >
                      <div className="image relative w-full h-[316px] bg-borderColor2 rounded-30 overflow-hidden">
                        <Link to="/about">
                          {" "}
                          <img
                            className="absolute h-full object-cover rounded-30 object-right-top group-hover:object-center duration-300 ease-linear"
                            src="/images/tutor-image-1.jpg"
                            alt="tutor"
                          />
                        </Link>
                        <div className="stream text-[40px] font-medium -rotate-90 w-max absolute -right-24 bottom-32 font-Poppins text-whiteColor">
                          Data Science
                        </div>
                      </div>
                      <div className="member-info px-4 pt-12 pb-5 bg-white relative z-[2]">
                        <div className="rounded-border absolute w-[70px] h-[64px] bg-white bottom-[144px] left-[42px] rounded-t-full border-none"></div>
                        <div className="socials bg-gray-40 w-14 h-[180px] absolute bottom-[145px]  left-[49px] flex justify-center items-end rounded-full overflow-hidden">
                          <div className="main-icon bg-blackColor2 size-14  z-10 flex items-center justify-center rounded-full ">
                            <img src="/images/team_A_white.svg" alt="icon" />
                          </div>
                          <ul className="social-icons absolute bg-blackColor2 text-white w-14 flex flex-col  items-center pt-5  pb-5 gap-4 rounded-full translate-y-36 z-[10] group-hover:translate-y-0 transition transform duration-300 ease-linear">
                            <li className="hover:text-primaryColor duration-300">
                              <Link
                                to="https://www.linkedin.com"
                                target="_blank"
                              >
                                <SlSocialLinkedin />
                              </Link>
                            </li>
                            <li className="hover:text-primaryColor duration-300">
                              <Link
                                to="https://www.youtube.com"
                                target="_blank"
                              >
                                <FaYoutube />
                              </Link>
                            </li>
                            <li className="hover:text-primaryColor duration-300">
                              <Link
                                to="https://www.twitter.com"
                                target="_blank"
                              >
                                <FaXTwitter />
                              </Link>
                            </li>
                            <li className="hover:text-primaryColor duration-300">
                              <Link
                                to="https://www.facebook.com"
                                target="_blank"
                              >
                                <FaFacebookF />
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="about-info">
                          <Link
                            to="/"
                            className=" text-headingColor text-[20px] capitalize font-Poppins font-medium mb-[15px]"
                          >
                            Alan Begham
                          </Link>
                          <p className="text-[#9b9b9b] font-medium">
                            / CEO Inexa /
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default InexaTeam;
