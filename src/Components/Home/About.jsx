import React from 'react'

const About = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row py-3 pb-lg-5 gy-4 align-items-center justify-content-center">
          {/* Left Image */}
          <div className="col-md-6 col-xl-5 text-center mb-4 mb-md-0">
            <img
              src="/Images/about.png"
              alt="Kids Learning"
              className="img-fluid rounded-image"
            />
          </div>

          {/* Right Text */}
          <div className="col-md-6 text-center text-md-start px-3 pe-md-0 ps-md-5">
            <h2 className="title">
              Where Little Hands <br />
              Create Big <span className="underline-text">Dreams !
                <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg" className="underline-svg">
                  <path d="M5 15 Q 10 0, 120 5 T 195 10" stroke="#f62e2d" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
            </h2>
            <p className="description my-3 my-lg-4">
              Abacus is a Brain Development Program. It is an amazing technique
              that assists students to do basic arithmetic calculations accurately
              and quickly. This method activates right as well as left side of the
              brain and helps students in achieving very high calculation speeds.
            </p>
            <button className="btnBrown mt-4 rounded-5">Know More</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
