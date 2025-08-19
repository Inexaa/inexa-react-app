import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const exploreData = [
  {
    id: 1,
    image: "/images/explore-image-1.jfif",
    link: "/courses",
    imageAlt: "image",
    title: "business 1",
    heading: "Business and Management",
    info: "1209 Courses",
  },
  {
    id: 2,
    image: "/images/computer-science.jfif",
    link: "https://www.google.com",
    imageAlt: "image",
    title: "business 2",
    heading: "Computer Science",
    info: "1209 Courses",
  },
  {
    id: 3,
    image: "/images/data-ana.jfif",
    link: "https://www.google.com",
    imageAlt: "image",
    title: "business 3",
    heading: "Data Analysis and Statistics",
    info: "1209 Courses",
  },
  {
    id: 4,
    image: "/images/social-sci.jfif",
    link: "https://www.google.com",
    imageAlt: "image",
    title: "business 4",
    heading: " Social Science",
    info: "1209 Courses",
  },
  {
    id: 5,
    image: "/images/economies.jfif",
    link: "https://www.google.com",
    imageAlt: "image",
    title: "business 5",
    heading: " Economies and Finance",
    info: "1209 Courses",
  },
  {
    id: 6,
    image: "/images/medicine.jfif",
    link: "https://www.google.com",
    imageAlt: "image",
    title: "business 6",
    heading: "Medicine",
    info: "1209 Courses",
  },
  {
    id: 7,
    image: "/images/eng.jfif",
    link: "https://www.google.com",
    imageAlt: "image",
    title: "business 7",
    heading: "Engineering",
    info: "1209 Courses",
  },
  {
    id: 8,
    image: "/images/archi.jfif",
    link: "https://www.google.com",
    imageAlt: "image",
    title: "business 8",
    heading: "Architecture",
    info: "1209 Courses",
  },
  {
    id: 9,
    image: "/images/sci.jfif",
    link: "https://www.google.com",
    imageAlt: "image",
    title: "business 9",
    heading: "Science",
    info: "1209 Courses",
  },
  {
    id: 10,
    image: "/images/chem.jfif",
    link: "https://www.google.com",
    imageAlt: "image",
    title: "business 10",
    heading: "Chemistry",
    info: "1209 Courses",
  },
  {
    id: 11,
    image: "/images/design.jfif",
    link: "https://www.google.com",
    imageAlt: "image",
    title: "business 11",
    heading: "Design",
    info: "1209 Courses",
  },
  {
    id: 12,
    image: "/images/art.jfif",
    link: "https://www.google.com",
    imageAlt: "image",
    title: "business 12",
    heading: " Arts and Culture",
    info: "1209 Courses",
  },
  {
    id: 13,
    image: "/images/commi.jfif",
    link: "https://www.google.com",
    imageAlt: "image",
    title: "business 13",
    heading: "Communication",
    info: "1209 Courses",
  },
  {
    id: 14,
    image: "/images/environment.jfif",
    link: "https://www.google.com",
    imageAlt: "image",
    title: "business 14",
    heading: "Environmental studies",
    info: "1209 Courses",
  },
  {
    id: 15,
    image: "/images/safty.jfif",
    link: "https://www.google.com",
    imageAlt: "image",
    title: "business 15",
    heading: "Health and Safety",
    info: "1209 Courses",
  },
  {
    id: 16,
    image: "/images/lang.jfif",
    link: "https://www.google.com",
    imageAlt: "image",
    title: "business 16",
    heading: "Language",
    info: "1209 Courses",
  },
  {
    id: 17,
    image: "/images/t-traning.webp",
    link: "https://www.google.com",
    imageAlt: "image",
    title: "business 17",
    heading: "Education and teacher training",
    info: "1209 Courses",
  },
  {
    id: 18,
    image: "/images/math.jfif",
    link: "https://www.google.com",
    imageAlt: "image",
    title: "business 18",
    heading: "Math  ",
    info: "1209 Courses",
  },
];

const ExploreInexa = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // sm breakpoint
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliderSettings = {
    rows: 3,
    slidesPerRow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesPerRow: 1,
        },
      },
    ],
  };

  const listItems = (
    <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-[21px]  lg:gap-5">
      {exploreData.map((item, index) => {
        return (
          <li key={item.id} className="group explore-box rounded-[16px]">
            <Link
              to="/courses"
              className="w-full h-[44px] md:h-[50px] lg:h-[64px]  flex  items-center gap-x-2 gap-y-[18px] md:gap-5 relative "
            >
              <img
                className="block size-11 md:size-[55px] lg:size-[64px] object-cover rounded-[16px] duration-300 mt-0.5 lg:mt-0"
                src={item.image}
                alt={item.imageAlt}
              />
              <div className="grid gap-0.5 md:gap-1 group transition-all">
                <h4
                  className="text-[7px] md:text-[10px] lg:text-[14px] -tracking-[.05em] leading-[12px] md:leading-[15px] lg:leading-[16px] text-[#282828] font-medium mb-0 transition-all
"
                >
                  {item.heading}
                </h4>
                <p
                  className="text-[7px] md:text-[8px] lg:text-[12px]  text-[#666] -tracking-[.02em] leading-[9px] md:leading-[10px] lg:leading-[16px] opacity-0 h-0 
                  group-hover:h-auto group-hover:opacity-100 transition-all
"
                >
                  {item.info}
                </p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="explore-widgets">
      {isMobile ? (
        <Slider {...sliderSettings} className="custom-mobile-slider">
          {React.Children.toArray(listItems.props.children).map(
            (child, index) => (
              <div key={index}>{child}</div>
            )
          )}
        </Slider>
      ) : (
        listItems
      )}
    </div>
  );
};

export default ExploreInexa;
