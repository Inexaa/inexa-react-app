import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import CourseCard from "../CourseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CourseWidget = ({ courseData, isMobile }) => {
  const [favorites, setFavorites] = useState(courseData?.map(() => false));
  const swiperRef = useRef(null);

  useEffect(() => {
    // Define the function to handle window resizing
    const handleResize = () => {
      if (swiperRef.current) {
        swiperRef.current.swiper.update();
        swiperRef.current.slickGoTo(0); // Go to the first slide to reset the width
      }
    };

    // Attach event listener to window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty array means this effect runs only once when the component mounts

  const handleFavorite = (index) => {
    const newFavorites = [...favorites];
    newFavorites[index] = !newFavorites[index];
    setFavorites(newFavorites);
  };
  const courseContent = courseData?.map((item, index) => (
    <CourseCard
      key={item.id}
      item={item}
      favorites={favorites}
      index={index}
      handleFavorite={handleFavorite}
    />
  ));

  const handleSlideChange = (swiper) => {
    // const activeIndex = swiper.activeIndex;
    // console.log('swiper :>> ', swiper, activeIndex);
    // setTimeout(() => {
    //   swiper.slides.forEach((slide, index) => {
    //     if (index < activeIndex) {
    //       slide.classList.add('hidden-prev');
    //     } else {
    //       slide.classList.remove('hidden-prev');
    //     }
    //   });
    // }, 0);
  };

  // useEffect(() => {
  //   // Initial setup to apply hidden-prev for the first render
  //   if (swiperRef.current?.swiper) {
  //     handleSlideChange(swiperRef.current.swiper);
  //   }
  // }, [courseData]);

  const sliderSettings = {
    rows: 1,
    slidesPerRow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesPerRow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesPerRow: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-2 lg:pb-0 lg:pt-6 relative overflow-visible">
      {isMobile ? (
        <>
          <Slider {...sliderSettings} className="custom-mobile-slider">
            {courseData?.map((item, index) => (
              <div key={item.id}>
                <div style={{ padding: "15px 8px" }}>
                  <CourseCard
                    key={item.id}
                    item={item}
                    favorites={favorites}
                    index={index}
                    handleFavorite={handleFavorite}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[34px]">
          {courseContent}
        </div>
      )}
    </div>
  );
};
export default CourseWidget;
