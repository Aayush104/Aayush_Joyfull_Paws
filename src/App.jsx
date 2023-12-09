import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Mission from './Components/Mission/Mission';
import About from './Components/AboutUs/Aboutus';
import Story from './Components/Story/Story';
import Banner from './Components/Banner/Banner';
import Information from './Components/Information/Information';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Register from './Components/Register/Register';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            index
            element={
              <>
                <Navbar />
                <Intro />
                <Information />
                <About />
                <Story />
                <Mission />
                <Banner />
                <Testimonial />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/join-us" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
