import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <>
    <nav id="navbar">

      <input type="checkbox" id="check" />
      <label htmlFor="check" className='checkbtn'>
        <i className='fa fa-bars'></i>
      </label>
       {/* <label htmlFor="" className="logo">IETE</label> */}

            <ul>
                <li><Link activeClass='active' to="landingpage" spy={true} smooth={true} className="cursorpointer">Home</Link></li>
                <li><Link to="aboutmaindiv" spy={true} smooth={true} className="cursorpointer">About</Link></li>
                <li><a href="">Timeline</a></li>
                {/* <li><a href="">Schedule</a></li> */}
                {/* <li><a href="">Gallery</a></li> */}
                <li><a href="">Contact</a></li>
                <li><a href=""><span id="glowthis">REGISTER NOW !</span></a></li>
            </ul>
    </nav>
    </>
  )
}

export default Navbar

