import React from "react";
import { FaFacebook, FaMediumM, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container text-center">
        <div className="logo">
          <span className="fw-bold">DUDEY.AI</span>
        </div>
        <div className="d-sm-flex py-4 justify-content-between align-items-center">
          <ul className="nav-menu d-flex justify-content-between align-items-center">
            <li>
              <a href="#about" className="fw-bold">
                about
              </a>
            </li>
            <li>
              <a href="#why-invest">Why invest</a>
            </li>
            <li>
              <a href="#navbar">Token sale</a>
            </li>
            <li>
              <a href="#navbar">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="sub-footer d-sm-flex pb-5 justify-content-between">
          <div className="copyright text-light">
            <span className="copy-sign">&copy;</span>
            <span className="year mx-2">2022</span>
            <span className="site-name">DUDEY.AI</span>
          </div>
          <div className="socials my-3 my-sm-0">
            <a href="medium.com">
              <FaMediumM color="white" size="30" />
            </a>
            <a href="www.facebook.com" className="mx-3">
              <FaFacebook color="white" size="30" />
            </a>
            <a href="twitter">
              <FaTwitter color="white" size="30" />
            </a>
          </div>
          <div className="support-email pb-5">
            <a href="gmail.com">Support@dudey.ai</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
