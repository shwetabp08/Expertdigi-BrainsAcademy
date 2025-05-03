import React from "react";

// about page : director and academy info
const AcademyInfo = () => {
  return (
    <>
    <div className="academyContainer">
    <div className="container my-5">
        <div className="row g-4 align-items-center">
          <div className="col-md-6 d-flex align-items-center justify-content-evenly">
            <div className="academy p-3">
              <div className="director d-flex align-items-center justify-content-center">
                <img src="Images/woman.png" alt="director" className="" />
              </div>
              <div className="text-center mt-3 d-flex flex-column align-items-center">
                <h3 className="fw-bold">Sunayana Purushottam Amrutkar</h3>
                <h5 className="">Director</h5>
                <h5 className="">M-Tech in Industrial Mathematics</h5>
                <div className="social-icons mt-3">
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-x-twitter"></i>
                  <i className="fab fa-linkedin-in"></i>
                  <i className="fab fa-youtube"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <p className="my-5 description pe-lg-5">
                Brains Academy is a leading ISO 9001:2015 certified organization
                providing Abacus, Vedic Math and Kalfun training to students in
                the age group 5 to 14 years. Brains Academy is engage in mind
                development programs and in nourishing children brain. With a
                growing list of franchises, Brains Academy aims at setting up
                value based Abacus training programs for the benefit of all
                children in our society. Brains Academy has set new standards of
                excellence in Abacus and mental arithmetic education in India by
                implementing systematic training and teaching methods. We teach
                Course Instructor (franchisee) and children’s both Online as
                well as Offline platform. At Brains Academy , we firmly believe
                that every child in the world is born with the potential to
                become a genius. Please join us in helping the children realize
                that potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default AcademyInfo;
