import React from "react";
import Navbar from "../Navbar";
import Courses from "./Courses";
import AcademyInfo from "./AcademyInfo";
import StayWithUs from "./StayWithUs";
import Cloud from "../cloud";
import './about.css'
import Testimonial from "./Testimonial";

const AboutUs = ({courses}) => {
  const testimonials = [
    {
      name: "Alex Smith",
      role: "Marketing Manager",
      image: "Images/man.png",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quidem sed quis perferendis ad ipsum earum repellendus harum assumenda neque?",
    },
    {
      name: "Rose Doe",
      role: "Product Designer",
      image: "Images/woman.png",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure maiores vitae iste eligendi doloremque tempora?",
    },
  ];
  return (
    <>
      <section className="bannerPage position-relative">
        <header><Navbar/></header>
        <div className="container py-5">
          <div className="row my-5 text-center align-items-center justify-content-center">
            <div className="my-lg-2">
            <h1 className="heading text-black mb-3">
            Where Little Hands Create <span className="underline-text">Big Dreams!
                <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg" className="underline-svg">
                  <path d="M5 15 Q 10 0, 120 5 T 195 10" stroke="var(--yellow-color)" strokeWidth="7" fill="transparent" />
                </svg>
              </span>
            </h1>
           <div className='d-flex justify-content-center'>
           <p className="col-md-9 col-lg-8 col-xl-7 col-xxl-6 subheading fw-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, magnam beatae repellendus impedit adipisci, tenetur id aut odit culpa sit ad.
            </p>
           </div>
            </div>

          </div>
        </div>
        <div>
        <Cloud/>
        </div>
    </section>
      <section className="container aboutContainer mb-5">
        <div className="row gy-4 align-items-center justify-content-center text-center">
          <div className="col-md-6">
            <div>
              <img src="Images/playingkids.png" alt="" className="img-fluid about" />
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <h2 className="title fw-bold">About Us Page</h2>
              <h3 className="fs-2 txtBlue text-capitalize">
                Invest in education invest in the future
              </h3>
              <p className="my-3 my-lg-5 description">
                Lorem ipsum dolor sit amet consectetur adipiscing elit platea
                pharetra, nostra mattis hendrerit proin mollis pretium facilisi
                in, ligula volutpat lobortis molestie sed per accumsan conubia.
                Sed dis loren ipsum dummy text
              </p>
              <button className="btnBrown rounded-5">Enroll Know</button>
            </div>
          </div>
        </div>
      </section>
      <Courses courses={courses}/>
      <AcademyInfo/>
      <Testimonial testimonials={testimonials}/>
      <StayWithUs/>
    </>
  );
};

export default AboutUs;
