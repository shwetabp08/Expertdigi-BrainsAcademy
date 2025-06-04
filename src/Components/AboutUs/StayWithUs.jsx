import React from 'react'

const StayWithUs = () => {
  return (
    <>
    <section className="stayContainer py-5">
    <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-md-7 col-lg-8">
            <div className='text-center text-lg-start'>
              <h5 className='text-capitalize fw-bold fontFam'>stay with us</h5>
              <h2 className="title text-capitalize fw-bold my-4 fontFam">
                The path to success starts with <br /> education
              </h2>
              <p className="description">
              Join Brains Academy’s journey toward academic excellence. With engaging programs and certified mentors, we shape confident, curious minds prepared for lifelong success.
              </p>
              <button className='btnBrown rounded-5 mt-3'>Read More</button>
            </div>
          </div>
          <div className="col-md-5 col-lg-4">
            <div className='imgchildren'>
              <img src="Images/imgChildren.png" alt="" className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
    </section>
     
    </>
  )
}

export default StayWithUs
