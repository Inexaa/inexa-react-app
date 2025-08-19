import React from "react";
import DropImage from "/images/drop-courses.png";
import { Link } from "react-router-dom";
import { FaAnglesRight } from "react-icons/fa6";

const DropDownList = () => {
  return (
    <>
      <div className="explore-dropdown-list drop-down-gradient text-white px-6 py-10 rounded-[50px] max-w-[1000px] min-h-[600px] border overflow-y-auto shadow-md">
        <div className="dropdown-title flex  gap-4 justify-between">
          <div className=" w-[90%]">
            <p className="font-bold">Take a Course</p>
            <p>
              Exceptional course quality designed by the world’s leading universities.
            </p>
          </div>
          <div className="size-5 text-center  items-center justify-center w-[10%]">
            <span className=" p-0  text-4xl text-[#565656] inline-block cursor-pointer hover:text-primaryColor">
              &times;
            </span>
          </div>
        </div>
        <div className="courses-list flex flex-wrap items-center gap-x-0 xs:gap-x-8 gap-y-6">
          <div className="course-widget w-full xs:w-max">
            <h3 className=" text-center xs:text-start capitalize font-semibold text-2xl  py-3  px-1 border-b-[1px] border-borderColor3">
              popular courses
            </h3>
            <ul className="flex flex-col gap-5">
              <li>
                <a
                  className="flex flex-col justify-center xs:flex-row gap-1 gap-y-2 text-center xs:text-start items-center border border-transparent p-2 duration-300 rounded-[4px] hover:border-slate-200 hover:bg-slate-50"
                  href="#"
                >
                  <div className="bg-white size-[50px] border border-slate-200 rounded-[4px] flex items-center justify-center">
                    <img
                      className="rounded-[4px] w-[44px]"
                      src={DropImage}
                      alt="image"
                    />
                  </div>
                  <div>
                    <p className="text-[12px] font-normal pb-[8px] leading-none">
                      The Georgia Institute of Technology
                    </p>
                    <p className="text-[14px] font-semibold leading-none">
                      Introduction to Analytics{" "}
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="flex flex-col justify-center xs:flex-row gap-1 gap-y-2 text-center xs:text-start items-center border border-transparent p-2 duration-300 rounded-[4px] hover:border-slate-200 hover:bg-slate-50"
                  href="#"
                >
                  <div className="bg-white size-[50px] border border-slate-200 rounded-[4px] flex items-center justify-center">
                    <img
                      className="rounded-[4px] w-[44px]"
                      src={DropImage}
                      alt="image"
                    />
                  </div>
                  <div>
                    <p className="text-[12px] font-normal pb-[8px] leading-none">
                      The Georgia Institute of Technology
                    </p>
                    <p className="text-[14px] font-semibold leading-none">
                      Introduction to Analytics{" "}
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="flex flex-col justify-center xs:flex-row gap-1 gap-y-2 text-center xs:text-start items-center border border-transparent p-2 duration-300 rounded-[4px] hover:border-slate-200 hover:bg-slate-50"
                  href="#"
                >
                  <div className="bg-white size-[50px] border border-slate-200 rounded-[4px] flex items-center justify-center">
                    <img
                      className="rounded-[4px] w-[44px]"
                      src={DropImage}
                      alt="image"
                    />
                  </div>
                  <div>
                    <p className="text-[12px] font-normal pb-[8px] leading-none">
                      The Georgia Institute of Technology
                    </p>
                    <p className="text-[14px] font-semibold leading-none">
                      Introduction to Analytics{" "}
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="flex flex-col justify-center xs:flex-row gap-1 gap-y-2 text-center xs:text-start items-center border border-transparent p-2 duration-300 rounded-[4px] hover:border-slate-200 hover:bg-slate-50"
                  href="#"
                >
                  <div className="bg-white size-[50px] border border-slate-200 rounded-[4px] flex items-center justify-center">
                    <img
                      className="rounded-[4px] w-[44px]"
                      src={DropImage}
                      alt="image"
                    />
                  </div>
                  <div>
                    <p className="text-[12px] font-normal pb-[8px] leading-none">
                      The Georgia Institute of Technology
                    </p>
                    <p className="text-[14px] font-semibold leading-none">
                      Introduction to Analytics{" "}
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="flex flex-col justify-center xs:flex-row gap-1 gap-y-2 text-center xs:text-start items-center border border-transparent p-2 duration-300 rounded-[4px] hover:border-slate-200 hover:bg-slate-50"
                  href="#"
                >
                  <div className="bg-white size-[50px] border border-slate-200 rounded-[4px] flex items-center justify-center">
                    <img
                      className="rounded-[4px] w-[44px]"
                      src={DropImage}
                      alt="image"
                    />
                  </div>
                  <div>
                    <p className="text-[12px] font-normal pb-[8px] leading-none">
                      The Georgia Institute of Technology
                    </p>
                    <p className="text-[14px] font-semibold leading-none">
                      Introduction to Analytics{" "}
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="flex flex-col justify-center xs:flex-row gap-1 gap-y-2 text-center xs:text-start items-center border border-transparent p-2 duration-300 rounded-[4px] hover:border-slate-200 hover:bg-slate-50"
                  href="#"
                >
                  <div className="bg-white size-[50px] border border-slate-200 rounded-[4px] flex items-center justify-center">
                    <img
                      className="rounded-[4px] w-[44px]"
                      src={DropImage}
                      alt="image"
                    />
                  </div>
                  <div>
                    <p className="text-[12px] font-normal pb-[8px] leading-none">
                      The Georgia Institute of Technology
                    </p>
                    <p className="text-[14px] font-semibold leading-none">
                      Introduction to Analytics{" "}
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="course-widget w-full xs:w-max">
            <h3 className=" text-center xs:text-start capitalize font-semibold text-2xl  py-3  px-1 border-b-[1px] border-borderColor3">
              Specialized courses
            </h3>
            <ul className="flex flex-col gap-5">
              <li>
                <a
                  className="flex flex-col justify-center xs:flex-row gap-1 gap-y-2 text-center xs:text-start items-center border border-transparent p-2 duration-300 rounded-[4px] hover:border-slate-200 hover:bg-slate-50"
                  href="#"
                >
                  <div className="bg-white size-[50px] border border-slate-200 rounded-[4px] flex items-center justify-center">
                    <img
                      className="rounded-[4px] w-[44px]"
                      src={DropImage}
                      alt="image"
                    />
                  </div>
                  <div>
                    <p className="text-[12px] font-normal pb-[8px] leading-none">
                      The Georgia Institute of Technology
                    </p>
                    <p className="text-[14px] font-semibold leading-none">
                      Introduction to Analytics{" "}
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="flex flex-col justify-center xs:flex-row gap-1 gap-y-2 text-center xs:text-start items-center border border-transparent p-2 duration-300 rounded-[4px] hover:border-slate-200 hover:bg-slate-50"
                  href="#"
                >
                  <div className="bg-white size-[50px] border border-slate-200 rounded-[4px] flex items-center justify-center">
                    <img
                      className="rounded-[4px] w-[44px]"
                      src={DropImage}
                      alt="image"
                    />
                  </div>
                  <div>
                    <p className="text-[12px] font-normal pb-[8px] leading-none">
                      The Georgia Institute of Technology
                    </p>
                    <p className="text-[14px] font-semibold leading-none">
                      Introduction to Analytics{" "}
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="flex flex-col justify-center xs:flex-row gap-1 gap-y-2 text-center xs:text-start items-center border border-transparent p-2 duration-300 rounded-[4px] hover:border-slate-200 hover:bg-slate-50"
                  href="#"
                >
                  <div className="bg-white size-[50px] border border-slate-200 rounded-[4px] flex items-center justify-center">
                    <img
                      className="rounded-[4px] w-[44px]"
                      src={DropImage}
                      alt="image"
                    />
                  </div>
                  <div>
                    <p className="text-[12px] font-normal pb-[8px] leading-none">
                      The Georgia Institute of Technology
                    </p>
                    <p className="text-[14px] font-semibold leading-none">
                      Introduction to Analytics{" "}
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="flex flex-col justify-center xs:flex-row gap-1 gap-y-2 text-center xs:text-start items-center border border-transparent p-2 duration-300 rounded-[4px] hover:border-slate-200 hover:bg-slate-50"
                  href="#"
                >
                  <div className="bg-white size-[50px] border border-slate-200 rounded-[4px] flex items-center justify-center">
                    <img
                      className="rounded-[4px] w-[44px]"
                      src={DropImage}
                      alt="image"
                    />
                  </div>
                  <div>
                    <p className="text-[12px] font-normal pb-[8px] leading-none">
                      The Georgia Institute of Technology
                    </p>
                    <p className="text-[14px] font-semibold leading-none">
                      Introduction to Analytics{" "}
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="flex flex-col justify-center xs:flex-row gap-1 gap-y-2 text-center xs:text-start items-center border border-transparent p-2 duration-300 rounded-[4px] hover:border-slate-200 hover:bg-slate-50"
                  href="#"
                >
                  <div className="bg-white size-[50px] border border-slate-200 rounded-[4px] flex items-center justify-center">
                    <img
                      className="rounded-[4px] w-[44px]"
                      src={DropImage}
                      alt="image"
                    />
                  </div>
                  <div>
                    <p className="text-[12px] font-normal pb-[8px] leading-none">
                      The Georgia Institute of Technology
                    </p>
                    <p className="text-[14px] font-semibold leading-none">
                      Introduction to Analytics{" "}
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="flex flex-col justify-center xs:flex-row gap-1 gap-y-2 text-center xs:text-start items-center border border-transparent p-2 duration-300 rounded-[4px] hover:border-slate-200 hover:bg-slate-50"
                  href="#"
                >
                  <div className="bg-white size-[50px] border border-slate-200 rounded-[4px] flex items-center justify-center">
                    <img
                      className="rounded-[4px] w-[44px]"
                      src={DropImage}
                      alt="image"
                    />
                  </div>
                  <div>
                    <p className="text-[12px] font-normal pb-[8px] leading-none">
                      The Georgia Institute of Technology
                    </p>
                    <p className="text-[14px] font-semibold leading-none">
                      Introduction to Analytics{" "}
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="course-widget w-full xs:w-max">
            <h3 className=" text-center xs:text-start capitalize font-semibold text-2xl  py-3  px-1 border-b-[1px] border-borderColor3">
              Top educators
            </h3>
            <ul className="flex flex-col gap-5">
              <li>
                <a
                  className="flex flex-col justify-center xs:flex-row gap-1 gap-y-2 text-center xs:text-start items-center border border-transparent p-2 duration-300 rounded-[4px] hover:border-slate-200 hover:bg-slate-50"
                  href="#"
                >
                  <div className="bg-white size-[50px] border border-slate-200 rounded-[4px] flex items-center justify-center">
                    <img
                      className="rounded-[4px] w-[44px]"
                      src={DropImage}
                      alt="image"
                    />
                  </div>
                  <div>
                    <p className="text-[12px] font-normal pb-[8px] leading-none">
                      The Georgia Institute of Technology
                    </p>
                    <p className="text-[14px] font-semibold leading-none">
                      Introduction to Analytics{" "}
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="flex flex-col justify-center xs:flex-row gap-1 gap-y-2 text-center xs:text-start items-center border border-transparent p-2 duration-300 rounded-[4px] hover:border-slate-200 hover:bg-slate-50"
                  href="#"
                >
                  <div className="bg-white size-[50px] border border-slate-200 rounded-[4px] flex items-center justify-center">
                    <img
                      className="rounded-[4px] w-[44px]"
                      src={DropImage}
                      alt="image"
                    />
                  </div>
                  <div>
                    <p className="text-[12px] font-normal pb-[8px] leading-none">
                      The Georgia Institute of Technology
                    </p>
                    <p className="text-[14px] font-semibold leading-none">
                      Introduction to Analytics{" "}
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="flex flex-col justify-center xs:flex-row gap-1 gap-y-2 text-center xs:text-start items-center border border-transparent p-2 duration-300 rounded-[4px] hover:border-slate-200 hover:bg-slate-50"
                  href="#"
                >
                  <div className="bg-white size-[50px] border border-slate-200 rounded-[4px] flex items-center justify-center">
                    <img
                      className="rounded-[4px] w-[44px]"
                      src={DropImage}
                      alt="image"
                    />
                  </div>
                  <div>
                    <p className="text-[12px] font-normal pb-[8px] leading-none">
                      The Georgia Institute of Technology
                    </p>
                    <p className="text-[14px] font-semibold leading-none">
                      Introduction to Analytics{" "}
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="flex flex-col justify-center xs:flex-row gap-1 gap-y-2 text-center xs:text-start items-center border border-transparent p-2 duration-300 rounded-[4px] hover:border-slate-200 hover:bg-slate-50"
                  href="#"
                >
                  <div className="bg-white size-[50px] border border-slate-200 rounded-[4px] flex items-center justify-center">
                    <img
                      className="rounded-[4px] w-[44px]"
                      src={DropImage}
                      alt="image"
                    />
                  </div>
                  <div>
                    <p className="text-[12px] font-normal pb-[8px] leading-none">
                      The Georgia Institute of Technology
                    </p>
                    <p className="text-[14px] font-semibold leading-none">
                      Introduction to Analytics{" "}
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="flex flex-col justify-center xs:flex-row gap-1 gap-y-2 text-center xs:text-start items-center border border-transparent p-2 duration-300 rounded-[4px] hover:border-slate-200 hover:bg-slate-50"
                  href="#"
                >
                  <div className="bg-white size-[50px] border border-slate-200 rounded-[4px] flex items-center justify-center">
                    <img
                      className="rounded-[4px] w-[44px]"
                      src={DropImage}
                      alt="image"
                    />
                  </div>
                  <div>
                    <p className="text-[12px] font-normal pb-[8px] leading-none">
                      The Georgia Institute of Technology
                    </p>
                    <p className="text-[14px] font-semibold leading-none">
                      Introduction to Analytics{" "}
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="flex flex-col justify-center xs:flex-row gap-1 gap-y-2 text-center xs:text-start items-center border border-transparent p-2 duration-300 rounded-[4px] hover:border-slate-200 hover:bg-slate-50"
                  href="#"
                >
                  <div className="bg-white size-[50px] border border-slate-200 rounded-[4px] flex items-center justify-center">
                    <img
                      className="rounded-[4px] w-[44px]"
                      src={DropImage}
                      alt="image"
                    />
                  </div>
                  <div>
                    <p className="text-[12px] font-normal pb-[8px] leading-none">
                      The Georgia Institute of Technology
                    </p>
                    <p className="text-[14px] font-semibold leading-none">
                      Introduction to Analytics{" "}
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="button mt-10 text-center xs:text-start">
          <Link
            className="btn-blue"
            to="https://www.google.com"
            target="_blank"
          >
            view all courses
          </Link>
        </div>
      </div>

    </>
  );
};

export default DropDownList;
