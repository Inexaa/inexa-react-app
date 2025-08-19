import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";
import "./style.css";
import TakeCourseCertificate from "../../Components/ArtificialCertificate";
const OnlineCertificates = () => {

  return (
    <>
      <Layout>
        <div className="top-gap"></div>
        <section className="top-breadcrumb margin-x  rounded-[30px]" style={{ backgroundImage: "url('/images/certificate-banner-bg.png')", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
          <div className="wrapper padding rounded-3xl padding-x ">
          <div className="breadcrum">
          <p className="text-white flex items-center text-sm">Home <img alt="arrow-icon" className="px-4" src="/images/dropdown.png" /> </p>
         <h1 className="page-title text-white text-6xl mb-0 py-5">Online certificates</h1>
         <p className="text-white text-lg">Learn new skills. Prove your proficiency. Earn certificates online from the <br></br> biggest names in industry and education.</p>
       </div>
          </div>
        </section>
        <section className="why-online-certificate bg-[#F5EEEE]">
            <div className="wrapper py-10 padding-x">
                <h3 className="text-black text-4xl text-center font-bold mb-10">Why an online certificate?</h3>
                 <div className="flex  flex-wrap" style={{gap:"70px"}}>
                    <div className="column-one w-full sm:w-[calc(50%-70px)] md:w-[calc(33.33%-70px)]">
                        <h6 className="font-medium text-3xl text-center">Level up quickly</h6>
                        <p>Build career-ready skills in just a few months — or even weeks.</p>
                    </div>
                    <div className="column-one w-full sm:w-[calc(50%-70px)] md:w-[calc(33.33%-70px)]">
                        <h6 className="font-medium text-3xl text-center">Elevate your résumé</h6>
                        <p>Prove your proficiency by earning certificates backed by top universities.</p>
                    </div>
                    <div className="column-one w-full sm:w-[calc(50%-70px)] md:w-[calc(33.33%-70px)]">
                        <h6 className="font-medium text-3xl text-center">Learn 100% online</h6>
                        <p>No in-person attendance is required.</p>
                    </div>
                 </div>
            </div>
        </section>
        <section className="why-online-certificate">
           <div className="wrapper py-[80px] padding-x">
           <h3 className="text-black text-4xl  font-bold mb-10">Why an online certificate?</h3>
           <p className="mb-5">Self-paced or instructor-led? Overview or deep dive? It’s your choice. edX partners with leading institutions to offer certificate-granting programs that meet a variety of personal and professional needs.</p>
           <p className="mb-5">Here are the types of online certificate programs you’ll find on edX:</p>
           <ul style={{listStyle:"disc", marginLeft:"50px"}}>
            <li className="mb-5"><strong>Professional Certificates :</strong> curated series of self-paced courses that can provide a pathway to your next milestone. Build comprehensive, career-relevant skills in high-demand fields in 2–18 months. </li>
            <li className="mb-5"><strong>Executive Education :</strong> instructor-led, cohort-based courses that hone leadership skills, and offer academic and career support in high-demand fields in 2–18 ahead of trends and develop organizational strategies in 2–10 weeks. </li>
            <li className="mb-5"><strong>XSeries :</strong> curated series of self-paced courses that can provide a pathway to your next milestone. mBuild comprehensive, career-relevant skills in high-demand fields in 2–18 months. </li>
            <li className="mb-5"><strong>Courses :</strong> curated series of self-paced courses that can provide a pathway to your next milestone. Build comprehensive, career-relevant skills in high-demand fields in 2–18 months. </li>
           </ul>
           <p className="mb-5"><strong>Looking for online certificate programs that are pathways to a degree? </strong>  Our MicroBachelors® and MicroMasters® programs enable you to earn certificates while also making progress toward a degree. </p>
           <ul style={{listStyle:"disc", marginLeft:"50px"}}>
            <li className="mb-5"><strong>Professional Certificates :</strong> curated series of self-paced courses that can provide a pathway to your next milestone. Build comprehensive, career-relevant skills in high-demand fields in 2–18 months. </li>
            <li className="mb-5"><strong>Professional Certificates :</strong> curated series of self-paced courses that can provide a pathway to your next milestone. Build comprehensive, career-relevant skills in high-demand fields in 2–18 months. </li>
           </ul>
           </div>
        </section>
        <section>
            <div className="wrapper py-10 padding-x">
            <h3 className="text-black text-4xl text-center font-semibold mb-20">Explore certificate programs by topic</h3>
            <h3 className="text-black text-4xl font-semibold mb-2">Artificial inteligence certificate</h3>
            <p className="mb-5">Whether you’re a tech professional or want to adapt AI-powered technologies for your organization, our AI certificates can help keep you current in a quickly evolving field in high-demand fields in 2–18 months. </p>
           <TakeCourseCertificate></TakeCourseCertificate>
            </div>
        </section>
        <section>
            <div className="wrapper py-10 padding-x">
            <h3 className="text-black text-4xl font-semibold mb-2">Data Analytics certificate</h3>
            <p className="mb-5">in high-demand fields in 2–18 months. </p>
           <TakeCourseCertificate></TakeCourseCertificate>
            </div>
        </section>
        <section>
            <div className="wrapper py-20 padding-x">
            <h3 className="text-black text-4xl font-semibold mb-2">Earn a certificate online from leading institutions</h3>
            <p className="mb-10">Wherever your career path takes you, edX can help you navigate. Choose from online certificate programs led by well-known universities and organizations — such as Harvard, MIT, IBM, and many others — so you can build toward your next milestone. If you’re not part of the edX community yet, register for an account and start learning today. </p>
            <div className="text-center">
            <a href="#" className="bg-black rounded-[50px] text-white tracking-[1px] text-xl py-5 px-10 font-semibold">Register for inexa</a>
            </div>
       
            </div>
        </section>

      </Layout>
    </>
  );
};

export default OnlineCertificates;
