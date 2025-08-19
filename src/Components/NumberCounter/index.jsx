import React from "react";

const NumberCounter = ({ counterValues, headingClass, paraClass }) => {
  var counted = 0;
  $(window).scroll(function () {
    var oTop = $("#counter").offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
      $(".count").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-count");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },

          {
            duration: 3000,
            easing: "swing",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            },
          }
        );
      });
      counted = 1;
    }
  });

  return (
    <>
      <div className="number-counter">
        <ul
          id="counter"
          className="text-white grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-[48px] pb-[13px] md:pb-0"
        >
          {counterValues.map((nums, index) => (
            <li key={index} className="text-left">
              <div className="">
                <h4
                  className={`mb-0 text-[60px] md:text-[100px] lg:text-[130px] -tracking-[.05em] leading-[110%] font-semibold !text-left border-0 count ${headingClass}`}
                  data-count={nums.countNum}
                >
                  0
                </h4>
                <p
                  className={`text-[16px]  md:text-[25px] lg:text-[30px] font-Poppins leading-[24px] md:leading-[38px] lg:leading-[100%] 
                   -mt-6 md:-mt-12 font-medium !text-left !max-w-[inherit] ${paraClass}`}
                >
                  {nums.countTitle}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NumberCounter;
