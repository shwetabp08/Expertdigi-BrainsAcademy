import React from 'react'
import Navbar from '../Navbar'
import Cloud from '../cloud'
import ContactForm from './ContactForm'
import './contact.css'

const ContactUs = () => {
  return (
    <>
      <div className="bannerPage position-relative">
        <Navbar/>
        <div className="container py-5">
          <div className="row my-5 text-center align-items-center justify-content-center">
            <div className="my-lg-2">
            <h1 className="heading text-black mb-3">
            Get In  <span className="underline-text">Touch!
                <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg" className="underline-svg">
                  <path d="M5 15 Q 10 0, 120 5 T 195 10" stroke="var(--yellow-color)" strokeWidth="7" fill="transparent" />
                </svg>
              </span>
            </h1>
           <div className='d-flex justify-content-center'>
           <p className="col-md-9 col-lg-8 col-xl-7 col-xxl-6 subheading fw-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, magnam beatae repellendus impedit adipisci.
            </p>
           </div>
            </div>

          </div>
        </div>
        <div>
        <Cloud/>
        </div>
    </div>
    <ContactForm/>
    </>
  )
}

export default ContactUs
