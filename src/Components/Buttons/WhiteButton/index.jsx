import React from "react";
import { Link } from "react-router-dom";

const WhiteButton = ({ btnText, className }) => {
  return (
    <>
      <Link to="/about">
        {/* <button className=" group min-w-[170px] font-Poppins  border overflow-hidden border-whiteColor text-whiteColor flex gap- justify-center items-center rounded-full py-3  ps-3 pe-0 transform duration-500 hover:bg-primaryColor hover:text-white hover:border-primaryColor hover:ps-0 hover:pe-3">
          <div>
            <img className="w-3 nline-block  group-hover:-translate-x-7 transform duration-500"
              src="/images/white-btn-icn-2.svg"  alt="icon"/>
          </div>
          <span className="ms-3 group-hover:ms-0 me-3 duration-500">{btnText}</span>
          <div>
            <img className="w-3 translate-x-5 group-hover:-translate-x-0 transform duration-500"
              src="/images//white-btn-icn-2.svg"  alt="icon"/>
          </div>
        </button> */}
        {/* <button className="btn-icon  group  border overflow-hidden border-whiteColor text-whiteColor flex gap- justify-center items-center 
          rounded-full py-3 ps-5 pe-0 transform duration-500 hover:bg-primaryColor hover:text-white hover:border-primaryColor hover:ps-3 hover:pe-6">
          <div>
            <img className="w-[8px] rotate-90 inline-block  group-hover:-translate-x-7 transform duration-500" src="/images/icn_wht_2.svg"  alt="icon"/>
          </div>
          <span className="ms-5 group-hover:ms-0 me-5 duration-500">{btnText}</span>
          <div>
            <img className="w-[8px] rotate-90 translate-x-5 group-hover:-translate-x-0 transform duration-500" src="/images/icn_wht_2.svg"  alt="icon"/>
          </div>
        </button> */}
        <button
          className={`btn-icon h-[40px] w-[172px] group  border overflow-hidden border-whiteColor text-whiteColor flex gap- justify-center items-center 
          rounded-full py-3 ps-5 pe-0 transform duration-500 hover:bg-primaryColor hover:text-white hover:border-primaryColor hover:ps-3 hover:pe-6 ${className}`}
        >
          <div>
            <img
              className="w-[9px] rotate-90 inline-block  group-hover:-translate-x-7 transform duration-500"
              src="/images/icn_wht_2.svg"
              alt="icon"
            />
          </div>
          <span className="ms-5 group-hover:ms-0 me-5 duration-500">
            {btnText}
          </span>
          <div>
            <img
              className="w-[8px] rotate-90 translate-x-5 group-hover:-translate-x-0 transform duration-500"
              src="/images/icn_wht_2.svg"
              alt="icon"
            />
          </div>
        </button>
      </Link>
    </>
  );
};

export default WhiteButton;
