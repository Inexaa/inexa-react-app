import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Layout from "../../Components/Layout";
import { AnimatePresence, motion } from "framer-motion";
import "./courses.css";
import AllCourses, { getCourseTypeStyles } from "./AllCourses";
import { capitalizeFirst } from "../../utils";
import axiosInstance from "../../api/axiosInstance";
import Container from "../../Components/Container";
import { Link } from "react-router-dom";


export function convertWeeksToMonths(weeks) {
  if (typeof weeks !== "number" || weeks < 0) {
    return "--";
  }

  if (weeks < 4) {
    return `${weeks} week${weeks !== 1 ? 's' : ''}`;
  }

  const WEEKS_IN_MONTH = 4.345; // 1 month ≈ 4.345 weeks
  const months = Math.floor(weeks / WEEKS_IN_MONTH);
  const remainingWeeks = Math.round(weeks % WEEKS_IN_MONTH);

  let result = "";

  if (months > 0) {
    result += `${months} month${months > 1 ? "s" : ""}`;
  }

  if (remainingWeeks > 0) {
    if (result) result += " ";
    result += `${remainingWeeks} week${remainingWeeks > 1 ? "s" : ""}`;
  }

  return result;
}


const Courses2 = () => {
  useLayoutEffect(() => {
    // First attempt (immediate)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Second attempt after a short delay (for async content)
    const timer1 = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 300);

    // Final fallback (in case smooth isn't supported)
    const timer2 = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Most Popular");
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSubjectsOpen, setIsSubjectsOpen] = useState(false);

  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [searchSkillTerm, setSearchSkillTerm] = useState("");

  const [isEducatorsOpen, setIsEducatorsOpen] = useState(false);
  const [showAllEducators, setShowAllEducators] = useState(false);
  const [searchEducatorTerm, setSearchEducatorTerm] = useState("");

  const [isLearningProductsOpen, setIsLearningProductsOpen] = useState(false);
  const [showAllLearningProducts, setShowAllLearningProducts] = useState(false);

  const [isLevelsOpen, setIsLevelsOpen] = useState(false);

  const [isDurationsOpen, setIsDurationsOpen] = useState(false);

  const [isLanguagesOpen, setIsLanguagesOpen] = useState(false);
  const [showAllLanguages, setShowAllLanguages] = useState(false);
  const [searchLanguageTerm, setSearchLanguageTerm] = useState("");

  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);

  const [selectedFilters, setSelectedFilters] = useState({
    subjects: [],
    skills: [],
    educators: [],
    learningProducts: [],
    levels: [],
    durations: [],
    languages: [],
    availabilities: [],
  });
  console.log('selectedFilters :>> ', selectedFilters);
  const options = ["Most Popular", "Highly Rated"];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // For Mobile Funct
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsSubjectsOpen(!isMobile);
    setIsSkillsOpen(!isMobile);
    setIsEducatorsOpen(!isMobile);
    setIsLearningProductsOpen(!isMobile);
    setIsLevelsOpen(!isMobile);
    setIsDurationsOpen(!isMobile);
    setIsLanguagesOpen(!isMobile);
    setIsAvailabilityOpen(!isMobile);
  }, [isMobile]);

  // End For Mobile Funct
  useEffect(() => {
    // Define the function to handle window resizing
    const handleResize = () => {
      console.log('window.innerWidth :>> ', window.innerWidth);
      setIsMobile(window.innerWidth < 1024);
    };
    if (window.innerWidth !== undefined) {
      setIsMobile(window.innerWidth < 1024);
    }
    // Attach event listener to window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [areFiltersOpen, setAreFiltersOpen] = useState(!isMobile ? true : false);
  const [subjects, setSubjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [educators, setEducators] = useState([]);
  const [learningProducts, setLearningProducts] = useState([]);
  const [levels, setLevels] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [availabilities, setAvailabilities] = useState([]);
  const [filtersLoading, setFiltersLoading] = useState(true);
  const [filtersError, setFiltersError] = useState(null);
  console.log('areFiltersOpen :>> ', areFiltersOpen);
  const allDurations = [
    "1-4 weeks",
    "1-3 Months",
    "3-6 Months",
    "6-12 Months",
    "1-4 Years",
  ];

  const getFilterNames = (filterIds, filterList, field = '') => {
    return filterIds.map(id => {
      const filterItem = filterList.find(item =>
        field ? item[field] === id : item === id
      );
      return filterItem ? filterItem : null;  // Return the whole object or null if not found
    }).filter(item => item !== null);
  };

  useEffect(() => {
    setAreFiltersOpen(!isMobile);
  }, [isMobile]);
  console.log('window isMobile :>> ', isMobile, areFiltersOpen);
  const getSelectedFilterNames = () => {
    return {
      subjects: getFilterNames(selectedFilters.subjects, subjects, 'id'),
      skills: getFilterNames(selectedFilters.skills, skills),
      educators: getFilterNames(selectedFilters.educators, educators, 'value'),
      learningProducts: getFilterNames(selectedFilters.learningProducts, learningProducts, 'id'),
      levels: getFilterNames(selectedFilters.levels, levels),
      languages: getFilterNames(selectedFilters.languages, languages),
      availabilities: getFilterNames(selectedFilters.availabilities, availabilities),
      durations: getFilterNames(selectedFilters.durations, allDurations),
    };
  };
  const selectedFilterNames = getSelectedFilterNames();
  console.log('getSelectedFilterNames() :>> ', getSelectedFilterNames(), educators);

  useEffect(() => {
    setFiltersLoading(true);
    setFiltersError(null);
    axiosInstance
      .get("/courses/filters")
      .then((res) => {
        const data = res.data;
        if (data.error) {
          throw new Error(data.message);
        }

        setSubjects(data.subjects || []);
        setSkills(data.skills || []);
        setEducators(
          (data.owners || []).map((owner) => {
            return {
              label: owner.name,
              value: owner.id,
            };
          })
        );
        setLearningProducts(data.program_types || []);
        setLevels(data.course_level || []);
        setLanguages(
          (data.available_languages || []).map((lang) => {
            return lang;
          })
        );
        setAvailabilities(data.availability || []);
        setFiltersLoading(false);
      })
      .catch((err) => {
        console.log("err :>> ", err);
        setFiltersError(err.message);
        setFiltersLoading(false);
      });
  }, []);

  // const filteredSubjects = subjects.filter((subject) =>
  //   subject?.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  const filteredSubjects = subjects;
  const visibleSubjects = filteredSubjects.slice(0, 5);
  const extraSubjects = filteredSubjects.slice(5);

  const filteredSkills = skills.filter((skill) =>
    skill.toLowerCase().includes(searchSkillTerm.toLowerCase())
  );
  const visibleSkills = filteredSkills.slice(0, 7);
  const extraSkills = filteredSkills.slice(7);

  const filteredEducators = educators.filter((educator) =>
    educator.label.toLowerCase().includes(searchEducatorTerm.toLowerCase())
  );
  const visibleEducators = filteredEducators.slice(0, 5);
  const extraEducators = filteredEducators.slice(5);

  const filteredLearningProducts = learningProducts;
  const visibleLearningProducts = filteredLearningProducts.slice(0, 5);
  const extraLearningProducts = filteredLearningProducts.slice(5);

  const filteredLanguages = languages;
  const visibleLanguages = filteredLanguages.slice(0, 5);
  const extraLanguages = filteredLanguages.slice(5);

  // Generic handler for filter changes
  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prev) => {
      const values = prev[filterType];
      return {
        ...prev,
        [filterType]: values.includes(value)
          ? values.filter((v) => v !== value)
          : [...values, value],
      };
    });
  };

  const resetFilters = () => {
    setSelectedFilters({
      subjects: [],
      skills: [],
      educators: [],
      learningProducts: [],
      levels: [],
      languages: [],
      availabilities: [],
      durations: [],
    });
    setAreFiltersOpen(false);
  };

  return (
    <Layout>
      <Container>
        <div className="lg:px-[38px] pt-[85px] md:pt-[114px] lg:pt-[163px] grid gap-9 md:gap-[55px] lg:gap-10 pb-10 md:pb-[59px] lg:pb-[265px]">
          {/* Fiter code started */}
          {
            isMobile && areFiltersOpen &&
            <div className="mobile-filter">
              <AnimatePresence initial={false}>
                {areFiltersOpen && (
                  <motion.div
                    initial={
                      isMobile
                        ? {
                          height: 0,
                          opacity: 0,
                          position: "fixed",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          zIndex: 50,
                          backgroundColor: "white",
                        }
                        : false
                    }
                    animate={
                      isMobile
                        ? {
                          height: areFiltersOpen ? "100vh" : 0,
                          opacity: areFiltersOpen ? 1 : 0,
                          position: "fixed",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          zIndex: 50,
                          backgroundColor: "white",
                        }
                        : { height: "auto", opacity: 1 }
                    }
                    exit={isMobile ? { height: 0, opacity: 0 } : false}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`course-filter px-[22px] py-[25px] ${isMobile && areFiltersOpen ? "overflow-y-auto" : ""
                      }`}
                  >
                    <div>
                      {isMobile && areFiltersOpen && (
                        <>
                          <div className="pb-[23px] mb-[23px] border-b-[1px] border-[#E0E0E0] grid gap-4">
                            <h2 className="text-[16px] text-[#282828] font-semibold font-Poppins m-0 leading-[24px] block">
                              Recent Searches
                            </h2>
                            <div className="flex flex-wrap gap-4">
                              {selectedFilterNames.learningProducts?.map((product) => {
                                const style = getCourseTypeStyles(product?.slug);
                                return (
                                  <div
                                    className={`px-3 py-[11px] rounded-full relative h-10 flex items-center justify-center`}
                                    style={{
                                      backgroundColor: style?.bgColor,
                                      color: style?.textColor,
                                    }}
                                  >
                                    <span className="text-[12px] leading-[18px] font-Poppins font-medium">
                                      {product?.name}
                                    </span>
                                    <i
                                      className="bg-[#282828] w-[16px] h-[16px] rounded-full flex items-center justify-center absolute -right-1 -top-1 cursor-pointer"
                                      onClick={() =>
                                        handleFilterChange(
                                          "learningProducts",
                                          product?.id
                                        )
                                      }
                                    >
                                      <svg
                                        width="8"
                                        height="8"
                                        viewBox="0 0 8 8"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M1 1L4 4M4 4L7 7M4 4L7 1M4 4L1 7"
                                          stroke="white"
                                          stroke-width="1.5"
                                          stroke-linecap="round"
                                        />
                                      </svg>
                                    </i>
                                  </div>
                                );
                              })}
                              {selectedFilterNames.subjects?.map((product) => {
                                const style = getCourseTypeStyles(product?.slug);
                                return (
                                  <div
                                    className={`px-3 py-[11px] rounded-full relative h-10 flex items-center justify-center`}
                                    style={{
                                      backgroundColor: style?.bgColor,
                                      color: style?.textColor,
                                    }}
                                  >
                                    <span className="text-[12px] leading-[18px] font-Poppins font-medium">
                                      {capitalizeFirst(product?.title)}
                                    </span>
                                    <i
                                      className="bg-[#282828] w-[16px] h-[16px] rounded-full flex items-center justify-center absolute -right-1 -top-1 cursor-pointer"
                                      onClick={() =>
                                        handleFilterChange(
                                          "subjects",
                                          product?.id
                                        )
                                      }
                                    >
                                      <svg
                                        width="8"
                                        height="8"
                                        viewBox="0 0 8 8"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M1 1L4 4M4 4L7 7M4 4L7 1M4 4L1 7"
                                          stroke="white"
                                          stroke-width="1.5"
                                          stroke-linecap="round"
                                        />
                                      </svg>
                                    </i>
                                  </div>
                                );
                              })}
                              {selectedFilterNames.skills?.map((product) => {
                                const style = getCourseTypeStyles(product);
                                return (
                                  <div
                                    className={`px-3 py-[11px] rounded-full relative h-10 flex items-center justify-center`}
                                    style={{
                                      backgroundColor: style?.bgColor,
                                      color: style?.textColor,
                                    }}
                                  >
                                    <span className="text-[12px] leading-[18px] font-Poppins font-medium">
                                      {capitalizeFirst(product)}
                                    </span>
                                    <i
                                      className="bg-[#282828] w-[16px] h-[16px] rounded-full flex items-center justify-center absolute -right-1 -top-1 cursor-pointer"
                                      onClick={() =>
                                        handleFilterChange(
                                          "skills",
                                          product
                                        )
                                      }
                                    >
                                      <svg
                                        width="8"
                                        height="8"
                                        viewBox="0 0 8 8"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M1 1L4 4M4 4L7 7M4 4L7 1M4 4L1 7"
                                          stroke="white"
                                          stroke-width="1.5"
                                          stroke-linecap="round"
                                        />
                                      </svg>
                                    </i>
                                  </div>
                                );
                              })}
                              {selectedFilterNames.educators?.map((product) => {
                                const style = getCourseTypeStyles(product?.label);
                                return (
                                  <div
                                    className={`px-3 py-[11px] rounded-full relative h-10 flex items-center justify-center`}
                                    style={{
                                      backgroundColor: style?.bgColor,
                                      color: style?.textColor,
                                    }}
                                  >
                                    <span className="text-[12px] leading-[18px] font-Poppins font-medium">
                                      {product?.label}
                                    </span>
                                    <i
                                      className="bg-[#282828] w-[16px] h-[16px] rounded-full flex items-center justify-center absolute -right-1 -top-1 cursor-pointer"
                                      onClick={() =>
                                        handleFilterChange(
                                          "educators",
                                          product?.value
                                        )
                                      }
                                    >
                                      <svg
                                        width="8"
                                        height="8"
                                        viewBox="0 0 8 8"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M1 1L4 4M4 4L7 7M4 4L7 1M4 4L1 7"
                                          stroke="white"
                                          stroke-width="1.5"
                                          stroke-linecap="round"
                                        />
                                      </svg>
                                    </i>
                                  </div>
                                );
                              })}
                              {selectedFilterNames.levels?.map((product) => {
                                const style = getCourseTypeStyles(product);
                                return (
                                  <div
                                    className={`px-3 py-[11px] rounded-full relative h-10 flex items-center justify-center`}
                                    style={{
                                      backgroundColor: style?.bgColor,
                                      color: style?.textColor,
                                    }}
                                  >
                                    <span className="text-[12px] leading-[18px] font-Poppins font-medium">
                                      {capitalizeFirst(product)}
                                    </span>
                                    <i
                                      className="bg-[#282828] w-[16px] h-[16px] rounded-full flex items-center justify-center absolute -right-1 -top-1 cursor-pointer"
                                      onClick={() =>
                                        handleFilterChange(
                                          "levels",
                                          product
                                        )
                                      }
                                    >
                                      <svg
                                        width="8"
                                        height="8"
                                        viewBox="0 0 8 8"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M1 1L4 4M4 4L7 7M4 4L7 1M4 4L1 7"
                                          stroke="white"
                                          stroke-width="1.5"
                                          stroke-linecap="round"
                                        />
                                      </svg>
                                    </i>
                                  </div>
                                );
                              })}
                              {selectedFilterNames.languages?.map((product) => {
                                const style = getCourseTypeStyles(product);
                                return (
                                  <div
                                    className={`px-3 py-[11px] rounded-full relative h-10 flex items-center justify-center`}
                                    style={{
                                      backgroundColor: style?.bgColor,
                                      color: style?.textColor,
                                    }}
                                  >
                                    <span className="text-[12px] leading-[18px] font-Poppins font-medium">
                                      {capitalizeFirst(product)}
                                    </span>
                                    <i
                                      className="bg-[#282828] w-[16px] h-[16px] rounded-full flex items-center justify-center absolute -right-1 -top-1 cursor-pointer"
                                      onClick={() =>
                                        handleFilterChange(
                                          "languages",
                                          product
                                        )
                                      }
                                    >
                                      <svg
                                        width="8"
                                        height="8"
                                        viewBox="0 0 8 8"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M1 1L4 4M4 4L7 7M4 4L7 1M4 4L1 7"
                                          stroke="white"
                                          stroke-width="1.5"
                                          stroke-linecap="round"
                                        />
                                      </svg>
                                    </i>
                                  </div>
                                );
                              })}
                              {selectedFilterNames.availabilities?.map((product) => {
                                const style = getCourseTypeStyles(product);
                                return (
                                  <div
                                    className={`px-3 py-[11px] rounded-full relative h-10 flex items-center justify-center`}
                                    style={{
                                      backgroundColor: style?.bgColor,
                                      color: style?.textColor,
                                    }}
                                  >
                                    <span className="text-[12px] leading-[18px] font-Poppins font-medium">
                                      {capitalizeFirst(product)}
                                    </span>
                                    <i
                                      className="bg-[#282828] w-[16px] h-[16px] rounded-full flex items-center justify-center absolute -right-1 -top-1 cursor-pointer"
                                      onClick={() =>
                                        handleFilterChange(
                                          "availabilities",
                                          product
                                        )
                                      }
                                    >
                                      <svg
                                        width="8"
                                        height="8"
                                        viewBox="0 0 8 8"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M1 1L4 4M4 4L7 7M4 4L7 1M4 4L1 7"
                                          stroke="white"
                                          stroke-width="1.5"
                                          stroke-linecap="round"
                                        />
                                      </svg>
                                    </i>
                                  </div>
                                );
                              })}
                              {selectedFilterNames.durations?.map((product) => {
                                const style = getCourseTypeStyles(product);
                                return (
                                  <div
                                    className={`px-3 py-[11px] rounded-full relative h-10 flex items-center justify-center`}
                                    style={{
                                      backgroundColor: style?.bgColor,
                                      color: style?.textColor,
                                    }}
                                  >
                                    <span className="text-[12px] leading-[18px] font-Poppins font-medium">
                                      {capitalizeFirst(product)}
                                    </span>
                                    <i
                                      className="bg-[#282828] w-[16px] h-[16px] rounded-full flex items-center justify-center absolute -right-1 -top-1 cursor-pointer"
                                      onClick={() =>
                                        handleFilterChange(
                                          "durations",
                                          product
                                        )
                                      }
                                    >
                                      <svg
                                        width="8"
                                        height="8"
                                        viewBox="0 0 8 8"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M1 1L4 4M4 4L7 7M4 4L7 1M4 4L1 7"
                                          stroke="white"
                                          stroke-width="1.5"
                                          stroke-linecap="round"
                                        />
                                      </svg>
                                    </i>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                          <div className="flex items-center justify-between gap-1">
                            <h2 className="text-[16px] font-Poppins  font-semibold leading-[21px] text-[#282828] m-0">
                              Filter by
                            </h2>
                          </div>
                        </>
                      )}
                      <div className="grid pt-[23px]">
                        <div
                          className="md:pb-[23px] md:mb-[23px] grid grid-cols-1 md:grid-cols-3 md:gap-[23px] relative md:border-b-[1px] md:border-[#E0E0E0]
                          md:[&>div:before:not(:last-child)]:content-[''] md:[&>div:before:not(:last-child)]:w-[1px] md:[&>div:before:not(:last-child)]:h-full 
                        md:[&>div:before:not(:last-child)]:bg-[#E0E0E0] 
                          md:[&>div:before:not(:last-child)]:absolute md:[&>div:before:not(:last-child)]:top-0 md:[&>div:before:not(:last-child)]:right-[-13px]
                  "
                        >
                          <div className="filter-box relative max-[767px]:border-b-[1px] max-[767px]:border-[#E0E0E0] max-[767px]:pb-[23px] max-[767px]:mb-[23px]">
                            <div
                              // className="filter-head"
                              onClick={() => setIsSubjectsOpen(!isSubjectsOpen)}
                            >
                              <h3
                                className={
                                  isSubjectsOpen
                                    ? "bg-[#3322FF] text-white border-[#3322FF] flex items-center md:bg-[#3322FF] h-[37px] w-full rounded-[10px] p-2 gap-2 m-0"
                                    : "md:border-[1px] md:border-[#282828] flex items-center md:border-0 h-[37px] w-full rounded-[10px] p-2 gap-2 m-0 text-[#282828] md:text-[#282828]"
                                }
                              >
                                <i
                                  className={
                                    isSubjectsOpen
                                      ? "size-[10px] flex items-center justify-center md:rotate-[0deg]"
                                      : "size-[10px] flex items-center justify-center md:rotate-[-90deg]"
                                  }
                                >
                                  <svg
                                    width="10"
                                    height="7"
                                    viewBox="0 0 10 7"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.34375 0.505636C9.21875 0.380636 9.09375 0.380636 8.90625 0.443136L4.71875 3.25564L0.53125 0.443136C0.40625 0.318136 0.21875 0.380636 0.09375 0.505636C-0.03125 0.630636 -0.03125 0.818136 0.09375 0.943136L4.46875 5.94314C4.53125 6.00564 4.59375 6.06814 4.71875 6.06814C4.84375 6.06814 4.90625 6.00564 4.96875 5.94314L9.34375 0.943136C9.40625 0.755636 9.40625 0.630636 9.34375 0.505636Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </i>
                                <span className="text-[14px]  font-medium tracking-[.02em] leading-[21px] font-Poppins">
                                  Subject
                                </span>
                              </h3>
                            </div>

                            <AnimatePresence initial={false}>
                              {isSubjectsOpen && (
                                <motion.div
                                  className="course-filter"
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  {/* Search Bar */}
                                  {/* <div className="filter-search-bar relative">
                                  <input
                                    className="filter-search "
                                    type="search"
                                    placeholder={`Search subjects (${subjects.length})`}
                                    value={searchTerm}
                                    onChange={(e) =>
                                      setSearchTerm(e.target.value)
                                    }
                                  />
                                  <img
                                    
                                    src="/images/filter_search.svg"
                                    alt="icon"
                                  />
                                </div> */}

                                  {/* Main Filtered Subjects */}
                                  <ul
                                    style={{
                                      maxHeight: showAll ? "320px" : "260px",
                                      overflowY: showAll ? "auto" : "hidden",
                                    }}
                                  >
                                    {visibleSubjects
                                      .concat(showAll ? extraSubjects : [])
                                      .map((subject) => {
                                        const id = subject.id;
                                        // const id = subject
                                        //   .toLowerCase()
                                        //   .replace(/[\s&]+/g, "-");
                                        return (
                                          <li key={id}>
                                            <input
                                              className="course-filter-inbox"
                                              type="checkbox"
                                              id={id}
                                              name={id}
                                              checked={selectedFilters.subjects.includes(
                                                subject.id
                                              )}
                                              onChange={() =>
                                                handleFilterChange(
                                                  "subjects",
                                                  subject.id
                                                )
                                              }
                                            />
                                            <label
                                              htmlFor={id}
                                              className="course-filter-label"
                                            >
                                              {subject.title}
                                            </label>
                                          </li>
                                        );
                                      })}
                                  </ul>

                                  {/* Expanded Subjects */}
                                  {/* <AnimatePresence initial={false}>
                                  {showAll && extraSubjects.length > 0 && (
                                    <motion.ul
                                      className="subject-filter-list overflow-hidden"
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      {extraSubjects.map((subject) => {
                                        const id = subject.toLowerCase()
                                          .replace(/[\s&]+/g, "-");
                                        return (
                                          <li
                                            key={id}
                                            className="flex items-center gap-2"
                                          >
                                            <input
                                              className="course-filter-inbox"
                                              type="checkbox"
                                              id={id}
                                              name={id}
                                              checked={selectedFilters.subjects.includes(
                                                subject
                                              )}
                                              onChange={() =>
                                                handleFilterChange(
                                                  "subjects",
                                                  subject
                                                )
                                              }
                                            />
                                            <label
                                              htmlFor={id}
                                              className="course-filter-label"
                                            >
                                              {subject}
                                            </label>
                                          </li>
                                        );
                                      })}
                                    </motion.ul>
                                  )}
                                </AnimatePresence> */}

                                  {/* Show More / Less */}
                                  {filteredSubjects.length > 5 && (
                                    <p
                                      className="show-more "
                                      onClick={() => setShowAll((prev) => !prev)}
                                    >
                                      {showAll ? "Show less" : "Show more"}
                                    </p>
                                  )}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>

                          <div className="filter-box relative max-[767px]:border-b-[1px] max-[767px]:border-[#E0E0E0] max-[767px]:pb-[23px] max-[767px]:mb-[23px]">
                            <div
                              // className="filter-head"
                              onClick={() => setIsSkillsOpen(!isSkillsOpen)}
                            >
                              <h3
                                className={
                                  isSkillsOpen
                                    ? "bg-[#3322FF] text-white border-[#3322FF] flex items-center md:bg-[#3322FF] h-[37px] w-full rounded-[10px] p-2 gap-2 m-0"
                                    : "md:border-[1px] md:border-[#282828] flex items-center md:border-0 h-[37px] w-full rounded-[10px] p-2 gap-2 m-0 text-[#282828] md:text-[#282828]"
                                }
                              >
                                <i
                                  className={
                                    isSkillsOpen
                                      ? "size-[10px] flex items-center justify-center md:rotate-[0deg]"
                                      : "size-[10px] flex items-center justify-center md:rotate-[-90deg]"
                                  }
                                >
                                  <svg
                                    width="10"
                                    height="7"
                                    viewBox="0 0 10 7"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.34375 0.505636C9.21875 0.380636 9.09375 0.380636 8.90625 0.443136L4.71875 3.25564L0.53125 0.443136C0.40625 0.318136 0.21875 0.380636 0.09375 0.505636C-0.03125 0.630636 -0.03125 0.818136 0.09375 0.943136L4.46875 5.94314C4.53125 6.00564 4.59375 6.06814 4.71875 6.06814C4.84375 6.06814 4.90625 6.00564 4.96875 5.94314L9.34375 0.943136C9.40625 0.755636 9.40625 0.630636 9.34375 0.505636Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </i>
                                <span className="text-[14px]  font-medium tracking-[.02em] leading-[21px]">
                                  Skills
                                </span>
                              </h3>
                            </div>

                            <AnimatePresence initial={false}>
                              {isSkillsOpen && (
                                <motion.div
                                  className="course-filter"
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  {/* Search bar */}
                                  <div className="filter-search-bar relative">
                                    <input
                                      className="filter-search"
                                      type="search"
                                      placeholder={`Search Skills (${skills.length})`}
                                      value={searchSkillTerm}
                                      onChange={(e) =>
                                        setSearchSkillTerm(e.target.value)
                                      }
                                    />
                                    <img
                                      src="/images/filter_search.svg"
                                      alt="icon"
                                    />
                                  </div>

                                  {/* Main filtered skills */}
                                  <ul
                                    style={{
                                      maxHeight: showAllSkills
                                        ? "320px"
                                        : "260px",
                                      overflowY: showAllSkills
                                        ? "auto"
                                        : "hidden",
                                    }}
                                  >
                                    {visibleSkills
                                      .concat(showAllSkills ? extraSkills : [])
                                      .map((skill) => {
                                        const id = skill
                                          .toLowerCase()
                                          .replace(/[\s&]+/g, "-");
                                        return (
                                          <li key={id}>
                                            <input
                                              className="course-filter-inbox"
                                              type="checkbox"
                                              id={id}
                                              name={id}
                                              checked={selectedFilters.skills.includes(
                                                skill
                                              )}
                                              onChange={() =>
                                                handleFilterChange(
                                                  "skills",
                                                  skill
                                                )
                                              }
                                            />
                                            <label
                                              htmlFor={id}
                                              className="course-filter-label"
                                            >
                                              {skill}
                                            </label>
                                          </li>
                                        );
                                      })}
                                  </ul>

                                  {/* Show More / Less */}
                                  {filteredSkills.length > 5 && (
                                    <p
                                      className="show-more"
                                      onClick={() =>
                                        setShowAllSkills((prev) => !prev)
                                      }
                                    >
                                      {showAllSkills ? "Show less" : "Show more"}
                                    </p>
                                  )}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>

                          <div className="filter-box relative max-[767px]:border-b-[1px] max-[767px]:border-[#E0E0E0] max-[767px]:pb-[23px] max-[767px]:mb-[23px]">
                            <div
                              // className="filter-head"
                              onClick={() => setIsEducatorsOpen(!isEducatorsOpen)}
                            >
                              <h3
                                className={
                                  isEducatorsOpen
                                    ? "bg-[#3322FF] text-white border-[#3322FF] flex items-center md:bg-[#3322FF] h-[37px] w-full rounded-[10px] p-2 gap-2 m-0"
                                    : "md:border-[1px] md:border-[#282828] flex items-center md:border-0 h-[37px] w-full rounded-[10px] p-2 gap-2 m-0 text-[#282828] md:text-[#282828]"
                                }
                              >
                                <i
                                  className={
                                    isEducatorsOpen
                                      ? "size-[10px] flex items-center justify-center md:rotate-[0deg]"
                                      : "size-[10px] flex items-center justify-center md:rotate-[-90deg]"
                                  }
                                >
                                  <svg
                                    width="10"
                                    height="7"
                                    viewBox="0 0 10 7"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.34375 0.505636C9.21875 0.380636 9.09375 0.380636 8.90625 0.443136L4.71875 3.25564L0.53125 0.443136C0.40625 0.318136 0.21875 0.380636 0.09375 0.505636C-0.03125 0.630636 -0.03125 0.818136 0.09375 0.943136L4.46875 5.94314C4.53125 6.00564 4.59375 6.06814 4.71875 6.06814C4.84375 6.06814 4.90625 6.00564 4.96875 5.94314L9.34375 0.943136C9.40625 0.755636 9.40625 0.630636 9.34375 0.505636Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </i>
                                <span className="text-[14px]  font-medium tracking-[.02em] leading-[21px]">
                                  Educators
                                </span>
                              </h3>
                            </div>

                            <AnimatePresence initial={false}>
                              {isEducatorsOpen && (
                                <motion.div
                                  className="course-filter"
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  {/* Search bar */}
                                  <div className="filter-search-bar relative">
                                    <input
                                      className="filter-search"
                                      type="search"
                                      placeholder={`Search Educator (${educators.length})`}
                                      value={searchEducatorTerm}
                                      onChange={(e) =>
                                        setSearchEducatorTerm(e.target.value)
                                      }
                                    />
                                    <img
                                      src="/images/filter_search.svg"
                                      alt="icon"
                                    />
                                  </div>

                                  {/* Main filtered educators */}
                                  <ul
                                    style={{
                                      maxHeight: showAllEducators
                                        ? "320px"
                                        : "260px",
                                      overflowY: showAllEducators
                                        ? "auto"
                                        : "hidden",
                                    }}
                                  >
                                    {visibleEducators
                                      .concat(
                                        showAllEducators ? extraEducators : []
                                      )
                                      .map((educator) => {
                                        const id = educator.label
                                          .toLowerCase()
                                          .replace(/[\s&]+/g, "-");
                                        return (
                                          <li key={id}>
                                            <input
                                              className="course-filter-inbox"
                                              type="checkbox"
                                              id={id}
                                              name={id}
                                              checked={selectedFilters.educators.includes(
                                                educator.value
                                              )}
                                              onChange={() =>
                                                handleFilterChange(
                                                  "educators",
                                                  educator.value
                                                )
                                              }
                                            />
                                            <label
                                              htmlFor={id}
                                              className="course-filter-label"
                                            >
                                              {educator.label}
                                            </label>
                                          </li>
                                        );
                                      })}
                                  </ul>

                                  {/* Show More / Less */}
                                  {filteredEducators.length > 5 && (
                                    <p
                                      className="show-more"
                                      onClick={() =>
                                        setShowAllEducators((prev) => !prev)
                                      }
                                    >
                                      {showAllEducators
                                        ? "Show less"
                                        : "Show more"}
                                    </p>
                                  )}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                        <div
                          className="md:pb-[23px] md:mb-[23px] grid grid-cols-1 md:grid-cols-3 md:gap-[23px] relative md:border-b-[1px] md:border-[#E0E0E0]
                    md:[&>div:before:not(:last-child)]:content-[''] md:[&>div:before:not(:last-child)]:w-[1px] md:[&>div:before:not(:last-child)]:h-full md:[&>div:before:not(:last-child)]:bg-[#E0E0E0] 
                    md:[&>div:before:not(:last-child)]:absolute md:[&>div:before:not(:last-child)]:top-0 md:[&>div:before:not(:last-child)]:right-[-13px]
                  "
                        >
                          <div className="filter-box relative max-[767px]:border-b-[1px] max-[767px]:border-[#E0E0E0] max-[767px]:pb-[23px] max-[767px]:mb-[23px]">
                            <div
                              // className="filter-head"
                              onClick={() =>
                                setIsLearningProductsOpen(!isLearningProductsOpen)
                              }
                            >
                              <h3
                                className={
                                  isLearningProductsOpen
                                    ? "bg-[#3322FF] text-white border-[#3322FF] flex items-center md:bg-[#3322FF] h-[37px] w-full rounded-[10px] p-2 gap-2 m-0"
                                    : "md:border-[1px] md:border-[#282828] flex items-center md:border-0 h-[37px] w-full rounded-[10px] p-2 gap-2 m-0 text-[#282828] md:text-[#282828]"
                                }
                              >
                                <i
                                  className={
                                    isLearningProductsOpen
                                      ? "size-[10px] flex items-center justify-center md:rotate-[0deg]"
                                      : "size-[10px] flex items-center justify-center md:rotate-[-90deg]"
                                  }
                                >
                                  <svg
                                    width="10"
                                    height="7"
                                    viewBox="0 0 10 7"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.34375 0.505636C9.21875 0.380636 9.09375 0.380636 8.90625 0.443136L4.71875 3.25564L0.53125 0.443136C0.40625 0.318136 0.21875 0.380636 0.09375 0.505636C-0.03125 0.630636 -0.03125 0.818136 0.09375 0.943136L4.46875 5.94314C4.53125 6.00564 4.59375 6.06814 4.71875 6.06814C4.84375 6.06814 4.90625 6.00564 4.96875 5.94314L9.34375 0.943136C9.40625 0.755636 9.40625 0.630636 9.34375 0.505636Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </i>
                                <span className="text-[14px]  font-medium tracking-[.02em] leading-[21px]">
                                  Learning Products
                                </span>
                              </h3>
                            </div>

                            <AnimatePresence initial={false}>
                              {isLearningProductsOpen && (
                                <motion.div
                                  className="course-filter"
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  {/* Search bar */}
                                  {/* <div className="filter-search-bar relative">
                                  <input
                                    className="filter-search  "
                                    type="search"
                                    placeholder="Search learning product..."
                                    value={searchLearningTerm}
                                    onChange={(e) =>
                                      setSearchLearningTerm(e.target.value)
                                    }
                                  />
                                  <img
                                    
                                    src="/images/filter_search.svg"
                                    alt="icon"
                                  />
                                </div> */}

                                  {/* Visible Items */}
                                  <ul>
                                    {visibleLearningProducts
                                      .concat(
                                        showAllLearningProducts
                                          ? extraLearningProducts
                                          : []
                                      )
                                      .map((item) => {
                                        const id = item?.id;
                                        return (
                                          <li
                                            key={"learning_" + id}
                                            className="flex gap-2"
                                          >
                                            <input
                                              className="course-filter-inbox"
                                              type="checkbox"
                                              id={"learning_" + id}
                                              name={"learning_" + id}
                                              checked={selectedFilters.learningProducts.includes(
                                                item?.id
                                              )}
                                              onChange={() =>
                                                handleFilterChange(
                                                  "learningProducts",
                                                  item?.id
                                                )
                                              }
                                            />
                                            <label
                                              htmlFor={"learning_" + id}
                                              className="course-filter-label"
                                            >
                                              {item?.name}
                                            </label>
                                          </li>
                                        );
                                      })}
                                  </ul>

                                  {/* Toggle Show More / Less */}
                                  {filteredLearningProducts.length > 5 && (
                                    <p
                                      className="show-more"
                                      onClick={() =>
                                        setShowAllLearningProducts(
                                          (prev) => !prev
                                        )
                                      }
                                    >
                                      {showAllLearningProducts
                                        ? "Show less"
                                        : "Show more"}
                                    </p>
                                  )}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>

                          <div className="filter-box relative max-[767px]:border-b-[1px] max-[767px]:border-[#E0E0E0] max-[767px]:pb-[23px] max-[767px]:mb-[23px]">
                            <div
                              // className="filter-head"
                              onClick={() => setIsLevelsOpen(!isLevelsOpen)}
                            >
                              <h3
                                className={
                                  isLevelsOpen
                                    ? "bg-[#3322FF] text-white border-[#3322FF] flex items-center md:bg-[#3322FF] h-[37px] w-full rounded-[10px] p-2 gap-2 m-0"
                                    : "md:border-[1px] md:border-[#282828] flex items-center md:border-0 h-[37px] w-full rounded-[10px] p-2 gap-2 m-0 text-[#282828] md:text-[#282828]"
                                }
                              >
                                <i
                                  className={
                                    isLevelsOpen
                                      ? "size-[10px] flex items-center justify-center md:rotate-[0deg]"
                                      : "size-[10px] flex items-center justify-center md:rotate-[-90deg]"
                                  }
                                >
                                  <svg
                                    width="10"
                                    height="7"
                                    viewBox="0 0 10 7"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.34375 0.505636C9.21875 0.380636 9.09375 0.380636 8.90625 0.443136L4.71875 3.25564L0.53125 0.443136C0.40625 0.318136 0.21875 0.380636 0.09375 0.505636C-0.03125 0.630636 -0.03125 0.818136 0.09375 0.943136L4.46875 5.94314C4.53125 6.00564 4.59375 6.06814 4.71875 6.06814C4.84375 6.06814 4.90625 6.00564 4.96875 5.94314L9.34375 0.943136C9.40625 0.755636 9.40625 0.630636 9.34375 0.505636Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </i>
                                <span className="text-[14px]  font-medium tracking-[.02em] leading-[21px]">
                                  Levels
                                </span>
                              </h3>
                            </div>

                            <AnimatePresence initial={false}>
                              {isLevelsOpen && (
                                <motion.div
                                  className="course-filter"
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <ul>
                                    {levels.map((level) => {
                                      const id = level
                                        .toLowerCase()
                                        .replace(/\s+/g, "-");
                                      return (
                                        <li key={id}>
                                          <input
                                            className="course-filter-inbox"
                                            type="checkbox"
                                            id={id}
                                            name={id}
                                            checked={selectedFilters.levels.includes(
                                              level
                                            )}
                                            onChange={() =>
                                              handleFilterChange("levels", level)
                                            }
                                          />
                                          <label
                                            htmlFor={id}
                                            className="course-filter-label"
                                          >
                                            {capitalizeFirst(level)}
                                          </label>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>

                          <div className="filter-box relative max-[767px]:border-b-[1px] max-[767px]:border-[#E0E0E0] max-[767px]:pb-[23px] max-[767px]:mb-[23px]">
                            <div
                              // className="filter-head"
                              onClick={() => setIsDurationsOpen(!isDurationsOpen)}
                            >
                              <h3
                                className={
                                  isDurationsOpen
                                    ? "bg-[#3322FF] text-white border-[#3322FF] flex items-center md:bg-[#3322FF] h-[37px] w-full rounded-[10px] p-2 gap-2 m-0"
                                    : "md:border-[1px] md:border-[#282828] flex items-center md:border-0 h-[37px] w-full rounded-[10px] p-2 gap-2 m-0 text-[#282828] md:text-[#282828]"
                                }
                              >
                                <i
                                  className={
                                    isDurationsOpen
                                      ? "size-[10px] flex items-center justify-center md:rotate-[0deg]"
                                      : "size-[10px] flex items-center justify-center md:rotate-[-90deg]"
                                  }
                                >
                                  <svg
                                    width="10"
                                    height="7"
                                    viewBox="0 0 10 7"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.34375 0.505636C9.21875 0.380636 9.09375 0.380636 8.90625 0.443136L4.71875 3.25564L0.53125 0.443136C0.40625 0.318136 0.21875 0.380636 0.09375 0.505636C-0.03125 0.630636 -0.03125 0.818136 0.09375 0.943136L4.46875 5.94314C4.53125 6.00564 4.59375 6.06814 4.71875 6.06814C4.84375 6.06814 4.90625 6.00564 4.96875 5.94314L9.34375 0.943136C9.40625 0.755636 9.40625 0.630636 9.34375 0.505636Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </i>
                                <span className="text-[14px]  font-medium tracking-[.02em] leading-[21px]">
                                  Durations
                                </span>
                              </h3>
                            </div>

                            <AnimatePresence initial={false}>
                              {isDurationsOpen && (
                                <motion.div
                                  className="course-filter"
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <ul>
                                    {allDurations.map((duration) => {
                                      const id = duration
                                        .toLowerCase()
                                        .replace(/[\s-]+/g, "-");
                                      return (
                                        <li key={id}>
                                          <input
                                            className="course-filter-inbox"
                                            type="checkbox"
                                            id={id}
                                            name={id}
                                            checked={selectedFilters.durations.includes(
                                              duration
                                            )}
                                            onChange={() =>
                                              handleFilterChange(
                                                "durations",
                                                duration
                                              )
                                            }
                                          />
                                          <label
                                            htmlFor={id}
                                            className="course-filter-label"
                                          >
                                            {duration}
                                          </label>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                        <div
                          className="md:pb-[23px] grid grid-cols-1 md:grid-cols-3 md:gap-[23px] relative 
                          md:[&>div:before:not(:last-child)]:content-[''] md:[&>div:before:not(:last-child)]:w-[1px] md:[&>div:before:not(:last-child)]:h-full 
                        md:[&>div:before:not(:last-child)]:bg-[#E0E0E0] md:[&>div:before:not(:last-child)]:absolute md:[&>div:before:not(:last-child)]:top-0 
                          md:[&>div:before:not(:last-child)]:right-[-13px]"
                        >
                          <div className="filter-box relative max-[767px]:border-b-[1px] max-[767px]:border-[#E0E0E0] max-[767px]:pb-[23px] max-[767px]:mb-[23px]">
                            <div
                              onClick={() => setIsLanguagesOpen(!isLanguagesOpen)}
                            >
                              <h3
                                className={
                                  isLanguagesOpen
                                    ? "bg-[#3322FF] text-white border-[#3322FF] flex items-center md:bg-[#3322FF] h-[37px] w-full rounded-[10px] p-2 gap-2 m-0"
                                    : "md:border-[1px] md:border-[#282828] flex items-center md:border-0 h-[37px] w-full rounded-[10px] p-2 gap-2 m-0 text-[#282828] md:text-[#282828]"
                                }
                              >
                                <i
                                  className={
                                    isLanguagesOpen
                                      ? "size-[10px] flex items-center justify-center md:rotate-[0deg]"
                                      : "size-[10px] flex items-center justify-center md:rotate-[-90deg]"
                                  }
                                >
                                  <svg
                                    width="10"
                                    height="7"
                                    viewBox="0 0 10 7"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.34375 0.505636C9.21875 0.380636 9.09375 0.380636 8.90625 0.443136L4.71875 3.25564L0.53125 0.443136C0.40625 0.318136 0.21875 0.380636 0.09375 0.505636C-0.03125 0.630636 -0.03125 0.818136 0.09375 0.943136L4.46875 5.94314C4.53125 6.00564 4.59375 6.06814 4.71875 6.06814C4.84375 6.06814 4.90625 6.00564 4.96875 5.94314L9.34375 0.943136C9.40625 0.755636 9.40625 0.630636 9.34375 0.505636Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </i>
                                <span className="text-[14px]  font-medium tracking-[.02em] leading-[21px]">
                                  Languages
                                </span>
                              </h3>
                            </div>

                            <AnimatePresence initial={false}>
                              {isLanguagesOpen && (
                                <motion.div
                                  className="course-filter"
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  {/* Search bar */}
                                  {/* <div className="filter-search-bar relative">
                                  <input
                                    className="filter-search"
                                    type="search"
                                    placeholder={`Search Languages (${languages.length})`}
                                    value={searchLanguageTerm}
                                    onChange={(e) =>
                                      setSearchLanguageTerm(e.target.value)
                                    }
                                  />
                                  <img
                                    
                                    src="/images/filter_search.svg"
                                    alt="icon"
                                  />
                                </div> */}
                                  {/* Main filtered languages */}
                                  <ul
                                    style={{
                                      maxHeight: showAllLanguages
                                        ? "320px"
                                        : "260px",
                                      overflowY: showAllLanguages
                                        ? "auto"
                                        : "hidden",
                                    }}
                                  >
                                    {visibleLanguages
                                      .concat(
                                        showAllLanguages ? extraLanguages : []
                                      )
                                      .map((language) => {
                                        if (typeof language !== "string")
                                          return null;
                                        const id = language
                                          ?.toLowerCase()
                                          ?.replace(/\s+/g, "-");
                                        return (
                                          <li key={id}>
                                            <input
                                              className="course-filter-inbox"
                                              type="checkbox"
                                              id={id}
                                              name={id}
                                              checked={selectedFilters.languages.includes(
                                                language
                                              )}
                                              onChange={() =>
                                                handleFilterChange(
                                                  "languages",
                                                  language
                                                )
                                              }
                                            />
                                            <label
                                              htmlFor={id}
                                              className="course-filter-label"
                                            >
                                              {capitalizeFirst(language)}
                                            </label>
                                          </li>
                                        );
                                      })}
                                  </ul>

                                  {/* Show More / Less */}
                                  {filteredLanguages.length > 5 && (
                                    <p
                                      className="show-more"
                                      onClick={() =>
                                        setShowAllLanguages((prev) => !prev)
                                      }
                                    >
                                      {showAllLanguages
                                        ? "Show less"
                                        : "Show more"}
                                    </p>
                                  )}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>

                          <div className="filter-box relative max-[767px]:mb-[23px]">
                            <div
                              // className="filter-head"
                              onClick={() =>
                                setIsAvailabilityOpen(!isAvailabilityOpen)
                              }
                            >
                              <h3
                                className={
                                  isAvailabilityOpen
                                    ? "bg-[#3322FF] text-white border-[#3322FF] flex items-center md:bg-[#3322FF] h-[37px] w-full rounded-[10px] p-2 gap-2 m-0"
                                    : "md:border-[1px] md:border-[#282828] flex items-center md:border-0 h-[37px] w-full rounded-[10px] p-2 gap-2 m-0 text-[#282828] md:text-[#282828]"
                                }
                              >
                                <i
                                  className={
                                    isAvailabilityOpen
                                      ? "size-[10px] flex items-center justify-center md:rotate-[0deg]"
                                      : "size-[10px] flex items-center justify-center md:rotate-[-90deg]"
                                  }
                                >
                                  <svg
                                    width="10"
                                    height="7"
                                    viewBox="0 0 10 7"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.34375 0.505636C9.21875 0.380636 9.09375 0.380636 8.90625 0.443136L4.71875 3.25564L0.53125 0.443136C0.40625 0.318136 0.21875 0.380636 0.09375 0.505636C-0.03125 0.630636 -0.03125 0.818136 0.09375 0.943136L4.46875 5.94314C4.53125 6.00564 4.59375 6.06814 4.71875 6.06814C4.84375 6.06814 4.90625 6.00564 4.96875 5.94314L9.34375 0.943136C9.40625 0.755636 9.40625 0.630636 9.34375 0.505636Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </i>
                                <span className="text-[14px]  font-medium tracking-[.02em] leading-[21px]">
                                  Availability
                                </span>
                              </h3>
                            </div>

                            <AnimatePresence initial={false}>
                              {isAvailabilityOpen && (
                                <motion.div
                                  className="course-filter"
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <ul>
                                    {availabilities.map((status) => {
                                      const id = status
                                        .toLowerCase()
                                        .replace(/\s+/g, "-");
                                      return (
                                        <li key={id}>
                                          <input
                                            className="course-filter-inbox"
                                            type="checkbox"
                                            id={id}
                                            name={id}
                                            checked={selectedFilters.availabilities.includes(
                                              status
                                            )}
                                            onChange={() =>
                                              handleFilterChange(
                                                "availabilities",
                                                status
                                              )
                                            }
                                          />
                                          <label
                                            htmlFor={id}
                                            className="course-filter-label"
                                          >
                                            {capitalizeFirst(status)}
                                          </label>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end gap-4">
                        <span className="max-[767px]:w-1/2 px-6 py-2.5 rounded-full flex items-center justify-center h-10 font-Poppins text-[14px] -tracking-[.02em] font-medium border-[1px] border-[#3322FF] text-[#3322FF] " onClick={() => resetFilters()}>
                          Cancel All
                        </span>
                        <span className="max-[767px]:w-1/2 px-6 py-2.5 rounded-full flex items-center justify-center h-10 font-Poppins text-[14px] -tracking-[.02em] font-medium border-[1px] border-[#3322FF] bg-[#3322FF] text-white" onClick={() => setAreFiltersOpen(false)}>
                          Apply Filters
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          }
          {/* Fiter code Ended */}

          <section className="">
            <div
              className="bg-blackColor rounded-[25px] pt-[30px] pb-[61px] px-[19px] md:px-6 md:pt-4 md:pb-4 lg:px-10 lg:pt-6 lg:pb-6 
              grid md:gap-2 lg:gap-0"
            >
              <p className="text-white flex items-center text-[12px] lg:text-[14px] font-semibold leading-[15px] lg:leading-[100%] pb-[13px] md:pb-0 lg:pb-2.5">
                <Link to="/">
                  Home{" "}
                </Link>
                <img
                  alt="arrow-icon"
                  className="px-2"
                  src="/images/arrow_right_white.svg"
                />
                Courses
              </p>
              <h1
                className="text-white text-[26px] md:text-[28px] lg:text-[36px] block leading-[39px] md:leading-[42px] lg:leading-[54px] font-medium -tracking-[.02em] 
                mb-4 md:m-0 lg:mb-1.5"
              >
                Courses
              </h1>
              <p className="text-white text-[12px] md:text-[12px] lg:text-[16px] font-medium leading-[28px] md:leading-[15px] lg:leading-[20px] -tracking-[.02em]">
                Study with fully interactive experiences, embark on a
                transformative leadership journey, and position yourself for
                success.
              </p>
              <p className="text-white lg:text-lg leading-6 lg:leading-[30px] hidden">
                Learn from global experts and gain the knowledge, and skills you
                need from the world's leading universities.
              </p>
              <ul className="text-white mt-4 flex-col gap-5 hidden">
                <li>
                  <strong>Professional Certificates</strong> <br />
                  Learn from global experts and gain the knowledge, and skills
                  you need from the world's leading universities.
                </li>
                <li>
                  <strong>Executive Education</strong> <br />
                  Study With Flexibility — Embark on a transformative leadership
                  journey, and position yourself for success.
                </li>
                <li>
                  <strong>Degree Programs</strong> <br />
                  Degree programs from top institutions around the world to
                  enable your career transformation and advancement.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex gap-9 items-baseline">
              {/* Filter Sidebar */}
              <div className="w-[260px] lg:grid gap-10 hidden">
                <div
                  className="grid gap-10"
                  onClick={() => isMobile && setAreFiltersOpen(!areFiltersOpen)}
                >
                  <h2 className="text-[#282828] text-[18px] font-medium -tracking-[.02em] !m-0 leading-[27px]">
                    Refine your search
                  </h2>
                  <div className="block mid:hidden">
                    <img
                      className={`transition-transform duration-300 ${areFiltersOpen ? "rotate-[270deg]" : "rotate-90"
                        }`}
                      alt="Dropdown Arrow"
                      src="/images/arrow_right.svg"
                    />
                  </div>
                </div>
                <AnimatePresence initial={false}>
                  {(areFiltersOpen || !isMobile) && (
                    <motion.div
                      initial={isMobile ? { height: 0, opacity: 0 } : false}
                      animate={
                        isMobile
                          ? {
                            height: areFiltersOpen ? "auto" : 0,
                            opacity: areFiltersOpen ? 1 : 0,
                          }
                          : { height: "auto", opacity: 1 }
                      }
                      exit={isMobile ? { height: 0, opacity: 0 } : false}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="course-filter"
                    >
                      <div className="grid gap-10">
                        <div className="filter-box relative max-[767px]:border-b-[1px] max-[767px]:border-[#E0E0E0] max-[767px]:pb-[23px] max-[767px]:mb-[23px]">
                          <div
                            // className="filter-head"
                            onClick={() => setIsSubjectsOpen(!isSubjectsOpen)}
                          >
                            <i>
                              <img
                                className={`transition-transform duration-300 ${isSubjectsOpen ? "rotate-0" : "-rotate-90"
                                  } ${isMobile ? "block" : "hidden"}`}
                                src="/images/course-filter-A-blk.svg"
                                alt="icon"
                              />
                            </i>
                            <h3>Subjects</h3>
                          </div>

                          <AnimatePresence initial={false}>
                            {isSubjectsOpen && (
                              <motion.div
                                className="course-filter"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                {/* Search Bar */}
                                {/* <div className="filter-search-bar relative">
                                  <input
                                    className="filter-search "
                                    type="search"
                                    placeholder={`Search subjects (${subjects.length})`}
                                    value={searchTerm}
                                    onChange={(e) =>
                                      setSearchTerm(e.target.value)
                                    }
                                  />
                                  <img
                                    
                                    src="/images/filter_search.svg"
                                    alt="icon"
                                  />
                                </div> */}

                                {/* Main Filtered Subjects */}
                                <ul
                                  style={{
                                    maxHeight: showAll ? "320px" : "260px",
                                    overflowY: showAll ? "auto" : "hidden",
                                  }}
                                >
                                  {visibleSubjects
                                    .concat(showAll ? extraSubjects : [])
                                    .map((subject) => {
                                      const id = subject.id;
                                      // const id = subject
                                      //   .toLowerCase()
                                      //   .replace(/[\s&]+/g, "-");
                                      return (
                                        <li key={id}>
                                          <input
                                            className="course-filter-inbox"
                                            type="checkbox"
                                            id={id}
                                            name={id}
                                            checked={selectedFilters.subjects.includes(
                                              subject.id
                                            )}
                                            onChange={() =>
                                              handleFilterChange(
                                                "subjects",
                                                subject.id
                                              )
                                            }
                                          />
                                          <label
                                            htmlFor={id}
                                            className="course-filter-label"
                                          >
                                            {subject.title}
                                          </label>
                                        </li>
                                      );
                                    })}
                                </ul>

                                {/* Expanded Subjects */}
                                {/* <AnimatePresence initial={false}>
                                  {showAll && extraSubjects.length > 0 && (
                                    <motion.ul
                                      className="subject-filter-list overflow-hidden"
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      {extraSubjects.map((subject) => {
                                        const id = subject.toLowerCase()
                                          .replace(/[\s&]+/g, "-");
                                        return (
                                          <li
                                            key={id}
                                            className="flex items-center gap-2"
                                          >
                                            <input
                                              className="course-filter-inbox"
                                              type="checkbox"
                                              id={id}
                                              name={id}
                                              checked={selectedFilters.subjects.includes(
                                                subject
                                              )}
                                              onChange={() =>
                                                handleFilterChange(
                                                  "subjects",
                                                  subject
                                                )
                                              }
                                            />
                                            <label
                                              htmlFor={id}
                                              className="course-filter-label"
                                            >
                                              {subject}
                                            </label>
                                          </li>
                                        );
                                      })}
                                    </motion.ul>
                                  )}
                                </AnimatePresence> */}

                                {/* Show More / Less */}
                                {filteredSubjects.length > 5 && (
                                  <p
                                    className="show-more "
                                    onClick={() => setShowAll((prev) => !prev)}
                                  >
                                    {showAll ? "Show less" : "Show more"}
                                  </p>
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <div className="filter-box relative max-[767px]:border-b-[1px] max-[767px]:border-[#E0E0E0] max-[767px]:pb-[23px] max-[767px]:mb-[23px]">
                          <div
                            // className="filter-head"
                            onClick={() => setIsSkillsOpen(!isSkillsOpen)}
                          >
                            <i>
                              <img
                                className={`transition-transform duration-300 ${isSkillsOpen ? "rotate-0" : "-rotate-90"
                                  } ${isMobile ? "block" : "hidden"}`}
                                src="/images/course-filter-A-blk.svg"
                                alt="icon"
                              />
                            </i>
                            <h3>Skills</h3>
                          </div>

                          <AnimatePresence initial={false}>
                            {isSkillsOpen && (
                              <motion.div
                                className="course-filter"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                {/* Search bar */}
                                <div className="filter-search-bar relative">
                                  <input
                                    className="filter-search"
                                    type="search"
                                    placeholder={`Search Skills (${skills.length})`}
                                    value={searchSkillTerm}
                                    onChange={(e) =>
                                      setSearchSkillTerm(e.target.value)
                                    }
                                  />
                                  <img
                                    src="/images/filter_search.svg"
                                    alt="icon"
                                  />
                                </div>

                                {/* Main filtered skills */}
                                <ul
                                  style={{
                                    maxHeight: showAllSkills
                                      ? "320px"
                                      : "260px",
                                    overflowY: showAllSkills
                                      ? "auto"
                                      : "hidden",
                                  }}
                                >
                                  {visibleSkills
                                    .concat(showAllSkills ? extraSkills : [])
                                    .map((skill) => {
                                      const id = skill
                                        .toLowerCase()
                                        .replace(/[\s&]+/g, "-");
                                      return (
                                        <li key={id}>
                                          <input
                                            className="course-filter-inbox"
                                            type="checkbox"
                                            id={id}
                                            name={id}
                                            checked={selectedFilters.skills.includes(
                                              skill
                                            )}
                                            onChange={() =>
                                              handleFilterChange(
                                                "skills",
                                                skill
                                              )
                                            }
                                          />
                                          <label
                                            htmlFor={id}
                                            className="course-filter-label"
                                          >
                                            {skill}
                                          </label>
                                        </li>
                                      );
                                    })}
                                </ul>

                                {/* Show More / Less */}
                                {filteredSkills.length > 5 && (
                                  <p
                                    className="show-more"
                                    onClick={() =>
                                      setShowAllSkills((prev) => !prev)
                                    }
                                  >
                                    {showAllSkills ? "Show less" : "Show more"}
                                  </p>
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <div className="filter-box relative max-[767px]:border-b-[1px] max-[767px]:border-[#E0E0E0] max-[767px]:pb-[23px] max-[767px]:mb-[23px]">
                          <div
                            // className="filter-head"
                            onClick={() => setIsEducatorsOpen(!isEducatorsOpen)}
                          >
                            <i>
                              <img
                                className={`transition-transform duration-300 ${isEducatorsOpen ? "rotate-0" : "-rotate-90"
                                  } ${isMobile ? "block" : "hidden"}`}
                                src="/images/course-filter-A-blk.svg"
                                alt="icon"
                              />
                            </i>
                            <h3>Educators</h3>
                          </div>

                          <AnimatePresence initial={false}>
                            {isEducatorsOpen && (
                              <motion.div
                                className="course-filter"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                {/* Search bar */}
                                <div className="filter-search-bar relative">
                                  <input
                                    className="filter-search"
                                    type="search"
                                    placeholder={`Search Educator (${educators.length})`}
                                    value={searchEducatorTerm}
                                    onChange={(e) =>
                                      setSearchEducatorTerm(e.target.value)
                                    }
                                  />
                                  <img
                                    src="/images/filter_search.svg"
                                    alt="icon"
                                  />
                                </div>

                                {/* Main filtered educators */}
                                <ul
                                  style={{
                                    maxHeight: showAllEducators
                                      ? "320px"
                                      : "260px",
                                    overflowY: showAllEducators
                                      ? "auto"
                                      : "hidden",
                                  }}
                                >
                                  {visibleEducators
                                    .concat(
                                      showAllEducators ? extraEducators : []
                                    )
                                    .map((educator) => {
                                      const id = educator.label
                                        .toLowerCase()
                                        .replace(/[\s&]+/g, "-");
                                      return (
                                        <li key={id}>
                                          <input
                                            className="course-filter-inbox"
                                            type="checkbox"
                                            id={id}
                                            name={id}
                                            checked={selectedFilters.educators.includes(
                                              educator.value
                                            )}
                                            onChange={() =>
                                              handleFilterChange(
                                                "educators",
                                                educator.value
                                              )
                                            }
                                          />
                                          <label
                                            htmlFor={id}
                                            className="course-filter-label"
                                          >
                                            {educator.label}
                                          </label>
                                        </li>
                                      );
                                    })}
                                </ul>

                                {/* Show More / Less */}
                                {filteredEducators.length > 5 && (
                                  <p
                                    className="show-more"
                                    onClick={() =>
                                      setShowAllEducators((prev) => !prev)
                                    }
                                  >
                                    {showAllEducators
                                      ? "Show less"
                                      : "Show more"}
                                  </p>
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <div className="filter-box relative ">
                          <div
                            // className="filter-head"
                            onClick={() =>
                              setIsLearningProductsOpen(!isLearningProductsOpen)
                            }
                          >
                            <i>
                              <img
                                className={`transition-transform duration-300 ${isLearningProductsOpen
                                  ? "rotate-0"
                                  : "-rotate-90"
                                  } ${isMobile ? "block" : "hidden"}`}
                                src="/images/course-filter-A-blk.svg"
                                alt="icon"
                              />
                            </i>
                            <h3>Learning Products</h3>
                          </div>

                          <AnimatePresence initial={false}>
                            {isLearningProductsOpen && (
                              <motion.div
                                className="course-filter"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                {/* Search bar */}
                                {/* <div className="filter-search-bar relative">
                                  <input
                                    className="filter-search  "
                                    type="search"
                                    placeholder="Search learning product..."
                                    value={searchLearningTerm}
                                    onChange={(e) =>
                                      setSearchLearningTerm(e.target.value)
                                    }
                                  />
                                  <img
                                    
                                    src="/images/filter_search.svg"
                                    alt="icon"
                                  />
                                </div> */}

                                {/* Visible Items */}
                                <ul>
                                  {visibleLearningProducts
                                    .concat(
                                      showAllLearningProducts
                                        ? extraLearningProducts
                                        : []
                                    )
                                    .map((item) => {
                                      const id = item?.id;
                                      return (
                                        <li
                                          key={"learning_" + id}
                                          className="flex gap-2"
                                        >
                                          <input
                                            className="course-filter-inbox"
                                            type="checkbox"
                                            id={"learning_" + id}
                                            name={"learning_" + id}
                                            checked={selectedFilters.learningProducts.includes(
                                              item?.id
                                            )}
                                            onChange={() =>
                                              handleFilterChange(
                                                "learningProducts",
                                                item?.id
                                              )
                                            }
                                          />
                                          <label
                                            htmlFor={"learning_" + id}
                                            className="course-filter-label"
                                          >
                                            {item?.name}
                                          </label>
                                        </li>
                                      );
                                    })}
                                </ul>

                                {/* Toggle Show More / Less */}
                                {filteredLearningProducts.length > 5 && (
                                  <p
                                    className="show-more"
                                    onClick={() =>
                                      setShowAllLearningProducts(
                                        (prev) => !prev
                                      )
                                    }
                                  >
                                    {showAllLearningProducts
                                      ? "Show less"
                                      : "Show more"}
                                  </p>
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <div className="filter-box relative max-[767px]:border-b-[1px] max-[767px]:border-[#E0E0E0] max-[767px]:pb-[23px] max-[767px]:mb-[23px]">
                          <div
                            // className="filter-head"
                            onClick={() => setIsLevelsOpen(!isLevelsOpen)}
                          >
                            <i>
                              <img
                                className={`transition-transform duration-300 ${isLevelsOpen ? "rotate-0" : "-rotate-90"
                                  } ${isMobile ? "block" : "hidden"}`}
                                src="/images/course-filter-A-blk.svg"
                                alt="icon"
                              />
                            </i>
                            <h3>Levels</h3>
                          </div>

                          <AnimatePresence initial={false}>
                            {isLevelsOpen && (
                              <motion.div
                                className="course-filter"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <ul>
                                  {levels.map((level) => {
                                    const id = level
                                      .toLowerCase()
                                      .replace(/\s+/g, "-");
                                    return (
                                      <li key={id}>
                                        <input
                                          className="course-filter-inbox"
                                          type="checkbox"
                                          id={id}
                                          name={id}
                                          checked={selectedFilters.levels.includes(
                                            level
                                          )}
                                          onChange={() =>
                                            handleFilterChange("levels", level)
                                          }
                                        />
                                        <label
                                          htmlFor={id}
                                          className="course-filter-label"
                                        >
                                          {capitalizeFirst(level)}
                                        </label>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <div className="filter-box relative max-[767px]:border-b-[1px] max-[767px]:border-[#E0E0E0] max-[767px]:pb-[23px] max-[767px]:mb-[23px]">
                          <div
                            // className="filter-head"
                            onClick={() => setIsDurationsOpen(!isDurationsOpen)}
                          >
                            <i>
                              <img
                                className={`transition-transform duration-300 ${isDurationsOpen ? "rotate-0" : "-rotate-90"
                                  } ${isMobile ? "block" : "hidden"}`}
                                src="/images/course-filter-A-blk.svg"
                                alt="icon"
                              />
                            </i>
                            <h3>Durations</h3>
                          </div>

                          <AnimatePresence initial={false}>
                            {isDurationsOpen && (
                              <motion.div
                                className="course-filter"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <ul>
                                  {allDurations.map((duration) => {
                                    const id = duration
                                      .toLowerCase()
                                      .replace(/[\s-]+/g, "-");
                                    return (
                                      <li key={id}>
                                        <input
                                          className="course-filter-inbox"
                                          type="checkbox"
                                          id={id}
                                          name={id}
                                          checked={selectedFilters.durations.includes(
                                            duration
                                          )}
                                          onChange={() =>
                                            handleFilterChange(
                                              "durations",
                                              duration
                                            )
                                          }
                                        />
                                        <label
                                          htmlFor={id}
                                          className="course-filter-label"
                                        >
                                          {duration}
                                        </label>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <div className="filter-box relative max-[767px]:border-b-[1px] max-[767px]:border-[#E0E0E0] max-[767px]:pb-[23px] max-[767px]:mb-[23px]">
                          <div
                            // className="filter-head"
                            onClick={() => setIsLanguagesOpen(!isLanguagesOpen)}
                          >
                            <i>
                              <img
                                className={`transition-transform duration-300 ${isLanguagesOpen ? "rotate-0" : "-rotate-90"
                                  } ${isMobile ? "block" : "hidden"}`}
                                src="/images/course-filter-A-blk.svg"
                                alt="icon"
                              />
                            </i>
                            <h3>Languages</h3>
                          </div>

                          <AnimatePresence initial={false}>
                            {isLanguagesOpen && (
                              <motion.div
                                className="course-filter"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                {/* Search bar */}
                                {/* <div className="filter-search-bar relative">
                                  <input
                                    className="filter-search"
                                    type="search"
                                    placeholder={`Search Languages (${languages.length})`}
                                    value={searchLanguageTerm}
                                    onChange={(e) =>
                                      setSearchLanguageTerm(e.target.value)
                                    }
                                  />
                                  <img
                                    
                                    src="/images/filter_search.svg"
                                    alt="icon"
                                  />
                                </div> */}
                                {/* Main filtered languages */}
                                <ul
                                  style={{
                                    maxHeight: showAllLanguages
                                      ? "320px"
                                      : "260px",
                                    overflowY: showAllLanguages
                                      ? "auto"
                                      : "hidden",
                                  }}
                                >
                                  {visibleLanguages
                                    .concat(
                                      showAllLanguages ? extraLanguages : []
                                    )
                                    .map((language) => {
                                      if (typeof language !== "string")
                                        return null;
                                      const id = language
                                        ?.toLowerCase()
                                        ?.replace(/\s+/g, "-");
                                      return (
                                        <li key={id}>
                                          <input
                                            className="course-filter-inbox"
                                            type="checkbox"
                                            id={id}
                                            name={id}
                                            checked={selectedFilters.languages.includes(
                                              language
                                            )}
                                            onChange={() =>
                                              handleFilterChange(
                                                "languages",
                                                language
                                              )
                                            }
                                          />
                                          <label
                                            htmlFor={id}
                                            className="course-filter-label"
                                          >
                                            {capitalizeFirst(language)}
                                          </label>
                                        </li>
                                      );
                                    })}
                                </ul>

                                {/* Show More / Less */}
                                {filteredLanguages.length > 5 && (
                                  <p
                                    className="show-more"
                                    onClick={() =>
                                      setShowAllLanguages((prev) => !prev)
                                    }
                                  >
                                    {showAllLanguages
                                      ? "Show less"
                                      : "Show more"}
                                  </p>
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <div className="filter-box relative max-[767px]:border-b-[1px] max-[767px]:border-[#E0E0E0] max-[767px]:pb-[23px] max-[767px]:mb-[23px]">
                          <div
                            // className="filter-head"
                            onClick={() =>
                              setIsAvailabilityOpen(!isAvailabilityOpen)
                            }
                          >
                            <i>
                              <img
                                className={`transition-transform duration-300 ${isAvailabilityOpen ? "rotate-0" : "-rotate-90"
                                  } ${isMobile ? "block" : "hidden"}`}
                                src="/images/course-filter-A-blk.svg"
                                alt="icon"
                              />
                            </i>
                            <h3>Availability</h3>
                          </div>

                          <AnimatePresence initial={false}>
                            {isAvailabilityOpen && (
                              <motion.div
                                className="course-filter"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <ul>
                                  {availabilities.map((status) => {
                                    const id = status
                                      .toLowerCase()
                                      .replace(/\s+/g, "-");
                                    return (
                                      <li key={id}>
                                        <input
                                          className="course-filter-inbox"
                                          type="checkbox"
                                          id={id}
                                          name={id}
                                          checked={selectedFilters.availabilities.includes(
                                            status
                                          )}
                                          onChange={() =>
                                            handleFilterChange(
                                              "availabilities",
                                              status
                                            )
                                          }
                                        />
                                        <label
                                          htmlFor={id}
                                          className="course-filter-label"
                                        >
                                          {capitalizeFirst(status)}
                                        </label>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Course List & Sorting */}
              <div className="w-full lg:w-[calc(100%-296px)] grid gap-9 md:gap-[25px] lg:gap-10">
                <div className="flex gap-2 md:items-baseline">
                  <div className="gap-2 flex md:gap-4 flex-wrap lg:hidden max-[767px]:w-[calc(100%-140px)]">
                    <div
                      className="hidden md:flex border-[2px] border-[#D9D9D9] rounded-[10px] pr-1 pl-1.5 py-2 items-center justify-center gap-[5px]"
                      onClick={() => setAreFiltersOpen(true)}
                    >
                      <span className="text-[#282828] text-[12px] leading-[20px] font-Poppins font-medium">
                        Refine your search
                      </span>
                      <i>
                        <img src="../images/filter-Icon.svg" alt="" />
                      </i>
                    </div>
                    <div
                      className="w-[150px] flex md:hidden border-[1px] border-[#666] rounded-[8px] px-2 py-[9px] items-center justify-between"
                      onClick={() => setAreFiltersOpen(true)}
                    >
                      <span className="text-[#282828] text-[12px] font-medium leading-[20px] font-Poppins">
                        Refine your search
                      </span>
                      <i>
                        <img src="../images/filter-Icon.svg" alt="" />
                      </i>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap hidden md:flex">
                    {selectedFilterNames.learningProducts?.map((product) => {
                      const style = getCourseTypeStyles(product?.slug);
                      return (
                        <div
                          className={`px-3 py-[11px] rounded-full relative h-10 flex items-center justify-center`}
                          style={{
                            backgroundColor: style?.bgColor,
                            color: style?.textColor,
                          }}
                        >
                          <span className="text-[12px] leading-[18px] font-Poppins font-medium">
                            {product?.name}
                          </span>
                          <i
                            className="bg-[#282828] w-[16px] h-[16px] rounded-full flex items-center justify-center absolute -right-1 -top-1 cursor-pointer"
                            onClick={() =>
                              handleFilterChange(
                                "learningProducts",
                                product?.id
                              )
                            }
                          >
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 8 8"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 1L4 4M4 4L7 7M4 4L7 1M4 4L1 7"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </i>
                        </div>
                      );
                    })}
                    {selectedFilterNames.subjects?.map((product) => {
                      const style = getCourseTypeStyles(product?.slug);
                      return (
                        <div
                          className={`px-3 py-[11px] rounded-full relative h-10 flex items-center justify-center`}
                          style={{
                            backgroundColor: style?.bgColor,
                            color: style?.textColor,
                          }}
                        >
                          <span className="text-[12px] leading-[18px] font-Poppins font-medium">
                            {capitalizeFirst(product?.title)}
                          </span>
                          <i
                            className="bg-[#282828] w-[16px] h-[16px] rounded-full flex items-center justify-center absolute -right-1 -top-1 cursor-pointer"
                            onClick={() =>
                              handleFilterChange(
                                "subjects",
                                product?.id
                              )
                            }
                          >
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 8 8"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 1L4 4M4 4L7 7M4 4L7 1M4 4L1 7"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </i>
                        </div>
                      );
                    })}
                    {selectedFilterNames.skills?.map((product) => {
                      const style = getCourseTypeStyles(product);
                      return (
                        <div
                          className={`px-3 py-[11px] rounded-full relative h-10 flex items-center justify-center`}
                          style={{
                            backgroundColor: style?.bgColor,
                            color: style?.textColor,
                          }}
                        >
                          <span className="text-[12px] leading-[18px] font-Poppins font-medium">
                            {capitalizeFirst(product)}
                          </span>
                          <i
                            className="bg-[#282828] w-[16px] h-[16px] rounded-full flex items-center justify-center absolute -right-1 -top-1 cursor-pointer"
                            onClick={() =>
                              handleFilterChange(
                                "skills",
                                product
                              )
                            }
                          >
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 8 8"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 1L4 4M4 4L7 7M4 4L7 1M4 4L1 7"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </i>
                        </div>
                      );
                    })}
                    {selectedFilterNames.educators?.map((product) => {
                      const style = getCourseTypeStyles(product?.label);
                      return (
                        <div
                          className={`px-3 py-[11px] rounded-full relative h-10 flex items-center justify-center`}
                          style={{
                            backgroundColor: style?.bgColor,
                            color: style?.textColor,
                          }}
                        >
                          <span className="text-[12px] leading-[18px] font-Poppins font-medium">
                            {product?.label}
                          </span>
                          <i
                            className="bg-[#282828] w-[16px] h-[16px] rounded-full flex items-center justify-center absolute -right-1 -top-1 cursor-pointer"
                            onClick={() =>
                              handleFilterChange(
                                "educators",
                                product?.value
                              )
                            }
                          >
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 8 8"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 1L4 4M4 4L7 7M4 4L7 1M4 4L1 7"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </i>
                        </div>
                      );
                    })}
                    {selectedFilterNames.levels?.map((product) => {
                      const style = getCourseTypeStyles(product);
                      return (
                        <div
                          className={`px-3 py-[11px] rounded-full relative h-10 flex items-center justify-center`}
                          style={{
                            backgroundColor: style?.bgColor,
                            color: style?.textColor,
                          }}
                        >
                          <span className="text-[12px] leading-[18px] font-Poppins font-medium">
                            {capitalizeFirst(product)}
                          </span>
                          <i
                            className="bg-[#282828] w-[16px] h-[16px] rounded-full flex items-center justify-center absolute -right-1 -top-1 cursor-pointer"
                            onClick={() =>
                              handleFilterChange(
                                "levels",
                                product
                              )
                            }
                          >
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 8 8"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 1L4 4M4 4L7 7M4 4L7 1M4 4L1 7"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </i>
                        </div>
                      );
                    })}
                    {selectedFilterNames.languages?.map((product) => {
                      const style = getCourseTypeStyles(product);
                      return (
                        <div
                          className={`px-3 py-[11px] rounded-full relative h-10 flex items-center justify-center`}
                          style={{
                            backgroundColor: style?.bgColor,
                            color: style?.textColor,
                          }}
                        >
                          <span className="text-[12px] leading-[18px] font-Poppins font-medium">
                            {capitalizeFirst(product)}
                          </span>
                          <i
                            className="bg-[#282828] w-[16px] h-[16px] rounded-full flex items-center justify-center absolute -right-1 -top-1 cursor-pointer"
                            onClick={() =>
                              handleFilterChange(
                                "languages",
                                product
                              )
                            }
                          >
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 8 8"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 1L4 4M4 4L7 7M4 4L7 1M4 4L1 7"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </i>
                        </div>
                      );
                    })}
                    {selectedFilterNames.availabilities?.map((product) => {
                      const style = getCourseTypeStyles(product);
                      return (
                        <div
                          className={`px-3 py-[11px] rounded-full relative h-10 flex items-center justify-center`}
                          style={{
                            backgroundColor: style?.bgColor,
                            color: style?.textColor,
                          }}
                        >
                          <span className="text-[12px] leading-[18px] font-Poppins font-medium">
                            {capitalizeFirst(product)}
                          </span>
                          <i
                            className="bg-[#282828] w-[16px] h-[16px] rounded-full flex items-center justify-center absolute -right-1 -top-1 cursor-pointer"
                            onClick={() =>
                              handleFilterChange(
                                "availabilities",
                                product
                              )
                            }
                          >
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 8 8"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 1L4 4M4 4L7 7M4 4L7 1M4 4L1 7"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </i>
                        </div>
                      );
                    })}
                    {selectedFilterNames.durations?.map((product) => {
                      const style = getCourseTypeStyles(product);
                      return (
                        <div
                          className={`px-3 py-[11px] rounded-full relative h-10 flex items-center justify-center`}
                          style={{
                            backgroundColor: style?.bgColor,
                            color: style?.textColor,
                          }}
                        >
                          <span className="text-[12px] leading-[18px] font-Poppins font-medium">
                            {capitalizeFirst(product)}
                          </span>
                          <i
                            className="bg-[#282828] w-[16px] h-[16px] rounded-full flex items-center justify-center absolute -right-1 -top-1 cursor-pointer"
                            onClick={() =>
                              handleFilterChange(
                                "durations",
                                product
                              )
                            }
                          >
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 8 8"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 1L4 4M4 4L7 7M4 4L7 1M4 4L1 7"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </i>
                        </div>
                      );
                    })}
                  </div>
                  <div
                    className="sort-bar relative border border-textColor2 min-w-[120px] md:min-w-[202px] h-10 rounded-[11px] flex 
                    items-center px-2 md:px-5 bg-white cursor-pointer ml-auto"
                    onClick={() => setIsOpen(!isOpen)}
                    ref={dropdownRef}
                  >
                    <span
                      className="capitalize text-[12px] md:text-[14px] text-[#666666] font-Montserrat font-medium leading-[17px] 
                    tracking-[.02em]"
                    >
                      {selected}
                    </span>
                    <div className="absolute right-2 md:right-5 top-1/2 -translate-y-1/2">
                      <img
                        className={`rotate-90 brightness-[1.2] transition-transform ${isOpen ? "rotate-[270deg]" : "rotate-90"
                          }`}
                        alt="Dropdown Arrow"
                        src="/images/arrow_right.svg"
                      />
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.ul
                          className="absolute sort-bar-list top-full left-0 w-full mt-2 bg-white border border-textColor2 text-textColor2 rounded-[11px] z-10 shadow-md overflow-hidden overflow-y-auto"
                          key="dropdown"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                        >
                          {options.map((option) => (
                            <li
                              key={option}
                              className={`px-4 py-2 hover:bg-blackColor2 text-sm capitalize cursor-pointer font-Poppins font-medium hover:text-white ${selected === option
                                ? "font-semibold text-primaryColor"
                                : ""
                                }`}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSelect(option);
                              }}
                            >
                              {option}
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div>
                  {filtersLoading && (
                    <div className="text-center text-gray-500 py-4">
                      Loading filters...
                    </div>
                  )}
                  {filtersError && (
                    <div className="text-center text-red-500 py-4">
                      {filtersError}
                    </div>
                  )}
                  <AllCourses filters={selectedFilters} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </Layout>
  );
};

export default Courses2;
