import React, { useEffect, useState, useRef } from "react";
import Layout from "../../Components/Layout";
import NumberCounter from "../../Components/NumberCounter";
import { motion } from "framer-motion";
import { AnimatedText } from "../../Components/AnimatedText";
import Container from "../../Components/Container";

const aboutCounterVals = [
  {
    id: 1,
    countNum: 5000,
    countTitle: "Digital online offerings ",
  },
  {
    id: 2,
    countNum: 37,
    countTitle: "of 50 top world universities",
  },
  {
    id: 3,
    countNum: 190,
    countTitle: "Countries with registered edX learners",
  },
  {
    id: 4,
    countNum: 83,
    countTitle: "Learner network",
  },
];

const About = () => {
  return (
    <>
      <Layout>
        <div className="bg-blackColor2 pt-[83px] md:pt-[123px] lg:pt-[124px] rounded-[0_0_30px_30px] relative z-10">
          <section className="pb-8 md:pb-[80px] lg:pb-[90px] lg:pt-4">
            <Container>
              <div className="lg:px-[38px]">
                <div
                  className="flex justify-center items-center text-center h-[404px] md:h-[807px] rounded-30 relative"
                  style={{
                    background: `linear-gradient(180deg, rgba(31, 31, 31, 0.5) 10.04%, rgba(51, 34, 255, 0.5) 92.81%), url('/images/about-top-bg.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 max-[1024px]:grid max-[1024px]:gap-4 max-[767px]:gap-6
                  max-[767px]:w-[80%]"
                  >
                    <h2 className="text-[30px] lg:flex gap-5  items-center justify-center m-0 max-[1024px]:grid max-[1024px]:gap-4 max-[767px]:gap-6">
                      <span className="text-[30px] md:text-[80px] leading-[42px] md:leading-[120px] text-white font-normal">
                        Meet
                      </span>
                      <img
                        src="/images/LoGoInexa.svg"
                        alt="image"
                        className="h-[40px] md:h-[55px] max-[1024px]:mx-auto"
                      />
                    </h2>
                    <h6
                      className="text-center text-[28px] md:text-[40px] text-white leading-[30px] md:leading-[60px] lg:leading-[150%] font-normal 
                      m-0 max-[1024px]:whitespace-nowrap 
                      max-[767px]:whitespace-normal"
                    >
                      Life Transformative Experiences
                    </h6>
                    {/* <AnimatedText className=" overflow-hidden" el="h6" text="Life Transformative Experiences" once={true} /> */}
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <section className="pb-[34px] md:pb-[62px] lg:pb-[137px] relative overflow-visible">
            <Container className="flex lg:px-10 justify-end">
              <div className="md:absolute md:top-[130px] lg:top-[117px] md:-left-[130px] max-[767px]:pb-8 max-[767px]:text-center">
                <img
                  src="/images/grdnt-blkA.png"
                  alt="image"
                  className="max-[767px]:mx-auto max-[767px]:h-[165px] max-[1024px]:h-[423px]"
                />
              </div>
              <div className="md:w-[548px] lg:w-[724px] text-white grid gap-1 lg:gap-[25px] lg:pr-[60px]">
                <div className="title max-[767px]:mb-4">
                  <div className="subheading text-white text-[10px] md:text-[16px] font-medium leading-[14px] md:leading-[20px] font-Montserrat p-0 mb-1 lg:m-0">
                    about
                  </div>
                  <h2 className="text-[24px] md:text-[40px] lg:text-[60px] mb-4 leading-[36px] md:leading-[70px] font-medium text-white !m-0">
                    Welcome to INEXA
                  </h2>
                </div>
                <p
                  className="pl-0 md:pl-[30px] lg:pl-10 text-[14px] lg:text-[18px] leading-[22px] md:leading-[30px] 
                lg:leading-[28px] md:tracking-[.01em] font-medium font-Montserrat"
                >
                  Inexa transforms lives, organizations, and nations through
                  learning around the world. We address the widespread talent
                  shortages that impact growth, productivity, and innovation.
                  Each Inexa program is deeply focused with experts that unlock
                  learning with personalized support, and verify complete
                  mastery of competencies
                </p>
              </div>
            </Container>
          </section>
        </div>

        <section className="features py-10 md:pt-[272px] md:pb-[61px] lg:pb-[82px] bg:none md:bg-about-info-bg bg-no-repeat -mt-2.5">
          <Container>
            <div className="lg:px-10">
              <div className="title xl:max-w-[60%] mb-6 lg:mb-[53px] max-[767px]:grid max-[767px]:gap-1">
                <div className="subheading">why us</div>
                <h2 className="heading-black">
                  Uniquely designed learning experiences
                </h2>
              </div>
              <div className="feature-wrappers grid lg:grid-cols-4 sm:grid-cols-2 gap-y-6 gap-x-[43px] lg:gap-[21px]">
                <div className="feature-wrapper grid gap-2 md:gap-4 md:pr-[23px] md:border-r md:border-borderColor">
                  <h5 className="text-[18px] md:text-[21px] leading-[28px] font-medium font-Montserrat md:max-w-[240px] mb-2 md:m-0 p-0">
                    Live instructor-led courses
                  </h5>
                  <p className="leading-[28px] text-[14px] md:text-[16px] font-medium font-Montserrat text-textColor m-0 p-0">
                    Join a scheduled class with a live instructor in an
                    interactive learning environment. Engage in real-time
                    discussions, ask questions, and collaborate with both your
                    trainer and peers.
                  </p>
                  <span className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] p-2 rounded-[8px] bg-[#F2F2F2] hidden md:flex justify-center items-center">
                    <img
                      className="w-[28px] h-[28px]"
                      src="images/live.png"
                      alt="image"
                    />
                  </span>
                  <span className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] p-2 rounded-[8px] bg-[#F2F2F2] md:hidden flex justify-center items-center">
                    <img
                      className="w-[28px] h-[28px]"
                      src="images/live-01.png"
                      alt="image"
                    />
                  </span>
                </div>
                <div className="feature-wrapper grid gap-2 md:gap-4 md:pr-[23px] lg:border-r  lg:border-borderColor">
                  <h5 className="text-[18px] md:text-[21px] leading-[28px] font-medium font-Montserrat md:max-w-[240px] mb-2 md:m-0 p-0">
                    Impactful learning experiences
                  </h5>
                  <p className="leading-[28px] text-[14px] md:text-[16px] font-medium font-Montserrat text-textColor m-0 p-0">
                    Our training combines live, interactive instructor-led
                    sessions with flexible self-study options. This modern
                    approach ensures an in-depth learning experience that adapts
                    to your needs.
                  </p>
                  <span className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] p-2 rounded-[8px] bg-[#F2F2F2] flex justify-center items-center">
                    <img
                      className="w-[28px] h-[28px]"
                      src="images/expertise.png"
                      alt="image"
                    />
                  </span>
                </div>
                <div className="feature-wrapper grid gap-2 md:gap-4 md:pr-[23px] md:border-r md:border-borderColor">
                  <h5 className="text-[18px] md:text-[21px] leading-[28px] font-medium font-Montserrat md:max-w-[240px] mb-2 md:m-0 p-0">
                    Global cost-effective programs
                  </h5>
                  <p className="leading-[28px] text-[14px] md:text-[16px] font-medium font-Montserrat text-textColor m-0 p-0">
                    We integrate top online learning platforms with expert-led
                    live sessions and supported programs, providing a
                    high-quality, budget-friendly learning experience that
                    drives success.
                  </p>
                  <span className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] p-2 rounded-[8px] bg-[#F2F2F2] flex justify-center items-center">
                    <img
                      className="w-[28px] h-[28px]"
                      src="images/global-cost.png"
                      alt="image"
                    />
                  </span>
                </div>
                <div className="feature-wrapper grid gap-2 md:gap-4 md:pr-[23px]  lg:border-r  lg:border-borderColor">
                  <h5 className="text-[18px] md:text-[21px] leading-[28px] font-medium font-Montserrat md:max-w-[240px] mb-2 md:m-0 p-0">
                    Real-World Practical Application
                  </h5>
                  <p className="leading-[28px] text-[14px] md:text-[16px] font-medium font-Montserrat text-textColor m-0 p-0">
                    Our courses are designed to bridge the gap between theory
                    and practice. Learn skills that are directly applicable to
                    your career, with projects and case studies that reflect
                    real-world challenges.
                  </p>
                  <span className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] p-2 rounded-[8px] bg-[#F2F2F2] flex justify-center items-center">
                    <img
                      className="w-[28px] h-[28px]"
                      src="images/practice.png"
                      alt="image"
                    />
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <div className="grid gap-10 mb-[50px] md:mb-[70px] lg:mb-[126px]">
          <section className="unique-experience">
            <Container>
              <div
                className="unique-experience-box h-[553px] md:h-[450px] lg:h-[511px] px-2.5 py-8 md:px-9 md:pt-[50px] md:pb-8 lg:px-10 lg:pt-[50px] lg:pb-[54px] rounded-30 bg-blackColor bg-[url('/images/learning-exp-bg.webp')] 
              bg-no-repeat bg-[73%_center] md:bg-center bg-cover text-white"
              >
                <div className="md:max-w-[364px] lg:max-w-[495px] flex flex-col justify-between md:h-full">
                  <span className="max-[767px]:pb-[61px]">
                    <img
                      className="w-[40px] md:w-[60px]"
                      src="/images/learning_exp.svg"
                      alt="image"
                    />
                  </span>
                  <div className="w-full grid gap-4">
                    <h4 className="text-white text-[21px] md:text-[28px] leading-[32px] md:leading-[42px] lg:leading-[32px] font-medium font-Poppins m-0">
                      Unique learning experiences
                    </h4>
                    <p className="leading-[25px] md:leading-[28px] text-[14px] lg:text-[18px] font-medium font-Montserrat">
                      Our uniquely designed learning experiences will give your
                      teams the deep domain knowledge and practitioner-level
                      skills to help your organization acquire the skills needed
                      to innovate and outpace your competition.
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <section className="exclusive-class">
            <Container>
              <div
                className="border border-black rounded-30 pt-8 pb-[26px] md:pl-9 md:pr-2 md:pt-8 lg:px-10 lg:pt-[18px] md:pb-[25px] 
                lg:pr-5 md:h-[450px] lg:h-[511px] md:flex md:gap-2 gap-3 justify-between
              bg-[linear-gradient(90deg,#F9F9F9_0.74%,#FFFFFF_42.21%)]"
              >
                <div className="md:w-[328px] lg:w-[38%] md:h-full flex flex-col justify-between lg:pt-8 lg:pb-10 max-[767px]:px-2.5 max-[767px]:pb-2.5">
                  <div className="max-[767px]:pb-[69px]">
                    <img
                      className="max-[767px]:w-[69px]"
                      src="/images/exclusive-EDX.svg"
                      alt="image"
                    />
                  </div>
                  <div className="grid md:gap-4 gap-2">
                    <h4
                      className="text-[#282828] md:text-[rgba(40,40,40,.8)] text-[21px] md:text-[28px] leading-[32px] md:leading-[42px] lg:leading-[32px] font-medium font-Poppins m-0
                    max-[767px]:w-[250px]"
                    >
                      Exclusive World-class Content
                    </h4>
                    <p className="text-[rgba(51,51,51,.8)] text-[14px] lg:text-[18px] leading-[28px] font-medium font-Montserrat">
                      Our strategic partner edX offers an expansive portfolio of
                      more than 4,700+ outcome-based online learning programs
                      from top universities and industry leaders to drive
                      employee growth and organizational success.{" "}
                    </p>
                  </div>
                </div>
                <div className="md:w-[345px] lg:w-[62%] h-full flex items-center">
                  <img
                    src="/images/sponser-companies.png"
                    className="w-full max-w-none h-fit"
                    alt="image"
                  />
                </div>
              </div>
            </Container>
          </section>

          <section className="global-experience">
            <Container>
              <div
                className="global-experience-box pt-8 px-3 md:px-9 md:pt-11 md:pb-8 lg:px-10 lg:pt-[50px] lg:pb-[54px] 
                bg-[url('/images/global-exp-bg.webp')] bg-no-repeat  md:bg-center bg-cover rounded-30 overflow-hidden h-[553px] md:h-[450px] lg:h-[511px]"
              >
                <div className="max-w-[264px] md:max-w-[370px] lg:max-w-[460px] flex flex-col justify-between md:h-full gap-[64px] md:gap-4">
                  <div>
                    <img
                      className="w-[38px] md:w-[57px]"
                      src="/images/Global_education.png"
                      alt="image"
                    />
                  </div>
                  <div className=" grid gap-4">
                    <h4 className="text-white text-[21px] md:text-[28px] leading-[32px] md:leading-[42px] lg:leading-[32px] font-medium font-Poppins m-0">
                      Global learning experiences
                    </h4>
                    <p className="text-white leading-[28px] text-[14px] lg:text-[18px] font-medium font-Montserrat">
                      Global learning experience and multi-cultural exposure
                      supported by a live instructor, learner’s direct
                      engagement, and Cost-effective approach.
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <section className="discover-solution">
            <Container>
              <div className="discover-bg pt-8 px-2.5 md:pt-11 md:pb-9 md:px-10 lg:px-10 lg:pt-[50px] lg:pb-[62px] h-[553px] md:h-[450px] lg:h-[511px] bg-[url('/images/discover-sol-bg.webp')] bg-no-repeat  bg-[61%_center] md:bg-center  bg-cover rounded-30 overflow-hidden">
                <div className="md:max-w-[370px] lg:max-w-[498px] flex flex-col justify-between md:h-full gap-4">
                  <div className="max-[767px]:pb-[62px]">
                    <img
                      src="/images/diamond.svg"
                      alt="image"
                      className="w-[42px] md:w-[60px]"
                    />
                  </div>
                  <div className=" grid gap-[10px] md:gap-4">
                    <h4 className="text-white md:text-[#282828] text-[21px] md:text-[28px] leading-[32px] md:leading-[42px] font-medium font-Poppins m-0">
                      Discover a learning solution that develops your team’s
                      mindset
                    </h4>
                    <p className="text-white md:text-[#282828] leading-[28px] text-[14px] lg:text-[18px] font-medium font-Montserrat">
                      Transform potential into expertise with Inexa’s multiple
                      modes of blended learning which is a mix of online and
                      on-premises courses, from partners who are well-known in
                      the field.
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <section className="exploring-knowledge">
            <Container>
              <div className="empowering-bg py-8 px-2.5 md:pt-11 md:pb-8 md:px-[45px] lg:px-10 lg:pt-[50px] lg:pb-[62px] h-[553px] md:h-[450px] lg:h-[511px]  bg-[url('/images/exploring-knowledge-bg.webp')] bg-[61%_center] md:bg-center bg-no-repeat sm:bg-center bg-cover rounded-30 overflow-hidden border-r-[1px] border-[#282828]">
                <div className="max-w-[402px] lg:max-w-[615px] flex flex-col justify-between md:h-full gap-7 md:gap-4">
                  <div clas>
                    <img
                      className="w-[40px]"
                      src="/images/logoIconWhite.png"
                      alt="image"
                    />
                  </div>
                  <div className="grid gap-2 md:gap-4 lg:gap-[30px]">
                    <h4 className=" text-white text-[21px] md:text-[28px] font-medium font-Poppins leading-[32px] md:leading-[42px] m-0 ">
                      Empowering knowledge. Transforming businesses.
                    </h4>
                    <p className="text-white leading-[28px] text-[14px] lg:text-[18px] font-medium font-Montserrat lg:tracking-[.06em]">
                      Inexa is a trusted partner for enterprises worldwide.
                      Through expert-led programs and partnerships, we equip
                      professionals with critical skills to meet industry
                      demands and advance their careers.
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </div>
        <section className="pb-[59px] md:pb-[66px] lg:pb-[150px] overflow-visible">
          <Container>
            <div className="relative text-white lg:px-10">
              <div className="heading-content mb-6 md:mb-7 grid gap-4 lg:gap-2.5 ">
                <div className="md:hidden flex justify-center mb-2">
                  <img
                    className="w-[230px]"
                    src="/images/inexa-edx.png"
                    alt="image"
                  />
                </div>
                <div className="title relative max-[1024px]:pt-[29px] max-[767px]:pt-0">
                  <div className="subheading subheading-black font-semibold max-[767px]:leading-[12px] max-[767px]:pb-1">
                    our partners
                  </div>
                  <h2 className="heading-black leading-[30px] md:leading-[60px] lg:leading-[90px]">
                    Inexa strategic partner edX
                  </h2>
                  <div className="hidden md:flex justify-end">
                    <img
                      className="absolute right-0 top-0 lg:top-6 w-[210px] lg:w-[303px]"
                      src="/images/inexa-edx.png"
                      alt="image"
                    />
                  </div>
                </div>
                <p className="text-subheadingColor text-[14px] md:text-[18px] leading-[28px] md:leading-[30px] font-medium font-Montserrat">
                  edX partners with{" "}
                  <strong className="font-extrabold">
                    more than 260+ leading universities{" "}
                  </strong>{" "}
                  including the 37 of 50 top world universities, and companies
                  to bring flexible, affordable, job-relevant online learning to
                  individuals and organizations worldwide.
                </p>
              </div>
              <div className="about-number-content ">
                <NumberCounter
                  counterValues={aboutCounterVals}
                  headingClass={"stroke2 text-center md:text-left"}
                  paraClass={" text-blackColor2"}
                />
              </div>
            </div>
          </Container>
        </section>
      </Layout>
    </>
  );
};

export default About;
