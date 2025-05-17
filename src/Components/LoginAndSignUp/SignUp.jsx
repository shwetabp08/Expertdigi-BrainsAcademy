import React, { useState, useEffect } from "react";
import Cloud from "../cloud";
import Navbar from "../Navbar";
import "./login.css";
import axios from "axios";

const SignUp = () => {
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        const countryList = res.data.map((c) => c.name.common).sort();
        setCountries(countryList);
      })
      .catch((err) => console.error("Error fetching countries:", err));
  }, []);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    if (selectedRole !== role || !showModal) {
      setRole(selectedRole);
      setFormData({});
      setSubmitted(false);
      setShowModal(true);
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setRole("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Built-in validation will prevent submit if invalid
    console.log({ role, ...formData });
    setSubmitted(true);
    setFormData({});
    setRole("");
    setShowModal(false);
  };

  const commonFields = (
    <>
      <div className="mb-2">
        <label className="fw-bold mb-1">First Name <span className="text-danger">*</span></label>
        <input
          type="text"
          className="form-control border border-2"
          name="fname"
          value={formData.fname || ""}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-2">
        <label className="fw-bold mb-1">Last Name <span className="text-danger">*</span></label>
        <input
          type="text"
          className="form-control border border-2"
          name="lname"
          value={formData.lname || ""}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-2">
        <label className="fw-bold mb-1">Mobile <span className="text-danger">*</span></label>
        <input
          type="tel"
          className="form-control border border-2"
          name="mobile"
          value={formData.mobile || ""}
          onChange={handleChange}
          required
          pattern="\d{10}"
          inputMode="numeric"
          maxLength="10"
          title="Enter 10-digit mobile number"
          onInput={(e) => {
            e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
          }}
        />
      </div>
      <div className="mb-2">
        <label className="fw-bold mb-1">Email <span className="text-danger">*</span></label>
        <input
          type="email"
          className="form-control border border-2"
          name="email"
          value={formData.email || ""}
          onChange={handleChange}
          required
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
          title="Please enter a valid email address"
        />
      </div>
      <div className="mb-2">
        <label className="fw-bold mb-1">Country <span className="text-danger">*</span></label>
        <div className="select-wrapper">
          <select
            className="form-select border border-2"
            name="country"
            value={formData.country || ""}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              -- Select Country --
            </option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );

  const extraFields = {
    student: (
      <div className="mb-2">
        <label className="fw-bold mb-1">Class <span className="text-danger">*</span></label>
        <input
          type="text"
          className="form-control border border-2"
          name="class"
          value={formData.class || ""}
          onChange={handleChange}
          required
        />
      </div>
    ),
    teacher: (
      <div className="mb-2">
        <label className="fw-bold mb-1">Qualification <span className="text-danger">*</span></label>
        <input
          type="text"
          className="form-control border border-2"
          name="qualification"
          value={formData.qualification || ""}
          onChange={handleChange}
          required
        />
      </div>
    ),
  };

  return (
    <>
      <section
        className={`bannerPage position-relative ${
          showModal ? "no-interaction" : ""
        }`}
        style={{ pointerEvents: showModal ? "none" : "auto" }}
      >
        <header className="position-relative" style={{ zIndex: "2" }}>
          <Navbar />
        </header>
        <div className="container py-5 position-relative">
          <div className="row my-5 text-center align-items-center justify-content-center">
            <div className="my-lg-2">
              <h1 className="heading text-black mb-3">
                <span className="underline-text">Sign Up!</span>
              </h1>
              <div className="d-flex justify-content-center">
                <p className="col-md-9 col-lg-8 col-xl-7 col-xxl-6 subheading fw-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, magnam beatae repellendus impedit adipisci.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Cloud />
        </div>
      </section>

      <section
        className={`mb-5  ${showModal ? "no-interaction" : ""}`}
        style={{ pointerEvents: showModal ? "none" : "auto" }}
      >
        <div className="container mb-5 pb-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-8 col-xl-6">
              <h3 className="text-center mb-4 signUpWrapper">
                Registration Form
              </h3>
              {submitted && (
                <div className="alert alert-success">
                  Form submitted successfully!
                </div>
              )}
              <div className="mb-4 pt-2  d-flex flex-wrap justify-content-start">
                <label className="form-label fs-5 fw-bold">Role :</label>
                <select
                  className="form-select border border-2 role-dropdown"
                  value={role}
                  onChange={handleRoleChange}
                  disabled={showModal}
                  required
                >
                  <option value="" disabled>
                    -- Choose Role --
                  </option>
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                </select>
              </div>
            </div>
          </div>

          {showModal && (
            <div className="modal-backdrop position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
              <div className="modal-content p-4 bg-white rounded ">
                <button
                  type="button"
                  className="btn-close position-absolute top-0 end-0 m-1"
                  onClick={handleClose}
                ></button>
                <form onSubmit={handleSubmit}>
                  {commonFields}
                  {extraFields[role]}
                  <button
                    type="submit"
                    className="btnBrown py-2 text-uppercase w-100 mt-2"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default SignUp;
