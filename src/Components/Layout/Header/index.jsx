import React, { useEffect, useState, useRef, useContext } from "react";
import { IoSearch, IoMenu, IoClose } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaAngleDown, FaLeaf } from "react-icons/fa6";
import SignIn from "../../Logs/SignIn/";
import SignUp from "../../Logs/SignUp";
import ForgotPassword from "../../Logs/ForgotPassword";
import "./header.css";
import { Link } from "react-router-dom";
import MegaMenu from "../../DropDowns/MegaMenu";
import InputAutosearch from "../../../Components/InputAutosearch";
import SignInn2 from "../../Logs/SignInn2";
import SignUp2 from "../../Logs/SignUp2";
import ForgotPassword2 from "../../Logs/ForgotPassword2";
import Container from "../../../Components/Container";
import { UserContext } from "../../../UserContext";
import { Box, Menu, MenuItem } from "@mui/material";
import {
  Logout,
  PersonOutlined,
} from "@mui/icons-material";
import UserProfileMenu from "./UserProfileMenu";
import { toast } from "react-toastify";

const Header = () => {
  const { user } = useContext(UserContext);
  const [isSticky, setIsSticky] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);
  const [accountDropdown, setAccountDropdown] = useState(false);
  const [exploreDropDown, setExploreDropDown] = useState(false);
  const [login, setLogin] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [freeCoursesHover, setFreeCoursesHover] = useState(false);
  const [hideInex, setHideInex] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const [showSignIn2, setShowSignIn2] = useState(false);
  const [showSignUp2, setShowSignUp2] = useState(false);
  const [showForgotPassword2, setShowForgotPassword2] = useState(false);

  useEffect(() => {
    const handler = () => setShowSignIn2(true);
    window.addEventListener('show-login-popup', handler);

    return () => {
      window.removeEventListener('show-login-popup', handler);
    };
  }, []);

  const handleShowSignUp = () => {
    setShowSignIn2(false);
    setShowSignUp2(true);
  };

  const handleShowSignIn = () => {
    setShowSignUp2(false);
    setShowSignIn2(true);
  };

  const handleShowForgotPassword = () => {
    setShowSignIn2(false);
    setShowForgotPassword2(true);
  };

  const [inputsearch, setInputSearch] = useState(false);
  const inputSearchRef = useRef();

  const closeInputOutsideClick = (e) => {
    if (
      inputsearch &&
      inputSearchRef.current &&
      !inputSearchRef.current.contains(e.target)
    ) {
      setInputSearch(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeInputOutsideClick);
    return () =>
      document.removeEventListener("mousedown", closeInputOutsideClick);
  }, [inputsearch]);

  const exploreRef = useRef(null);
  const megaMenuRef = useRef(null);

  const togggleMobileSearch = () => {
    setMobileSearchOpen(!mobileSearchOpen);
  };

  const handleScroll = () => {
    setIsSticky(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    // Clear auth tokens or user data here
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logout successful!");
    setAccountDropdown(false);
    setLogin(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        exploreRef.current &&
        !exploreRef.current.contains(event.target) &&
        exploreDropDown
      ) {
        setExploreDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [exploreDropDown]);

  useEffect(() => {
    if (user) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [user]);

  const toggleExploreDropDown = () => {
    setExploreDropDown((prevState) => !prevState);
  };

  useEffect(() => {
    if (activeModal || exploreDropDown || toggleNav || mobileSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeModal, exploreDropDown, toggleNav, mobileSearchOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (exploreRef.current && !exploreRef.current.contains(event.target)) {
        setExploreDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHideInex(true);
      } else {
        setHideInex(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* <div className="bg-white w-full h-10 fixed z-20 top-0 inset-x-0"></div> */}
      <header
        className={`header  transform transition-all duration-300 ease-in-out fixed left-0 right-0 z-30 w-full
          ${isSticky ? "sticky mt-2" : "mt-[9px] md:mt-[15px] lg:mt-4"}`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-2 md:px-4 lg:px-8">
          <div
            className="
            bg-[#282828] 
            rounded-[12px] lg:rounded-[20px] 
            h-[50px] md:h-[53px] lg:h-[68px] 
            px-[27px] md:pl-[26px] md:pr-[19px] lg:px-10"
          >
            <div
              className={`header-content w-full flex items-center gap-5 duration-300 h-full`}
            >
              <div className="logo">
                <div
                  className={`flex items-center justify-start ${hideInex ? "overflow-hidden" : "overflow-hidden"
                    }`}
                >
                  <div
                    className={`duration-[1.6s] ease-linear ${hideInex
                      ? " -translate-x-[59px]  lg:-translate-x-[59px]  xl:-translate-x-[59px]"
                      : ""
                      }`}
                  >
                    <Link to="/">
                      <img
                        className="w-[97px] h-[23px] lg:w-[100px] lg:h-[24px] max-w-none"
                        src="/images/LoGoInexa.svg"
                        alt="logo"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              <nav
                className={`navbar fixed px-4 py-12 lg:px-0 lg:py-0 top-[68px] h-screen w-full lg:w-full lg:h-max bg-blackColor2 lg:bg-transparent lg:static lg:flex items-center justify-between gap-x-3 gap-y-3 duration-300 ease-in-out ${toggleNav ? "right-0" : "-right-[110%]"
                  }`}
              >
                <div className="nav-left flex flex-row gap-x-5 max-w-[756px] w-full">
                  <button
                    className="explore flex relativ group "
                    onClick={toggleExploreDropDown}
                    onMouseEnter={() => setExploreDropDown(true)}
                    ref={exploreRef}
                  >
                    <div
                      className={`btn-primary h-[36px] flex items-center justify-center group border-[1.3px] relative w-full overflow-hidden order-2 lg:order-1 min-w-[115px] px-[18px]
                   ${exploreDropDown ? "z-30" : ""}`}
                    >
                      <div className="font-medium -tracking-[.02em] text-[14px]">
                        Explore
                      </div>
                      <img
                        className={`inline-block ms-3 duration-300 ${exploreDropDown ? "-rotate-180" : ""
                          }`}
                        src="/images/btn-arrow.svg"
                        alt="image"
                      />
                    </div>
                    <div
                      className={`explore-menus w-full cursor-default absolute z-20 duration-300 left-0   
                    ${exploreDropDown
                          ? "opacity-100 visible top-[100px]"
                          : "opacity-0 invisible top-32"
                        } `}
                      ref={megaMenuRef}
                    >
                      <MegaMenu />
                    </div>
                  </button>
                  <form className="relative order-1 lg:order-2 hidden lg:block w-[calc(100%-135px)]">
                    <input
                      ref={inputSearchRef}
                      className="btn-search w-full h-[36px] leading-[3] placeholder:text-white placeholder:font-Montserrat 
                    placeholder:text-[12px] placeholder:font-normal autofill:bg-black pr-12"
                      type="search"
                      name="search"
                      id="search"
                      placeholder="What do you want to learn?"
                      autoComplete="off"
                      onClick={() => setInputSearch(true)}
                    />

                    {/* <div className="input-search-box absolute w-full">
                      <div className="input-search-box-content bg-white shadow-xl px-6 py-4 rounded-3xl">
                       <div className="recent-viewed">
                        <h4>Recently viewed</h4>
                        <div className="recent-view-tab">

                        </div>
                       </div>
                      </div>
                    </div> */}
                    <div
                      ref={inputSearchRef}
                      className={` ${inputsearch
                        ? "top-[70px] opacity-100 visible"
                        : "top-[40px] opacity-0 invisible"
                        } absolute w-full  duration-300`}
                    >
                      <InputAutosearch />
                    </div>

                    <div
                      className="searh-icon absolute right-[8px] top-1/2 -translate-y-1/2 bg-primaryColor w-[28px] h-[28px]
                   rounded-full text-white cursor-pointer duration-300 hover:opacity-70 flex justify-center items-center"
                    >
                      <img
                        className="duration-300 w-[12px] h-[12px]"
                        src="/images/search.svg"
                        alt="search icon"
                      />
                    </div>
                  </form>
                </div>
                <div className="nav-right flex flex-col lg:flex-row lg:items-center gap-x-2">
                  <Link to="/about" className="relative group flex">
                    <div className="btn-primary text-[#fff] h-[36px] flex items-center justify-center hover:text-white border-[1.3px] border-[#3301f9] group relative overflow-hidden order-2 lg:order-1 w-full min-w-[124px] px-0 ">
                      <div className="font-medium -tracking-[.02em] text-[14px]">
                        <span>For Business</span>
                        {/* <span className="top-0 inline-block duration-300 ease-out group-hover:-translate-y-9">
                      For Business
                      </span>
                      <span className="inline-block absolute duration-300 translate-y-9 group-hover:translate-y-0">
                        For Business
                      </span> */}
                      </div>
                    </div>
                  </Link>

                  {login ? (
                    <div className="login flex justify-center">
                      <div className="login-content flex items-center gap-2">
                        <div className="user-avtar">
                          <img
                            className="size-10 border rounded-full bg-white"
                            src="/images/user-avtar.png"
                            alt="user avtar"
                          />
                        </div>
                        <div className="name text-white capitalize">
                          {user?.first_name} {user?.last_name}
                        </div>
                        <div className="handle-accnt relative">
                          <div
                            className="text-white border border-white p-1 rounded-full cursor-pointer"
                            onClick={() => setAccountDropdown(!accountDropdown)}
                          >
                            <FaAngleDown />
                          </div>
                          {accountDropdown && (
                            <div className="acnt-dropdown bg-blackColor2 text-white capitalize absolute top-10 right-0 rounded-2xl overflow-hidden border-2">
                              <ul className="w-[180px]">
                                <li
                                  className="px-3 py-2 cursor-pointer hover:bg-blackColor duration-300"
                                  onClick={handleLogout}
                                >
                                  Log Out
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="free-trial flex flex-col lg:flex-row gap-2">
                      <div className="login-popup relative flex">
                        <button
                          className="relative group flex w-full"
                          onClick={() => setShowSignIn2(true)}
                        >
                          <div className="btn group relative w-full overflow-hidden order-2 lg:order-1 py-[6px] min-w-[86px] px-0">
                            <div className="font-medium -tracking-[.02em] text-[14px]">
                              Sign In
                            </div>
                          </div>
                        </button>
                      </div>
                      <div className="sign-in-popup">
                        <button
                          className="relative group flex w-full"
                          onClick={() => setShowSignUp2(true)}
                        >
                          <div className="btn-blue group relative w-full overflow-hidden order-2 lg:order-1 hover:border-primaryColor py-[6px] min-w-[123px] px-0">
                            <div className="text-[14px] font-medium -tracking-[0.02em]">
                              Join for Free
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </nav>

              <div className="mob-btns ml-auto lg:ml-0 w-auto lg:w-1/2 text-white text-3xl lg:hidden flex justify-end items-center gap-3 lg:gap-2">
                <div className="mobile-search-bar">
                  <form
                    className={`mobile-search-input bg-blackColor2 rounded-3xl fixed z-10 mx-4 left-0 right-0 px-5 h-[70px] lg:h-100 flex items-center justify-center gap-4 duration-300  ${mobileSearchOpen ? "top-0" : "-top-28"
                      }`}
                    action=""
                  >
                    <IoSearch className="text-white text-2xl cursor-pointer" />
                    <input
                      className="text-white w-[90%] text-[16px] focus:outline-none bg-transparent  duration-300 ease-linear -translate-y  placeholder:font-light"
                      type="search"
                      name="serch"
                      id="search"
                      placeholder="Type your search"
                      autoComplete="off"
                    />
                    <IoClose
                      className="cursor-pointer"
                      onClick={togggleMobileSearch}
                    />

                    <div
                      style={{ display: "none" }}
                      ref={inputSearchRef}
                      className={`absolute ${mobileSearchOpen ? "top-[70px]" : "-top-[500px]"
                        }`}
                    >
                      <InputAutosearch />
                    </div>
                  </form>

                  <div
                    className={`mobile-search-overlay bg-black bg-opacity-90 rounded-none w-full fixed left-0 right-0 h-screen inset-0 -top-4 z-0 
                  ${mobileSearchOpen ? "block" : "hidden"}`}
                    onClick={() => setMobileSearchOpen(false)}
                  ></div>
                  <div className="mobile-search-icon w-[14px] h-[14px] lg:w-[18px] lg:h-[18px] flex justify-center items-center">
                    <IoSearch
                      className="text-white text-2xl cursor-pointer"
                      onClick={togggleMobileSearch}
                    />
                  </div>
                </div>

                <div
                  className="cursor-pointer relative duration-300 ease-in-out text-3xl w-[26px] h-[18px] flex items-center justify-center"
                  onClick={() => setToggleNav(!toggleNav)}
                >
                  {toggleNav ? <IoClose /> : <HiMenuAlt3 />}
                </div>
              </div>
            </div>
            <div
              className={`drop-down-list absolute left-[400px] top-20 ${freeCoursesHover ? "" : "hidden"
                }`}
              id="free-course"
              onMouseEnter={() => setFreeCoursesHover(true)}
              onMouseLeave={() => setFreeCoursesHover(false)}
            >
              {/* <DropDownList /> */}
            </div>
          </div>
        </div>
      </header>

      {/*--- Overlay ---*/}
      {/* {(exploreDropDown || activeModal ) && (
        <div className={`overlay fixed  inset-0 rounded-none h-screen w-full bg-black bg-opacity-90 cursor-default ${exploreDropDown ? "z-20" : "z-30"} `}
        onClick={() => {closeModals(); setExploreDropDown(false); setMobileSearchOpen(false) }}>
        </div>
      )} */}
      {/*--- End Overlay ---*/}
      {/* {activeModal === "signin" && (
        <div className="modal-container fixed w-full flex justify-center md:w-max z-[32] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <SignIn
            switchToSignUp={() => toggleModal("signup")}
            switchToForgotPassword={() => toggleModal("forgotpassword")} closeModals={closeModals}
          />
        </div>
      )}
      {activeModal === "signup" && (
        <div className="modal-container fixed w-full flex justify-center md:w-max z-[32] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >
          <SignUp switchToSignIn={() => toggleModal("signin")} closeModals={closeModals}/>
        </div>
      )}
      {activeModal === "forgotpassword" && (
        <div className="modal-container fixed w-full flex justify-center md:w-max z-[32] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ForgotPassword switchToSignIn={() => toggleModal("signin")} closeModals={closeModals} />
        </div>
      )} */}

      {/* <SignInn2 /> */}
      {/* <SignUp2 /> */}
      {/* {showSignIn2 && (<SignInn2 />)} */}

      {showSignIn2 && (
        <SignInn2
          open={showSignIn2}
          onClose={() => setShowSignIn2(false)}
          switchToSignUp={handleShowSignUp}
          setLogin={setLogin}
          switchToForgotPasword={handleShowForgotPassword}
        />
      )}

      {showSignUp2 && (
        <SignUp2
          open={showSignUp2}
          onClose={() => setShowSignUp2(false)}
          switchToSignIn={handleShowSignIn}
        />
      )}

      {showForgotPassword2 && (
        <ForgotPassword2
          open={showForgotPassword2}
          onClose={() => setShowForgotPassword2(false)}
          switchToSignIn={handleShowSignIn}
        />
      )}

      {/* <ForgotPassword2 /> */}
    </>
  );
};

export default Header;
