import React from 'react'

const StayWithUs = () => {
  return (
    <>
    <div className="stayContainer py-5">
    <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-md-7 col-lg-8">
            <div className='text-center text-lg-start'>
              <h5 className='text-capitalize fw-bold fontFam'>stay with us</h5>
              <h2 className="title text-capitalize fw-bold my-4 fontFam">
                The path to success starts with <br /> education
              </h2>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque natus harum dolorum fugiat, est debitis?
              </p>
              <button className='btnBrown rounded-5'>Read More</button>
            </div>
          </div>
          <div className="col-md-5 col-lg-4">
            <div className='imgchildren'>
              <img src="Images/imgChildren.png" alt="" className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
    </div>
     
    </>
  )
}

export default StayWithUs
