import React from 'react'
import './footer.css'
import { SlSocialInstagram } from "react-icons/sl";
import { IoMailOutline, IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='foot'>
      <div className="logo-iletisim">
        <div className="B-One_Nedir">
            <h1>B-One Nedir ?</h1>
            <p>
              <strong>B-one</strong> tetra kalsiyum fosfat icerikli kemigi
              kemige, kemigi metale 10dk kadar kisa bi surede yapistiran ve bunu
              tamamen yerini kemige yani otojene birakana kadar bu mukavementini
              kaybetmeyen bir (kalsiyum fosfat cimento) sentetik kemiktir.
            </p>
        </div>
        <div className="logo">
            <h1>GRANDUS</h1>
        </div>
        <div className="contact-footer">
            <h1 className='a1'>Bizimle İletişime Geçin</h1>
            <p className='b1'>
              <IoCallOutline style={{marginRight: "10px", textAlign: "center"}}/>
              0442 233 91 38
            </p>
            <p className='b1'>
              <IoMailOutline style={{marginRight: "10px", textAlign: "center"}}/>
              doguanadoludis@hotmail.com
            </p>
            <div className="social_logo">
              <a 
                href="https://www.instagram.com/doguanadoludis?igsh=MWhhNG54OHE1cGkxdA==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="instagram-link"
              >
                <SlSocialInstagram style={{marginRight: "10px", textAlign: "center"}}/>
                <span>doguanadoludis</span>
              </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
