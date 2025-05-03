import React from 'react'
import Navbar from '../Navbar'
import HeroSection from './HeroSection'
import About from './About'
import Enroll from './Enroll'
import Courses from './Courses'
import Gallery from './Gallery'
import ContactSection from './ContactSection'
import './home.css'
import Cloud from '../cloud'

const Home = ({courses}) => {
  return (
    <>
      <div className="landing-page position-relative">
        <img
          src="/Images/lines.png"
          alt="lines"
          className="linesImg d-none d-xl-block"
        />
        <Navbar/>
        <HeroSection/>
        <div>
        <Cloud/>
        </div>
      </div>

      <About/>
      <Enroll/>
      <Courses courses={courses}/>
      <Gallery/>
      <ContactSection/>
    </>
  )
}

export default Home
