import React, { useState } from "react";
import Title from "../../Title";
import CountUp from "react-countup";
import { LuCirclePlay } from "react-icons/lu";
import Popup from "reactjs-popup";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Partner = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* <section className=" partner mb-16 mx-4">
        <div className="wrapper relative padding rounded-3xl rounded-br-none md:px-10 overflow-hidden">
          <div className="overlay absolute w-full h-full top-0 left-0 bg-partner-bg section-linear-gradient bg-no-repeat "></div>
          <div className="partner-content relative text-white">
            <div className="heading-content">
                           <div className='title'>
                <div className="subheading text-white">Inexa strategy partner edX</div>
                <h2>Our Strategic Partner edX</h2>
              </div>
              <p className='text-slate-300'>
                edX partners with <b className='text-white'>more than 260+ leading universities </b>{" "}
                including the 37 of 50 top world universities, and companies to
                bring flexible, affordable, job-relevant online learning to
                individuals and organizations worldwide.
              </p>
            </div>
            <div className="partner-features-counter grid md:grid-cols-2 gap-y-10 gap-x-6 mt-10">
              <div className="partner-feature-wrapper">
                <h3 className="stroke2 mb-0 text-4xl lg:text-7xl font-semibold   stroke-slate-950">
                  <CountUp end={4700} duration={1} useGrouping={false} />+
                </h3>
                <p className="text-3xl font-medium text-white">Digital online offerings</p>
              </div>
              <div className="partner-feature-wrapper">
                <h3 className="stroke2 mb-0 text-4xl lg:text-7xl font-semibold   stroke-slate-950">
                  <CountUp end={37} duration={1} useGrouping={false} />+
                </h3>
                <p className="text-3xl font-medium text-white">
                  Of 50 top world universities
                </p>
              </div>
              <div className="partner-feature-wrapper">
                <h3 className="stroke2 mb-0 text-4xl lg:text-7xl font-semibold   stroke-slate-950">
                  <CountUp end={190} duration={1} useGrouping={false} />+
                </h3>
                <p className="text-3xl font-medium text-white">
                  Countries with registered edX learners
                </p>
              </div>
              <div className="partner-feature-wrapper">
                <h3 className="stroke2 mb-0 text-4xl lg:text-7xl font-semibold ">
                  <CountUp end={83} duration={1} useGrouping={false} />
                  M+
                </h3>
                <p className="text-3xl font-medium text-white">Learner Network</p>
              </div>
            </div>
          </div>

          <Popup
            className="border-4 border-indigo-600"
            open={open}
            onClose={() => setOpen(false)}
            modal
            closeOnDocumentClick
            contentStyle={{
              width: "80vw",
              height: "70vh",
            }}
            overlayStyle={{
              background: "rgba(0, 0, 0, 0.7)",
              zIndex: 999,
            }}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 bg-gray-200 rounded-full p-1 text-3xl text-gray-600 hover:bg-gray-300"
            >
              <IoIosCloseCircleOutline />
            </button>
            <iframe
              className="w-full h-[700px] max-h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Popup>

          <button
            className="absolute right-0 bottom-0 rounded-tl-3xl bg-white text-black p-4  font-semibold"
            onClick={() => setOpen(true)}
          >
            <LuCirclePlay className="inline text-2xl text-slate-500" /> Watch
            Video
          </button>
        </div>
      </section> */}

      <section className=" partner mb-16 mx-4">
        <div className="wrapper relative padding rounded-3xl rounded-br-none md:px-10 overflow-hidden">
          <div className="overlay absolute w-full h-full top-0 left-0 "></div>
          <div className="partner-content relative text-white">
            <div className="heading-content">
              <div className="title">
                <div className="subheading">Our partner</div>
                <h2 className="heading-black">Inexa strategic partner edX</h2>
              </div>
              <p className="text-textColor">
                edX partners with  <strong> more than 260+ leading universities </strong>
                including the 37 of 50 top world universities, and companies to
                bring flexible, affordable, job-relevant online learning to
                individuals and organizations worldwide.
              </p>
            </div>
            <div className="partner-features-counter grid md:grid-cols-2 gap-y-10 gap-x-6 mt-10">
              <div className="partner-feature-wrapper">
                <h3 className="stroke2 mb-0 text-4xl lg:text-7xl font-semibold relative">
                  <CountUp end={5000} duration={1} useGrouping={false} />+
                </h3>
                <p className=" text-3xl font-medium text-blackColor2 -mt-4 z-10 relative">
                  Digital online offerings
                </p>
              </div>
              <div className="partner-feature-wrapper">
                <h3 className="stroke2 mb-0 text-4xl lg:text-7xl font-semibold">
                  <CountUp end={37} duration={1} useGrouping={false} />+
                </h3>
                <p className="text-3xl font-medium text-blackColor2 -mt-4 z-10 relative">
                  Of 50 top world universities
                </p>
              </div>
              <div className="partner-feature-wrapper">
                <h3 className="stroke2 mb-0 text-4xl lg:text-7xl font-semibold ">
                  <CountUp end={190} duration={1} useGrouping={false} />+
                </h3>
                <p className="text-3xl font-medium text-blackColor2 -mt-4 z-10 relative">
                  Countries with registered edX learners
                </p>
              </div>
              <div className="partner-feature-wrapper">
                <h3 className="stroke2 mb-0 text-4xl lg:text-7xl font-semibold">
                  <CountUp end={83} duration={1} useGrouping={false} />
                  M+
                </h3>
                <p className="text-3xl font-medium text-blackColor2 -mt-4 z-10 relative">
                  Learner Network
                </p>
              </div>
              
            </div>
          </div>

          <Popup
            className="border-4 border-indigo-600"
            open={open}
            onClose={() => setOpen(false)}
            modal
            closeOnDocumentClick
            contentStyle={{
              width: "80vw",
              height: "70vh",
            }}
            overlayStyle={{
              background: "rgba(0, 0, 0, 0.7)",
              zIndex: 999,
            }}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 bg-gray-200 rounded-full p-1 text-3xl text-gray-600 hover:bg-gray-300"
            >
              <IoIosCloseCircleOutline />
            </button>
            <iframe
              className="w-full h-[700px] max-h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Popup>

          <button
            className="absolute right-0 bottom-0 rounded-tl-3xl bg-white text-black p-4  font-semibold"
            onClick={() => setOpen(true)}
          >
            <LuCirclePlay className="inline text-2xl text-slate-500" /> Watch
            Video
          </button>
        </div>
      </section>
    </>
  );
};

export default Partner;
