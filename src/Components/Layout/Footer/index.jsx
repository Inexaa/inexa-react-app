import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import ContactForm from "../../ContactForm";
import ChatUs from "../../ChatUs";
import Container from "../../../Components/Container";
import FtrFacebook from "../../../../public/images/ftr-facebook.svg";
import FtrTwitter from "../../../../public/images/ftr-twitter.svg";
import FtrYoutube from "../../../../public/images/ftr-youtube.svg";
import FtrInstagram from "../../../../public/images/ftr-instagram.svg";
import FtrTiktok from "../../../../public/images/ftr-Tiktok.svg";

const footerSocial = [
  { socialIcon: FtrFacebook, socialLink: "https://www.facebook.com" },
  { socialIcon: FtrTwitter, socialLink: "https://www.twitter.com" },
  { socialIcon: FtrYoutube, socialLink: "https://www.youtube.com" },
  { socialIcon: FtrInstagram, socialLink: "" },
  { socialIcon: FtrTiktok, socialLink: "https://www.tiktok.com" },
];

// const footerMenu = [
//   { menu: "about", link: "/about" },
//   { menu: "course detail", link: "/course-detail" },
//   { menu: "certificate detail", link: "/certificate-detail" },
//   // { menu: "online course", link: "/online-courses" },
//   { menu: "online course", link: "/courses" },
//   { menu: "tutor profile", link: "/tutor-profile" },
//   { menu: "online certificate", link: "/online-certificates" },
//   { menu: "paid course", link: "/paid-courses" },
//   { menu: "purchase now", link: "/purchase-now" },
//   { menu: "account setting", link: "/account-setting" },
//   { menu: "user verification", link: "/user-verification" },
//   { menu: "course access", link: "/access-this-course" },
// ];

const footerMenu = [
  { menu: "About Us", link: "/about" },
  { menu: "Courses ", link: "/courses" },
  { menu: "Professional Certificates", link: "/certificate-detail" },
  { menu: "MicroMasters & MicroBachelors", link: "/" },
  { menu: "Catalog", link: "/" },
  { menu: "Contact Us", link: "/" },
];

const Footer = () => {
  return (
    <>
      <Container className="">
        <footer className="footer  bg-blackColor2  mb-[5px] lg:mb-8 rounded-3xl lg:mx-4 2xl:mx-auto">
          <div className="px-5 pb-5 pt-[30px] md:px-[18px] lg:px-10 md:py-10 lg:pt-8 md:pb-[56px]">
            <div className="footer-content">
              <div className="footer-contact-section grid md:grid-cols-2 gap-6 md:gap-4 lg:border-b-[1.5px] pb-[49px] md:pb-[67px] lg:pb-20">
                <div className="text-content text-white flex flex-col justify-between">
                  <div className="title  me-0 md:me-5">
                    <div className="subheading subheading-white leading-[17px] md:leading-[28px] text-[14px] md:text-[16px] font-medium -tracking-[.02em] mb-1 md:mb-0">
                      get in touch
                    </div>
                    <h2
                      className="font-Poppins animated-text flex flex-wrap text-white max-w-full lg:max-w-[540px] 
                      text-[20px] md:text-[36px] lg:text-[54px] leading-[30px] md:leading-[50px] lg:leading-[72px] 
                      lg:-tracking-[.05em] font-medium m-0 !p-0"
                    >
                      <div className="word">
                        <span data-aos="fade-up" data-aos-delay="100">
                          W
                        </span>
                        <span data-aos="fade-up" data-aos-delay="150">
                          e
                        </span>
                      </div>
                      <div className="word">
                        <span data-aos="fade-up" data-aos-delay="200">
                          a
                        </span>
                        <span data-aos="fade-up" data-aos-delay="250">
                          r
                        </span>
                        <span data-aos="fade-up" data-aos-delay="300">
                          e
                        </span>
                      </div>
                      <div className="word">
                        <span data-aos="fade-up" data-aos-delay="350">
                          A
                        </span>
                        <span data-aos="fade-up" data-aos-delay="400">
                          l
                        </span>
                        <span data-aos="fade-up" data-aos-delay="450">
                          w
                        </span>
                        <span data-aos="fade-up" data-aos-delay="500">
                          a
                        </span>
                        <span data-aos="fade-up" data-aos-delay="550">
                          y
                        </span>
                        <span data-aos="fade-up" data-aos-delay="600">
                          s
                        </span>
                      </div>
                      <div className="word">
                        <span data-aos="fade-up" data-aos-delay="650">
                          R
                        </span>
                        <span data-aos="fade-up" data-aos-delay="700">
                          e
                        </span>
                        <span data-aos="fade-up" data-aos-delay="750">
                          a
                        </span>
                        <span data-aos="fade-up" data-aos-delay="800">
                          d
                        </span>
                        <span data-aos="fade-up" data-aos-delay="850">
                          y
                        </span>
                      </div>
                      <div className="word">
                        <span data-aos="fade-up" data-aos-delay="900">
                          t
                        </span>
                        <span data-aos="fade-up" data-aos-delay="950">
                          o
                        </span>
                      </div>
                      <div className="word">
                        <span data-aos="fade-up" data-aos-delay="1000">
                          H
                        </span>
                        <span data-aos="fade-up" data-aos-delay="1050">
                          e
                        </span>
                        <span data-aos="fade-up" data-aos-delay="1100">
                          l
                        </span>
                        <span data-aos="fade-up" data-aos-delay="1150">
                          p
                        </span>
                      </div>
                      <div className="word">
                        <span data-aos="fade-up" data-aos-delay="1200">
                          y
                        </span>
                        <span data-aos="fade-up" data-aos-delay="1250">
                          o
                        </span>
                        <span data-aos="fade-up" data-aos-delay="1300">
                          u
                        </span>
                      </div>
                      <div className="word">
                        <span data-aos="fade-up" data-aos-delay="1350">
                          a
                        </span>
                        <span data-aos="fade-up" data-aos-delay="1400">
                          n
                        </span>
                        <span data-aos="fade-up" data-aos-delay="1450">
                          d
                        </span>
                      </div>
                      <div className="word">
                        <span data-aos="fade-up" data-aos-delay="1500">
                          A
                        </span>
                        <span data-aos="fade-up" data-aos-delay="1550">
                          n
                        </span>
                        <span data-aos="fade-up" data-aos-delay="1600">
                          s
                        </span>
                        <span data-aos="fade-up" data-aos-delay="1650">
                          w
                        </span>
                        <span data-aos="fade-up" data-aos-delay="1700">
                          e
                        </span>
                        <span data-aos="fade-up" data-aos-delay="1750">
                          r
                        </span>
                      </div>
                      <div className="word">
                        <span data-aos="fade-up" data-aos-delay="1800">
                          y
                        </span>
                        <span data-aos="fade-up" data-aos-delay="1850">
                          o
                        </span>
                        <span data-aos="fade-up" data-aos-delay="1900">
                          u
                        </span>
                        <span data-aos="fade-up" data-aos-delay="1950">
                          r
                        </span>
                      </div>
                      <div className="word">
                        <span data-aos="fade-up" data-aos-delay="2000">
                          Q
                        </span>
                        <span data-aos="fade-up" data-aos-delay="2050">
                          u
                        </span>
                        <span data-aos="fade-up" data-aos-delay="2100">
                          e
                        </span>
                        <span data-aos="fade-up" data-aos-delay="2150">
                          s
                        </span>
                        <span data-aos="fade-up" data-aos-delay="2200">
                          t
                        </span>
                        <span data-aos="fade-up" data-aos-delay="2250">
                          i
                        </span>
                        <span data-aos="fade-up" data-aos-delay="2300">
                          o
                        </span>
                        <span data-aos="fade-up" data-aos-delay="2350">
                          n
                        </span>
                        <span data-aos="fade-up" data-aos-delay="2400">
                          s
                        </span>
                      </div>
                    </h2>
                  </div>

                  <div className="social-contacts-tab hidden md:flex flex-wrap gap-7 lg:gap-11">
                    <div className="grid gap-[18px] lg:gap-3">
                      <h5 className="text-white text-[16px] lg:text-[20px] font-medium -tracking-[.02em] leading-[20px] lg:leading-[30px] m-0">
                        Email
                      </h5>
                      <a
                        href="mailto:help@inexa.co.za"
                        className="text-[16px] -tracking-[.02em] leading-[18px] font-medium font-Montserrat relative group hover:text-primaryColor pb-1
                        duration-300 ease-in-out
                        before:duration-300  before:ease-in-out
                        before:content-[''] before:w-full before:h-[1px] before:absolute before:bottom-0 before:right-0 before:bg-white
                        hover:before:bg-primaryColor hover:before:w-0"
                      >
                        help@inexa.co.za
                      </a>
                    </div>
                    <div className="grid gap-[18px] lg:gap-3">
                      <h5 className="text-white text-[16px] lg:text-[20px] font-medium -tracking-[.02em] leading-[20px] lg:leading-[30px] m-0">
                        Social network
                      </h5>
                      <ul className="socials flex gap-3">
                        {footerSocial.map((item, index) => {
                          return (
                            <li key={index}>
                              <Link
                                to={item.socialLink}
                                target="_blank"
                                className="text-[#282828] w-[24px] h-[24px] flex items-center justify-center rounded-full duration-300
                                hover:text-white"
                              >
                                <img src={item.socialIcon} alt="" />
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="footer-contact-form flex justify-end lg:pb-[7px]">
                  <div
                    className="footer-contact-form-content w-full md:w-[320px] lg:w-[523px] bg-white rounded-[24px] 
                  pl-[42px] pr-[54px] pt-6 pb-[26px] md:pt-10 md:pb-[38px] md:pl-9 md:pr-[18px] lg:p-8 "
                  >
                    <div className="grid gap-[15px] lg:gap-3 mb-[30px] lg:mb-6">
                      <h5 className="font-Poppins animated-text flex flex-wrap text-[22px] lg:text-[24px] leading-[33px] lg:leading-[36px] font-medium m-0 !p-0">
                        <div className="word">
                          <span data-aos="fade-up" data-aos-delay="100">
                            G
                          </span>
                          <span data-aos="fade-up" data-aos-delay="150">
                            e
                          </span>
                          <span data-aos="fade-up" data-aos-delay="200">
                            t
                          </span>
                        </div>
                        <div className="word">
                          <span data-aos="fade-up" data-aos-delay="250">
                            i
                          </span>
                          <span data-aos="fade-up" data-aos-delay="300">
                            n
                          </span>
                        </div>
                        <div className="word">
                          <span data-aos="fade-up" data-aos-delay="350">
                            T
                          </span>
                          <span data-aos="fade-up" data-aos-delay="400">
                            o
                          </span>
                          <span data-aos="fade-up" data-aos-delay="450">
                            u
                          </span>
                          <span data-aos="fade-up" data-aos-delay="500">
                            c
                          </span>
                          <span data-aos="fade-up" data-aos-delay="550">
                            h
                          </span>
                        </div>
                      </h5>
                      <p className="text-[#282828] text-[12px] lg:text-[16px] font-medium tracking-[.03em] lg:-tracking-[.02em] leading-[22px] lg:leading-[20px]">
                        Define your goals and identify areas where we can add
                        value to your business
                      </p>
                    </div>
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-widgets flex flex-col md:flex-row gap-8 justify-between lg:pt-[92px] md:items-end">
              <div className="footer-widget flex md:justify-center max-[767px]:order-2">
                <img
                  className="max-w-[205px] md:max-w-[190px] lg:max-w-64"
                  src="/images/footer-logo.svg"
                  alt="logo"
                />
              </div>
              <div className="footer-widget text-white flex w-full justify-between md:justify-end md:gap-5 lg:gap-[89px] max-[767px]:order-1">
                <ul className="capitalize grid gap-4 gap-x-20 min-w-[222px] lg:min-w-[300px] ">
                  {footerMenu.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="leading-[17px] md:leading-[20px] lg:leading-[100%]"
                      >
                        <Link
                          to={item.link}
                          className="font-medium text-[12px] md:text-[14px] lg:text-[16px] font-Poppins hover:text-primaryColor duration-300 
                          lg:-tracking-[.02em] leading-[18px] md:leading-[21px] lg:leading-[100%] "
                        >
                          {item.menu}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="flex items-end">
                  <ChatUs />
                </div>
              </div>
            </div>
            <div
              className="social-contacts-mobile flex md:hidden mt-[56px] md:mt-14 md:flex-wrap gap-x-10 justify-center md:justify-between 
              text-white max-[767px]:w-[290px] max-[767px]:mx-auto"
            >
              <div className="email md:mb-8 max-[767px]:grid max-[767px]:gap-2 ">
                <h5 className="text-white max-[767px]:leading-[17px] max-[767px]:text-[14px] max-[767px]:m-0">
                  Email
                </h5>
                <a
                  href="mailto:help@inexa.co.za"
                  className="font-semibold font-Poppins text-sm duration-300 hover:text-primaryColor"
                >
                  help@inexa.co.za
                </a>
              </div>
              <div className="social max-[767px]:grid max-[767px]:gap-2">
                <h5 className="text-white max-[767px]:leading-[17px] max-[767px]:text-[14px] ">
                  Social network
                </h5>
                <ul className="socials flex gap-1.5 md:gap-3">
                  {footerSocial.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link
                          to={item.socialLink}
                          target="_blank"
                          className="bg-white text-blackColor2 md:size-6 size-[13px] flex items-center justify-center rounded-full duration-300
                                hover:bg-primaryColor hover:text-white hover:scale-125"
                        >
                          <img src={item.socialIcon} alt="" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-below-bar relative mx-4 min-[440px]:mx-10 min-[500px]:mx-14">
            <div className="relative bg-white px-2 md:px-5 py-2 rounded-t-3xl footer-below ">
              <div className="leftShape"></div>
              <div className="min-[440px]:flex grid min-[440px]:gap-2 justify-center min-[440px]:justify-between text-blackColor2">
                <div className="max-[439px]: justify-center flex items-center text-[8px] md:text-[13px] lg:text-[12px] md:-tracking-[.02em] leading-[100%] font-normal">
                  <span>
                    {" "}
                    <img
                      className="me-1 w-[14px] min-[440px]:me-2 min-[440px]:w-5"
                      src="/images/copy-right-icon.svg"
                      alt=""
                    />{" "}
                  </span>
                  Inexa&nbsp;<span> {new Date().getFullYear()} </span>. All
                  rights reserved
                </div>
                <ul
                  className="flex flex-wrap justify-center text-blackColor2 [&>li>a]:text-[8px] md:[&>li>a]:text-[13px] lg:[&>li>a]:text-[12px] 
                [&>li>a]:leading-[100%] md:[&>li>a]:tracking-[.02em]  [&>li>a]:text-[#282828]"
                >
                  <li>
                    <Link className="" to="/">
                      Terms of use Privacy ,
                    </Link>
                  </li>
                  <li>
                    <Link className="" to="/">
                      Environmental Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="rightShape"></div>
              {/* <div className="absolute hidden xs:block bottom-[5px] xs:bottom-[1px] sm:bottom-0 -left-[8px] xs:-left-4 sm:-left-[16px] w-[17px] xs:w-4 sm:w-[17px] h-[37px] bg-[#282828] rounded-br-[20px] shadow-[0_20px_0_0_#FFFFFF]"></div>
              <div className="absolute hidden xs:block bottom-[5px] xs:bottom-[1px] sm:bottom-0 -right-[8px] xs:-right-4 sm:-right-[16px] w-[17px] xs:w-4 sm:w-[17px] h-[37px] bg-[#282828] rounded-bl-[20px] shadow-[0_20px_0_0_#FFFFFF]"></div> */}
            </div>
            {/* <ChatUs /> */}
          </div>
        </footer>
      </Container>
    </>
  );
};

export default Footer;
