import React from 'react'
import { Link } from 'react-scroll'
import Typewriter from "typewriter-effect"
import ufo from '../images/final_ufo.jpg'

const LandingPage = () => {
  return (
    <>
     <div id="landingpage">
      {/* <img src={ufo} alt="" id="ufo_img"/> */}
    {/* <img src={blackhole} alt="" id="blackhole" /> */}
    <div id="landingpagecontent">
        <h1 className='glitch'>ELEMENTOS</h1>

        <h1 className='glow'> &#60;<span id="eight">8.0</span>&gt;</h1>
        {/* <br /> */}
        <div id="typewriter">
        <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("INVENT YOURSELF")
         
       .pauseFor(3000)
      //  .deleteAll()
      //  .typeString("Welcomes You")
       .start();
       }}
       />
        </div>

    </div>
        <div id="downarrow"><Link to="aboutmaindiv" spy={true} smooth={true} className='cursorpointer'><img src="https://img.icons8.com/ios-filled/50/2FC392/double-down.png"/></Link></div>
    </div>
    </>
  )
}

export default LandingPage
