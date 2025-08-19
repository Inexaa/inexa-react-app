import React, { useState, useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa6";
import Slider from "react-slick";
import "./testimonial.css";

const reviews = [
  {
    reviewId: 1,
    reviewer: "david o",
    rating: <FaStar />,
    review:
      "Inexa offers a fantastic learning environment with knowledgeable lecturers, well-structured courses, and a strong focus on practical skills.",
  },
  {
    reviewId: 2,
    reviewer: "Mariam A ",
    rating: <FaStar />,
    review:
      "Studying at Inexa was such a great experience. I gained a quality education and learned so much along the way. Our Instructors were really supportive, always willing to help and going the extra mile for us, which made a huge difference. The best part was definitely the friends I made, so many fun memories, from stressing over assignments together",
  },
  {
    reviewId: 3,
    reviewer: "Rethabile A ",
    rating: <FaStar />,
    review:
      " My tutors encouraged creativity, and I could express myself without restrictions. I would recommend Inexa to any creatively inclined person wanting to upscale their craft or business",
  },
  {
    reviewId: 4,
    reviewer: "Bianca M",
    rating: <FaStar />,
    review:
      "Registering with Inexa was possibly the best decision I have made in my career. The course content, instructors, support agents, and classmates were all incredible. Even though the studies were online, there was never a time when I felt disconnected from the institute and its students.",
  },
  {
    reviewId: 5,
    reviewer: "Kirstin M ",
    rating: <FaStar />,
    review:
      "WOW…where do I start? Strictly speaking to an online platform for learning. As a past student of a few online institutions, Inexa was by far the brand with the best response time and quality responses.",
  },
  {
    reviewId: 6,
    reviewer: "Shylett N",
    rating: <FaStar />,
    review:
      "I love Inexa, the school has given me an experience that I have never experienced before. Learning has never been so exciting, fun, and innovative.      Learning has never been so exciting, fun, and innovative Learning has never been so exciting, and innovative Learning has never been so exciting,",
  },
  {
    reviewId: 7,
    reviewer: "Eloise B",
    rating: <FaStar />,
    review:
      "I cannot describe the experience I had with Inexa. It was fantastic. Their customer service, course support and course material are all great. Their staff are helpful, friendly and go the extra mile. Their modules are interactive, informative and so helpful and they share amazing masterclasses too.",
  },
  {
    reviewId: 8,
    reviewer: "Shelley D",
    rating: <FaStar />,
    review:
      "I have done three short courses with Inexa thus far, and all three have been incredible. Can't recommend them enough and I will continue to stay curious and enroll for more courses in the future. Thank you Inexa, keep up the creativity & innovation!",
  },
];

const Testimonial = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMediumScreen(screenWidth >= 768 && screenWidth < 1280);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleShowAll = () => {
    const newShowAll = !showAll;
    setShowAll(newShowAll);

    // Scroll to top when showing less
    if (newShowAll === false && testimonialsRef.current) {
      testimonialsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const displayedReviews = !showAll ? reviews.slice(0, 6) : reviews;

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          // adaptiveHeight: true,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          // adaptiveHeight: true,
        },
      },
    ],
  };

  return (
    <>
      <section
        className="relative mb-[90px] lg:mb-[80px] rounded-[24px]"
        ref={testimonialsRef}
        style={{ scrollMarginTop: "120px" }}
      >
        <div className=" relative overflow-hidde bg-bgGray lg:mx-4 2xl:mx-0 rounded-[24px] overflow-hidde lg:overflow-visible">
          <div className="px-2.5 pt-5 pb-2.5 md:px-2 mdpt-[60px] md:pb-[30px] lg:px-10 lg:pt-[32px] lg:pb-10">
            <div className="rating-stars">
              <ul className="flex gap-1 text-ratingColor text-[15px] md:text-[30px] justify-center mb-3">
                <li>
                  {" "}
                  <FaStar />
                </li>
                <li>
                  {" "}
                  <FaStar />
                </li>
                <li>
                  {" "}
                  <FaStar />
                </li>
                <li>
                  {" "}
                  <FaStar />
                </li>
                <li>
                  {" "}
                  <FaStar />
                </li>
              </ul>
            </div>
            <div className="title pb-2 lg:pb-3">
              <div className="subheading subheading-black mb-0 text-[14px] md:text-[16px] leading-[21px] md:leading-[28px] lg:-tracking-[.02em]">
                inexa community
              </div>
              <h2
                className="animated-text flex flex-wrap lg:-tracking-[.05em] font-medium leading-[20px] md:leading-[54px] lg:leading-[72px] !p-0 !mb-0 
              [&>div>span]:leading-[33px] md:[&>div>span]:leading-[54px] lg:[&>div>span]:leading-[67px]"
              >
                <div className="word">
                  <span
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="text-[20px] md:text-[36px] lg:text-[48px] font-medium"
                  >
                    I
                  </span>
                  <span
                    data-aos="fade-up"
                    className="text-[20px] md:text-[36px] lg:text-[48px] font-medium text-[#282828]"
                    data-aos-delay="150"
                  >
                    n
                  </span>
                  <span
                    data-aos="fade-up"
                    className="text-[20px] md:text-[36px] lg:text-[48px] font-medium text-[#282828]"
                    data-aos-delay="200"
                  >
                    e
                  </span>
                  <span
                    data-aos="fade-up"
                    className="text-[20px] md:text-[36px] lg:text-[48px] font-medium text-[#282828]"
                    data-aos-delay="250"
                  >
                    x
                  </span>
                  <span
                    data-aos="fade-up"
                    className="text-[20px] md:text-[36px] lg:text-[48px] font-medium text-[#282828]"
                    data-aos-delay="300"
                  >
                    a
                  </span>
                </div>
                <div className="word">
                  <span
                    data-aos="fade-up"
                    className="text-[20px] md:text-[36px] lg:text-[48px] font-medium text-[#282828]"
                    data-aos-delay="350"
                  >
                    L
                  </span>
                  <span
                    data-aos="fade-up"
                    className="text-[20px] md:text-[36px] lg:text-[48px] font-medium text-[#282828]"
                    data-aos-delay="400"
                  >
                    e
                  </span>
                  <span
                    data-aos="fade-up"
                    className="text-[20px] md:text-[36px] lg:text-[48px] font-medium text-[#282828]"
                    data-aos-delay="450"
                  >
                    a
                  </span>
                  <span
                    data-aos="fade-up"
                    className="text-[20px] md:text-[36px] lg:text-[48px] font-medium text-[#282828]"
                    data-aos-delay="500"
                  >
                    r
                  </span>
                  <span
                    data-aos="fade-up"
                    className="text-[20px] md:text-[36px] lg:text-[48px] font-medium text-[#282828]"
                    data-aos-delay="550"
                  >
                    n
                  </span>
                  <span
                    data-aos="fade-up"
                    className="text-[20px] md:text-[36px] lg:text-[48px] font-medium text-[#282828]"
                    data-aos-delay="600"
                  >
                    i
                  </span>
                  <span
                    data-aos="fade-up"
                    className="text-[20px] md:text-[36px] lg:text-[48px] font-medium text-[#282828]"
                    data-aos-delay="650"
                  >
                    n
                  </span>
                  <span
                    data-aos="fade-up"
                    className="text-[20px] md:text-[36px] lg:text-[48px] font-medium text-[#282828]"
                    data-aos-delay="700"
                  >
                    g
                  </span>
                </div>
                <div className="word">
                  <span
                    data-aos="fade-up"
                    className="text-[20px] md:text-[36px] lg:text-[48px] font-medium text-[#282828]"
                    data-aos-delay="750"
                  >
                    I
                  </span>
                  <span
                    data-aos="fade-up"
                    className="text-[20px] md:text-[36px] lg:text-[48px] font-medium text-[#282828]"
                    data-aos-delay="800"
                  >
                    m
                  </span>
                  <span
                    data-aos="fade-up"
                    className="text-[20px] md:text-[36px] lg:text-[48px] font-medium text-[#282828]"
                    data-aos-delay="850"
                  >
                    p
                  </span>
                  <span
                    data-aos="fade-up"
                    className="text-[20px] md:text-[36px] lg:text-[48px] font-medium text-[#282828]"
                    data-aos-delay="900"
                  >
                    a
                  </span>
                  <span
                    data-aos="fade-up"
                    className="text-[20px] md:text-[36px] lg:text-[48px] font-medium text-[#282828]"
                    data-aos-delay="950"
                  >
                    c
                  </span>
                  <span
                    data-aos="fade-up"
                    className="text-[20px] md:text-[36px] lg:text-[48px] font-medium text-[#282828]"
                    data-aos-delay="1000"
                  >
                    t
                  </span>
                </div>
              </h2>
            </div>
            <div className="md:grid md:gap-[50px] lg:gap-8">
              <h3 className="lg:text-center m-0 font-Montserrat text-[#282828] lg:-tracking-[.05em] text-[16px] md:text-[28px] lg:text-[32px] font-medium leading-[21px] md:leading-[40px] ">
                What Inexa learners are saying
              </h3>

              <div className="testi-widgets hidden md:block">
                <ul className="grid gap-x-2.5 gap-y-5 lg:gap-5 grid-cols-3  lg:grid-cols-4 ">
                  {/* <ul className="testi-widget "> */}
                  {displayedReviews.map((item, index) => {
                    return (
                      <li
                        key={item.reviewId}
                        className="top-box bg-white px-[15px] py-[18px] lg:p-6 rounded-[24px] "
                      >
                        <h4 className="capitalize  text-[17px] lg:text-[20px] leading-[21px] lg:leading-[24px] -tracking-[.05em] text-[#282828]">
                          {item.reviewer}
                        </h4>
                        <ul className="flex gap-1 mb-2.5 lg:mb-5 text-ratingColor text-[20px] leading-[26px] lg:leading-[20px]">
                          <li>{item.rating}</li>
                          <li>{item.rating}</li>
                          <li>{item.rating}</li>
                          <li>{item.rating}</li>
                          <li>{item.rating}</li>
                        </ul>
                        {/* <p className='line-clamp-5'>{item.review}</p> */}
                        <p className="text-[#282828] text-[14px] lgtext-[16px] lg:-tracking-[.02em] leading-[26px] lg:leading-[28px] font-medium">
                          {item.review}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="course-widgets block md:hidden mobile-carousel">
                <Slider {...settings}>
                  {reviews.map((item, index) => (
                    <li key={item.reviewId} className="px-3">
                      <div className="bg-white shadow-sm px-4 py-6 lg:p-8  rounded-2xl hover:shadow-md duration-300 hover:bg-gray-50 ">
                        <h4 className="capitalize">{item.reviewer}</h4>
                        <ul className="flex gap-2 my-3 text-ratingColor">
                          {[...Array(5)].map((_, idx) => (
                            <li key={idx}>{item.rating}</li>
                          ))}
                        </ul>
                        {/* <p className="">{item.review}</p> */}
                        <p className=" line-clamp-6 leading-6">{item.review}</p>
                      </div>
                    </li>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
          <div
            className={`hidden md:block absolute bottom-0 h-[224px] ${
              !showAll ? "overlay-testimoni" : ""
            }`}
          ></div>
          {reviews.length > 6 && (
            <div className="relative z-10 pb-5 px-10 hidden md:block">
              <button
                onClick={toggleShowAll}
                className=" text-blackColor2 bg-[#c5c3c4] justify-center gap-2 group min-w-[168px] h-[40px] flex 
                items-center border-[1px] border-bg-blackColor2 rounded-full ml-auto
                hover:border-[#3322ff] hover:bg-[#3322ff] hover:text-white"
              >
                <span>{showAll ? "Show less" : "Show more"}</span>
                <span
                  className={`w-3 group-hover:brightness-[10] duration-300 ${
                    showAll ? "transform rotate-180" : ""
                  }`}
                >
                  <svg
                    width="16"
                    height="11"
                    viewBox="0 0 16 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.9201 1.0676C15.7072 0.848035 15.4942 0.848035 15.1747 0.957817L8.03992 5.89796L0.905158 0.957816C0.69218 0.738252 0.372713 0.848034 0.159734 1.0676C-0.0532446 1.28715 -0.0532446 1.6165 0.159734 1.83606L7.61397 10.6186C7.72045 10.7284 7.82694 10.8381 8.03992 10.8381C8.2529 10.8381 8.35939 10.7284 8.46588 10.6186L15.9201 1.83606C16.0266 1.50672 16.0266 1.28715 15.9201 1.0676Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Testimonial;
