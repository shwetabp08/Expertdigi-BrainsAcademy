import React from "react";
const Enroll = () => {
  return (
    <section className="container my-5">
      <div className="row align-items-center py-3">

        {/* Left Section */}
        <div className="col-md-6  mb-4 mb-md-0 pe-lg-5">
        <div className="option px-4 mb-4 d-flex gap-4">
            <i className="fa-solid fa-school fa-3x txtBrown "></i>
            <div>
              <h5 className="txtBlue fw-bold">Abacus in Schools</h5>
              <p className="mb-0 small">
              Brains Academy is
conducting Abacus
and Kalfun classes
at various schools
in India.
              </p>
            </div>
          </div>

          <div className="option px-4 mb-4 d-flex gap-4">
            <i className="fa-solid fa-book-open fa-3x txtBrown "></i>
            <div>
              <h5 className="txtBlue fw-bold">Study Online / Offline</h5>
              <p className="mb-0 small">
              Brains Academy provides
online learning platform
for all students, studying
in different parts of
country for Abacus,
Vedic Math.
              </p>
            </div>
          </div>

          <div className="option px-4 mb-4 d-flex gap-4">
            <i className="fa-solid fa-user fa-4x txtBrown "></i>
            <div>
              <h5 className="txtBlue fw-bold">Become a Franchisee</h5>
              <p className="mb-0 small">
              Brains Academy provides the
best and result oriented
Abacus training to reach
personal and business goals
with a complete mentorship
system.
              </p>
            </div>
          </div>

          <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-3 mt-5 ">
            <button className="btnBrown rounded-5 mb-3 my-lg-0">Enroll Now</button>
            <div className="d-flex h-100 align-items-center justify-content-center justify-content-md-start  my-2 my-lg-0">
            <i className="fa-solid fa-phone-volume phone-icon fa-2x mx-3"></i>
              <div className="text-start txtcontact">
                <span className="fw-bold txtBlue">Call For Enroll</span> <br />
                <span className="fw-bold txtBrown">+91 9270178355</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Images */}
        <div className="col-md-6 text-center position-relative">
          <img
            src="Images/about.png"
            alt="Main Class"
            className="main-image img-fluid"
          />
          <img
            src="Images/enroll1.png"
            alt="Small Class"
            className="small-image img-fluid d-none d-md-block"
          />
        </div>

      </div>
    </section>
  );
};

export default Enroll;
