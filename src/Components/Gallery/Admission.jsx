import React from 'react';

const Admission = () => {
  return (
    <section className="gallary-section d-flex align-items-center">
      <div className="container">
        <div className="row g-4 align-items-end justify-content-center hero-row ">
          {/* Left Image */}
          <div className="col-md-3 d-none d-lg-block">
            <img
              src="Images/cta-illustration-01.png"
              alt="Left"
              className="left-image"
            />
          </div>

          {/* Center Content */}
          <div className="col-lg-6 text-center content-wrapper d-flex flex-column align-items-center justify-content-center">
            <h5 className="text-orange">Boost Brain Power</h5>
            <h1>
              Unlock Your Child's
              <span className="text-highlight"> Math Superpower!</span>
            </h1>
            <p className='fw-semibold my-2 mb-4'>
              Join Brains Academy – where logic meets speed, <br />
              and learning becomes a joyful experience for young minds!
            </p>
            <button className="btnBrown col-lg-7 col-xxl-5">
              Apply For Admission
            </button>
          </div>

          {/* Right Image */}
          <div className="col-md-3 d-none d-lg-block">
            <img
              src="Images/cta-illustration-02.png"
              alt="Right"
              className="right-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admission;
