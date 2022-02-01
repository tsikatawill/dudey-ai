import React from "react";
import Hero from "./Hero";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="container py-3 d-sm-flex justify-content-between align-items-center">
          <div className="logo">
            <span className="fw-bold">DUDEY.AI</span>
          </div>
          <ul className="nav-menu d-flex justify-content-between align-items-center">
            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <a href="#why-invest">Why invest</a>
            </li>
            <li>{/* <a href="/">Token sale</a> */}Token sale</li>
            <li>{/* <a href="#why-invest">FAQ</a> */}FAQ</li>
            <li>
              <button className="btn btn-light">GET WHITELISTED</button>
            </li>
          </ul>
        </div>
      </nav>
      <Hero />
    </header>
  );
};

export default Header;
