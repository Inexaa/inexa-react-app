// import React from "react";
// import { Link } from "react-router-dom";

// const BlackButton = ({btnText="explore more"}) => {
//   return (
//     <>
//       <Link to="/about">
//         <button
//           className="btn-icon group text-blackColor2 border border-blackColor2 capitalize overflow-hidden flex gap- justify-center items-center rounded-full py-3 ps-5 pe-0 transform duration-300 hover:bg-primaryColor hover:text-white hover:border-primaryColor hover:ps-0 hover:pe-3"
//         >
//           <div>
//             <img
//               className="w-[10px] inline-block group-hover:-translate-x-8 transform duration-300"
//               src="./images/black-btn-icon.svg"
//               alt="icon"
//             />
//           </div>
//           <span className="ms-3 group-hover:ms-0 me-3 duration-300">
//             {btnText}
//           </span>
//           <div>
//             <img
//               className="w-[10px] translate-x-5 group-hover:-translate-x-0 transform duration-300"
//               src="./images/white-btn-icon.svg"
//               alt="icon"
//             />
//           </div>
//         </button>

//       </Link>
//     </>
//   );
// };

// export default BlackButton;

import React from "react";
import { Link } from "react-router-dom";
import "./blackButton.css";

const BlackButton = () => {
  return (
    <>
      <Link to="/about">
        <button
          className="btn-icon group text-blackColor2 border-gradient capitalize overflow-hidden flex gap- justify-center 
          items-center rounded-full py-3 ps-4 pe-0 transform duration-300 hover:bg-primaryColor hover:text-white hover:ps-0 
          hover:pe-3 h-[40px] min-w-[132px] md:min-w-[125px] lg:min-w-[170px] w-[132px] md:w-[125px] lg:w-[164px]
          text-[12px] md:text-[14px] font-Poppins font-semibold lg:font-medium lg:-tracking-[.02em]"
        >
          <div>
            <img
              alt="icon"
              src="./images/black-btn-icon.svg"
              className="w-[10px] inline-block group-hover:-translate-x-8 transform duration-300"
            />
          </div>
          <span className="ms-3 group-hover:ms-0 me-3 duration-300">
            more about
          </span>
          <div>
            <img
              className="w-[10px] translate-x-7 group-hover:-translate-x-0 transform duration-300"
              alt="icon"
              src="./images/white-btn-icon.svg"
            />
          </div>
        </button>
      </Link>
    </>
  );
};
export default BlackButton;
