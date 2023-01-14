import React from 'react'
import { Link } from 'react-scroll'

const LandingPage = () => {
  return (
    <>
     <div id="landingpage">
        <h1 className='glitch'>ELEMENTOS</h1>
        <h1 className='glow'> &#60;<span id="eight">8.0</span>&gt;</h1>
        <div id="downarrow"><Link to="aboutmaindiv" spy={true} smooth={true} className='cursorpointer'><img src="https://img.icons8.com/ios-filled/50/2FC392/double-down.png"/></Link></div>
    </div>
    </>
  )
}

export default LandingPage
