import React, { useState } from "react";
import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";
import { TfiAngleDown } from "react-icons/tfi";
import { FaCalendarAlt } from "react-icons/fa";




const CourseAccess = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const toggleMoreInfo = (event) => {
    setShowMoreInfo(!showMoreInfo);
    event.preventDefault();
  };

  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      title: "course",
    },
    {
      title: "progress",
    },
    {
      title: "dates",
    },
    {
      title: "discussion",
    },
    {
      title: "syllabus",
    },
    {
      title: "accessibility",
    },
  ];

  const [activeAccord, setActiveAccord] = useState(1);

  //   const toggleAccord =()=>{
  //     setActiveAccord(0)
  //   }

  const toggleAccord = (index) => {
    setActiveAccord((prevState) => (prevState === index ? null : index));
  };

  return (
    <>
      <Layout>
        <section className="course-access top-gap">
          <div className="wrapper padding">
            <div className="course-access-content grid md:grid-cols-2 gap-x-8 xl:gap-x-12 gap-y-14">
              <div className="left-side">
                <div className="top-section ">
                  <div className="wrapper">
                    <div className="top-section-content flex items-center gap-6">
                      <img
                        className="w-24"
                        src="/images/course-access-inexa.png"
                        alt="image"
                      />
                      <p>
                        <span className="font-bold">inexa</span> inexa 2024
                      </p>
                    </div>
                  </div>
                </div>

                <div className="course-info">
                  <div className="course-info-content mt-10">
                    <div className="course-info-tabs">
                      <div className="tabs-content">
                        <ul className="tab-headings flex flex-wrap gap-y-3">
                          {tabs.map((tab, index) => (
                            <li
                              key={index}
                              className={`cursor-pointer py-1 px-4 capitalize ${
                                activeTab === index + 1
                                  ? "font-bold border-b border-blackColor2"
                                  : ""
                              }`}
                              onClick={() => setActiveTab(index + 1)}
                            >
                              {tab.title}
                            </li>
                          ))}
                        </ul>

                        <div className="tabs-content">
                          {/* {tabs.map(
                      (tab, index) =>
                        activeTab === index + 1 && (
                          <div className="content" key={index}>
                            <h6 className="text-3xl capitalize">{tab.title}</h6>
                            <p>{tab.content}</p>
                          </div>
                        )
                    )} */}
                          {activeTab === 1 && (
                            <>
                              <div className="content py-10">
                                <h5 className="text-2xl sm:text-3xl">
                                  How to Learn Online
                                </h5>
                                <div className="course-start my-10 flex flex-wrap gap-3 items-center justify-between border border-slate-300 px-5 py-4">
                                  <p className="font-semibold">
                                    Begin your course today
                                  </p>
                                  <Link
                                    to="/"
                                    className="btn-white-transparent"
                                  >
                                    start course
                                  </Link>
                                </div>
                                <div className="course-more-info border border-slate-300 px-5 py-6">
                                  <p className="mb-5 capitalize">
                                    hello learners !
                                  </p>
                                  <p className="mb-5">
                                    The edX Learning Team welcomes you and we're
                                    very glad to have you with us in How to
                                    Learn Online, one of edX's most popular
                                    courses!
                                  </p>
                                  <p className="mb-5">
                                    As the world continues to come together in
                                    response to the Coronavirus pandemic and to
                                    mitigate the spread of the virus, learners
                                    are needing to navigate new ways of meeting
                                    their education goals. edX is offering this
                                    free course to help learners prepare for
                                    remote and online learning.
                                  </p>
                                  <p>
                                    This course is designed to empower you to
                                    get the most out of your online learning
                                    experience, no matter where your learning
                                    takes...
                                  </p>
                                  <div
                                    className={`more-info-show overflow-hidden transition-all duration-500 ease-in-out max-h-0
                                    ${showMoreInfo ? "max-h-[180px]" : ""}`}
                                  >
                                    <p>
                                      Lorem, ipsum dolor sit amet consectetur
                                      adipisicing elit. Fugiat, aperiam sunt
                                      commodi numquam, veniam recusandae error
                                      asperiores, libero quod ab officiis. Sunt
                                      excepturi officiis omnis minus laboriosam
                                      quae voluptate amet numquam delectus,
                                      dolorem dignissimos, nemo, reprehenderit
                                      ducimus porro qui veniam voluptatem eos
                                      vitae explicabo. Voluptatibus id sed dicta
                                      accusantium a repudiandae, ducimus facere
                                      totam exercitationem error cumque impedit
                                      eius, debitis laudantium consectetur
                                      quasi? Reiciendis labore aliquid eos, rem
                                      numquam ducimus? Sit vel, vitae asperiores
                                      temporibus ex deleniti eos. Ex molestias
                                      delectus suscipit sequi maxime excepturi
                                      aspernatur impedit officiis! Quo placeat
                                      repudiandae quisquam culpa veniam amet
                                      quasi ut alias architecto vel!
                                    </p>
                                  </div>
                                  <div className="info-btns mt-10 flex flex-wrap gap-3 justify-center md:justify-end">
                                    <Link
                                      to="#"
                                      className="btn black-transparent"
                                    >
                                      dismiss
                                    </Link>
                                    <Link
                                      to="#"
                                      className="btn-white-transparent "
                                      onClick={toggleMoreInfo}
                                    >
                                      {showMoreInfo ? "show less" : "show more"}
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                          {activeTab === 2 && (
                            <>
                              <div className="content py-10">
                                <h5 className="text-2xl sm:text-3xl ">
                                  Progress
                                </h5>
                                <div className="course-start my-10 flex flex-wrap gap-3 items-center justify-between border border-slate-300 px-5 py-4">
                                  <p className="font-semibold">
                                    Begin your course today
                                  </p>
                                  <Link
                                    to="/"
                                    className="btn-white-transparent"
                                  >
                                    start course
                                  </Link>
                                </div>
                                <div className="course-more-info border border-slate-300 px-5 py-6">
                                  <p className="mb-5 capitalize">
                                    hello learners ! Progress
                                  </p>
                                  <p className="mb-5">
                                    The edX Learning Team welcomes you and we're
                                    very glad to have you with us in How to
                                    Learn Online, one of edX's most popular
                                    courses!
                                  </p>
                                  <p className="mb-5">
                                    As the world continues to come together in
                                    response to the Coronavirus pandemic and to
                                    mitigate the spread of the virus, learners
                                    are needing to navigate new ways of meeting
                                    their education goals. edX is offering this
                                    free course to help learners prepare for
                                    remote and online learning.
                                  </p>
                                  <p>
                                    This course is designed to empower you to
                                    get the most out of your online learning
                                    experience, no matter where your learning
                                    takes...
                                  </p>
                                  <div
                                    className={`more-info-show overflow-hidden transition-all duration-500 ease-in-out max-h-0
                                    ${showMoreInfo ? "max-h-[180px]" : ""}`}
                                  >
                                    <p>
                                      Lorem, ipsum dolor sit amet consectetur
                                      adipisicing elit. Fugiat, aperiam sunt
                                      commodi numquam, veniam recusandae error
                                      asperiores, libero quod ab officiis. Sunt
                                      excepturi officiis omnis minus laboriosam
                                      quae voluptate amet numquam delectus,
                                      dolorem dignissimos, nemo, reprehenderit
                                      ducimus porro qui veniam voluptatem eos
                                      vitae explicabo. Voluptatibus id sed dicta
                                      accusantium a repudiandae, ducimus facere
                                      totam exercitationem error cumque impedit
                                      eius, debitis laudantium consectetur
                                      quasi? Reiciendis labore aliquid eos, rem
                                      numquam ducimus? Sit vel, vitae asperiores
                                      temporibus ex deleniti eos. Ex molestias
                                      delectus suscipit sequi maxime excepturi
                                      aspernatur impedit officiis! Quo placeat
                                      repudiandae quisquam culpa veniam amet
                                      quasi ut alias architecto vel!
                                    </p>
                                  </div>
                                  <div className="info-btns mt-10 flex flex-wrap gap-3 justify-center md:justify-end">
                                    <Link
                                      to="#"
                                      className="btn black-transparent"
                                    >
                                      dismiss
                                    </Link>
                                    <Link
                                      to="#"
                                      className="btn-white-transparent "
                                      onClick={toggleMoreInfo}
                                    >
                                      {showMoreInfo ? "show less" : "show more"}
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                          {activeTab === 3 && (
                            <>
                              <div className="content py-10">
                                <h5 className="text-2xl sm:text-3xl">Dates</h5>
                                <div className="course-start my-10 flex flex-wrap gap-3 items-center justify-between border border-slate-300 px-5 py-4">
                                  <p className="font-semibold">
                                    Begin your course today
                                  </p>
                                  <Link
                                    to="/"
                                    className="btn-white-transparent"
                                  >
                                    start course
                                  </Link>
                                </div>
                                <div className="course-more-info border border-slate-300 px-5 py-6">
                                  <p className="mb-5 capitalize">
                                    hello learners ! Dates
                                  </p>
                                  <p className="mb-5">
                                    The edX Learning Team welcomes you and we're
                                    very glad to have you with us in How to
                                    Learn Online, one of edX's most popular
                                    courses!
                                  </p>
                                  <p className="mb-5">
                                    As the world continues to come together in
                                    response to the Coronavirus pandemic and to
                                    mitigate the spread of the virus, learners
                                    are needing to navigate new ways of meeting
                                    their education goals. edX is offering this
                                    free course to help learners prepare for
                                    remote and online learning.
                                  </p>
                                  <p>
                                    This course is designed to empower you to
                                    get the most out of your online learning
                                    experience, no matter where your learning
                                    takes...
                                  </p>
                                  <div
                                    className={`more-info-show overflow-hidden transition-all duration-500 ease-in-out max-h-0
                                    ${showMoreInfo ? "max-h-[180px]" : ""}`}
                                  >
                                    <p>
                                      Lorem, ipsum dolor sit amet consectetur
                                      adipisicing elit. Fugiat, aperiam sunt
                                      commodi numquam, veniam recusandae error
                                      asperiores, libero quod ab officiis. Sunt
                                      excepturi officiis omnis minus laboriosam
                                      quae voluptate amet numquam delectus,
                                      dolorem dignissimos, nemo, reprehenderit
                                      ducimus porro qui veniam voluptatem eos
                                      vitae explicabo. Voluptatibus id sed dicta
                                      accusantium a repudiandae, ducimus facere
                                      totam exercitationem error cumque impedit
                                      eius, debitis laudantium consectetur
                                      quasi? Reiciendis labore aliquid eos, rem
                                      numquam ducimus? Sit vel, vitae asperiores
                                      temporibus ex deleniti eos. Ex molestias
                                      delectus suscipit sequi maxime excepturi
                                      aspernatur impedit officiis! Quo placeat
                                      repudiandae quisquam culpa veniam amet
                                      quasi ut alias architecto vel!
                                    </p>
                                  </div>
                                  <div className="info-btns mt-10 flex flex-wrap gap-3 justify-center md:justify-end">
                                    <Link
                                      to="#"
                                      className="btn black-transparent"
                                    >
                                      dismiss
                                    </Link>
                                    <Link
                                      to="#"
                                      className="btn-white-transparent "
                                      onClick={toggleMoreInfo}
                                    >
                                      {showMoreInfo ? "show less" : "show more"}
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}

                          {activeTab === 4 && (
                            <>
                              <div className="content py-10">
                                <h5 className="text-2xl sm:text-3xl">
                                  Discussion
                                </h5>
                                <div className="course-start my-10 flex flex-wrap gap-3 items-center justify-between border border-slate-300 px-5 py-4">
                                  <p className="font-semibold">
                                    Begin your course today
                                  </p>
                                  <Link
                                    to="/"
                                    className="btn-white-transparent"
                                  >
                                    start course
                                  </Link>
                                </div>
                                <div className="course-more-info border border-slate-300 px-5 py-6">
                                  <p className="mb-5 capitalize">
                                    hello learners ! discussion
                                  </p>
                                  <p className="mb-5">
                                    The edX Learning Team welcomes you and we're
                                    very glad to have you with us in How to
                                    Learn Online, one of edX's most popular
                                    courses!
                                  </p>
                                  <p className="mb-5">
                                    As the world continues to come together in
                                    response to the Coronavirus pandemic and to
                                    mitigate the spread of the virus, learners
                                    are needing to navigate new ways of meeting
                                    their education goals. edX is offering this
                                    free course to help learners prepare for
                                    remote and online learning.
                                  </p>
                                  <p>
                                    This course is designed to empower you to
                                    get the most out of your online learning
                                    experience, no matter where your learning
                                    takes...
                                  </p>
                                  <div
                                    className={`more-info-show overflow-hidden transition-all duration-500 ease-in-out max-h-0
                                    ${showMoreInfo ? "max-h-[180px]" : ""}`}
                                  >
                                    <p>
                                      Lorem, ipsum dolor sit amet consectetur
                                      adipisicing elit. Fugiat, aperiam sunt
                                      commodi numquam, veniam recusandae error
                                      asperiores, libero quod ab officiis. Sunt
                                      excepturi officiis omnis minus laboriosam
                                      quae voluptate amet numquam delectus,
                                      dolorem dignissimos, nemo, reprehenderit
                                      ducimus porro qui veniam voluptatem eos
                                      vitae explicabo. Voluptatibus id sed dicta
                                      accusantium a repudiandae, ducimus facere
                                      totam exercitationem error cumque impedit
                                      eius, debitis laudantium consectetur
                                      quasi? Reiciendis labore aliquid eos, rem
                                      numquam ducimus? Sit vel, vitae asperiores
                                      temporibus ex deleniti eos. Ex molestias
                                      delectus suscipit sequi maxime excepturi
                                      aspernatur impedit officiis! Quo placeat
                                      repudiandae quisquam culpa veniam amet
                                      quasi ut alias architecto vel!
                                    </p>
                                  </div>
                                  <div className="info-btns mt-10 flex flex-wrap gap-3 justify-center md:justify-end">
                                    <Link
                                      to="#"
                                      className="btn black-transparent"
                                    >
                                      dismiss
                                    </Link>
                                    <Link
                                      to="#"
                                      className="btn-white-transparent "
                                      onClick={toggleMoreInfo}
                                    >
                                      {showMoreInfo ? "show less" : "show more"}
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}

                          {activeTab === 5 && (
                            <>
                              <div className="content py-10">
                                <h5 className="text-2xl sm:text-3xl">
                                  Syllabus
                                </h5>
                                <div className="course-start my-10 flex flex-wrap gap-3 items-center justify-between border border-slate-300 px-5 py-4">
                                  <p className="font-semibold">
                                    Begin your course today
                                  </p>
                                  <Link
                                    to="/"
                                    className="btn-white-transparent"
                                  >
                                    start course
                                  </Link>
                                </div>
                                <div className="course-more-info border border-slate-300 px-5 py-6">
                                  <p className="mb-5 capitalize">
                                    hello learners ! syllabus
                                  </p>
                                  <p className="mb-5">
                                    The edX Learning Team welcomes you and we're
                                    very glad to have you with us in How to
                                    Learn Online, one of edX's most popular
                                    courses!
                                  </p>
                                  <p className="mb-5">
                                    As the world continues to come together in
                                    response to the Coronavirus pandemic and to
                                    mitigate the spread of the virus, learners
                                    are needing to navigate new ways of meeting
                                    their education goals. edX is offering this
                                    free course to help learners prepare for
                                    remote and online learning.
                                  </p>
                                  <p>
                                    This course is designed to empower you to
                                    get the most out of your online learning
                                    experience, no matter where your learning
                                    takes...
                                  </p>
                                  <div
                                    className={`more-info-show overflow-hidden transition-all duration-500 ease-in-out max-h-0
                                    ${showMoreInfo ? "max-h-[180px]" : ""}`}
                                  >
                                    <p>
                                      Lorem, ipsum dolor sit amet consectetur
                                      adipisicing elit. Fugiat, aperiam sunt
                                      commodi numquam, veniam recusandae error
                                      asperiores, libero quod ab officiis. Sunt
                                      excepturi officiis omnis minus laboriosam
                                      quae voluptate amet numquam delectus,
                                      dolorem dignissimos, nemo, reprehenderit
                                      ducimus porro qui veniam voluptatem eos
                                      vitae explicabo. Voluptatibus id sed dicta
                                      accusantium a repudiandae, ducimus facere
                                      totam exercitationem error cumque impedit
                                      eius, debitis laudantium consectetur
                                      quasi? Reiciendis labore aliquid eos, rem
                                      numquam ducimus? Sit vel, vitae asperiores
                                      temporibus ex deleniti eos. Ex molestias
                                      delectus suscipit sequi maxime excepturi
                                      aspernatur impedit officiis! Quo placeat
                                      repudiandae quisquam culpa veniam amet
                                      quasi ut alias architecto vel!
                                    </p>
                                  </div>
                                  <div className="info-btns mt-10 flex flex-wrap gap-3 justify-center md:justify-end">
                                    <Link
                                      to="#"
                                      className="btn black-transparent"
                                    >
                                      dismiss
                                    </Link>
                                    <Link
                                      to="#"
                                      className="btn-white-transparent "
                                      onClick={toggleMoreInfo}
                                    >
                                      {showMoreInfo ? "show less" : "show more"}
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}

                          {activeTab === 6 && (
                            <>
                              <div className="content py-10">
                                <h5 className="text-2xl sm:text-3xl">
                                  Accessibility
                                </h5>
                                <div className="course-start my-10 flex flex-wrap gap-3 items-center justify-between border border-slate-300 px-5 py-4">
                                  <p className="font-semibold">
                                    Begin your course today
                                  </p>
                                  <Link
                                    to="/"
                                    className="btn-white-transparent"
                                  >
                                    start course
                                  </Link>
                                </div>
                                <div className="course-more-info border border-slate-300 px-5 py-6">
                                  <p className="mb-5 capitalize">
                                    hello learners ! accessibility
                                  </p>
                                  <p className="mb-5">
                                    The edX Learning Team welcomes you and we're
                                    very glad to have you with us in How to
                                    Learn Online, one of edX's most popular
                                    courses!
                                  </p>
                                  <p className="mb-5">
                                    As the world continues to come together in
                                    response to the Coronavirus pandemic and to
                                    mitigate the spread of the virus, learners
                                    are needing to navigate new ways of meeting
                                    their education goals. edX is offering this
                                    free course to help learners prepare for
                                    remote and online learning.
                                  </p>
                                  <p>
                                    This course is designed to empower you to
                                    get the most out of your online learning
                                    experience, no matter where your learning
                                    takes...
                                  </p>
                                  <div
                                    className={`more-info-show overflow-hidden transition-all duration-500 ease-in-out max-h-0
                                    ${showMoreInfo ? "max-h-[180px]" : ""}`}
                                  >
                                    <p>
                                      Lorem, ipsum dolor sit amet consectetur
                                      adipisicing elit. Fugiat, aperiam sunt
                                      commodi numquam, veniam recusandae error
                                      asperiores, libero quod ab officiis. Sunt
                                      excepturi officiis omnis minus laboriosam
                                      quae voluptate amet numquam delectus,
                                      dolorem dignissimos, nemo, reprehenderit
                                      ducimus porro qui veniam voluptatem eos
                                      vitae explicabo. Voluptatibus id sed dicta
                                      accusantium a repudiandae, ducimus facere
                                      totam exercitationem error cumque impedit
                                      eius, debitis laudantium consectetur
                                      quasi? Reiciendis labore aliquid eos, rem
                                      numquam ducimus? Sit vel, vitae asperiores
                                      temporibus ex deleniti eos. Ex molestias
                                      delectus suscipit sequi maxime excepturi
                                      aspernatur impedit officiis! Quo placeat
                                      repudiandae quisquam culpa veniam amet
                                      quasi ut alias architecto vel!
                                    </p>
                                  </div>
                                  <div className="info-btns mt-10 flex flex-wrap gap-3 justify-center md:justify-end">
                                    <Link
                                      to="#"
                                      className="btn black-transparent"
                                    >
                                      dismiss
                                    </Link>
                                    <Link
                                      to="#"
                                      className="btn-white-transparent "
                                      onClick={toggleMoreInfo}
                                    >
                                      {showMoreInfo ? "show less" : "show more"}
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="course-accordion">
                  <div className="course-accordion-content border px-4 py-2 md:px-8 md:py-6">
                    <div
                      className="accordion border-b border-slate-300 py-6"
                      onClick={() => toggleAccord(1)}
                    >
                      <div className="accord-heading py-2 flex items-center justify-between cursor-pointer">
                        <h4 className="font-semibold capitalize mb-0">
                          welcome
                        </h4>
                        <span
                          className={` duration-300 ${
                            activeAccord === 1 ? "-rotate-180" : ""
                          }`}
                        >
                          <TfiAngleDown />
                        </span>
                      </div>
                      {activeAccord === 1 && (
                        <div
                          className={`accord-content  transition-all duration-500 ease-in-out overflow-hidden 
                                ${
                                  activeAccord === 1
                                    ? "max-h-[1000px]"
                                    : "max-h-0"
                                } `}
                        >
                          <p>
                            We offer a 15-day return window for a full refund or
                            exchange on unused items. Returns must include
                            original packaging and proof of purchase for
                            processing.
                          </p>
                        </div>
                      )}
                    </div>
                    <div
                      className="accordion border-b border-slate-300 py-6"
                      onClick={() => toggleAccord(2)}
                    >
                      <div className="accord-heading py-2 flex items-center justify-between  cursor-pointer">
                        <h4 className="font-semibold capitalize mb-0">
                          Self-Care for Learning
                        </h4>
                        <span
                          className={` duration-300 ${
                            activeAccord === 2 ? "-rotate-180" : ""
                          }`}
                        >
                          <TfiAngleDown />
                        </span>
                      </div>
                      {activeAccord === 2 && (
                        <div className="accord-content py-2">
                          <p>
                            We offer a 15-day return window for a full refund or
                            exchange on unused items. Returns must include
                            original packaging and proof of purchase for
                            processing.
                          </p>
                        </div>
                      )}
                    </div>
                    <div
                      className="accordion border-b border-slate-300 py-6"
                      onClick={() => toggleAccord(3)}
                    >
                      <div className="accord-heading py-2 flex items-center justify-between  cursor-pointer">
                        <h4 className="font-semibold capitalize mb-0">
                          Space, Time and Technology
                        </h4>
                        <span
                          className={` duration-300 ${
                            activeAccord === 3 ? "-rotate-180" : ""
                          }`}
                        >
                          <TfiAngleDown />
                        </span>
                      </div>
                      {activeAccord === 3 && (
                        <div className="accord-content py-2">
                          <p>
                            We offer a 15-day return window for a full refund or
                            exchange on unused items. Returns must include
                            original packaging and proof of purchase for
                            processing.
                          </p>
                        </div>
                      )}
                    </div>
                    <div
                      className="accordion border-b border-slate-300 py-6"
                      onClick={() => toggleAccord(4)}
                    >
                      <div className="accord-heading py-2 flex items-center justify-between  cursor-pointer">
                        <h4 className="font-semibold capitalize mb-0">
                          Learning Strategies
                        </h4>
                        <span
                          className={` duration-300 ${
                            activeAccord === 4 ? "-rotate-180" : ""
                          }`}
                        >
                          <TfiAngleDown />
                        </span>
                      </div>
                      {activeAccord === 4 && (
                        <div className="accord-content py-2">
                          <p>
                            We offer a 15-day return window for a full refund or
                            exchange on unused items. Returns must include
                            original packaging and proof of purchase for
                            processing.
                          </p>
                        </div>
                      )}
                    </div>
                    <div
                      className="accordion border-b border-slate-300 py-6"
                      onClick={() => toggleAccord(5)}
                    >
                      <div className="accord-heading py-2 flex items-center justify-between  cursor-pointer">
                        <h4 className="font-semibold capitalize mb-0">
                          Communication and Community
                        </h4>
                        <span
                          className={` duration-300 ${
                            activeAccord === 5 ? "-rotate-180" : ""
                          }`}
                        >
                          <TfiAngleDown />
                        </span>
                      </div>
                      {activeAccord === 5 && (
                        <div className="accord-content py-2">
                          <p>
                            We offer a 15-day return window for a full refund or
                            exchange on unused items. Returns must include
                            original packaging and proof of purchase for
                            processing.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="right-side">
                <div className="verified">
                  <div className="verified-content shadow-[0px_7px_50px_0px_#64646F40] p-4 sm:p-8">
                    <div className="content-text border px-6 py-8">
                      <div className="verify-images flex justify-between mb-8">
                        <div>
                          <img
                            src="/images/verified-certificate-logo.png"
                            alt="image"
                          />
                        </div>
                        <div>
                          <img
                            className="w-20"
                            src="/images/verify-inexa-1.png"
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className="clarify text-textColor flex flex-wrap gap-4 items-center justify-between">
                        <div>
                          <p className="text-textColor text-xs">
                            This is clarify that
                          </p>
                          <h4 className="font-semibold capitalize my-3">
                            abigail
                          </h4>
                          <p className="text-xs">
                            successfully completed and received a passing grade
                            in{" "}
                          </p>
                          <h4 className="font-semibold capitalize my-3">
                            {" "}
                            edx201:How to Learn Online{" "}
                          </h4>
                          <p className="text-xs">
                            {" "}
                            a course of study offered by edX, an online
                            learninginitiative of Inexa.
                          </p>
                        </div>
                        <div className="signs flex flex-col gap-4">
                          <div>
                            <img
                              className="mb-2"
                              src="/images/sign.png"
                              alt="images"
                            />
                            <p className="text-xs font-semibold text-headingColor">
                              Maurilio Pugliesi
                            </p>
                          </div>
                          <div>
                            <img
                              className="mb-2"
                              src="/images/sign.png"
                              alt="images"
                            />
                            <p className="text-xs font-semibold text-headingColor">
                              Justine Doe, Ph.D.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="verified flex flex-wrap items-center  gap-3 mt-10">
                        <div>
                          <img
                            className="w-20"
                            alt="image"
                            src="/images/verify-inexa-1.png"
                          ></img>
                        </div>
                        <div>
                          <p className="text-xs capitalize">
                            verified certificate
                          </p>
                          {/* <p className=" text-xs font-semibold">Issued Month / Year</p> */}
                          <p className=" text-xs font-semibold my-1   ">
                            12 / 2025
                          </p>
                        </div>
                        <div>
                          <p className="text-xs capitalize">
                            verified certificate ID
                          </p>
                          <p className=" text-xs font-semibold my-1">
                            12345678901234567890
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pursue mt-10 text-xs">
                        <p className=" font-semibold">Pursue a verified certificate</p>
                        <ul className="list-disc ps-5 mt-4 flex flex-col gap-3 mb-7">
                            <li>Earn a verified certificate of completion to showcase on your resumé</li>
                            <li>Support our mission at Inexa</li>
                        </ul>
                        <Link to="#" className="btn-white-transparent w-full ">Upgrade for $48.30 ($69)</Link>
                    </div>
                  </div>
                </div>
                <div className="imp-notes mt-12">
                    <div className="imp-notes-content">
                        <p className="font-bold mb-4">important dates</p>
                       <div className="dates flex gap-4 flex-col">
                       <div className="date flex items-center gap-3">
                          <div className="text-3xl"><FaCalendarAlt /></div>
                          <div>
                            <p className="font-bold">Thu, Nov 14, 2024</p>
                            <p className="text-xs font-bold">Course starts</p>
                        </div>
                        </div>
                       <div className="date flex items-center gap-3">
                          <div className="text-3xl"><FaCalendarAlt /></div>
                          <div>
                            <p className="font-bold">Sat, Nov 23, 2024</p>
                            <p className="text-xs font-bold">Verification Upgrade Deadline</p>
                        </div>
                        </div>
                       <div className="date flex items-center gap-3">
                          <div className="text-3xl"><FaCalendarAlt /></div>
                          <div>
                            <p className="font-bold">Tue, Dec 31, 2024</p>
                            <p className="text-xs font-bold">Course ends</p>
                        </div>
                        </div>
                       </div>
                        
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default CourseAccess;
