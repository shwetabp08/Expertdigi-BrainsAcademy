import React from 'react'
import Cloud from '../cloud'
import Navbar from '../Navbar'

const SignUp = () => {
  return (
    <>
       <section className="bannerPage position-relative">
        <header><Navbar/></header>
        <div className="container py-5">
          <div className="row my-5 text-center align-items-center justify-content-center">
            <div className="my-lg-2">
            <h1 className="heading text-black mb-3">
             <span className="underline-text">Sign Up !
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
    </section>
    <section className='my-5'>

    </section>
    </>
  )
}

export default SignUp
