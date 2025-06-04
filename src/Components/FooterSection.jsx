import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer-section py-4 text-white">
      <div className="container">
        <div className="row gy-4 align-items-center justify-content-center">

          <div className="col-12 col-md-6 col-lg-3">
            <img src="Images/Mainlogo.png" alt="Brains Academy" className="mb-3 footerlogo" />
            <p className='pe-lg-5 my-3 mb-4'>
              Brains Academy is an ISO-certified institute offering Abacus, Vedic Maths, and Olympiad programs for children. We focus on brain development, speed, and logical thinking in a fun and engaging way.
            </p>
            <div className="social-icons ">
  <i className="fab fa-facebook-f"></i>
  <i className="fab fa-x-twitter"></i>
  <i className="fab fa-linkedin-in"></i>
  <i className="fab fa-youtube"></i>
</div>
          </div>

          <div className="col-12 col-md-6 col-lg-2">
            <h6 className="section-heading">Pages</h6>
            <div className='footerLine'></div>
            <ul className="list-unstyled mt-3 mt-md-4">
              <li>Refund Policy</li>
              <li>Careers</li>
              <li>Privacy & Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <h6 className="section-heading">Contact Info</h6>
            <div className='footerLine'></div>
            <ul className="list-unstyled mt-3 mt-md-4">
  <li className="d-flex align-items-start mb-2">
    <i className="fas fa-map-marker-alt me-2 mt-1"></i>
    <span className='ms-2 pe-3'>
      <Link to="" className='text-white'>Office no 130 Snehagan Residency Wing A-B Opposite Euro school Wakad Pune 411057</Link>
    </span>
  </li>
  <li className="d-flex align-items-start mb-2">
    <i className="fas fa-envelope me-2 mt-1"></i>
    <span className='ms-2'><Link to="" className="text-white">brainsacademy11@gmail.com</Link></span>
  </li>
  <li className="d-flex align-items-start">
    <i className="fas fa-phone me-2 mt-1"></i>
    <span className='ms-2'><Link to="" className="text-white">+91 9270178355</Link></span>
  </li>
</ul>

          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <h6 className="section-heading">Our Newsletter</h6>
            <div className='footerLine'></div>
            <p className='mt-3 mt-md-4'>Subscribe our newsletter to get our latest update</p>
            <div className="newsletter d-flex">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Your Email"
              />
              <button className="btn btn-warning text-white ms-2">
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>

        </div>

        <hr className="my-4 border-light" />

        <div className="text-center small">
          <span className="fw-bold txtYellow">Brains Academy</span> © {currentYear}{" "} All Rights Reserved.
          <span className="ms-2"><Link to="" className="text-white">Terms & Condition</Link></span> |
          <span className="ms-2"><Link to="" className="text-white">Privacy Policy</Link></span> |
          <span className="ms-2"><Link to="" className="text-white">Contact Us</Link></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
