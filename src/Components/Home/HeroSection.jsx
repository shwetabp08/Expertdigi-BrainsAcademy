import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero-section container py-5">
      <div className="row justify-content-center justify-content-xxl-between  py-5 px-2">
        {/* Left Text Section */}
        <div className="col-md-8 col-xl-7 text-center pt-xl-5">
        <i className="fa-solid fa-star fa-2x star-icon fs-5"></i>
        <i className="fa-solid fa-star fa-2x star-icon"></i>
        <i className="fa-solid fa-star fa-2x star-icon fs-5"></i>
        <h1 className="heading fw-bold my-3 text-capitalize">
            Welcome to Brains Academy
          </h1>

          <p className="subheading fw-bold my-2 my-xl-3 homeBannerTxt">
            An ISO 9001:2015 certified institute offering innovative courses for children aged 5 to 14 — including Abacus, Vedic Maths, Word Problems, and more.
            Our programs develop focus, logical reasoning, and problem-solving skills.
          </p>

          {/* Buttons */}
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center my-4 my-xl-5">
            <Link to="/" className="demobtn fw-bold rounded-5 mb-3 mb-md-0 me-xl-3">
              Book a Demo Class <span className="ms-3"><i className="fa-solid fa-arrow-right p-1 px-2 rounded-5"></i></span>
              
             
            </Link>
            <div className="d-flex h-100  align-items-center justify-content-center">
            <i className="fa-solid fa-phone-volume phone-icon fa-2x mx-3"></i>
              <div className="text-start txtcontact">
                <span className="fw-bold txtBlue">Call For Enroll</span> <br />
                <span className="fw-bold txtBrown">+91 9270178355</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="col-md-4 text-center mt-5 mt-lg-0">
          <img src="Images/hero-boy.png" alt="Boy" className="img-fluid boy" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
