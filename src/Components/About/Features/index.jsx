import React from "react";
import Title from "../../Title";
import { CiImageOn } from "react-icons/ci";

const features = [
  {
    featureTitle: "Live instructor-led online courses",
    featurePara:
      "Join a scheduled class with a live instructor in an interactive learning environment. Engage in real-time discussions, ask questions, and collaborate with both your trainer and peers.",
    featureIcon: "/src/assets/images/live-instructor.png",
  },
  {
    featureTitle: "Impactful learning experiences",
    featurePara:
      "Our training combines live, interactive instructor-led sessions with flexible self-study options. This modern approach ensures an in-depth learning experience that adapts to your needs.",
    featureIcon: "/src/assets/images/bulb.png",
  },
  {
    featureTitle: "Global cost-effective programs",
    featurePara:
      "We integrate top online learning platforms with expert-led live sessions and supported programs, providing a high-quality, budget-friendly learning experience that drives success.",
    featureIcon: "/src/assets/images/hand.png",
  },
  {
    featureTitle: "Real-World Practical Application",
    featurePara:
      "Our courses are designed to bridge the gap between theory and practice. Learn skills that are directly applicable to your career, with projects and case studies that reflect real-world challenges.",
    featureIcon: "/src/assets/images/man.png",
  },
];

const Features = () => {
  return (
    <>
      <section className="features bg-why-us-bg bg-no-repeat bg-right-top   ">
        <div className="features-content wrapper padding">
          <div className="title md:max-w-[50%] ">
            {/* <Title
              subheading="why us"
              heading="Uniquely designed learning experiences"
            /> */}
            <div className="subheading subheading-black">why us</div>
            <h2 className="heading-black">Uniquely designed learning experiences </h2>
          </div>
          <div className="feature-wrappers grid lg:grid-cols-4 sm:grid-cols-2 gap-y-9 my-16 -mx-10">
            {features.map((item, index) => {
              return (
                <div
                  key={index}
                  className="feature-wrapper px-10 border-r border-borderColor last:border-r-0"
                >
                  <div className=" ">
                    <h5>{item.featureTitle}</h5>
                    <p className="mb-5 leading-7">{item.featurePara}</p>
                  </div>
                  <img src={item.featureIcon} alt="image" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
