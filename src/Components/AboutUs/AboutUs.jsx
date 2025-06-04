import React from "react";
import Navbar from "../Navbar";
import Courses from "./Courses";
import AcademyInfo from "./AcademyInfo";
import StayWithUs from "./StayWithUs";
import Cloud from "../cloud";
import './about.css'
import Testimonial from "./Testimonial";

const AboutUs = ({courses}) => {
  const testimonials = [
    {
      name: "Alex Smith",
      role: "Parent of vedic math Student",
      image: "Images/man.png",
      quote:
        "My son absolutely loves his vedic math class. he's faster in math and more confident than ever!",
    },
    {
      name: "Priya Kulkarni",
      role: "Parent of Abacus Student",
      image: "Images/woman.png",
      quote: "My daughter absolutely loves her Abacus class. She's faster in math and more confident than ever!"
    }
  ];
  return (
    <>
      <section className="bannerPage position-relative">
        <header><Navbar/></header>
        <div className="container py-5">
          <div className="row my-5 text-center align-items-center justify-content-center">
            <div className="my-lg-2">
            <h1 className="heading text-black mb-3">
            Where Little Hands Create <span className="underline-text">Big Dreams!
                <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg" className="underline-svg">
                  <path d="M5 15 Q 10 0, 120 5 T 195 10" stroke="var(--yellow-color)" strokeWidth="7" fill="transparent" />
                </svg>
              </span>
            </h1>
           <div className='d-flex justify-content-center'>
           <p className="col-md-9 col-lg-8 col-xl-7 col-xxl-6 subheading fw-semibold">
           "Brains Academy is where curiosity meets creativity! We specialize in empowering kids aged 5 to 14 with programs like Abacus, Vedic Maths, Little Math Olympiad, and more—all designed to sharpen focus, logic, and academic skills."
            </p>
           </div>
            </div>

          </div>
        </div>
        <div>
        <Cloud/>
        </div>
    </section>
      <section className="container aboutContainer mb-5">
        <div className="row gy-4 align-items-center justify-content-center text-center">
          <div className="col-md-6">
            <div>
              <img src="Images/playingkids.png" alt="" className="img-fluid about" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="aboutPosition">
              <h2 className="title fw-bold">About Us Page</h2>
              <h3 className="fs-2 txtBlue fw-bold text-capitalize">
                Invest in education invest in the future
              </h3>
              <p className="my-3 mt-lg-4 mb-lg-5 description">
              Brains Academy is a leading ISO 9001:2015 certified institute offering innovative programs like Abacus, Vedic Maths, Word Problems, and Little Math Olympiad. Designed for ages 5–14, our courses foster focus, logical reasoning, and academic excellence in a fun, engaging way.
              </p>
              <button className="btnBrown rounded-5">Enroll Know</button>
            </div>
          </div>
        </div>
      </section>
      <Courses courses={courses}/>
      <AcademyInfo/>
      <Testimonial testimonials={testimonials}/>
      <StayWithUs/>
    </>
  );
};

export default AboutUs;
