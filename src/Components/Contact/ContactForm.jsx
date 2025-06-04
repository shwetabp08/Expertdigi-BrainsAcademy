import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // For phone, allow only numbers
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    const { name, email, phone, subject, message } = formData;

    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    if (!phone.trim()) newErrors.phone = "Phone is required.";
    else if (phone.length !== 10) newErrors.phone = "Phone must be 10 digits.";
    if (!subject.trim()) newErrors.subject = "Subject is required.";
    if (!message.trim()) newErrors.message = "Message is required.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Submit logic here (e.g., send to backend or display a success message)
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <section className="my-xl-5 mb-5">
      <div className="container">
        <div className="row gy-5 align-items-center justify-content-center">
          {/* Left Side */}
          <div className="col-md-6 contact-col">
            <h2 className="fw-bold title">
              Ready To Get{" "}
              <span className="underline-text">
                Started?
                <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg" className="underline-svg">
                  <path
                    d="M5 15 Q 10 0, 120 5 T 195 10"
                    stroke="var(--secondary-color)"
                    strokeWidth="7"
                    fill="transparent"
                  />
                </svg>
              </span>
            </h2>
            <p className="text-muted fw-semibold mt-3">
              Want to know more about Abacus, Vedic Maths, or Franchise opportunities? 
              Get in touch with us — we’re here to guide you every step of the way!
            </p>

            <div className="mt-4">
              <div className="d-flex align-items-start mb-3">
                <i className="fas fa-map-marker-alt txtBrown me-3 mt-1"></i>
                <div>
                  <strong>Brains Academy,</strong><br />
                  Office No. 130, Snehagan Residency, Wing A-B,<br />
                  Opp. Euro School, Wakad, Pune - 411057
                </div>
              </div>
              <div className="d-flex align-items-start mb-3">
                <i className="fas fa-phone-alt txtBrown me-3 mt-1"></i>
                <div>+91 9270178355</div>
              </div>
              <div className="d-flex align-items-start">
                <i className="fas fa-envelope txtBrown me-3 mt-1"></i>
                <div>brainsacademy11@gmail.com</div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="col-md-6 contact-col">
            <form onSubmit={handleSubmit} noValidate>
              <div className="row g-4">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control inputText"
                    placeholder="Name"
                  />
                  {errors.name && <small className="text-danger">{errors.name}</small>}
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control inputText"
                    placeholder="Email"
                  />
                  {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control inputText"
                    placeholder="Phone"
                    maxLength={10}
                  />
                  {errors.phone && <small className="text-danger">{errors.phone}</small>}
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control inputText"
                    placeholder="Subject"
                  />
                  {errors.subject && <small className="text-danger">{errors.subject}</small>}
                </div>
              </div>

              <div className="mb-3">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control inputText"
                  rows="5"
                  placeholder="Message"
                ></textarea>
                {errors.message && <small className="text-danger">{errors.message}</small>}
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
