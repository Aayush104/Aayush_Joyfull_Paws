import Navbar from "./Components/Navbar/Navbar"  
import Intro from "./Components/Intro/Intro" ;
import Mission from "./Components/Mission/Mission" ;
import About from "./Components/AboutUs/Aboutus" ;
import Story from "./Components/Story/Story";
import Banner from "./Components/Banner/Banner";
import Information from "./Components/Information/Information";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

import './App.css';


const App = () => {
  return (

    <>
    <div className="App">
     <Navbar />
      <Intro />
     <Information />
     <About />
     <Story />
     <Mission/>
     <Banner />
     <Testimonial />
     <Contact />

     <Footer /> 
    
   
     
    </div>
    </>
  )
}

export default App

