import React, { useState, useEffect } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const location = useLocation();
  const [isVisibleN, setIsVisibleN] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    if (window.scrollY > 150) {
      setIsVisibleN(false);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos + 2 && currentScrollPos > 150) {
        setIsVisibleN(false);
      } else if (currentScrollPos < prevScrollPos) {
        setIsVisibleN(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const [isMobile, setIsMobile] = useState(false); // Mobil görünüm durumu
  const [menuOpen, setMenuOpen] = useState(false); // Menü açık/kapalı durumu

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize(); // İlk açılışta kontrol et
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  

  return (
    <div className={`headerContainer ${isVisibleN ? "visibleH" : "hiddenH"}`}>
      {isMobile ? (
        <>
          <div className="mobiliz">
            <div className="markaIsmiMobil">
              <h1>Grandus B-One</h1>
            </div>
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes className="mobil_ikon"/> : <FaBars className="mobil_ikon"/>}
            </div>
          </div>

          {menuOpen && (
            <div className="navbarMenu">
              <Link
                to="/"
                className={`myLink_Mobile ${
                  location.pathname === "/" ? "activeLink" : ""
                }`}
              >
                Anasayfa
              </Link>
              <Link
                to="/seminerler"
                className={`myLink_Mobile ${
                  location.pathname === "/seminerler" ? "activeLink" : ""
                }`}
              >
                Seminerler
              </Link>
              <Link
                to="/vakalar"
                className={`myLink_Mobile ${
                  location.pathname === "/vakalar" ? "activeLink" : ""
                }`}
              >
                Vakalar
              </Link>
              <Link
                to="/duyurular"
                className={`myLink_Mobile ${
                  location.pathname === "/duyurular" ? "activeLink" : ""
                }`}
              >
                Duyurular
              </Link>
              <Link
                to="/iletisim"
                className={`myLink_Mobile ${
                  location.pathname === "/iletisim" ? "activeLink" : ""
                }`}
              >
                İletişim
              </Link>
            </div>
          )}
        </>
      ) : (
        <div
          className={`headerContainer ${isVisibleN ? "visibleH" : "hiddenH"}`}
        >
          <div className="markaIsmi">
            <h1>Grandus B-One</h1>
            <div className="contact">
              <p>Bize Ulaşın</p>
              <h4>0442 233 91 38</h4>
            </div>
          </div>
          <div className="navbarMenu">
            <Link
              to="/"
              className={`myLink ${
                location.pathname === "/" ? "activeLink" : ""
              }`}
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
      )}
    </div>
  );
};

export default Header;
