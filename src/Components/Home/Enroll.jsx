import React from "react";
const Enroll = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center py-3">

        {/* Left Section */}
        <div className="col-md-6  mb-4 mb-md-0">
          <div className="option px-4 mb-4 d-flex align-items-center gap-3">
            {/* <img src="/path-to-school-icon.png" alt="School" className="icon" /> */}
            <i className="fa-solid fa-school fa-3x txtBrown w-25 text-center"></i>
            <h5 className="ms-3 txtBlue fw-bold ">Abacus in the school</h5>
          </div>

          <div className="option px-4 mb-4 d-flex align-items-center gap-3">
            {/* <img src="/path-to-book-icon.png" alt="Online Study" className="icon" /> */}
            <i className="fa-solid fa-book-open fa-3x txtBrown w-25 text-center"></i>
            <h5 className="ms-3 txtBlue fw-bold ">Study Online</h5>
          </div>

          <div className="option px-4 mb-4 d-flex align-items-center gap-3">
            {/* <img src="/path-to-person-icon.png" alt="Franchisee" className="icon" /> */}
            <i className="fa-solid fa-user fa-3x txtBrown w-25 text-center"></i>
            <h5 className="ms-3 txtBlue fw-bold ">Become a Franchisee</h5>
          </div>

          <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-3 mt-5 px-5 ps-md-0 ps-lg-5 pe-md-5 pe-lg-0">
            <button className="btnBrown rounded-5 mb-3 my-lg-0">Enroll Now</button>
            <div className="d-flex h-100 align-items-center my-2 my-lg-0">
            <i className="fa-solid fa-phone-volume phone-icon fa-2x mx-3"></i>
              <div className="text-start txtcontact">
                <span className="fw-bold txtBlue">Call For Enroll</span> <br />
                <span className="fw-bold txtBrown">123-456-789</span>
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
    </div>
  );
};

export default Enroll;
