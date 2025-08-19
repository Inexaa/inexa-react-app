import React from "react";
import aboutInfoIcon from "../../../assets/images/icon.png";
import welcmIcon from "../../../assets/images/welcm-icn.png";
import Title from "../../Title";
import AboutTop from "../AboutTop";


const AboutInfo = () => {
    return (
      <>
        <section className="bg-bgColor bg-about-info-b bg-current bg-left bg-opacity-0 bg-no-repeat padding pb-0 rounded-b-3xl">
          <div className="mt-12 rounded-3xl overflow-hidden my-16">
            <AboutTop />
          </div>

          <div className="wrapper padding py-0">
            <div className="about-content grid gap-y-16 gap-x-10 md:grid-cols-2 place-items-center relative">
              <div className="about-icon w-full ">
                <img  className="w-full max-w-[450px]"
                  src="./src/assets/images/a.png"
                  alt="image"
                />
              </div>
              <div className="about-info ">
                <div className="title mb-12 text-white">
                  <div className="subheading subheading-white">about</div>
                  <h2>Welcome to INEXA</h2>
                </div>
                <p className="mb-12 sm:ms-12 text-white">
                  Inexa transforms lives, organizations, and nations through
                  learning around the world. We address the widespread talent
                  shortages that impact growth, productivity, and innovation.
                  Each Inexa program is deeply focused with experts that unlock
                  learning with personalized support, and verify complete
                  mastery of competencies
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default AboutInfo;