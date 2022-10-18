import React from "react";
import Twitter from "~/images/twitter.png";
import Instagram from "~/images/instagram.png";
import Facebook from "~/images/facebook.png";
import Linkedin from "~/images/linkedin.png";


import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (


    <div className="mainFooter bg-[#68A678] mt-[20px] pb-[20px]  grid">
      <div className="grid grid:cols-1 sm:grid-cols-3 lg:grid-cols-3 justify-around lg:justify-items-center sm:justify-items-center justify-items-start">
        <div className="quick-links">
          <p className="quick-link-text text-white my-[18px]">Quick Links:</p>
          <ul className="list-disc text-white">
            <li><a href=""> Home</a></li>
            <li><a href=""> Service</a></li>
            <li><a href=""> About Us</a></li>
            <li><a href=""> Contact Us</a></li>
          </ul>
        </div>
        <div className="our-vision-footer">
          <p className="text-white my-[18px] text-xl">Our Vision:</p>
          <p className="text-white ">Being a world class organization that<br></br>transforms lifes one building at a time.</p>
        </div>
        <div className="3">
          <p className="connect-us text-white text-xl my-[18px]">
            Connect with us:
          </p>
          <div className="logos grid grid-cols-4">

            <div className="1 w-[30px]">
              <a href=""><img src={Twitter} alt="tweeter" /></a>
            </div>
            <div className="2 w-[30px]">
              <a href=""><img src={Facebook} alt="facebook" /></a>
            </div>
            <div className="3 w-[30px]">
              <a href=""><img src={Instagram} alt="instagram" /></a>
            </div>
            <div className="4 w-[30px]">
              <a href=""><img src={Linkedin} alt="linkedin" /></a>
            </div>

          </div>

        </div>
      </div>

    </div>



  );
}
