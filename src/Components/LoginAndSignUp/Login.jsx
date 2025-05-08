import React, { useState } from "react";
import Cloud from "../cloud";
import Navbar from "../Navbar";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!role) newErrors.role = "Please select a role";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully");
      // Clear form fields
      setRole("");
      setEmail("");
      setPassword("");
      setErrors({});
    }
  };
  return (
    <>
      <section className="bannerPage position-relative">
        <header>
          <Navbar />
        </header>
        <div className="container py-5">
          <div className="row my-5 text-center align-items-center justify-content-center">
            <div className="my-lg-2">
              <h1 className="heading text-black mb-3">
                <span className="underline-text">
                  Sign In !
                  <svg
                    viewBox="0 0 200 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="underline-svg"
                  >
                    <path
                      d="M5 15 Q 10 0, 120 5 T 195 10"
                      stroke="var(--yellow-color)"
                      strokeWidth="7"
                      fill="transparent"
                    />
                  </svg>
                </span>
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
      <section className="mb-5">
        <div className="login-wrapper h-100">
          {/* Background Shapes */}
          <div className="shape top-right"></div>
          <div className="shape bottom-left"></div>

          {/* Card Container */}
          <div className="container px-xl-5 login-container d-flex flex-wrap justify-content-center align-items-center">
            <div className="card-container px-xl-5">
              <div className="image-container col-md-6">
                <img
                  src="Images/login3.jpg"
                  alt="Login Illustration"
                />
              </div>
              <div className="col-md-6 ">
                <form className="login-form" onSubmit={handleSubmit}>
                  <h2 className="fw-bold txtBrown text-center">Save Your Account Now</h2>
                  <p className="form-subtext text-center">
                    Get unlimited type of forms, questions and responses, free
                    forever
                  </p>

                  <div className="input-field">
                    <span className="icon">
                      <i className="fas fa-user"></i>
                    </span>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className={errors.role ? "invalid" : ""}
                      required
                    >
                      <option value="" disabled hidden></option>
                      <option value="teacher">Teacher</option>
                      <option value="student">Student</option>
                    </select>
                    <label>Select Role</label>
                    {errors.role && <div className="error">{errors.role}</div>}
                  </div>

                  <div className="input-field">
                    <span className="icon">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={errors.email ? "invalid" : ""}
                      placeholder=" "
                      required
                    />
                    <label>Email</label>
                    {errors.email && (
                      <div className="error">{errors.email}</div>
                    )}
                  </div>

                  <div className="input-field">
                    <span className="icon">
                      <i className="fas fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={errors.password ? "invalid" : ""}
                      placeholder=" "
                      required
                    />
                    <label>Password</label>
                    {errors.password && (
                      <div className="error">{errors.password}</div>
                    )}
                  </div>

                  <div className="d-flex justify-content-center align-items-center">
                    <button type="submit" className="btnBrown py-2 px-5">
                      Sign In
                    </button>
                  </div>

                  <p className="form-footer text-center">
                    Don't have an account?{" "}
                    <Link to="/signup" className="ms-2 txtBrown fw-bold">Sign Up</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
