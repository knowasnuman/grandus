import React, { useState, useEffect } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY); 
  useEffect(() => {
    if (window.scrollY > 150) {
      setIsVisible(false);
    }
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      
      if (currentScrollPos > prevScrollPos + 2 && currentScrollPos > 150) {
        setIsVisible(false);
      }  else if (currentScrollPos < prevScrollPos) {
        setIsVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className={`headerContainer ${isVisible ? "visibleH" : "hiddenH"}`}>
      <div className="markaIsmi">
        <h1>Grandus B-One</h1>
        <div className="contact">
          <p>Bize Ulaşın</p>
          <h4>0555 555 55 55</h4>
        </div>
      </div>
      <div className="navbarMenu">
        <Link
          to="/"
          className={`myLink ${location.pathname === "/" ? "activeLink" : ""}`}
        >
          Anasayfa
        </Link>
        <Link
          to="/seminerler"
          className={`myLink ${
            location.pathname === "/seminerler" ? "activeLink" : ""
          }`}
        >
          Seminerler
        </Link>
        <Link
          to="/vakalar"
          className={`myLink ${
            location.pathname === "/vakalar" ? "activeLink" : ""
          }`}
        >
          Vakalar
        </Link>
        <Link
          to="/duyurular"
          className={`myLink ${
            location.pathname === "/duyurular" ? "activeLink" : ""
          }`}
        >
          Duyurular
        </Link>
        <Link
          to="/iletisim"
          className={`myLink ${
            location.pathname === "/iletisim" ? "activeLink" : ""
          }`}
        >
          İletişim
        </Link>
      </div>
    </div>
  );
};

export default Header;
