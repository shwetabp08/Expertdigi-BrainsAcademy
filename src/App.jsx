import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FooterSection from "./Components/FooterSection";
import AboutUs from "./Components/AboutUs/AboutUs";
import Program from "./Components/Programs/Program";
import Gallery from "./Components/Gallary/Gallery";
import Home from "./Components/Home/Home";
import ContactUs from "./Components/Contact/ContactUs";
import Login from "./Components/LoginAndSignUp/Login";
import SignUp from "./Components/LoginAndSignUp/SignUp";

function App() {
  const courses = [
    {
      title: 'Abacus Program',
      imgSrc: '/Images/schoolIcon.png', // update paths according to your project
    },
    {
      title: 'Vedic Math',
      imgSrc: '/Images/schoolIcon.png',
    },
    {
      title: 'Little Math Olympiad',
      imgSrc: '/Images/schoolIcon.png',
    },
    {
      title: 'School Abacus',
      imgSrc: '/Images/schoolIcon.png',
    },
  ];
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home courses={courses}/>} />
        <Route path="/about" element={<AboutUs courses={courses}/>} />
        <Route path="/programs" element={<Program/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>

      <FooterSection /> {/* Footer will be common across all pages */}
    </Router>
      
    </>
  );
}

export default App;
