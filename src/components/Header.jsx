import React from "react";
import { FaAndroid } from "react-icons/fa";
import Hero from "./Hero";

const Header = () => {
  const [navOpen, setNavOpen] = React.useState(false);
  const [navCollapsed, setNavCollapsed] = React.useState(false);

  const modifyNavbar = () => {
    setNavCollapsed(true);
    if (window.innerWidth < 769) {
      setNavCollapsed(true);
    } else {
      setNavCollapsed(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", modifyNavbar);

    return () => {
      window.removeEventListener("resize");
    };
  }, []);

  React.useEffect(modifyNavbar, [navCollapsed]);
  return (
    <header>
      <nav
        className={`navbar ${navCollapsed && "collapsed"} ${navOpen && "open"}`}
      >
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
            <li>Token sale</li>
            <li>FAQ</li>
            <li className="cta-w">
              <button className="btn btn-light cta-w">GET WHITELISTED</button>
            </li>
          </ul>
          <div className="toggle-btn" onClick={() => setNavOpen(!navOpen)}>
            <FaAndroid size="20" />
          </div>
        </div>
      </nav>
      <Hero />
    </header>
  );
};

export default Header;
