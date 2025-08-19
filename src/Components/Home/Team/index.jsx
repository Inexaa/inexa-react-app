import React from "react";
import Title from "../../Title";
import Button from "../../Button";
import iconA from "../../../assets/images/A-icon.svg";
import teamMember from "../../../assets/images/team-member.png";
import { TiSocialFacebook } from "react-icons/ti";
import BlueButton from "../../Buttons/BlueButton";
import GradientButton from "../../Buttons/GradientButton";

const Team = () => {
  const team = [
    {
      image: teamMember,
      social: "https://www.linkedin.in",
      title: "name",
      designation: "CEO",
    },
    {
      image: teamMember,
      social: "https://www.linkedin.in",
      title: "name",
      designation: "CEO",
    },
    {
      image: teamMember,
      social: "https://www.linkedin.in",
      title: "name",
      designation: "CEO",
    },
    {
      image: teamMember,
      social: "https://www.linkedin.in",
      title: "name",
      designation: "CEO",
    },
    {
      image: teamMember,
      social: "https://www.linkedin.in",
      title: "name",
      designation: "CEO",
    },
  ];

  return (
    <>
      <section className="margin-x">
        <div className="wrapper padding">
          <div className="team-content flex flex-wrap sm:flex-nowrap gap-10">
            <div className="team-text-content  md:w-1/2 lg:w-1/3">
              <div className="title">
                <div className="subheading subheading-black">teams</div>
                <h2 className="heading-black"> Meet inexa instructors</h2>
              </div>
              <div>
                <p className="mb-10">Our specialized subject matter.</p>
                <GradientButton children="more about" />
              </div>
            </div>
            <div className="team-member-content md:w-1/2 lg:w-full">
              <div className="team-members grid lg:grid-cols-3 gap-4">
                <div className="team-member group border  border-borderColor2 rounded-3xl overflow-hidden lg:col-start-2">
                  <figure className="relative member-image">
                    {/* <div className="overlay bg-gradient-to-b from-primaryColor/0 to-primaryColor/60  absolute  w-full h-1/2 bottom-0 z-10   group-hover:opacity-100 
                  group-hover:visible"></div> */}
                    <a className=" block relative bg-[#E3E3E3] " href="#">
                      {/* <div className="overlay bg-gradient-to-b from-primaryColor/0 to-primaryColor/60  absolute opacity-0 invisible duration-500  w-full h-1/2 bottom-0 z-10   group-hover:opacity-100  group-hover:visible" ></div> */}
                      <div className="overlay bg-gradient-to-b from-primaryColor/0 to-primaryColor/60  absolute opacity-0 invisible duration-500  w-full h-1/2 bottom-0 z-10   group-hover:opacity-100  group-hover:visible"></div>
                      <img
                        className="w-full rounded-3xl -translate-x-7 group-hover:translate-x-0 duration-300"
                        src={teamMember}
                        alt="image"
                      />
                    </a>
                    <div className="icon-social relative z-20">
                      <a
                        className="absolute left-10 -bottom-7 bg-textColor size-16 flex items-center justify-center rounded-full border-8 border-white"
                        href="#"
                      >
                        <img className="w-4" src={iconA} alt="icon" />
                      </a>
                      <div
                        className="social-contacts flex gap-2 flex-col absolute -bottom-9 left-12 bg-textColor p-4 rounded-full duration-300 
                      opacity-0 invisible group-hover:-bottom-4 group-hover:opacity-100 group-hover:visible"
                      >
                        <div className="py-1 text-white flex items-center justify-center">
                          <a href="https://www.facebook.com" target="_blank">
                            <TiSocialFacebook className="text-white" />
                          </a>
                        </div>
                        <div className="py-1 text-white flex items-center justify-center">
                          <a href="https://www.facebook.com" target="_blank">
                            <TiSocialFacebook className="text-white" />
                          </a>
                        </div>
                        <div className="py-1 text-white flex items-center justify-center">
                          <a href="https://www.facebook.com" target="_blank">
                            <TiSocialFacebook className="text-white" />
                          </a>
                        </div>
                        <div className="py-1 text-white flex items-center justify-center">
                          <a href="https://www.facebook.com" target="_blank">
                            <TiSocialFacebook className="text-white" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </figure>
                  <div className="member-info py-14 px-10">
                    <h5 className="mb-0 capitalize">
                      <a href="#">alan begham</a>
                    </h5>
                    <p className="text-[#9b9b9b]">/ CEO inexa /</p>
                  </div>
                </div>
                <div className="team-member group border  border-borderColor2 rounded-3xl overflow-hidden ">
                  <figure className="relative member-image">
                    <a className=" block relative bg-[#E3E3E3]" href="#">
                      {/* <div className="overlay absolute  bg-blue-300"></div> */}
                      <div
                        className="overlay bg-gradient-to-b from-primaryColor/0 to-primaryColor/60  absolute opacity-0 invisible duration-500  w-full h-1/2 bottom-0 z-10   group-hover:opacity-100 
                  group-hover:visible"
                      ></div>
                      <img
                        className="w-full rounded-3xl -translate-x-7 group-hover:translate-x-0 duration-300"
                        src={teamMember}
                        alt="image"
                      />
                    </a>
                    <div className="icon-social relative z-20">
                      <a
                        className="absolute left-10 -bottom-7 bg-textColor size-16 flex items-center justify-center rounded-full border-8 border-white"
                        href="#"
                      >
                        <img className="w-4" src={iconA} alt="icon" />
                      </a>
                      <div
                        className="social-contacts flex gap-2 flex-col absolute -bottom-9 left-12 bg-textColor p-4 rounded-full duration-300 
                      opacity-0 invisible group-hover:-bottom-4 group-hover:opacity-100 group-hover:visible"
                      >
                        <div className="py-1 text-white flex items-center justify-center">
                          <a href="https://www.facebook.com" target="_blank">
                            <TiSocialFacebook className="text-white" />
                          </a>
                        </div>
                        <div className="py-1 text-white flex items-center justify-center">
                          <a href="https://www.facebook.com" target="_blank">
                            <TiSocialFacebook className="text-white" />
                          </a>
                        </div>
                        <div className="py-1 text-white flex items-center justify-center">
                          <a href="https://www.facebook.com" target="_blank">
                            <TiSocialFacebook className="text-white" />
                          </a>
                        </div>
                        <div className="py-1 text-white flex items-center justify-center">
                          <a href="https://www.facebook.com" target="_blank">
                            <TiSocialFacebook className="text-white" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </figure>
                  <div className="member-info py-14 px-10">
                    <h5 className="mb-0 capitalize">
                      <a href="#">alan begham</a>
                    </h5>
                    <p className="text-[#9b9b9b]">/ CEO inexa /</p>
                  </div>
                </div>
                <div className="team-member group border  border-borderColor2 rounded-3xl overflow-hidden  mt-0 lg:-mt-48 h-max ">
                  <figure className="relative member-image">
                    <a className=" block relative bg-[#E3E3E3]" href="#">
                      {/* <div className="overlay absolute  bg-blue-300"></div> */}
                      <div
                        className="overlay bg-gradient-to-b from-primaryColor/0 to-primaryColor/60  absolute opacity-0 invisible duration-500  w-full h-1/2 bottom-0 z-10   group-hover:opacity-100 
                  group-hover:visible"
                      ></div>
                      <img
                        className="w-full rounded-3xl -translate-x-7 group-hover:translate-x-0 duration-300"
                        src={teamMember}
                        alt="image"
                      />
                    </a>
                    <div className="icon-social relative z-20">
                      <a
                        className="absolute left-10 -bottom-7 bg-textColor size-16 flex items-center justify-center rounded-full border-8 border-white"
                        href="#"
                      >
                        <img className="w-4" src={iconA} alt="icon" />
                      </a>
                      <div
                        className="social-contacts flex gap-2 flex-col absolute -bottom-9 left-12 bg-textColor p-4 rounded-full duration-300 
                      opacity-0 invisible group-hover:-bottom-4 group-hover:opacity-100 group-hover:visible"
                      >
                        <div className="py-1 text-white flex items-center justify-center">
                          <a href="https://www.facebook.com" target="_blank">
                            <TiSocialFacebook className="text-white" />
                          </a>
                        </div>
                        <div className="py-1 text-white flex items-center justify-center">
                          <a href="https://www.facebook.com" target="_blank">
                            <TiSocialFacebook className="text-white" />
                          </a>
                        </div>
                        <div className="py-1 text-white flex items-center justify-center">
                          <a href="https://www.facebook.com" target="_blank">
                            <TiSocialFacebook className="text-white" />
                          </a>
                        </div>
                        <div className="py-1 text-white flex items-center justify-center">
                          <a href="https://www.facebook.com" target="_blank">
                            <TiSocialFacebook className="text-white" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </figure>
                  <div className="member-info py-14 px-10">
                    <h5 className="mb-0 capitalize">
                      <a href="#">alan begham</a>
                    </h5>
                    <p className="text-[#9b9b9b]">/ CEO inexa /</p>
                  </div>
                </div>
                <div className="team-member group border  border-borderColor2 rounded-3xl overflow-hidden">
                  <figure className="relative member-image">
                    <a className=" block relative bg-[#E3E3E3]" href="#">
                      {/* <div className="overlay absolute  bg-blue-300"></div> */}
                      <div
                        className="overlay bg-gradient-to-b from-primaryColor/0 to-primaryColor/60  absolute opacity-0 invisible duration-500  w-full h-1/2 bottom-0 z-10   group-hover:opacity-100 
                  group-hover:visible"
                      ></div>
                      <img
                        className="w-full rounded-3xl -translate-x-7 group-hover:translate-x-0 duration-300"
                        src={teamMember}
                        alt="image"
                      />
                    </a>
                    <div className="icon-social relative z-20">
                      <a
                        className="absolute left-10 -bottom-7 bg-textColor size-16 flex items-center justify-center rounded-full border-8 border-white"
                        href="#"
                      >
                        <img className="w-4" src={iconA} alt="icon" />
                      </a>
                      <div
                        className="social-contacts flex gap-2 flex-col absolute -bottom-9 left-12 bg-textColor p-4 rounded-full duration-300 
                      opacity-0 invisible group-hover:-bottom-4 group-hover:opacity-100 group-hover:visible"
                      >
                        <div className="py-1 text-white flex items-center justify-center">
                          <a href="https://www.facebook.com" target="_blank">
                            <TiSocialFacebook className="text-white" />
                          </a>
                        </div>
                        <div className="py-1 text-white flex items-center justify-center">
                          <a href="https://www.facebook.com" target="_blank">
                            <TiSocialFacebook className="text-white" />
                          </a>
                        </div>
                        <div className="py-1 text-white flex items-center justify-center">
                          <a href="https://www.facebook.com" target="_blank">
                            <TiSocialFacebook className="text-white" />
                          </a>
                        </div>
                        <div className="py-1 text-white flex items-center justify-center">
                          <a href="https://www.facebook.com" target="_blank">
                            <TiSocialFacebook className="text-white" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </figure>
                  <div className="member-info py-14 px-10">
                    <h5 className="mb-0 capitalize">
                      <a href="#">alan begham</a>
                    </h5>
                    <p className="text-[#9b9b9b]">/ CEO inexa /</p>
                  </div>
                </div>
                <div className="team-member group border  border-borderColor2 rounded-3xl overflow-hidden">
                  <figure className="relative member-image">
                    <a className=" block relative bg-[#E3E3E3]" href="#">
                      {/* <div className="overlay absolute  bg-blue-300"></div> */}
                      <div
                        className="overlay bg-gradient-to-b from-primaryColor/0 to-primaryColor/60  absolute opacity-0 invisible duration-500  w-full h-1/2 bottom-0 z-10   group-hover:opacity-100 
                  group-hover:visible"
                      ></div>
                      <img
                        className="w-full rounded-3xl -translate-x-7 group-hover:translate-x-0 duration-300"
                        src={teamMember}
                        alt="image"
                      />
                    </a>
                    <div className="icon-social relative z-10">
                      <a
                        className="absolute left-10 -bottom-7 bg-textColor size-16 flex items-center justify-center rounded-full border-8 border-white"
                        href="#"
                      >
                        <img className="w-4" src={iconA} alt="icon" />
                      </a>
                      <div
                        className="social-contacts flex gap-2 flex-col absolute -bottom-9 left-12 bg-textColor p-4 rounded-full duration-300 
                      opacity-0 invisible group-hover:-bottom-4 group-hover:opacity-100 group-hover:visible"
                      >
                        <div className="py-1 text-white flex items-center justify-center">
                          <a href="https://www.facebook.com" target="_blank">
                            <TiSocialFacebook className="text-white" />
                          </a>
                        </div>
                        <div className="py-1 text-white flex items-center justify-center">
                          <a href="https://www.facebook.com" target="_blank">
                            <TiSocialFacebook className="text-white" />
                          </a>
                        </div>
                        <div className="py-1 text-white flex items-center justify-center">
                          <a href="https://www.facebook.com" target="_blank">
                            <TiSocialFacebook className="text-white" />
                          </a>
                        </div>
                        <div className="py-1 text-white flex items-center justify-center">
                          <a href="https://www.facebook.com" target="_blank">
                            <TiSocialFacebook className="text-white" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </figure>
                  <div className="member-info py-14 px-10">
                    <h5 className="mb-0 capitalize">
                      <a href="#">alan begham</a>
                    </h5>
                    <p className="text-[#9b9b9b]">/ CEO inexa /</p>
                  </div>
                </div>

                {/* {
                    team.map((item,index)=>{
                        return (
                          <div className="team-member border  border-borderColor2 rounded-3xl overflow-hidden">
                            <figure className="relative member-image">
                              <img
                                className="w-full rounded-3xl"
                                src={item.image}
                                alt="image"
                              />
                              <div className="">
                                <a className='absolute left-28 -bottom-7 bg-textColor w-14 h-14 flex items-center justify-center rounded-full border-8 border-white' href="#"><img className="w-4" src={iconA} alt="icon" /></a>
                              </div>
                            </figure>
                            <div className="member-info p-10">
                              <h5 className="mb-0 capitalize">{item.title}</h5>
                              <p className="text-[#9b9b9b]">/ {item.designation} /</p>
                            </div>
                          </div>
                        );
                    })
                } */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
