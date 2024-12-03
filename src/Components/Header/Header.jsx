import React from 'react'
import "./header.css"


import { Link, useLocation } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GoMail } from "react-icons/go";


const Header = () => {
  const location = useLocation(); 
  

  return ( 
    <>
      <div className="logo">
          <h1 className="baslik">GRANDUS B-ONE</h1>
      </div>
      <div className="headerContainer">
          <div className="header"> 
            <div className="navbarMenu">
                    <Link to="/" className={`myLink ${location.pathname === "/" ? "activeLink" : ""}`}>Anasayfa</Link>
                    <Link className='myLink'>Seminerler</Link>
                    <Link className='myLink'>Vakalar</Link> 
                    <Link className='myLink'>Duyurular</Link>
                    <Link to="iletisim" className={`myLink ${
                      location.pathname === "/iletisim" ? "activeLink" : ""
                    }`}>Iletisim</Link>
            </div> 

          </div>
          <div className="iletisim">
                <FaInstagram className='insta'/>
                <FaXTwitter className='twitter'/>
                <GoMail className='mail'/>
          </div>
      </div>
    </>
  )
}

export default Header
