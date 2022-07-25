import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
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
              <div className="about"><button className="getting">Get Bid</button></div>

              <p className="fotparag">You can all our call center, we are open on weekdays from 9:00AM to 8:00PM and on weekends from 9:00AM to 1:00PM</p>
              <div className="iconsyash">
              <BsTelephone/> &nbsp; 4512369857 <br/>
              <AiOutlineMail/> &nbsp; Yashtiautomobile@gmail.com</div>
            </div>


            <div className="contentt">
              <div className="about">Useful links</div>
               
              <Link to="/contactus" className="links">
                Contact us
              </Link>
              
               
              <a href="" className="links">
                About Us
              </a>
            </div>
            <div className="linespace" />
            <div className="blank" />
            <div className="mailus">
              <div className="about">Mail us</div>
              <a href="" className="links">
               yashtiautomobile@gmail.com
              </a>
              
            </div>
            <div className="mailus">
              <div className="about">Notification</div>
              <p>Join us to get latest notification </p>
              <div className="joinusdiv">
              <input className="notificationinp" placeholder="Get Instant updates"></input> <br/>
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
