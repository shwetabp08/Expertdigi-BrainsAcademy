import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // Check if page is scrolled
    };

    handleScroll(); // Check scroll position on component mount

    window.addEventListener('scroll', handleScroll); // Listen for scroll

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg py-0 my-0 d-flex align-items-center fixed-top ${
        scrolled ? 'scrolled' : ''
      }`}
      style={{ zIndex: 999 }}
    >
      <div className="container py-0 my-0">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src="/Images/logo1.png"
            alt="Logo"
            height="60"
            width="180px"
            style={{ objectFit: 'cover' }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav mb-5 mb-lg-0 align-items-center">
            <li className="nav-item mx-2">
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                to="/about"
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                to="/programs"
              >
                Programs
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                to="/gallery"
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                to="/contactus"
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item mx-2 mt-3 mt-lg-0">
              <a className="btnLogin rounded-5 py-2 px-4 fw-bold" href="#">
                Login / Signup
                <span className="ms-3">
                  <i className="fa-solid fa-arrow-right p-1 px-2 rounded-5"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
