import React from "react";

const Testimonial = ({testimonials}) => {
  const rating = 5;

  

  return (
    <section className="testimonial-section py-5">
      <div className="container">
        {/* Heading */}
        <div className="row my-4 justify-content-center align-items-center">
          <div className="col-12 col-md-8">
            <p className="fs-5 txtBlue fw-semibold">Clients Testimonial</p>
            <h2 className="fw-bold">
              Unlocking The Power Of <br />Wonderworks Child
            </h2>
          </div>
          <div className="col-12 col-md-4 description text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam facere deserunt aspernatur iste eaque.
          </div>
        </div>

        {/* Main Content */}
        <div className="row my-5 position-relative align-items-center">
          {/* Left Image */}
          <div className="col-12 col-md-8">
            <img
              src="Images/gallery-01.jpg"
              alt="Kids"
              className="testImg shadow-sm"
            />
          </div>

          {/* Testimonial Box */}
          <div className="col-12 col-md-4">
            <div className="testimonial-box bg-white shadow p-5 mx-md-0 mx-auto">
              <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">

                  {testimonials.map((testimonial, index) => (
                    <div
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                      key={index}
                    >
                      <div className="d-flex align-items-center mb-3">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="testimonialImg me-3"
                          width="50"
                        />
                        <div>
                          <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                          <small className="text-muted">{testimonial.role}</small>
                        </div>
                        <div className="ms-auto fs-3 text-success">
                          <i className="fa-solid fa-quote-right fa-2x"></i>
                        </div>
                      </div>
                      <p className="text-muted mb-2 pe-xxl-5">
                        {testimonial.quote}
                      </p>
                      <div className="fs-5">
                        {[...Array(5)].map((_, idx) => (
                          <i
                            key={idx}
                            className={`fa-star ${
                              idx < rating ? "fa-solid text-warning" : "fa-regular text-secondary"
                            }`}
                          ></i>
                        ))}
                      </div>
                    </div>
                  ))}

                </div>

                {/* Controls */}
                <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
