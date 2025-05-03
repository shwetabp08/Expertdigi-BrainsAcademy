import React from 'react';
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


const Courses = ({ courses }) => {  // <-- destructure 'courses' from props
 
  return (
    <div className="courses-section">
      <div className="container my-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <h1 className="mb-4 text-center title fw-bold">Courses We Offer</h1>
            <img
              src="/Images/courses.png"
              alt="Kids Riding Pencil"
              className="img-fluid"
            />
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
