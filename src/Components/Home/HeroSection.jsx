import React from "react";

const HeroSection = () => {
  return (
    <section className="hero-section container py-5">
      <div className="row justify-content-center py-5 px-2">
        {/* Left Text Section */}
        <div className="col-md-8 text-center pt-lg-5">
        <i className="fa-solid fa-star fa-2x star-icon fs-5"></i>
        <i className="fa-solid fa-star fa-2x star-icon"></i>
        <i className="fa-solid fa-star fa-2x star-icon fs-5"></i>
          <h1 className="heading fw-bold my-3">
            Exploring Minds Elementary <br /> <span className="text-danger">School</span>
          </h1>
          <p className="subheading my-2 my-xl-3">
            Starting a corporate business typically involves several steps, such as develop a business.
          </p>

          {/* Buttons */}
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center my-4 my-xl-5">
            <a href="#" className="demobtn fw-bold rounded-5 mb-3 mb-md-0 me-xl-3">
              Book a Demo Class <span className="ms-3"><i className="fa-solid fa-arrow-right p-1 px-2 rounded-5"></i></span>
              
             
            </a>
            <div className="d-flex h-100 align-items-center ">
            <i className="fa-solid fa-phone-volume phone-icon fa-2x mx-3"></i>
              <div className="text-start txtcontact">
                <span className="fw-bold txtBlue">Call For Enroll</span> <br />
                <span className="fw-bold txtBrown">123-456-789</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="col-md-4 text-center mt-5 mt-lg-0">
          <img src="/Images/hero-boy.png" alt="Boy" className="img-fluid boy" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
