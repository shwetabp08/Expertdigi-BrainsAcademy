import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <section className="container my-5">
        <div className="row py-3 pb-lg-5 gy-4 align-items-center justify-content-center">
          {/* Left Image */}
          <div className="col-md-6 col-xl-5 text-center mb-4 mb-md-0">
            <img
              src="Images/about.png"
              alt="Kids Learning"
              className="img-fluid rounded-image"
            />
          </div>

          {/* Right Text */}
          <div className="col-md-6 text-center text-md-start px-3 pe-md-0 ps-md-5">
            <h2 className="title">
              Where Little Hands <br />
              Create Big <span className="underline-text">Dreams !
                <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg" className="underline-svg">
                  <path d="M5 15 Q 10 0, 120 5 T 195 10" stroke="#f62e2d" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
            </h2>
            <p className="description my-3 my-lg-4">
              Brains Academy offers engaging learning programs like Abacus and Vedic Maths for children aged 5 to 14. Our goal is to build strong math skills, sharper minds, and higher confidence through fun and interactive training. With every class, we help kids unlock their full potential and enjoy learning.
            </p>
           <div className='mt-5'>
           <Link to="/about" className="btnBrown rounded-5">Know More</Link>
           </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
