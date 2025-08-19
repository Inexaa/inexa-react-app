import React from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

const index = () => {

  const recentViews = [
    {
      id: 1,
      link: "/",
      icon: <FaRegFileLines />,
      title: "Harvard: CS50's Introduction to Computer Science",
      category: "ibm",
    },
    {
      id: 2,
      link: "/about",
      icon: <FaRegFileLines />,
      title: "Harvard: CS50's Introduction to Computer Science 2",
      category: "data science",
    },
    {
      id: 3,
      link: "/tutor-profile",
      icon: <FaRegFileLines />,
      title: "Harvard: CS50's Introduction to Computer Science 3",
      category: "computer science",
    },
  ];
  const populars = [
    {
      id: 1,
      link: "/",
      icon: <IoSearch />,
      title: "Machine learning",
    },
    {
      id: 2,
      link: "/course-detail",
      icon: <IoSearch />,
      title: "Computer science",
    },
    {
      id: 3,
      link: "/certificate-detail",
      icon: <IoSearch />,
      title: "Data science",
    },
    
  ];

  return (
    <>
      <div className="input-search-box ">
        <div className="input-search-box-content bg-white shadow-xl py-6 rounded-3xl h-[78vh] lg:h-[80vh] overflow-y-scroll">
          <div className="recent-viewed">
            <h4 className="mb-4 px-4">Recently viewed</h4>
            <ul>
              {recentViews.map((recent, index) => {
                return (
                  <li key={recent.id} className="recent-view-tab">
                    <Link
                      to={recent.link}
                      className="flex gap-3 hover:bg-borderColor2 duration-300 px-4 py-1"
                    >
                      <div className="size-6 text-primaryColor mt-2">
                        {recent.icon}
                      </div>
                      <h5 className="text-[16px] font-normal leading-6 mb-0">
                        {recent.title}{" "}
                        <p className="text-xs uppercase text-gray-400">
                          {recent.category}
                        </p>
                      </h5>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="popular">
              <h4 className="my-4 px-4">Popular now</h4>
              <ul>
              {populars.map((popular, index) => {
                return (
                  <li key={popular.id} className="recent-view-tab">
                    <Link
                      to={popular.link}
                      className="flex gap-3 items-center hover:bg-borderColor2 duration-300 px-4 py-1"
                    >
                      <div className="size-6 text-primaryColor flex items-center justify-center">
                        {popular.icon}
                      </div>
                      <h5 className="text-[16px] font-normal leading-6 mb-0">
                        {popular.title}
                      </h5>
                    </Link>
                  </li>
                );
              })}
            </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
