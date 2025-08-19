import React from "react";
import Title from "../../Title";
import { FaStar } from "react-icons/fa";
{
  /* <FaStar /> */
}

const review = [
  {
    id: 1,
    reviewer: "David O ",
    review:
      "INEXA offers a fantastic learning environment with knowledgeable lecturers, well-structured courses, and a strong focus on practical skills.",
  },
  {
    id: 2,
    reviewer: "Mariam A ",
    review:
      "Studying at INEXA was such a great experience. I gained a quality education and learned so much along the way. Our Instructors were really supportive, always willing to help and going the extra mile for us, which made a huge difference. The best part was definitely the friends I made, so many fun memories, from stressing over assignments together...",
  },
  {
    id: 3,
    reviewer: "Rethabile A ",
    review:
      "My tutors encouraged creativity, and I could express myself without restrictions. I would recommend INEXA to any creatively inclined person wanting to upscale their craft or business",
  },
  {
    id: 4,
    reviewer: "Bianca M",
    review:
      "Registering with INEXA was possibly the best decision I have made in my career. The course content, instructors, support agents, and classmates were all incredible. Even though the studies were online, there was never a time when I felt disconnected from the institute and its students.",
  },
  {
    id: 5,
    reviewer: "Daniel H ",
    review:
      "I recently completed Fundamentals of Project Management, an online course that gives you flexibility. It's a challenging course. But if you’re willing to put in the work, you will not waste your time and resources. You will come out armed with the skills, confidence, and recognized qualifications you need to excel in the project world.",
  },
  {
    id: 6,
    reviewer: "Michael M ",
    review:
      "INEXA was a great place to study; the bi-weekly Teams live sessions proved to be immensely helpful, allowing for interactive discussions and providing practical insights. What I loved most about the course was the immediate applicability of the lessons learned.",
  },
  {
    id: 7,
    reviewer: "Mark F ",
    review:
      "The bi-weekly Teams chats proved to be immensely helpful, allowing for interactive discussions and providing practical insights. What I loved most about the course was the immediate applicability of the lessons learned.",
  },
  {
    id: 8,
    reviewer: "Sakhe M ",
    review:
      "Loved my experience with INEXA; they really made my learning a fun experience, practical, and informative!",
  },
];

const rating = new Array(5).fill({ star: <FaStar /> });

const Testimonials = () => {
  return (
    <>
      <section className="testimonials">
        <div className=" relative overflow-hidden bg-bgGray margin-x my-20 rounded-3xl">
          <div className="wrapper padding ">
            <div className="rating-stars">
              <ul className="flex gap-1 text-ratingColor text-3xl justify-center">
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
              </ul>
            </div>
            <div className="title">
              <div className="title">
                <div className="subheading subheading-black">inexa community</div>
                <h2 className="heading-black">inexa learning impact</h2>
              </div>
            </div>
            <div>
              <h3 className="text-center my-16">
                What Inexa learners are saying
              </h3>
              <div className="testi-widgets ">
                <ul className="testi-widget grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {review.map((item, index) => {
                    return (
                      <>
                        <li
                          key={index}
                          className=" bg-white shadow-sm p-8 rounded-2xl hover:shadow-md duration-300 hover:bg-gray-50"
                        >
                          <h4 className="capitalize">
                            {item.reviewer}
                            <ul className="flex gap-2 my-3 text-ratingColor">
                              {rating.map((item, index) => {
                                return <li key={index}>{item.star}</li>;
                              })}
                            </ul>
                          </h4>
                          <p className="line-clamp-5">{item.review}</p>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="absolute  bottom-0  h-44 bg-gradient-to-b from-slate-400 to-slate-800 bg-opacity-5  w-full border-4 border-red-300 "></div> */}
          <div className="absolute bottom-0 size-80 bg-gradient-to-b from-slate-400/0 to-slate-800/25 w-full"></div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
