import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Pagination, PaginationItem } from "@mui/material";
import computer from "../../../../public/images/computer.svg";
import totalCourses from "../../../../public/images/total-courses.svg";
import time from "../../../../public/images/time.svg";
import intro from "../../../../public/images/intro.svg";
import calendar from "../../../../public/images/calendar.svg";
import partner from "../../../../public/images/partner-inexa.png";
import edx from "../../../../public/images/edx-black.svg";
import axiosInstance from "../../../api/axiosInstance"; // Make sure this is configured
import { formatDateShort, capitalizeFirst } from "../../../utils";
import { AnimatePresence, motion } from "framer-motion";
import CourseCard from "../../../Components/CourseCard";
import { UserContext } from "../../../UserContext";

// Helper function to get background color by course type
export const getCourseTypeStyles = (type) => {
  if (!type) return { bgColor: "#282828", textColor: "#FFFFFF" };

  switch (type) {
    case "course":
      return { bgColor: "#CCDD00", textColor: "#282828" };
    case "professional-certificate":
      return { bgColor: "#3322FF", textColor: "#FFFFFF" };
    case "microbachelors":
      return { bgColor: "#D4D4D4", textColor: "#282828" };
    case "micromasters":
      return { bgColor: "#6644FF", textColor: "#FFFFFF" };
    case "degree":
      return { bgColor: "#282828", textColor: "#FFFFFF" };
    default:
      return { bgColor: "#282828", textColor: "#FFFFFF" };
  }
};

const AllCourses = ({ filters }) => {
  const { user } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const coursesSectionRef = useRef(null);
  const [courses, setCourses] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const options = [
    { label: "20 items per page", value: 20 },
    { label: "28 items per page", value: 28 },
    { label: "36 items per page", value: 36 },
  ];

  const [pagination, setPagination] = useState({
    currentPage: 1,
    page_size: 12,
    totalItems: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  });

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

  const handleFavorite = (index) => {
    const updatedFavorites = [...favorites];
    updatedFavorites[index] = !updatedFavorites[index];
    setFavorites(updatedFavorites);
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    coursesSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleItemsPerPageChange = (option) => {
    setSelected(option);
    setItemsPerPage(option);
    setIsOpen(false);
    setCurrentPage(1);
    coursesSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const params = {
          page: currentPage,
          page_size: itemsPerPage,
        };
        // Add filters as query params if present
        if (filters) {
          if (filters.subjects && filters.subjects.length)
            params.subjects = filters.subjects.join(",");
          if (filters.skills && filters.skills.length)
            params.skills = filters.skills.join(",");
          if (filters.educators && filters.educators.length)
            params.owners = filters.educators.join(",");
          if (filters.learningProducts && filters.learningProducts.length)
            params.learningProducts = filters.learningProducts.join(",");
          if (filters.levels && filters.levels.length)
            params.levels = filters.levels.join(",");
          if (filters.durations && filters.durations.length)
            params.durations = filters.durations.join(",");
          if (filters.languages && filters.languages.length)
            params.languages = filters.languages.join(",");
          if (filters.availabilities && filters.availabilities.length)
            params.availabilities = filters.availabilities.join(",");
        }
        const response = await axiosInstance.get("/courses", { params });
        setCourses(response?.data?.data || []);
        setFavorites((response?.data?.data || []).map(() => false));
        setPagination(
          response?.data?.pagination || {
            currentPage: 1,
            page_size: itemsPerPage,
            totalItems: 0,
            totalPages: 0,
            hasNextPage: false,
            hasPreviousPage: false,
          }
        );
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
        setLoading(false);
      }
    };

    fetchCourses();
  }, [currentPage, itemsPerPage, filters, user]);

  return (
    <div ref={coursesSectionRef} className="grid gap-8 md:gap-[59px] lg:gap-10">
      {loading ? (
        <p className="text-center my-10">Loading courses...</p>
      ) : error ? (
        <p className="text-center text-red-500 my-10">Error: {error}</p>
      ) : (
        <>
          {
            courses?.length > 0 ? (
              <>
                <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-x-6 lg:gap-y-10">
                  {courses?.map((item, index) => {
                    return (
                      <CourseCard
                        key={item.id}
                        item={item}
                        favorites={favorites}
                        index={index}
                        handleFavorite={handleFavorite}
                      />
                    );
                  })}
                </div>

                {pagination.totalItems > 0 && (
                  <div className="max-[767px]:flex max-[767px]:flex-col-reverse grid md:flex justify-between gap-8 md:gap-1 lg:gap-2">
                    <div className="w-[20%] lg:w-[33%] hidden md:block"></div>

                    <div className="flex items-center justify-center lg:justify-start gap-4 w-full md:w-[50%] lg:w-[63%]">
                      <Pagination
                        count={pagination.totalPages}
                        page={pagination.currentPage}
                        onChange={handlePageChange}
                        color="primary"
                        size="large"
                        renderItem={(item) => {
                          // Custom rendering for Next and Previous buttons
                          if (item.type === "next") {
                            return (
                              <button className="MuiPaginationItem-root" {...item}>
                                <img
                                  src={"/images/arrow_right-dark.svg"}
                                  alt="Next"
                                />
                              </button>
                            );
                          }
                          if (item.type === "previous") {
                            return (
                              <button className="MuiPaginationItem-root" {...item}>
                                <img
                                  src={"/images/arrow_left-dark.svg"}
                                  alt="Previous"
                                />
                              </button>
                            );
                          }

                          // For other types (First, Last, and page buttons), use the default behavior
                          return <PaginationItem {...item} />;
                        }}
                        sx={{
                          "& .MuiPagination-ul": {
                            display: "flex",
                            gap: "9px",
                          },
                          "& .MuiPagination-ul > li:first-of-type": {
                            marginRight: "16px",
                            "& .MuiPaginationItem-root": {
                              border: "2px solid #F1F1F1",
                              width: "32px !important",
                              minWidth: "32px !important",
                              height: "32px !important",
                              borderRadius: "100px",
                              opacity: "1",
                              "&:hover": {
                                backgroundColor: "#fff",
                                border: "2px solid #282828",
                              },
                            },
                          },
                          "& .MuiPaginationItem-root": {
                            fontFamily: "Montserrat",
                            fontSize: {
                              lg: "14px",
                              md: "12px",
                              sm: "12px",
                              xs: "12px",
                            },
                            fontWeight: "600",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: {
                              lg: "32px !important",
                              md: "20px !important",
                              sm: "20px !important",
                              xs: "20px !important",
                            },
                            minWidth: {
                              lg: "32px !important",
                              md: "20px !important",
                              sm: "20px !important",
                              xs: "20px !important",
                            },
                            height: {
                              lg: "32px !important",
                              md: "20px !important",
                              sm: "20px !important",
                              xs: "20px !important",
                            },
                            margin: "0",
                            padding: "0",
                            "&:hover": {
                              backgroundColor: "#282828",
                              color: "#fff",
                            },
                          },

                          "& .MuiPaginationItem-root.Mui-selected": {
                            backgroundColor: "#282828",
                            color: "#fff",
                            "&:hover": {
                              backgroundColor: "#282828 !important",
                              color: "#fff",
                            },
                          },
                          "& .MuiPagination-ul > li:last-child": {
                            marginLeft: "16px",
                            "& .MuiPaginationItem-root": {
                              border: "2px solid #F1F1F1",
                              width: "32px !important",
                              minWidth: "32px !important",
                              height: "32px !important",
                              borderRadius: "100px",
                              opacity: "1",
                              "&:hover": {
                                backgroundColor: "#fff",
                                border: "2px solid #282828",
                              },
                            },
                          },
                        }}
                      />
                    </div>

                    <div className="flex justify-center md:justify-end w-full md:w-[20%] lg:w-[33%]">
                      <div
                        className="sort-bar relative border border-[282828] w-[104px] lg:w-[169px] h-[40px] lg:h-[50px] rounded-[11px]  lg:rounded-full flex items-center px-2 bg-white cursor-pointer justify-center"
                        onClick={() => setIsOpen(!isOpen)}
                        ref={dropdownRef}
                      >
                        <div className="flex justify-center items-center gap-2 lg:gap-3">
                          <span className="text-[12px] lg:text-[14px] text-[#666] lg:text-[#000] font-Poppins lg:font-Montserrat font-medium leading-[18px] tracking-[.02em]">
                            Show more
                          </span>
                          <div className="">
                            <img
                              className={`rotate-90 brightness-[1.2] transition-transform ${isOpen ? "rotate-[270deg]" : "rotate-90"
                                }`}
                              alt="Dropdown Arrow"
                              src="/images/arrow_right-dark.svg"
                            />
                          </div>
                        </div>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.ul
                              className="absolute sort-bar-list top-[42px] lg:top-[52px] right-0 lg:left-0 w-[170px] lg:w-full bg-white border border-[#DEDEDE] text-[#0E1703] rounded-[10px] z-10 overflow-hidden overflow-y-auto p-2"
                              key="dropdown"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                            >
                              {/* Group label for the first option */}
                              <li className="px-2 py-[9px] text-[#0E1703] text-[14px] font-medium font-Montserrat bg-white leading-[17px] rounded-[10px] hover:bg-[#CCDD00] pl-0 pointer-events-none">
                                Select view item
                              </li>

                              {/* Options list */}
                              {options.map((option) => (
                                <li
                                  key={option.value}
                                  className={`px-2 py-[9px] text-[#0E1703] text-[14px] font-medium font-Montserrat leading-[17px] rounded-[10px] hover:bg-[#CCDD00]  ${selected === option?.value
                                    ? "bg-[#CCDD00]"
                                    : "bg-white"
                                    }`}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleItemsPerPageChange(option?.value);
                                  }}
                                >
                                  {option?.label}
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                      {/* <FormControl sx={{ minWidth: 168 }}>
                    <Select
                      value={itemsPerPage}
                      onChange={handleItemsPerPageChange}
                      displayEmpty
                      sx={{
                        height: "50px",
                        borderRadius: "100px",
                        "& .MuiSelect-select": {
                          padding: "8px 14px",
                        },
                      }}
                    >
                      <MenuItem value={12}>Show 12 items per page</MenuItem>
                      <MenuItem value={24}>Show 24 items per page</MenuItem>
                      <MenuItem value={36}>Show 36 items per page</MenuItem>
                    </Select>
                  </FormControl> */}
                    </div>
                  </div>
                )}
              </>
            ) :
              (
                <p className="text-center text-[14px] font-Montserrat font-medium leading-[17px] text-[#666]">
                  No Courses Found.
                </p>
              )
          }
        </>
      )}
    </div>
  );
};

export default AllCourses;
