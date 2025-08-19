import { useState, useRef, useEffect } from "react";
import OnlineCourses from "../OnlineCourses";
import "./style.css";

const Filteraside = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("most popular");
  const dropdownRef = useRef(null);
  
  const [expanded, setExpanded] = useState({});
  const [selectedFilters, setSelectedFilters] = useState({});
  const [searchTerms, setSearchTerms] = useState({ Skills: "", Educator: "" });

  const options = [
    { value: 'most-popular', label: 'most popular' },
    { value: 'highly-rated', label: 'highly rated' },
    { value: 'free-courses', label: 'free courses' },
    { value: 'trending', label: 'trending' }
  ];

    // Close dropdown on outside click
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

  const filters = [
    { title: "Subject", options: ["Business & Management", "Computer Science", "Data Analysis & Statistics", "Engineering", "Electronics"] },
    { title: "Skills", options: ["Accounting", "Agile Methodology", "Agriculture", "Algorithms", "Amazon Web Services"] },
    { title: "Educator", options: ["Amazon Web Services", "Arizona State University", "Arm Education", "Babson College"] },
    { title: "Learning Product", options: ["Courses", "Professional Certificates", "Executive Education", "XSeries", "Doctorate Degrees"] },
    { title: "Level", options: ["Introductory", "Intermediate", "Executive Education", "XSeries", "Doctorate Degrees"] },
    { title: "Duration", options: ["Less Than 2 Hours", "1-4 weeks", "1-3 Months", "3-6 Months", "6-12 Months", "1-4 Years"] },
    { title: "Languages", options: ["Arabic", "English"] },
    { title: "Availability", options: ["Archived", "Available now"] }
  ];

  const toggleExpand = (title) => {
    setExpanded((prev) => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const handleFilterChange = (category, option) => {
    setSelectedFilters((prev) => {
      const categoryFilters = prev[category] || [];
      const updatedFilters = categoryFilters.includes(option)
        ? categoryFilters.filter((item) => item !== option)
        : [...categoryFilters, option];

      return { ...prev, [category]: updatedFilters };
    });
  };

  const handleSearch = (category, value) => {
    setSearchTerms((prev) => ({ ...prev, [category]: value }));
  };

  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap gap-5 lg:gap-x-2 lg:gap-y-8">
        {/* Left Content Section */}
        <div className="filters-container w-full md:w-[30%] xl:w-[25%] ps-4 2xl:ps-0 pe-5 bg-white rounded-lg">
          <h4 className="font-medium text-lg">Refine your search</h4>

          {filters.map((filter) => (
            <div key={filter.title} className="mb-5">
              <h4 className="font-medium text-[22px] mt-6 mb-5 ">
                {filter.title}
              </h4>

              {/* Search Input for Skills & Educator */}
              {filter.title === "Skills" || filter.title === "Educator" ? (
                <div className="relative mb-1">
                  <input
                    type="text"
                    placeholder={`Search ${filter.title} 123`}
                    value={searchTerms[filter.title]}
                    onChange={(e) => handleSearch(filter.title, e.target.value)}
                    className="w-full border border-textColor2 p-2 mb-2 rounded-[11px] focus:outline-none pl-10 font-Poppins font-medium max-w-[260px]"
                  />
                  <img src="/images/search_skill.svg" alt="serch" className="absolute top-3 left-2" />
                </div>
              ) : null}

              <ul className="lg:ms-1">
                {filter.options
                  .filter((option) =>
                    option
                      .toLowerCase()
                      .includes(searchTerms[filter.title]?.toLowerCase() || "")
                  )
                  .slice(0, expanded[filter.title] ? filter.options.length : 3)
                  .map((option) => (
                    <li key={option} className="mb-1 text-headingColor font-medium xl:text-lg">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-blue-500 rounded-[0px] custom-checkbox"
                        checked={
                          selectedFilters[filter.title]?.includes(option) ||
                          false
                        }
                        onChange={() =>
                          handleFilterChange(filter.title, option)
                        }
                      />
                      <label className="inline-flex items-center custom-label">
                        <img
                          src="/images/filter_blk_A.svg"
                          className="absolute left-[-15px] top-[6px]"
                        ></img>
                        <span className="ml-2">{option}</span>
                      </label>
                    </li>
                  ))}
              </ul>

              <button
                onClick={() => toggleExpand(filter.title)}
                className="font-normal text-lg border-b-[1px] border-blackColor2 mt-3 focus:outline-none text-headingColor "
              >
                {expanded[filter.title] ? "Show less" : "Show more"}
              </button>
            </div>
          ))}
        </div>

        {/* Right Content Section */}
        <div className="fliter_content w-full md:w-[70%] xl:w-[75%] ">
          <div className="flex justify-between px-4 2xl:px-0">
            <h2 className="text-lg lg:text-[30px] font-semibold">
              Results for “Courses”
            </h2>

            {/* Dropdown for Sorting */}
            {/* <div className="relative dropdowncos">
              <div
                className="hidden md:flex items-center gap-2 cursor-pointer border px-4 py-2 rounded-[11px]"
                onClick={() => setIsOpen(!isOpen)}
                onBlur={() => setIsOpen(false)}
                role="button"
                tabIndex="0"
              >
                <span className="text-[#666666] font-medium pr-10">Most Popular</span>
                <span className="w-4 h-4 text-gray-500 content-center">
                  <img src="/images/drop-down-arrow.png" alt="Dropdown Arrow" />
                </span>
              </div>

              {isOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => setIsOpen(false)}>
                    <span className="text-gray-800">Highly Rated</span>
                  </li>
                </ul>
              )}
            </div> */}
            {/* <div className="sorting-bar relative">
              <select name="sorting" id="sorting" className="sort-bar border px-4 h-10 appearance-none w-[202px] capitalize rounded-[11px] border-textColor2 focus:outline-none " >
                <img src="/images/drop-down-arrow.png" alt="Dropdown Arrow" />
                <option className="" value="most-poular">most popular</option>
                <option value="highly-rated">highly rated</option>
                <option value="free-courses">free courses</option>
                <option value="trending">trending</option>
              </select>
              <img
                className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                src="/images/drop-down-arrow.png"
                alt="Dropdown Arrow"
              />
            </div> */}

            <div ref={dropdownRef} className="relative w-[202px]">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="border border-textColor2 px-4 h-10 rounded-[11px] cursor-pointer capitalize flex items-center justify-between text-textColor2 
                font-Poppins font-medium text-sm"
              >
                {selected}
                {/* <img src="/images/drop-down-arrow.png" alt="Dropdown Arrow" /> */}
                <img className="rotate-90 brightness-[3]" src="/images/arrow_right.svg" alt="Dropdown Arrow" />
              </div>

              {isOpen && (
                <ul className="absolute top-full left-0 right-0 border mt-1 rounded-[11px] bg-white z-10">
                  {options.map((option) => (
                    <li
                      key={option.value}
                      onClick={() => {
                        setSelected(option.label);
                        setIsOpen(false);
                      }}
                      className="px-4 py-1 hover:bg-blackColor2 hover:text-whiteColor cursor-pointer capitalize"
                    >
                      {option.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <OnlineCourses />
        </div>
      </div>
    </>
  );
};

export default Filteraside;
