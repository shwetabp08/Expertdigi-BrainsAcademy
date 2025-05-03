import React from "react";

const ContactForm = () => {
  return (
    <section className="my-xl-5 mb-5 ">
      <div className="container">
        <div className="row gy-5 align-items-center justify-content-center">
          {/* Left Side */}
          <div className="col-md-6 contact-col">
            <h2 className="fw-bold title">
              Ready To Get{" "}
              <span className="underline-text">
                Started?
                <svg
                  viewBox="0 0 200 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="underline-svg"
                >
                  <path
                    d="M5 15 Q 10 0, 120 5 T 195 10"
                    stroke="var(--secondary-color)"
                    strokeWidth="7"
                    fill="transparent"
                  />
                </svg>
              </span>
            </h2>
            <p className="text-muted mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              cupiditate maiores ipsam, sunt corrupti rerum alias earum tempore
              facilis tempora.
            </p>

            <div className="mt-4">
              <div className="d-flex align-items-start mb-3">
                <i className="fas fa-map-marker-alt txtBrown me-3 mt-1"></i>
                <div>
                  <strong>Brains Academy, </strong> Office no 130, Snehagan Residency <br />
                  Wing A-B Opposite Euro school Wakad Pune 411057
                </div>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="fas fa-phone-alt txtBrown me-3 mt-1"></i>
                <div>+1840 8415 2569</div>
              </div>

              <div className="d-flex align-items-start">
                <i className="fas fa-envelope txtBrown me-3 mt-1"></i>
                <div>brainsacademy11@gmail.com</div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="col-md-6 contact-col">
            <form>
              <div className="row g-4">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control inputText"
                    placeholder="Name"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    className="form-control inputText"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control inputText"
                    placeholder="Phone"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control inputText"
                    placeholder="Subject"
                  />
                </div>
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control inputText"
                  rows="5"
                  placeholder="Message"
                ></textarea>
              </div>

              <button type="submit" className="btnBrown py-2 fw-semibold">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
