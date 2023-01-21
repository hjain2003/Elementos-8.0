import React from 'react'
import logo from '../images/IETE_Logo.png'
import link_arrow from '../images/pointer_arrow.png'
import { Link } from 'react-scroll'
import insta from '../images/insta.png'
import linkedin from '../images/linkedin.png'
import facebook from '../images/facebook.png'
import youtube from '../images/youtube.png'

const Contact = () => {
  return (
    <div id="ContactSection">

    <div id="Contact_Wrapper">
        <div id="IETE_Logo" data-aos="zoom-in">
            <img src={logo} alt="" />
        </div>

        <div id="Useful_Links" data-aos="fade-right">
            <span id="useful_heading">
                Useful Links
            </span>
            <hr />
            <div id="links">
                <Link to="landingpage" spy={true} smooth={true} className="cursorpointer"><span className="linktoarrow"><img src={link_arrow} />&nbsp;Home</span></Link>
                <hr />
                <Link to="aboutmaindiv" spy={true} smooth={true} className="cursorpointer"><span className="linktoarrow"><img src={link_arrow} />&nbsp;About The Event</span></Link>
                <hr />
                <Link to="Timeline" spy={true} smooth={true} className="cursorpointer"><span className="linktoarrow"><img src={link_arrow} />&nbsp;Timeline</span></Link>
                <hr />
            </div>
        </div>

        <div id="SocialMedia" data-aos="fade-left">
            <span id="Contact_Heading">
                Contact Us
            </span>
            <hr />
            <div id="contact_details">
                <span className="trial"><b>Phone:</b> +91 9765526010</span>
                <span className='trial'><b>Email:</b> iete_sc@thapar.edu</span>
                <span id="logos">
                    <a href="https://www.instagram.com/iete_thapar/?igshid=1ejfzimgt270p"><img src={insta} alt="" /></a>&nbsp;&nbsp;
                    <a href="https://www.linkedin.com/company/iete-thapar/"><img src={linkedin} alt="" /></a>&nbsp;&nbsp;
                    <a href="https://www.facebook.com/TUECECLUB/"><img src={facebook} alt="" /></a>&nbsp;&nbsp;
                    <a href="https://www.youtube.com/channel/UCw2NfHeeZ03yXfzOdEiTYRQ"><img src={youtube} alt="" /></a>&nbsp;&nbsp;
                    </span>
            </div>

        </div>
    </div>

</div>
  ) 
}

export default Contact
