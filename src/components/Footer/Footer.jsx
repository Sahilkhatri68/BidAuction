import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebook, FaSnapchat } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
// import aayakartLogo from "../Images/aayakartLogo.png";
// import { IoBagHandleSharp } from "react-icons/io5";
// import { AiFillQuestionCircle } from "react-icons/ai";
// import Alogo from "../images/AayakartLogo.png";
export default function Footer() {
  return (
    <>


      <footer>
        <div className="footer-wrap">
          <div className="wrapperrr">
            <div className="contentt">
              <div className="about"><Link to="/cosign"> <button className="getting">Get Bid</button></Link></div>

              <p className="fotparag">You can all our call center, we are open on weekdays from 9:00AM to 8:00PM and on weekends from 9:00AM to 1:00PM</p>
              <div className="iconsyash">
                <BsTelephone /> &nbsp; Phone Number <br />
                <AiOutlineMail /> &nbsp; Yashtiautomobile@gmail.com</div>
            </div>


            <div className="contentt">
              <div className="about">Useful links</div>

              <Link to="/contactus" className="links">
                Contact us
              </Link>


              <Link to="/aboutus" className="links">
                About Us
              </Link>
            </div>
            <div className="contentt">
              <div className="about">Social Login</div>

              <Link to="/contactus" className="links">
                <FaFacebook className="socialicondiv" /> Facebook
              </Link>


              <Link to="/aboutus" className="links">
                <AiFillTwitterCircle className="socialicondiv" /> Twitter
              </Link>
              <Link to="/aboutus" className="links">
                <BsInstagram className="socialicondiv" /> Instagram
              </Link>
              <Link to="/aboutus" className="links">
                <FaSnapchat className="socialicondiv" /> Snapchat
              </Link>
              <Link to="/aboutus" className="links">
                <BsWhatsapp className="socialicondiv" /> Whatsapp
              </Link>
            </div>
            <div className="linespace" />
            <div className="blank" />
            {/* <div className="mailus">
              <div className="about">Mail us</div>
              <a href="" className="links">
                <FiMail/> yashtiautomobile@gmail.com
              </a>
              
            </div> */}
            <div className="mailus">
              <div className="about">Notification</div>
              <p>Join us to get latest notification </p>
              <div className="joinusdiv">
                <input className="notificationinp" placeholder="Get Instant updates"></input> <br />
                <button className="jnus">Join Us</button></div>
            </div>
          </div>

          <div className="row" style={{ margin: 0 }}>
            <div className="container-fluid">
              <p style={{ fontSize: 16 }}> &copy; 2022   Yashti Automobile Pvt Ltd</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
