import React from 'react'

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
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Events</a></li>
                <li><a href="">Schedule</a></li>
                <li><a href="">Gallery</a></li>
                <li><a href="">Contact</a></li>
                <li><a href=""><span id="glowthis">REGISTER NOW !</span></a></li>
            </ul>
    </nav>
    </>
  )
}

export default Navbar
