import {
  Links,
  LiveReload,
  Meta,
  Link,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import React from "react";
import Twitter from "~/images/twitter.png";
import Instagram from "~/images/instagram.png";
import Facebook from "~/images/facebook.png";
import Linkedin from "~/images/linkedin.png";

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>

    </Document>

  );
}



function Document({ children }) {

  return (
    <html lang="en">
      <head>
      <script src="https://cdn.tailwindcss.com"></script>
        <Meta />
        <Links />
      </head>
      <body>
        {children}

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

function Layout({ children }) {
  return (
    <>
      <div className="1 grid grid-cols-1 sm:grid-cols-3 lg:grid:cols-3 justify-items-center  py-2">
        <div className="logo font-bold"><Link to="/">Eco-Builder</Link></div>
        <div className="links flex space-x-3 lg:space-x-3 sm:space-x-3 md:space-x-1">
          <Link to="/component/content">Home</Link>
          <Link to="/component/our-service">Service</Link>
          <Link to="/component/about-us">About Us</Link>
          <Link to="/component/lets-talk">Contact Us</Link>
        </div>
        <div className="button-1">
          <button className="login-button bg-[#68A678] text-white p-[3px] rounded">Login</button>
        </div>
      </div>

<div className="conatainer">
  {children}
</div>


      <div className="mainFooter bg-[#68A678] mt-[20px] pb-[20px]  grid ">
        <div className="grid grid:cols-1 sm:grid-cols-3 lg:grid-cols-3 justify-around lg:justify-items-center sm:justify-items-center justify-items-start">
          <div className="quick-links">
            <p className="quick-link-text text-white my-[18px]">Quick Links:</p>
            <ul className="list-disc text-white">
              <Link to="/component/content">Home</Link>
              <Link to="/component/our-service">Service</Link>
              <Link to="/component/about-us">About Us</Link>
              <Link to="/component/lets-talk">Contact Us</Link>
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
    </>
  )
}