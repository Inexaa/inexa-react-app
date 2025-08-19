import React from "react";
import { Link } from "react-router-dom";

const BlueButton = ({ btnText = "explore more", link }) => {
  return (
    <>
      <Link to={link}>
        <button className="group btn-icon bg-white text-primaryColor border border-primaryColor  overflow-hidden flex gap- justify-center items-center rounded-full py-3 ps-3 pe-0 transform duration-300 hover:bg-primaryColor hover:text-white hover:border-primaryColor hover:ps-0 hover:pe-3 h-[40px] -tracking-[.02em] min-w-[139px]">
          <div>
            <img
              className="w-[10px]  rotate-90 inline-block group-hover:-translate-x-7 transform duration-300"
              src="/images/A.webp"
              alt="icon"
            />
          </div>
          <span className="ms-3 group-hover:ms-0 me-3 duration-300 font-semibold">
            {btnText}
          </span>
          <div>
            <img
              className="w-[10px] rotate-90 translate-x-5 group-hover:-translate-x-0 transform duration-300"
              src="/images/icn_wht_2.svg"
              alt="icon"
            />
          </div>
        </button>
      </Link>
    </>
  );
};

export default BlueButton;
