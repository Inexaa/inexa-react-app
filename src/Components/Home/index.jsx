import React, { useEffect } from "react";
import Layout from '../Layout'
import Hero from './Hero'
import Testimonials from './Testimonials'
import Business from './Business'
import Team from './Team'
import ExploreINexa from './ExploreInexa'
import Courses from '../Courses'
import Gotop from '../GoTop'
import BlueButton from '../Buttons/BlueButton'
import "./home.css";
import "../../animation.js"




const Home = () => {

  useEffect(() => {
    const sections = document.querySelectorAll(".heading_container.heading_center");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const spans = entry.target.querySelectorAll("h2 span");
          spans.forEach((span, index) => {
            setTimeout(() => {
              span.classList.add("show");
            }, index * 100); // Delay each letter
          });
          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    }, { threshold: 0.5 });
    sections.forEach(section => observer.observe(section));
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <>
    <Layout>
        <Hero />

        {/* <ScrollAnimationCustom /> */}

        
        <Courses subtitle='explore' tagline='Courses and Professional Certificates' heading='Most Popular Courses and Certificates' para="Learn from global experts and gain the knowledge, and skills you need from the world's leading universities."/>

        
        <Courses subtitle='' tagline='Executive Education Programs' heading='Explore Top Executive Education Courses' para="Study With Flexibility — Embark on a trans formative leadership journey, and position yourself for success."/>
        <Courses subtitle='' tagline='Degree Programss' heading='Explore a degree from a prestigious institutions' para="Earn a degree from top institutions worldwide and gain the knowledge and skills needed to advance your career"/> 
         {/* <EducationCourses /> */} 
        <ExploreINexa />
        <Testimonials />
        <Business />
        <Team />
    
        
    </Layout>
    </>
  )
}

export default Home