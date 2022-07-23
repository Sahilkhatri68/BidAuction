import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

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
              <Link to="/contactus" className="links">
                Contact us
              </Link>
              <a href="" className="links">
                About us
              </a>
              <a href="" className="links">
                Careers
              </a>
              <a href="" className="links">
                abc
              </a>
            </div>
            <div className="contentt">
              <div className="about">Help</div>
              <a href="" className="links">
                Payement
              </a>
               
              <a href="" className="links">
                Returns
              </a>
              <a href="" className="links">
                FAQ'S
              </a>
            </div>
            <div className="contentt">
              <div className="about">Policy</div>
              <a href="" className="links">
                Terms of use
              </a>
              <a href="" className="links">
                Sitemap
              </a>
             
              
            </div>
            <div className="contentt">
              <div className="about">Social</div>
              <a href="" className="links">
                Facebook
              </a>
              <a href="" className="links">
                Twitter
              </a>
              <a href="" className="links">
                Instagram
              </a>
              <a href="" className="links">
                WhatsApp
              </a>
            </div>
            <div className="linespace" />
            <div className="blank" />
            <div className="mailus">
              <div className="about">Mail us</div>
              <a href="" className="links">
                Abc@gmail.com
              </a>
                Abc@gmail.com
              <a href="" className="links">
              </a>
                Abc@gmail.com
              <a href="" className="links">
              </a>
                Abc@gmail.com
              <a href="" className="links">
              </a>
            </div>
            <div className="mailus">
              <div className="about">Address</div>
              <a href="" className="links">
               Bidder (#56)
              </a>
              <a href="" className="links">
                Abc
              </a>
              <a href="" className="links">
                Abc
              </a>
              <a href="" className="links">
                India
              </a>
            </div>
          </div>

          <div className="row" style={{ margin: 0 }}>
            <div className="container-fluid">
              <h3> &copy; 2022 <span className="sp">Auction</span> All right's reserveed</h3>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
