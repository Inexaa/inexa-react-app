import React from "react";
import aboutTopLogo from './piblic/images/inexa.png';

const AboutTop = () => {
  return (
    <>
      <section className="relative  bg-about-top-bg bg-center bg-cover bg-no-repeat bg-fixed w-full h-screen min-h-96 flex flex-col items-center justify-center">
        {/* <div className="overlay bg-black absolute w-full h-full bg-opacity-40"></div> */}
        <div className="wrapper padding w-full">
            <div className="about-top-content  text-white relative">
                <div className="flex items-center justify-center  gap-4">
                    <div><h1 className="m-0">Meet</h1></div> 
                    <div><img className="w-[120px] lg:w-[200px]" src={aboutTopLogo} alt="Logo Image"  /></div>
                </div>
                <h6 className=" text-center">Life Transformative Experiences</h6>
            </div>
        </div>
      </section>
    </>
  );
};

export default AboutTop;
