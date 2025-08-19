import React from 'react'
import GradientButton from "../../Buttons/GradientButton";
import Business from '../../Home/Business';

const UniqueEXps = () => {
  return (
    <>
      <section className="unique-experience margin-x my-10 rounded-3xl pt-14 pb-2">
        <div className="wrapper  bg-blackColor py-8 px-4 lg:px-10 rounded-3xl bg-no-repeat bg-center bg-cover "
         style={{backgroundImage: "url('/src/assets/images/learning-exp-bg.png')"}}  >
          <div className="unique-experience-content grid lg:grid-cols-2 gap-10">
            <div className="text-content text-white flex flex-col justify-evenly gap-4">
              <div className='mb-10'>
                <img
                  className="w-[60px]"
                  src="./src/assets/images/uni-exp.png"
                  alt="image"
                />
              </div>
              <div className="lg:mt-28">
                <h4 className="text-[28px] mb-5">Unique learning experience</h4>
                <p className="text-white leading-[30px]">
                  Our uniquely designed learning experiences will give your
                  teams the deep domain knowledge and practitioner-level skills
                  to help your organization acquire the skills needed to
                  innovate and outpace your competition.
                </p>
              </div>
            </div>
            {/* <div className="image flex items-end mt-24">
              <img
                className=" object-cover"
                src="./src/assets/images/unique-exp.png"
                alt="image"
              />
            </div> */}
          </div>
        </div>
      </section>

      <section className="exclusive-class margin-x my-10 rounded-3xl pt-14 pb-2">
        <div className="wrapper  border border-black py-8 px-4 lg:px-10 rounded-3xl">
          <div className="exclusive-class-content grid lg:grid-cols-2 gap-y-2 gap-x-20">
            <div className="text-content flex flex-col justify-evenly gap-4">
              <div className='mb-10'>
                <img
                  className="w-[60px]"
                  src="./src/assets/images/tape.png"
                  alt="image"
                />
              </div>
              <div className="lg:mt-28">
                <h4 className="text-[28px] mb-5">Exclusive world-class content</h4>
                <p className="leading-[30px] max-w-[500px]">
                Our strategic partner edX offers an expansive portfolio of more than 4,700+ outcome-based online learning programs from top universities and industry leaders to drive employee growth — and organizational success.
                </p>
              </div>
            </div>
            <div className="image flex items-end mt-24">
              <img
                className=" object-cover"
                src="./src/assets/images/sponser-companies.png"
                alt="image"
              />
            </div>
          </div>
        </div>
      </section>   

      <section className="global-experience margin-x my-10 rounded-3xl pt-14 pb-2">
        <div className="wrapper  bg-blackColor py-8 px-4 lg:px-10 bg-no-repeat bg-cover rounded-3xl w-full bg-cente" 
        style={{backgroundImage: "url('/src/assets/images/global-exp-bg.png')"}}  >
          <div className="global-experience-content grid lg:grid-cols-2 gap-y-10 gap-x-20">
            <div className="text-content text-white flex flex-col justify-evenly gap-4">
              <div>
                <img
                  className="w-[60px]"
                  src="./src/assets/images/uni-exp.png"
                  alt="image"
                />
              </div>
              <div className="lg:mt-28">
                <h4 className="text-[28px] mb-5">Global learning experience</h4>
                <p className="text-white leading-[30px] max-w-[482px]">
                Global learning experience and multi-cultural exposure supported by a live instructor, learner’s direct engagement, and Cost-effective approach.
                </p>
              </div>
            </div>
            {/* <div className="image flex items-end mt-24">
              <img
                className=" object-cover"
                src="./src/assets/images/global-exp.png"
                alt="image"
              />
            </div> */}
          </div>
        </div>
      </section> 

      <section className='discover-solution margin-x'>
        <div className="wrapper bg-bgTintColor py-8 px-4 lg:px-10 rounded-3xl my-6 bg-no-repeat bg-center bg-cover"
         style={{backgroundImage: "url('/src/assets/images/discover-sol-bg.png')"}}  >
        <div className="discover-solution-content grid lg:grid-cols-2 gap-8">
            <div className="text-content flex flex-col justify-between gap-5">
                <div className='mb-6 md:mb-36'><img src="./src/assets/images/diamond.png" alt="image" /></div>
                <div>
                    <h4 className="text-[28px] mb-5">Discover a learning solution that develops your team’s mindset</h4>
                    <p className='leading-[30px] pb-5 text-blackColor'>Transform potential into expertise with Inexa’s multiple modes of blended learning which is a mix of online and on-premises courses, from partners who are well-known in the field.</p>
                </div>
            </div>
            {/* <div className="image-content  text-center flex justify-center">
                <img className='w-[460px] ' src="./src/assets/images/mind.webp" alt="image" />
            </div> */}
        </div>
        </div>
      </section>  

      {/* <section className="business-success margin-x">
        <div className="wrapper border border-black py-8 px-4 lg:px-10 rounded-3xl my-6">
          <div className="business-success-content grid lg:grid-cols-2 gap-8">
            <div className="text flex flex-col justify-between gap-12">
                <div><img src="./src/assets/images/black-A.png" alt="image" /></div>
                <div>
                    <h4 className="text-[28px] mb-5">Driving business success through learning</h4>
                    <p className='leading-[30px] pb-5'>Inexa empowers enterprises with expert-led learning solutions that drive success. Through strategic partnerships, we help professionals develop critical skills, adapt to industry demands, and accelerate career growth. Our practical, business-focused approach ensures a future-ready workforce.</p>
                    <GradientButton />
                </div>
            </div>
            <div className="image lg:mt-24 ">
                <img className='w-full lg:rounded-br-3xl ' src="./src/assets/images/business.png" alt="image" />
            </div>
          </div>
        </div>
      </section> */}

      <Business />

    </>
  );
}

export default UniqueEXps