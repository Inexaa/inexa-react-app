import React, { useState } from "react";
import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";


const skills = [
  {
    id: 1,
    skill: "data science",
  },
  {
    id: 2,
    skill: "Data Analysis",
  },
  {
    id: 3,
    skill: "Python Programming",
  },
  {
    id: 4,
    skill: "Numpy",
  },
  {
    id: 5,
    skill: "Pandas",
  },
];



// Course overview Tabs
const PaidVersionCourse = () => {
  const [activeTab, setActiveTab] = useState("about");
   // End Course overview Tabs

  // Accordian
   const  [moduleAccordian, setModuleAccordian] = useState(false);
// End Accordian

  return (
    <>

      <Layout>
        <section className="course-detail top-gap bg-[#f8faff]">
          <div className="wrapper padding">
            <div className="course-derail-content grid md:grid-cols-[65%_35%] gap-x-4 gap-y-10 ">
              <div className="detail">
                <div className="mb-7">
                  <img src="/images/edXPartner.png" alt="image" />
                </div>
                <div className="mb-4">
                  <h5 className="text-2xl sm:text-[32px] font-medium">
                    {" "}
                    Python for Data Science, AI & Development
                  </h5>
                  <p className="text-textColor">
                    This course is part of multiple programs.
                  </p>
                </div>
                <div className="instructor flex items-center gap-4 mb-10">
                  <div className="relative inline-block size-12 rounded-full overflow-hidden">
                    <img
                      className="absolute w-full h-full object-cover"
                      src="/images/josaph.png"
                      alt="image"
                    />
                  </div>
                  <div>
                    instructor:{" "}
                    <Link className="underline capitalize">
                      {" "}
                      joseph san arcangelo
                    </Link>
                  </div>
                </div>
                <div className="buttons flex flex-wrap gap-5">
                  <Link className="btn-blue">
                    Enroll $250.00{" "}
                    <span className="block text-[12px]">Starts Dec 10</span>
                  </Link>
                </div>
                <div className="next-info mt-5">
                  <p>
                    <span>1,035,567</span> alerdy enrolled{" "}
                  </p>
                </div>
              </div>
              <div className="image flex md:justify-end">
                <div>
                  <img
                    className="w-[350px]"
                    src="/images/round-map.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
            <div className="course-highlights bg-white px-4 py-6 md:px-8 mt-10 course-highlight-tab-shadow rounded-[6px]">
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[20%_20%_20%_20%_20%] gap-x-2 gap-y-7">
                <li>
                  <div>
                    <p className="font-semibold text-[18px] text-headingColor">
                      5 modules
                    </p>
                    <p className="font-normal text-sm text-textColor">
                      {" "}
                      Gain insight into a topic and learn the fundamentals.{" "}
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <p className="font-semibold text-[18px] text-headingColor flex items-center gap-1">
                      <span>4.6</span>
                      <span>
                        <FaStar className="text-primaryColor text-[16px]" />
                      </span>
                    </p>
                    <p className="font-normal text-sm text-textColor">
                      {" "}
                      (38,975 reviews){" "}
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <p className="font-semibold text-[18px] text-headingColor">
                      Beginner level
                    </p>
                    <p className="font-normal text-sm text-textColor">
                      {" "}
                      Recommended experience{" "}
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <p className="font-semibold text-[18px] text-headingColor">
                      Flexible schedule
                    </p>
                    <p className="font-normal text-sm text-textColor">
                      {" "}
                      Approx. 25 hours Learn at your own pace{" "}
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <p className="font-semibold text-[18px] text-headingColor">
                      95%
                    </p>
                    <p className="font-normal text-sm text-textColor">
                      {" "}
                      Most learners liked this course{" "}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="course-detail-tabs">
          <div className="wrapper padding pb-2">
            <div className="detail-tabs-content">
              <div className="tab-title-bar mb-10">
                <ul className="flex text-textColor font-medium capitalize text-[18px]  gap-y-8 border-b py-2 overflow-x-auto ">
                  <li
                    onClick={() => setActiveTab("about")}
                    className={`cursor-pointer px-5 py-1 rounded-[5px] ${
                      activeTab == "about"
                        ? "bg-[#D2D2FF99] text-primaryColor font-semibold"
                        : ""
                    }`}
                  >
                    about
                  </li>
                  <li
                    onClick={() => setActiveTab("outcomes")}
                    className={`cursor-pointer px-5 py-1 rounded-[5px] ${
                      activeTab == "outcomes"
                        ? "bg-[#D2D2FF99] text-primaryColor font-semibold"
                        : ""
                    }`}
                  >
                    outcomes
                  </li>
                  <li
                    onClick={() => setActiveTab("modules")}
                    className={`cursor-pointer px-5 py-1 rounded-[5px] ${
                      activeTab == "modules"
                        ? "bg-[#D2D2FF99] text-primaryColor font-semibold"
                        : ""
                    }`}
                  >
                    modules
                  </li>
                  <li
                    onClick={() => setActiveTab("recommendations")}
                    className={`cursor-pointer px-5 py-1 rounded-[5px] ${
                      activeTab == "recommendations"
                        ? "bg-[#D2D2FF99] text-primaryColor font-semibold"
                        : ""
                    }`}
                  >
                    recommendations
                  </li>
                  <li
                    onClick={() => setActiveTab("testimonials")}
                    className={`cursor-pointer px-5 py-1 rounded-[5px] ${
                      activeTab == "testimonials"
                        ? "bg-[#D2D2FF99] text-primaryColor font-semibold"
                        : ""
                    }`}
                  >
                    Testimonials
                  </li>
                  <li
                    onClick={() => setActiveTab("reviews")}
                    className={`cursor-pointer px-5 py-1 rounded-[5px] ${
                      activeTab == "reviews"
                        ? "bg-[#D2D2FF99] text-primaryColor font-semibold"
                        : ""
                    }`}
                  >
                    reviews
                  </li>
                </ul>
              </div>
              <div className="tab-content-bar">
                <div className="content">
                  {activeTab === "about" && (
                    <div>
                      <h4 className="text-headingColor txet-[20px] font-semibold">
                        What you’ll learn
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-8 my-8 text-textColor">
                        <li>
                          Learn Python - the most popular programming language
                          and for Data Science and Software Development.
                        </li>
                        <li>
                          Demonstrate proficiency in using Python libraries such
                          as Pandas & Numpy, and developing code using Jupyter
                          Notebooks.
                        </li>
                        <li>
                          Apply Python programming logic Variables, Data
                          Structures, Branching, Loops, Functions, Objects &
                          Classes.
                        </li>
                        <li>
                          Access and web scrape data using APIs and Python
                          libraries like Beautiful Soup.
                        </li>
                      </ul>
                    </div>
                  )}
                  {activeTab === "outcomes" && (
                    <div>
                      <h4 className="text-headingColor txet-[20px] font-semibold">
                        outcomes
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-8 my-8 text-textColor">
                        <li>
                          Learn Python - the most popular programming language
                          and for Data Science and Software Development.
                        </li>
                        <li>
                          Demonstrate proficiency in using Python libraries such
                          as Pandas & Numpy, and developing code using Jupyter
                          Notebooks.
                        </li>
                        <li>
                          Apply Python programming logic Variables, Data
                          Structures, Branching, Loops, Functions, Objects &
                          Classes.
                        </li>
                        <li>
                          Access and web scrape data using APIs and Python
                          libraries like Beautiful Soup.
                        </li>
                      </ul>
                    </div>
                  )}
                  {activeTab === "modules" && (
                    <div>
                      <h4 className="text-headingColor txet-[20px] font-semibold">
                        modules
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-8 my-8 text-textColor">
                        <li>
                          Learn Python - the most popular programming language
                          and for Data Science and Software Development.
                        </li>
                        <li>
                          Demonstrate proficiency in using Python libraries such
                          as Pandas & Numpy, and developing code using Jupyter
                          Notebooks.
                        </li>
                        <li>
                          Apply Python programming logic Variables, Data
                          Structures, Branching, Loops, Functions, Objects &
                          Classes.
                        </li>
                        <li>
                          Access and web scrape data using APIs and Python
                          libraries like Beautiful Soup.
                        </li>
                      </ul>
                    </div>
                  )}
                  {activeTab === "recommendations" && (
                    <div>
                      <h4 className="text-headingColor txet-[20px] font-semibold">
                        recommendations
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-8 my-8 text-textColor">
                        <li>
                          Learn Python - the most popular programming language
                          and for Data Science and Software Development.
                        </li>
                        <li>
                          Demonstrate proficiency in using Python libraries such
                          as Pandas & Numpy, and developing code using Jupyter
                          Notebooks.
                        </li>
                        <li>
                          Apply Python programming logic Variables, Data
                          Structures, Branching, Loops, Functions, Objects &
                          Classes.
                        </li>
                        <li>
                          Access and web scrape data using APIs and Python
                          libraries like Beautiful Soup.
                        </li>
                      </ul>
                    </div>
                  )}
                  {activeTab === "testimonials" && (
                    <div>
                      <h4 className="text-headingColor txet-[20px] font-semibold">
                        testimonials
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-8 my-8 text-textColor">
                        <li>
                          Learn Python - the most popular programming language
                          and for Data Science and Software Development.
                        </li>
                        <li>
                          Demonstrate proficiency in using Python libraries such
                          as Pandas & Numpy, and developing code using Jupyter
                          Notebooks.
                        </li>
                        <li>
                          Apply Python programming logic Variables, Data
                          Structures, Branching, Loops, Functions, Objects &
                          Classes.
                        </li>
                        <li>
                          Access and web scrape data using APIs and Python
                          libraries like Beautiful Soup.
                        </li>
                      </ul>
                    </div>
                  )}
                  {activeTab === "reviews" && (
                    <div>
                      <h4 className="text-headingColor txet-[20px] font-semibold">
                        reviews
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-8 my-8 text-textColor">
                        <li>
                          Learn Python - the most popular programming language
                          and for Data Science and Software Development.
                        </li>
                        <li>
                          Demonstrate proficiency in using Python libraries such
                          as Pandas & Numpy, and developing code using Jupyter
                          Notebooks.
                        </li>
                        <li>
                          Apply Python programming logic Variables, Data
                          Structures, Branching, Loops, Functions, Objects &
                          Classes.
                        </li>
                        <li>
                          Access and web scrape data using APIs and Python
                          libraries like Beautiful Soup.
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills">
          <div className="wrapper px-4">
            <div className="skilld-content grid md:grid-cols-[60%_40%] gap-10"></div>
            <div className="skills mt-12 mb-5">
              <h4 className=" text-2xl mb-7">Skills you'll gain</h4>
              <ul className="flex flex-wrap gap-6">
                {skills.map((item, index) => {
                  return (
                    <li key={item.id}>
                      <Link className="bg-bgTintColor px-4 py-2 rounded-full text-sm font-medium capitalize">
                        {item.skill}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        <section className="details-to-know">
          <div className="wrapper pt-10 px-4">
            <div className="details-to-know-content">
              <h4 className="text-2xl mb-7"> details to know</h4>
              <ul className="flex flex-wrap gap-x-16 gap-y-5">
                <li>
                  <div className="mb-3">
                    <img src="/images/linkedIn.png" alt="image" />
                  </div>
                  <div>
                    <h6 className="text-[16px] font-bold mb-1">
                      sharable certificate
                    </h6>
                    <p className="text-sm font-light">
                      Add your LinkedIn  profile
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mb-3">
                    <img src="/images/assesment.png" alt="image" />
                  </div>
                  <div>
                    <h6 className="text-[16px] font-bold mb-1">Assessments</h6>
                    <p className="text-sm font-light">22 assignments</p>
                  </div>
                </li>
                <li>
                  <div className="mb-3">
                    <img
                      src="/images/token_chat.webp"
                      alt="image"
                    />
                  </div>
                  <div>
                    <h6 className="text-[16px] font-bold mb-1">
                      Taught in English
                    </h6>
                    <p className="text-sm font-light">24 languages available</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="subject-expertes">
          <div className="wrapper padding">
            <div className="subject-expertes-content flex flex-wrap lg:flex-nowrap gap-y-10 ">
              <div className="text-content md:flex-[60%] md:mr-4">
                <h3>Build your subject-matter expertise</h3>
                <p className="text-textColor">
                  This course is available as part of multiple programs .When
                  you enroll in this course, you'll also be asked to select a
                  specific program.
                </p>
                <ul className="list-disc text-textColor mt-5 ms-8">
                  <li>Learn new concepts from industry experts</li>
                  <li>
                    Gain a foundational understanding of a subject or tool
                  </li>
                  <li>Develop job-relevant skills with hands-on projects</li>
                  <li>Earn a shareable career certificate</li>
                </ul>
              </div>
              <div className="image-content md:flex-[40%] md:ml-4">
                <img
                  className="rounded-[15px] w-full"
                  src="/images/sme.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="certificate my-20 overflow-visible margin-x">
          <div className="wrapper ">
            <div className="certificate-content relative">
              <div className="text-content border px-4 lg:px-8  py-4 lg:py-10 rounded-2xl">
                <div className="inner-content md:w-1/2 py-5 md:py-0 pe-0  md:pe-5">
                  <h3>Earn a carrer certificate</h3>
                  <p className=" md:max-w-[280px] lg:max-w-[520px] leading-6">
                    Add this credential to your LinkedIn profile, resume, or
                    CV Share it on social media and in your performance review
                  </p>
                </div>
              </div>
              <div className="image-content flex justify-center md:absolute md:-right-1 lg:right-10  md:top-1/2 md:-translate-y-1/2 " >
                <img
                  src="/images/certificate-dummy.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="modules">
            <div className="wrapper padding">
                <div className="modules-content">
                    <h3 className="mb-16">There are 5 modules in this course</h3>
                    <div className="module-single-title flex items-center gap-4 mb-10 ms-10">
                      <span className="text-2xl"><IoLocationSharp /></span>
                      {/* <div className="vertical-line w-1 bg-borderColor h-100"></div> */}
                    <p className="text-lg font-semibold">IBM Data Analyst Professional Certificate</p>
                    </div>
                    <div className="module-accordian max-w-[800px] p-4 pb-0 course-highlight-tab-shadow rounded-[6px] ms-3">
                        <div className={`module-accordian-title flex items-center justify-between  cursor-pointer border-b pb-3`} onClick={()=> setModuleAccordian(!moduleAccordian)}>
                            <div className="flex gap-4 items-center">
                            <div><img src="/images/module-icon.png" alt="image" /></div>
                            <p>CS50’s Introduction to Computer Science</p>
                            </div>
                            <div className={`p-1 duration-300 ${moduleAccordian ? "-rotate-180" : ""}`}>
                            <FaAngleDown />
                                </div>
                        </div>
                        <div className={`duration-300 ${moduleAccordian ? " h-auto py-5" : "h-0 overflow-hidden"}`}>
                            <div className="accordian-content ms-16">
                              <div className="content-heading items-center flex gap-3">
                              <span><IoMdTime className="text-xl" /> </span> <b>6-18 hours per week, for 12 weeks </b>
                              </div>
                                <p className="my-4">Differentiate between different data roles such as Data Engineer, Data Analyst, Data Scientist, Business Analyst, and Business Intelligence Analyst</p>
                                <Link className="colored-link underline" to="/">View the course</Link>
                            </div>
                        </div>
                    </div>
                    {/* <div className="module-accordian max-w-[800px] p-4 course-highlight-tab-shadow rounded-[4px ]">
                        <div className={`module-accordian-title flex items-center justify-between bg-red-200 cursor-pointer`} onClick={()=> setModuleAccordian(!moduleAccordian)}>
                            <div className="flex gap-2 items-center">
                            <div><img src="/images/module-icon.png" alt="image" /></div>
                            <p>CS50’s Introduction to Computer Science</p>
                            </div>
                            <div className="  p-1">
                            {moduleAccordian ? <FaAngleUp /> : <FaAngleDown />}
                                </div>
                        </div>
                        <div className={`duration-300 ${moduleAccordian ? " h-auto py-5" : "h-0 overflow-hidden"}`}>
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, rem. Perferendis, quasi nostrum. Ad odit vel, assumenda molestias voluptatibus, possimus ullam, laboriosam dolor esse quam fugiat fuga dolore perspiciatis. Cum!
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>

        <section className="recomended-courses">
          <div className="wrapper padding">
            <h4>Recommended if you're interested in Data Analysis</h4>
          </div>
        </section>

      </Layout>
    </>
  );
};

export default PaidVersionCourse;
