import React from "react";

const CourseCard = ({ title, imgSrc }) => (
  <div className="course-card">
    <img src={imgSrc} alt={title} className="img-fluid" />
    <h2 className="txtBlue">{title}</h2>
    <a href="#">
      <button className="plus-icon">
        <i className="fa-solid fa-plus"></i>
      </button>
    </a>
  </div>
);

const Courses = ({ courses }) => {
  
  return (
    <div className="courses-section">
      <div className="container">
        <div className="row g-4 align-items-center justify-content-center">
          <div className="col-lg-6">
            <h1 className="mb-4 text-center text-lg-start title fw-bold">
              Courses We Offer
            </h1>
            <p className="my-5 description pe-lg-5">
              Lorem ipsum dolor sit amet consectetur adipiscing elit platea
              pharetra, nostra mattis hendrerit proin mollis pretium facilisi
              in, ligula volutpat lobortis molestie sed per accumsan conubia.
              Sed dis loren ipsum dummy text Lorem ipsum dolor sit amet
              consectetur adipiscing elit platea pharetra, nostra mattis
              hendrerit proin mollis pretium facilisi in, ligula volutpat
              lobortis molestie sed per accumsan conubia. Sed dis loren ipsum
              dummy text Enroll Now
            </p>
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
    </div>
  );
};

export default Courses;
