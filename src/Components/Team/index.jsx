import BlackButton from "../Buttons/BlackButton";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <>
      <div className="pt-[59px] pb-[100px] lg:py-[80px] hidden md:grid md:gap-[38px] lg:gap-8">
        <ul className="flex flex-wrap gap-x-4 lg:gap-x-[22px] xl:gap-x-[45px] gap-y-12 lg:w-full md:[&>li]:w-[190px] lg:[&>li]:w-[300px]">
          <li>
            <div className=" w-full">
              <div className="title mb-2">
                <div className="subheading subheading-black m-0 text-[#282828] leading-[28px] font-medium text-[14px] md:text-[16px] lg:-tracking-[.02em]">
                  teams
                </div>

                <h2
                  className="animated-text flex flex-wrap max-w-[100%] md:max-w-[206px] lg:max-w-full -tracking-[.05em] text-[20px] md:text-[36px] 
              lg:text-[48px] font-medium leading-[30px] md:leading-[40px] lg:leading-[64px] m-0 !p-0"
                >
                  <div className="word">
                    <span data-aos="fade-up" data-aos-delay="100">
                      {" "}
                      M
                    </span>
                    <span data-aos="fade-up" data-aos-delay="150">
                      e
                    </span>
                    <span data-aos="fade-up" data-aos-delay="200">
                      e
                    </span>
                    <span data-aos="fade-up" data-aos-delay="250">
                      t
                    </span>
                  </div>
                  <div className="word">
                    <span data-aos="fade-up" data-aos-delay="300">
                      I
                    </span>
                    <span data-aos="fade-up" data-aos-delay="350">
                      n
                    </span>
                    <span data-aos="fade-up" data-aos-delay="400">
                      e
                    </span>
                    <span data-aos="fade-up" data-aos-delay="450">
                      x
                    </span>
                    <span data-aos="fade-up" data-aos-delay="500">
                      a
                    </span>
                  </div>
                  <div className="word">
                    <span data-aos="fade-up" data-aos-delay="550">
                      I
                    </span>
                    <span data-aos="fade-up" data-aos-delay="600">
                      n
                    </span>
                    <span data-aos="fade-up" data-aos-delay="650">
                      s
                    </span>
                    <span data-aos="fade-up" data-aos-delay="700">
                      t
                    </span>
                    <span data-aos="fade-up" data-aos-delay="750">
                      r
                    </span>
                    <span data-aos="fade-up" data-aos-delay="800">
                      u
                    </span>
                    <span data-aos="fade-up" data-aos-delay="850">
                      c
                    </span>
                    <span data-aos="fade-up" data-aos-delay="900">
                      t
                    </span>
                    <span data-aos="fade-up" data-aos-delay="950">
                      o
                    </span>
                    <span data-aos="fade-up" data-aos-delay="1000">
                      r
                    </span>
                    <span data-aos="fade-up" data-aos-delay="1050">
                      s
                    </span>
                  </div>
                </h2>
              </div>
              <div className="grid gap-5 md:gap-6">
                <p className="text-[#282828] text-[10px] md:text-[15px] lg:text-[16px] font-medium leading-[15px] md:leading-[18px] lg:leading-[28px] lg:-tracking-[.02em]">
                  Our specialized subject matter.
                </p>
                <BlackButton btnText="more about" className="h-[40px]" />
              </div>
            </div>
          </li>

          <li className="md:ml-auto">
            <div className="group team-member team-member-widget h-max border-[1.5px] border-borderColor2 rounded-30 overflow-hidden w-[190px] lg:w-[300px]">
              <div className="image relative w-full h-[198px] lg:h-[316px] bg-borderColor2 rounded-30 overflow-hidden">
                <Link to="/">
                  <img
                    className="absolute h-full object-cover rounded-30 object-right-top group-hover:object-center duration-300 ease-linear"
                    src="/images/tutor-image-1.jpg"
                    alt="tutor"
                  />
                </Link>
                <div className="stream text-[18px] lg:text-[40px] font-medium -rotate-90 w-max absolute -right-10 lg:-right-[104px] bottom-14 lg:bottom-32 font-Poppins text-whiteColor">
                  Data Science
                </div>
              </div>
              <div className="member-info bg-white relative z-[2] py-[18px] lg:py-6 pl-4 lg:pl-8 pr-2">
                <div className="rounded-border absolute w-[46px] lg:w-[70px] h-[46px] lg:h-[64px] bg-white !bottom-12 lg:!bottom-[70px] left-[26px] lg:left-[42px] rounded-t-full border-none"></div>
                <div className="socials bg-gray-40 w-14 h-[180px] absolute !bottom-[50px] lg:!bottom-[70px]  left-[21px] lg:left-[49px] flex justify-center items-end rounded-full overflow-hidden">
                  <div className="main-icon bg-blackColor2 size-[34px] lg:size-14  z-10 flex items-center justify-center rounded-full ">
                    <img src="/images/team_A_white.svg" alt="icon" />
                  </div>
                  <ul
                    className="social-icons absolute bg-blackColor2 text-white w-[34px] lg:w-14 hidden lg:flex flex-col  
                        items-center py-5 gap-4 rounded-full translate-y-[152px] z-[10] transition transform duration-300 ease-linear
                        "
                  >
                    <li className="hover:text-primaryColor duration-300">
                      <Link to="" target="_blank">
                        {/* <FaFacebookF /> */}
                        <img src="/images/Instructors-User.svg" alt="icon" />
                      </Link>
                    </li>
                    <li className="hover:text-primaryColor duration-300">
                      <Link to="https://www.linkedin.com" target="_blank">
                        {/* <SlSocialLinkedin /> */}
                        <img
                          src="/images/Instructors-linkedin.svg"
                          alt="icon"
                        />
                      </Link>
                    </li>
                    <li className="hover:text-primaryColor duration-300">
                      <Link to="https://www.youtube.com" target="_blank">
                        {/* <FaYoutube /> */}
                        <img src="/images/Instructors-youtube.svg" alt="icon" />
                      </Link>
                    </li>
                    <li className="hover:text-primaryColor duration-300">
                      <Link to="https://www.twitter.com" target="_blank">
                        {/* <FaXTwitter /> */}
                        <img src="/images/Instructors-twitter.svg" alt="icon" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="about-info ">
                  <Link
                    to="/"
                    className=" text-headingColor text-[14px] lg:text-[20px] capitalize font-Poppins font-medium leading-[21px] lg:leading-[30px]"
                  >
                    Alan Begham
                  </Link>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="group team-member team-member-widget h-max border-[1.5px] border-borderColor2 rounded-30 overflow-hidden w-[190px] lg:w-[300px]">
              <div className="image relative w-full h-[198px] lg:h-[316px] bg-borderColor2 rounded-30 overflow-hidden">
                <Link to="/">
                  <img
                    className="absolute h-full object-cover rounded-30 object-right-top group-hover:object-center duration-300 ease-linear"
                    src="/images/tutor-image-1.jpg"
                    alt="tutor"
                  />
                </Link>
                <div className="stream text-[18px] lg:text-[40px] font-medium -rotate-90 w-max absolute -right-10 lg:-right-[104px] bottom-14 lg:bottom-32 font-Poppins text-whiteColor">
                  Data Science
                </div>
              </div>
              <div className="member-info bg-white relative z-[2] py-[18px] lg:py-6 pl-4 lg:pl-8 pr-2">
                <div className="rounded-border absolute w-[46px] lg:w-[70px] h-[46px] lg:h-[64px] bg-white !bottom-12 lg:!bottom-[70px] left-[26px] lg:left-[42px] rounded-t-full border-none"></div>
                <div className="socials bg-gray-40 w-14 h-[180px] absolute !bottom-[50px] lg:!bottom-[70px]  left-[21px] lg:left-[49px] flex justify-center items-end rounded-full overflow-hidden">
                  <div className="main-icon bg-blackColor2 size-[34px] lg:size-14  z-10 flex items-center justify-center rounded-full ">
                    <img src="/images/team_A_white.svg" alt="icon" />
                  </div>
                  <ul
                    className="social-icons absolute bg-blackColor2 text-white w-[34px] lg:w-14 hidden lg:flex flex-col  
                        items-center py-5 gap-4 rounded-full translate-y-[152px] z-[10] transition transform duration-300 ease-linear
                        "
                  >
                    <li className="hover:text-primaryColor duration-300">
                      <Link to="" target="_blank">
                        {/* <FaFacebookF /> */}
                        <img src="/images/Instructors-User.svg" alt="icon" />
                      </Link>
                    </li>
                    <li className="hover:text-primaryColor duration-300">
                      <Link to="https://www.linkedin.com" target="_blank">
                        {/* <SlSocialLinkedin /> */}
                        <img
                          src="/images/Instructors-linkedin.svg"
                          alt="icon"
                        />
                      </Link>
                    </li>
                    <li className="hover:text-primaryColor duration-300">
                      <Link to="https://www.youtube.com" target="_blank">
                        {/* <FaYoutube /> */}
                        <img src="/images/Instructors-youtube.svg" alt="icon" />
                      </Link>
                    </li>
                    <li className="hover:text-primaryColor duration-300">
                      <Link to="https://www.twitter.com" target="_blank">
                        {/* <FaXTwitter /> */}
                        <img src="/images/Instructors-twitter.svg" alt="icon" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="about-info ">
                  <Link
                    to="/"
                    className=" text-headingColor text-[14px] lg:text-[20px] capitalize font-Poppins font-medium leading-[21px] lg:leading-[30px]"
                  >
                    Alan Begham
                  </Link>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <ul className="flex flex-wrap gap-x-4 md:ml-auto lg:gap-x-[22px] xl:gap-x-[45px] gap-y-12 lg:w-full md:[&>li]:w-[190px] lg:[&>li]:w-[300px]">
          <li className="lg:ml-auto xl:-mt-[198px]">
            <div className="group team-member team-member-widget h-max border-[1.5px] border-borderColor2 rounded-30 overflow-hidden w-[190px] lg:w-[300px]">
              <div className="image relative w-full h-[198px] lg:h-[316px] bg-borderColor2 rounded-30 overflow-hidden">
                <Link to="/">
                  <img
                    className="absolute h-full object-cover rounded-30 object-right-top group-hover:object-center duration-300 ease-linear"
                    src="/images/tutor-image-1.jpg"
                    alt="tutor"
                  />
                </Link>
                <div className="stream text-[18px] lg:text-[40px] font-medium -rotate-90 w-max absolute -right-10 lg:-right-[104px] bottom-14 lg:bottom-32 font-Poppins text-whiteColor">
                  Data Science
                </div>
              </div>
              <div className="member-info bg-white relative z-[2] py-[18px] lg:py-6 pl-4 lg:pl-8 pr-2">
                <div className="rounded-border absolute w-[46px] lg:w-[70px] h-[46px] lg:h-[64px] bg-white !bottom-12 lg:!bottom-[70px] left-[26px] lg:left-[42px] rounded-t-full border-none"></div>
                <div className="socials bg-gray-40 w-14 h-[180px] absolute !bottom-[50px] lg:!bottom-[70px]  left-[21px] lg:left-[49px] flex justify-center items-end rounded-full overflow-hidden">
                  <div className="main-icon bg-blackColor2 size-[34px] lg:size-14  z-10 flex items-center justify-center rounded-full ">
                    <img src="/images/team_A_white.svg" alt="icon" />
                  </div>
                  <ul
                    className="social-icons absolute bg-blackColor2 text-white w-[34px] lg:w-14 hidden lg:flex flex-col  
                        items-center py-5 gap-4 rounded-full translate-y-[152px] z-[10] transition transform duration-300 ease-linear
                        "
                  >
                    <li className="hover:text-primaryColor duration-300">
                      <Link to="" target="_blank">
                        {/* <FaFacebookF /> */}
                        <img src="/images/Instructors-User.svg" alt="icon" />
                      </Link>
                    </li>
                    <li className="hover:text-primaryColor duration-300">
                      <Link to="https://www.linkedin.com" target="_blank">
                        {/* <SlSocialLinkedin /> */}
                        <img
                          src="/images/Instructors-linkedin.svg"
                          alt="icon"
                        />
                      </Link>
                    </li>
                    <li className="hover:text-primaryColor duration-300">
                      <Link to="https://www.youtube.com" target="_blank">
                        {/* <FaYoutube /> */}
                        <img src="/images/Instructors-youtube.svg" alt="icon" />
                      </Link>
                    </li>
                    <li className="hover:text-primaryColor duration-300">
                      <Link to="https://www.twitter.com" target="_blank">
                        {/* <FaXTwitter /> */}
                        <img src="/images/Instructors-twitter.svg" alt="icon" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="about-info ">
                  <Link
                    to="/"
                    className=" text-headingColor text-[14px] lg:text-[20px] capitalize font-Poppins font-medium leading-[21px] lg:leading-[30px]"
                  >
                    Alan Begham
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="group team-member team-member-widget h-max border-[1.5px] border-borderColor2 rounded-30 overflow-hidden w-[190px] lg:w-[300px]">
              <div className="image relative w-full h-[198px] lg:h-[316px] bg-borderColor2 rounded-30 overflow-hidden">
                <Link to="/">
                  <img
                    className="absolute h-full object-cover rounded-30 object-right-top group-hover:object-center duration-300 ease-linear"
                    src="/images/tutor-image-1.jpg"
                    alt="tutor"
                  />
                </Link>
                <div className="stream text-[18px] lg:text-[40px] font-medium -rotate-90 w-max absolute -right-10 lg:-right-[104px] bottom-14 lg:bottom-32 font-Poppins text-whiteColor">
                  Data Science
                </div>
              </div>
              <div className="member-info bg-white relative z-[2] py-[18px] lg:py-6 pl-4 lg:pl-8 pr-2">
                <div className="rounded-border absolute w-[46px] lg:w-[70px] h-[46px] lg:h-[64px] bg-white !bottom-12 lg:!bottom-[70px] left-[26px] lg:left-[42px] rounded-t-full border-none"></div>
                <div className="socials bg-gray-40 w-14 h-[180px] absolute !bottom-[50px] lg:!bottom-[70px]  left-[21px] lg:left-[49px] flex justify-center items-end rounded-full overflow-hidden">
                  <div className="main-icon bg-blackColor2 size-[34px] lg:size-14  z-10 flex items-center justify-center rounded-full ">
                    <img src="/images/team_A_white.svg" alt="icon" />
                  </div>
                  <ul
                    className="social-icons absolute bg-blackColor2 text-white w-[34px] lg:w-14 hidden lg:flex flex-col  
                        items-center py-5 gap-4 rounded-full translate-y-[152px] z-[10] transition transform duration-300 ease-linear
                        "
                  >
                    <li className="hover:text-primaryColor duration-300">
                      <Link to="" target="_blank">
                        {/* <FaFacebookF /> */}
                        <img src="/images/Instructors-User.svg" alt="icon" />
                      </Link>
                    </li>
                    <li className="hover:text-primaryColor duration-300">
                      <Link to="https://www.linkedin.com" target="_blank">
                        {/* <SlSocialLinkedin /> */}
                        <img
                          src="/images/Instructors-linkedin.svg"
                          alt="icon"
                        />
                      </Link>
                    </li>
                    <li className="hover:text-primaryColor duration-300">
                      <Link to="https://www.youtube.com" target="_blank">
                        {/* <FaYoutube /> */}
                        <img src="/images/Instructors-youtube.svg" alt="icon" />
                      </Link>
                    </li>
                    <li className="hover:text-primaryColor duration-300">
                      <Link to="https://www.twitter.com" target="_blank">
                        {/* <FaXTwitter /> */}
                        <img src="/images/Instructors-twitter.svg" alt="icon" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="about-info ">
                  <Link
                    to="/"
                    className=" text-headingColor text-[14px] lg:text-[20px] capitalize font-Poppins font-medium leading-[21px] lg:leading-[30px]"
                  >
                    Alan Begham
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="group team-member team-member-widget h-max border-[1.5px] border-borderColor2 rounded-30 overflow-hidden w-[190px] lg:w-[300px]">
              <div className="image relative w-full h-[198px] lg:h-[316px] bg-borderColor2 rounded-30 overflow-hidden">
                <Link to="/">
                  <img
                    className="absolute h-full object-cover rounded-30 object-right-top group-hover:object-center duration-300 ease-linear"
                    src="/images/tutor-image-1.jpg"
                    alt="tutor"
                  />
                </Link>
                <div className="stream text-[18px] lg:text-[40px] font-medium -rotate-90 w-max absolute -right-10 lg:-right-[104px] bottom-14 lg:bottom-32 font-Poppins text-whiteColor">
                  Data Science
                </div>
              </div>
              <div className="member-info bg-white relative z-[2] py-[18px] lg:py-6 pl-4 lg:pl-8 pr-2">
                <div className="rounded-border absolute w-[46px] lg:w-[70px] h-[46px] lg:h-[64px] bg-white !bottom-12 lg:!bottom-[70px] left-[26px] lg:left-[42px] rounded-t-full border-none"></div>
                <div className="socials bg-gray-40 w-14 h-[180px] absolute !bottom-[50px] lg:!bottom-[70px]  left-[21px] lg:left-[49px] flex justify-center items-end rounded-full overflow-hidden">
                  <div className="main-icon bg-blackColor2 size-[34px] lg:size-14  z-10 flex items-center justify-center rounded-full ">
                    <img src="/images/team_A_white.svg" alt="icon" />
                  </div>
                  <ul
                    className="social-icons absolute bg-blackColor2 text-white w-[34px] lg:w-14 hidden lg:flex flex-col  
                        items-center py-5 gap-4 rounded-full translate-y-[152px] z-[10] transition transform duration-300 ease-linear
                        "
                  >
                    <li className="hover:text-primaryColor duration-300">
                      <Link to="" target="_blank">
                        <img src="/images/Instructors-User.svg" alt="icon" />
                      </Link>
                    </li>
                    <li className="hover:text-primaryColor duration-300">
                      <Link to="https://www.linkedin.com" target="_blank">
                        <img
                          src="/images/Instructors-linkedin.svg"
                          alt="icon"
                        />
                      </Link>
                    </li>
                    <li className="hover:text-primaryColor duration-300">
                      <Link to="https://www.youtube.com" target="_blank">
                        <img src="/images/Instructors-youtube.svg" alt="icon" />
                      </Link>
                    </li>
                    <li className="hover:text-primaryColor duration-300">
                      <Link to="https://www.twitter.com" target="_blank">
                        <img src="/images/Instructors-twitter.svg" alt="icon" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="about-info ">
                  <Link
                    to="/"
                    className=" text-headingColor text-[14px] lg:text-[20px] capitalize font-Poppins font-medium leading-[21px] lg:leading-[30px]"
                  >
                    Alan Begham
                  </Link>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="grid md:hidden gap-7 pb-[52px] pt-10">
        <div className=" w-full">
          <div className="title mb-2">
            <div className="subheading subheading-black m-0 text-[#282828] leading-[28px] font-medium text-[14px] md:text-[16px] lg:-tracking-[.02em]">
              teams
            </div>

            <h2
              className="animated-text flex flex-wrap max-w-[100%] md:max-w-[206px] lg:max-w-full -tracking-[.05em] text-[20px] md:text-[36px] 
              lg:text-[48px] font-medium leading-[30px] md:leading-[40px] lg:leading-[64px] m-0 !p-0"
            >
              <div className="word">
                <span data-aos="fade-up" data-aos-delay="100">
                  {" "}
                  M
                </span>
                <span data-aos="fade-up" data-aos-delay="150">
                  e
                </span>
                <span data-aos="fade-up" data-aos-delay="200">
                  e
                </span>
                <span data-aos="fade-up" data-aos-delay="250">
                  t
                </span>
              </div>
              <div className="word">
                <span data-aos="fade-up" data-aos-delay="300">
                  I
                </span>
                <span data-aos="fade-up" data-aos-delay="350">
                  n
                </span>
                <span data-aos="fade-up" data-aos-delay="400">
                  e
                </span>
                <span data-aos="fade-up" data-aos-delay="450">
                  x
                </span>
                <span data-aos="fade-up" data-aos-delay="500">
                  a
                </span>
              </div>
              <div className="word">
                <span data-aos="fade-up" data-aos-delay="550">
                  I
                </span>
                <span data-aos="fade-up" data-aos-delay="600">
                  n
                </span>
                <span data-aos="fade-up" data-aos-delay="650">
                  s
                </span>
                <span data-aos="fade-up" data-aos-delay="700">
                  t
                </span>
                <span data-aos="fade-up" data-aos-delay="750">
                  r
                </span>
                <span data-aos="fade-up" data-aos-delay="800">
                  u
                </span>
                <span data-aos="fade-up" data-aos-delay="850">
                  c
                </span>
                <span data-aos="fade-up" data-aos-delay="900">
                  t
                </span>
                <span data-aos="fade-up" data-aos-delay="950">
                  o
                </span>
                <span data-aos="fade-up" data-aos-delay="1000">
                  r
                </span>
                <span data-aos="fade-up" data-aos-delay="1050">
                  s
                </span>
              </div>
            </h2>
          </div>
          <div className="grid gap-5 md:gap-6">
            <p
              className="text-[#282828] text-[10px] md:text-[15px] lg:text-[16px] font-medium leading-[15px] md:leading-[18px] 
            lg:leading-[28px] lg:-tracking-[.02em] font-Poppins md:font-Montserrat"
            >
              Our specialized subject matter.
            </p>
            <BlackButton btnText="more about" className="h-[40px]" />
          </div>
        </div>

        <div className="px-3">
          <ul className="flex gap-[13px] mb-8">
            <li>
              <div className="group team-member team-member-widget h-[210px] border-[1.5px] border-borderColor2 rounded-[15px] overflow-hidden w-[154px]">
                <div className="image relative w-full h-[164px] bg-borderColor2 rounded-[15px] overflow-hidden">
                  <Link to="/">
                    <img
                      className="absolute h-full object-cover rounded-30 object-right-top group-hover:object-center duration-300 ease-linear"
                      src="/images/tutor-image-1.jpg"
                      alt="tutor"
                    />
                  </Link>
                  <div className="stream text-[12px] font-medium -rotate-90 w-[210px] absolute -right-[-90px] bottom-[136px] font-Poppins text-whiteColor">
                    Data Science
                  </div>
                </div>
                <div className="member-info bg-white relative z-[2] py-[13px] pl-4 pr-2">
                  <div className="rounded-border absolute w-[28px] lg:w-[70px] h-[28px] lg:h-[64px] bg-white !bottom-10 lg:!bottom-[70px] left-[26px] lg:left-[42px] rounded-t-full border-none"></div>
                  <div className="socials bg-gray-40 w-14 h-[180px] absolute !bottom-[46px] left-[12px]  flex justify-center items-end rounded-full overflow-hidden">
                    <div className="main-icon bg-blackColor2 size-[17px] md:size-[34px] lg:size-14  z-10 flex items-center justify-center rounded-full ">
                      <img src="/images/team_A_white.svg" alt="icon" />
                    </div>
                    <ul
                      className="social-icons absolute bg-blackColor2 text-white w-[34px] lg:w-14 hidden lg:flex flex-col  
                        items-center py-5 gap-4 rounded-full translate-y-[152px] z-[10] transition transform duration-300 ease-linear
                        "
                    >
                      <li className="hover:text-primaryColor duration-300">
                        <Link to="" target="_blank">
                          <img src="/images/Instructors-User.svg" alt="icon" />
                        </Link>
                      </li>
                      <li className="hover:text-primaryColor duration-300">
                        <Link to="https://www.linkedin.com" target="_blank">
                          <img
                            src="/images/Instructors-linkedin.svg"
                            alt="icon"
                          />
                        </Link>
                      </li>
                      <li className="hover:text-primaryColor duration-300">
                        <Link to="https://www.youtube.com" target="_blank">
                          <img
                            src="/images/Instructors-youtube.svg"
                            alt="icon"
                          />
                        </Link>
                      </li>
                      <li className="hover:text-primaryColor duration-300">
                        <Link to="https://www.twitter.com" target="_blank">
                          <img
                            src="/images/Instructors-twitter.svg"
                            alt="icon"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="about-info ">
                    <Link
                      to="/"
                      className=" text-headingColor text-[14px] lg:text-[20px] capitalize font-Poppins font-medium leading-[21px] lg:leading-[30px]"
                    >
                      Alan Begham
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="group team-member team-member-widget h-[210px] border-[1.5px] border-borderColor2 rounded-[15px] overflow-hidden w-[154px]">
                <div className="image relative w-full h-[164px] bg-borderColor2 rounded-[15px] overflow-hidden">
                  <Link to="/">
                    <img
                      className="absolute h-full object-cover rounded-30 object-right-top group-hover:object-center duration-300 ease-linear"
                      src="/images/tutor-image-1.jpg"
                      alt="tutor"
                    />
                  </Link>
                  <div className="stream text-[12px] font-medium -rotate-90 w-[210px] absolute -right-[-90px] bottom-[136px] font-Poppins text-whiteColor">
                    Data Science
                  </div>
                </div>
                <div className="member-info bg-white relative z-[2] py-[13px] pl-4 pr-2">
                  <div className="rounded-border absolute w-[28px] lg:w-[70px] h-[28px] lg:h-[64px] bg-white !bottom-10 lg:!bottom-[70px] left-[26px] lg:left-[42px] rounded-t-full border-none"></div>
                  <div className="socials bg-gray-40 w-14 h-[180px] absolute !bottom-[46px] left-[12px]  flex justify-center items-end rounded-full overflow-hidden">
                    <div className="main-icon bg-blackColor2 size-[17px] md:size-[34px] lg:size-14  z-10 flex items-center justify-center rounded-full ">
                      <img src="/images/team_A_white.svg" alt="icon" />
                    </div>
                    <ul
                      className="social-icons absolute bg-blackColor2 text-white w-[34px] lg:w-14 hidden lg:flex flex-col  
                        items-center py-5 gap-4 rounded-full translate-y-[152px] z-[10] transition transform duration-300 ease-linear
                        "
                    >
                      <li className="hover:text-primaryColor duration-300">
                        <Link to="" target="_blank">
                          <img src="/images/Instructors-User.svg" alt="icon" />
                        </Link>
                      </li>
                      <li className="hover:text-primaryColor duration-300">
                        <Link to="https://www.linkedin.com" target="_blank">
                          <img
                            src="/images/Instructors-linkedin.svg"
                            alt="icon"
                          />
                        </Link>
                      </li>
                      <li className="hover:text-primaryColor duration-300">
                        <Link to="https://www.youtube.com" target="_blank">
                          <img
                            src="/images/Instructors-youtube.svg"
                            alt="icon"
                          />
                        </Link>
                      </li>
                      <li className="hover:text-primaryColor duration-300">
                        <Link to="https://www.twitter.com" target="_blank">
                          <img
                            src="/images/Instructors-twitter.svg"
                            alt="icon"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="about-info ">
                    <Link
                      to="/"
                      className=" text-headingColor text-[14px] lg:text-[20px] capitalize font-Poppins font-medium leading-[21px] lg:leading-[30px]"
                    >
                      Alan Begham
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="flex justify-between gap-2">
            <div className="bg-[#F1F1F1] h-[22px] rounded-full w-fit py-[7px] px-2.5">
              <ul
                className="flex gap-1.5 [&>li]:bg-white [&>li]:w-[7px]  [&>li]:h-[7px] [&>li]:rounded-full [&>li]:border-[1px] 
              [&>li]:border-[#282828] [&>li]:[&>li]:h-[7px] [&>li]:block [&>li:hover]:bg-[#3221FF] [&>li:hover]:border-[#3221FF]
              [&>li.active]:bg-[#3221FF] [&>li.active]:border-[#3221FF] [&>li]:cursor-pointer "
              >
                <li className="active"></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div>
              <ul className="flex gap-2.5">
                <li className="bg-[#F1F1F1] hover:bg-transparent hover:border-[#282828] border-[1px] border-[#F1F1F1] w-[22px] h-[22px] rounded-full flex justify-center items-center">
                  <svg
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.91507 0.935703C5.02507 1.0457 5.02507 1.1557 4.97007 1.3207L2.49507 5.0057L4.97007 8.6907C5.08007 8.8007 5.02507 8.9657 4.91507 9.0757C4.80507 9.1857 4.64007 9.1857 4.53007 9.0757L0.13007 5.2257C0.0750699 5.1707 0.0200696 5.1157 0.0200696 5.0057C0.0200696 4.8957 0.0750699 4.8407 0.13007 4.7857L4.53007 0.935703C4.69507 0.880703 4.80507 0.880703 4.91507 0.935703Z"
                      fill="#282828"
                    />
                  </svg>
                </li>
                <li className="bg-[#F1F1F1] hover:bg-transparent hover:border-[#282828] border-[1px] border-[#F1F1F1] w-[22px] h-[22px] rounded-full flex justify-center items-center">
                  <svg
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.747669 0.887852C0.642907 0.997851 0.642907 1.10785 0.695288 1.27285L3.05243 4.95785L0.695288 8.64285C0.590526 8.75285 0.642907 8.91785 0.747669 9.02785C0.852431 9.13785 1.00957 9.13785 1.11434 9.02785L5.30481 5.17785C5.35719 5.12285 5.40957 5.06785 5.40957 4.95785C5.40957 4.84785 5.35719 4.79285 5.30481 4.73785L1.11434 0.887852C0.957193 0.832851 0.852431 0.832851 0.747669 0.887852Z"
                      fill="#282828"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
