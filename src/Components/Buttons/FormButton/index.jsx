import React from "react";

const FormButton = ({ type = "button", onClick, disabled = "false" }) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        disable={disabled}
        className="group font-Poppins text-[12px] lg:text-[14px] -tracking-[.02em] max-w-[198px] h-[40px] bg-blackColor2 text-white border border-blackColor2  overflow-hidden flex gap- justify-center items-center rounded-full py-3 ps-5 pe-0 transform duration-300 hover:bg-primaryColor hover:text-white hover:border-primaryColor hover:ps-0 hover:pe-3 -mt-4"
      >
        <div>
          <img
            className="w-[10px] inline-block group-hover:-translate-x-9 transform duration-300"
            src="/images/footer-btn-icon.svg"
            alt="icon"
          />
        </div>
        <span className="ms-3 group-hover:ms-0 me-3 duration-300">
          Send a message
        </span>
        <div>
          <img
            className="w-[10px] translate-x-9 group-hover:-translate-x-0 transform duration-300"
            src="/images/footer-btn-icon.svg"
            alt="icon"
          />
        </div>
      </button>
    </>
  );
};

export default FormButton;
