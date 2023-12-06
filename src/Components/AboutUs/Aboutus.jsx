import React from 'react'
import "./About.css";
import {motion} from 'framer-motion'


const Aboutus = () => {
  const transition= {duration:4, type:'spring'};
  const initialPosition ={x:-800, opacity:0};
  const finalPosition ={x:0, opacity:1};

  return (
    <div className='A-wrapper '>
    <motion.div className='heading'
     initial ={initialPosition}
    whileInView={finalPosition}
    transition={transition}>
    <h1
   
    >About Us</h1>
    </motion.div>
   
<div className='About'>

<span>"Discover Our Passion for Paws🐾"</span>
<span>Know us !!</span>

</div>
      
    </div>
  )
}

export default Aboutus
