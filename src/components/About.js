import React from 'react'
import ufo_img from '../images/final_ufo.jpg';
import moonimg from '../images/moonit-removebg-preview.jpg'
import rocket from '../images/rocket2.0-removebg-preview.jpg'
import pluto_img from '../images/pluto-removebg-preview.jpg'
import { Link } from 'react-scroll';

const About = () => {
  return (
    <>
      <div id="aboutmaindiv">

        <div id="abtevent">
          <h1 id="abtheading" data-aos="fade-right">ABOUT THE EVENT</h1>
          <br /><br /><br />
          <div id="AbtText_ufo">
            <div id="AbtText" data-aos="flip-left">
              Proudly continuing the tradition of organising the Biggest Technical Fest in Thapar for over the past 5 years, IETE is back with another version upgrade : Elementos 8.O. A week-long series of fun-filled and brainstorming events, which are open for all the students in and across Thapar. Come in and Enjoy the intense events and staying productive at your best energy levels. Experience the unravelling of the big surprises ‼️
            </div>
            <div id="ufoimage" data-aos="zoom-in-up">

              <img src={moonimg} alt="" />
            </div>
          </div>
          {/* <img src={rocket} alt="" id="rocket" /> */}
          <div id="rocket_img" data-aos="fade-right">
          <img src={rocket} alt="" id="rocket"/>
          </div>
        </div>
      </div>
        {/* <div id="downarrow2"><Link to="/" spy={true} smooth={true} className='cursorpointer'><img src="https://img.icons8.com/ios-filled/50/2FC392/double-down.png"/></Link></div> */}
      
    </>
  )
}

export default About
