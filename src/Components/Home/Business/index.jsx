import React, { useEffect } from "react";
import Title from "../../Title";
import Button from "../../Button";
import edx2u from "../../../assets/images/edx-by-2u-white.png";
import netFlex from "../../../assets/images/netflex.png";
import kmpg from "../../../assets/images/kmpg.png";
import sony from "../../../assets/images/sony.png";
import haleon from "../../../assets/images/haleon.png";
import whirlpool from "../../../assets/images/whirlpool.png";
import accenture from "../../../assets/images/accenture.png";
import uniLever from "../../../assets/images/unilever.png";
import pg from "./images/p-&-g.png";
import dell from "./images/dell.png";
import businessImg from "./images/business.png";
import WhiteButton from "../../Buttons/WhiteButton";

import AOS from "aos";
import "aos/dist/aos.css";
// import "./busi.css";

const Business = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      // easing: "ease-out",
      delay: 100,
      once: true,
      // offset: 120,
    });
  }, []);

  return (
    <>
      {/* <section className="business margin-x my-16">
        <div className="wrapper bg-blackColor rounded-3xl">
          <div className="businesss-content  grid md:grid-cols-[55%,45%]  gap-y-8 ">
            <div className="py-16  text-whiteColor px-4 md:px-10 flex flex-col justify-center ">
              <div className="title mb-5">
                <Title
                  subheading="business"
                  heading="Empowering knowledge. Transforming businesses"
                />
              </div>
              <p className="mb-10">
                Empowering businesses through high-quality education. 
                 <strong> 
                   edX is Chosen and trusted by more than 940 enterprises across
                  the globe
                </strong>
                . Employees from more than 60% of the Fortune 500 are learning
                and advancing their careers with edX.
              </p>
              <Button
                link="https://www.google.com"
                children="Explore more"
              ></Button>
            </div>
            <div className="business-partners bg-whiteColor py-10 px-5  lg:px-10 border-2 border-blackColor rounded-3xl">
             <div>
                 <div className="flex justify-center md:justify-end">
                <div className="w-[190px] leading-[6px] mb-14  ">
                  <img src={edx2u} alt="edx by 2u" />
                  <span className="mt-1 block text-[10px] leading-tight">
                    edX and the edX logo are registered trademarks of edX LLC.
                    All Rights Reserved
                  </span>
                </div>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-7 gap-y-16 mb-16 place-items-center">
                <li>
                  <img src={netFlex} alt="" />
                </li>
                <li>
                  <img src={kmpg} alt="" />
                </li>
                <li>
                  <img src={sony} alt="" />
                </li>
                <li>
                  <img src={haleon} alt="" />
                </li>
                <li>
                  <img src={whirlpool} alt="" />
                </li>
                <li>
                  <img src={accenture} alt="" />
                </li>
              </ul>
              <ul className="flex gap-7 justify-center">
                <li>
                  <img src={uniLever} alt="" />
                </li>
                <li>
                  <img src={pg} alt="" />
                </li>
                <li>
                  <img src={dell} alt="" />
                </li>
              </ul>
             </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="business margin-x my-16">
        <div className="wrapper">
          <div className="businesss-content relative">
            <div className=" bg-blackColor md:w-3/5 md:me-6 py-16 rounded-b-3xl  md:rounded-e-[100px]  text-whiteColor px-4 md:px-10 flex flex-col justify-center ">
              <div className="title mb-5">
                <Title
                  subheading="business"
                  heading="Empowering knowledge. Transforming businesses"
                />
              </div>
              <p className="mb-10">
                Empowering businesses through high-quality education.
                <strong>
                  edX is Chosen and trusted by more than 940 enterprises across
                  the globe
                </strong>
                . Employees from more than 60% of the Fortune 500 are learning
                and advancing their careers with edX.
              </p>
              <WhiteButton link="/about-us" children="explore more" />
            </div>

            <div className=" partners  md:absolute w-full right-0 top-1/2 -z-10 md:-translate-y-1/2 rounded-3xl flex justify-end">
              <div className=" mx-5 md:mx-0 border-b-2 border-e-2 border-s-2 md:border-2 border-blackColor overflow-hidden w-full rounded-b-3xl md:rounded-3xl">
               <div className="w-full md:w-2/5 p-6 float-end ">
               <div className="flex justify-center md:justify-end ">
                  <div className="w-[190px] leading-[6px] mb-14  ">
                    <img src={edx2u} alt="edx by 2u" />
                    <span className="mt-1 block text-[10px] leading-tight">
                      edX and the edX logo are registered trademarks of edX LLC.
                      All Rights Reserved
                    </span>
                  </div>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-7 gap-y-10 mb-10 place-items-center">
                  <li>
                    <img src={netFlex} alt="" />
                  </li>
                  <li>
                    <img src={kmpg} alt="" />
                  </li>
                  <li>
                    <img src={sony} alt="" />
                  </li>
                  <li>
                    <img src={haleon} alt="" />
                  </li>
                  <li>
                    <img src={whirlpool} alt="" />
                  </li>
                  <li>
                    <img src={accenture} alt="" />
                  </li>
                </ul>
                <ul className="flex gap-7 justify-center">
                  <li>
                    <img src={uniLever} alt="" />
                  </li>
                  <li>
                    <img src={pg} alt="" />
                  </li>
                  <li>
                    <img src={dell} alt="" />
                  </li>
                </ul>
               </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="business margin-x my-16">
        <div className="wrapper">
          <div className="businesss-content relative">
            <div className=" bg-blackColor md:w-[55%]  py-16  rounded-3xl md:rounded-[100px]  text-whiteColor px-4 md:px-10 flex flex-col justify-center ">
                  <div className="title mb-8">
                    <div className="subheading subheading-white"> business </div>
                    <h2 className="heading-white">Empowering knowledge. Transforming businesses</h2>
                  </div>

              <p className="mb-10 leading-10">
                   Inexa is a trusted partner for enterprises worldwide, providing innovative learning solutions that drive success. Through our <strong>expert-led programs
                  </strong> and <strong>strategic partnerships</strong>, we help professionals develop critical skills, adapt to industry demands, and accelerate career growth. Our commitment to excellence ensures that employees from <strong>top global companies</strong> stay ahead in a rapidly evolving market.
              </p>
              {/* <WhiteButton link="/about-us" children="explore more" /> */}
            </div>

            <div className=" partners  md:absolute w-full right-0 top-1/2 -z-10 md:-translate-y-1/2 flex justify-end">
              <div className=" mx-5 md:mx-0 border-b-2 border-e-2 border-s-2  overflow-hidden w-full rounded-b-3xl md:rounded-3xl">
                <div className="w-full md:w-[50%] float-end ">
                  <img
                    className="w-full sm:h-[500px] object-cover"
                    src={businessImg}
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Business;
