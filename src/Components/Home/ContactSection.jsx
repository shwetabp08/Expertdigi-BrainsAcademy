import React, { useEffect, useState } from 'react';

const ContactSection = () => {
  const [projectCount, setProjectCount] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count += 50;
      if (count >= 2000) {
        clearInterval(interval);
        setProjectCount(2000);
      } else {
        setProjectCount(count);
      }
    }, 30);
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', address: '', message: '' });
    }
  };

  return (
    <section className="container my-5 py-5">
      <div className="row gy-4 contact-row align-items-center justify-content-center">
        <div className="col-md-6 position-relative text-center contactdiv">
          <div className="row">
            <div className="col-md-4">
            <img src="Images/kids1.png" alt="Child" className="position-absolute child-img img-thumbnail" />
          <div className="project-badge position-absolute">
            {Math.floor(projectCount / 1000)}k+<br />Project Completed
          </div>
            </div>
            <div className="col-md-8">
            <img src="Images/kids.png" alt="Child" className="img-fluid rounded main-img" />
            </div>
          </div>
          
        </div>

        <div className="col-md-6">
          <div className="">
          <h2 className="mb-4 fw-bold title">Send A Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.name && <small className="text-danger">{errors.name}</small>}
              </div>
              <div className="col">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>
            </div>

            <div className="mb-3">
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                value={formData.address}
                onChange={handleChange}
                className="form-control"
              />
              {errors.address && <small className="text-danger">{errors.address}</small>}
            </div>

            <div className="mb-3">
              <textarea
                name="message"
                rows={6}
                placeholder="Write your Message Here"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
              ></textarea>
              {errors.message && <small className="text-danger">{errors.message}</small>}
            </div>

            <button type="submit" className="btnBrown rounded-5 w-100">
              Send Now
            </button>
          </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
