import React from "react";

// about page : director and academy info
const AcademyInfo = () => {
  return (
    <>
    <section className="academyContainer">
    <div className="container my-5">
        <div className="row g-4 align-items-center py-4">
          <div className="col-md-6 d-flex align-items-center justify-content-evenly">
            <div className="academy p-3">
              <div className="director d-flex align-items-center justify-content-center">
                <img src="Images/woman.png" alt="director" className="" />
              </div>
              <div className="text-center mt-3 d-flex flex-column align-items-center">
                <h3 className="fw-bold">Mrs. Sunayana Purushottam Amrutkar</h3>
                <h5 className="fw-bold">Director</h5>
                <h6 className="">M-Tech in Industrial Mathematics</h6>
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
            <div className="">
              <p className=" description pe-lg-5">
              <strong>Brains Academy</strong> is a leading ISO 9001:2015 certified registered institute, specializes in designing innovative courses for children aged 5 to 14. We offers all courses under one roof like ABACUS, VEDIC MATHS, Word Problems, Little Math Olympiad and many more.
These courses enhance focus, concentration, logical reasoning, and problem-solving skills.</p>
<p className="my-2 description pe-lg-5"> 
<strong>Mrs. Sunayana P. Amrutkar (M.Tech, Mathematics)</strong> — Director With over a decade of expertise in designing innovative child development programs, Mrs. Sunayana leads with passion and precision, transforming educational experiences for young minds across the country.</p>
<p className=" description pe-lg-5">
<strong> Mr. Purushottam M. Amrutkar</strong> — Visionary Leader A true innovator and strategic thinker, Mr. Purushottam’s leadership drives nationwide growth, supported by a seasoned team of highly skilled professionals bringing decades of excellence in child education. Together, they are shaping the future of child development in India, one brilliant idea at a time.

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
      
    </>
  );
};

export default AcademyInfo;
