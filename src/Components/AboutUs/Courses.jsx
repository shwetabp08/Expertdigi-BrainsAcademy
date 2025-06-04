import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ title, imgSrc }) => (
  <div className="course-card">
    <img src={imgSrc} alt={title} className="img-fluid" />
    <h2 className="txtBlue">{title}</h2>
    <Link to="/">
      <button className="plus-icon">
        <i className="fa-solid fa-plus"></i>
      </button>
    </Link>
  </div>
);

const Courses = ({ courses }) => {
  
  return (
    <section className="courses-section">
      <div className="container">
        <div className="row g-4 align-items-center justify-content-center">
          <div className="col-lg-6">
            <h1 className="mb-4 text-center text-lg-start title fw-bold">
              Courses We Offer
            </h1>
            <div className="my-4">
              <h5 className="txtBlue fw-bold text-capitalize">Abacus Program</h5>
              <p className="fw-semibold small text-secondary pe-lg-5">
                Abacus is a visual tool that helps children solve math problems using beads. It builds mental calculation skills, concentration, and confidence. Best suited for kids aged 5 to 14.
              </p>

              <h5 className="txtBlue fw-bold text-capitalize">Vedic Maths</h5>
              <p className="fw-semibold small text-secondary pe-lg-5">
                Based on ancient Indian techniques, Vedic Maths helps students solve complex problems quickly and accurately. Great for improving speed and preparing for competitive exams, ideal for ages 12 and up.
              </p>

              <h5 className="txtBlue fw-bold text-capitalize">Little Math Olympiad</h5>
              <p className="fw-semibold small text-secondary pe-lg-5">
                A fun and challenging math program designed to prepare young learners for competitions. It boosts logic, accuracy, and problem-solving in an engaging way.
              </p>

              <h5 className="txtBlue fw-bold text-capitalize">School Abacus</h5>
              <p className="fw-semibold small text-secondary pe-lg-5">
                A structured abacus course integrated into school learning. Focuses on brain development through regular practice, level-wise exams, and certified results. Available online and offline.
              </p>
            </div>
            <button className="btnBrown rounded-5">Enroll Know</button>
          </div>
          <div className="col-lg-6">
            <div className="row">
              {courses.map((course, index) => (
                <div className="col-md-6 mb-4" key={index}>
                  <CourseCard title={course.title} imgSrc={course.imgSrc} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
