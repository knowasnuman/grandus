import React from 'react'

import './footer.css'
import { SlSocialInstagram } from "react-icons/sl";
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
            <h1 className='a1'>Bizimle Iletisime Gecin</h1>
            <p className='b1'>0506 800 35 25</p>
            <p className='b1'>forexampl@gmail.com</p>
            <div className="social_logo">
              <SlSocialInstagram/>
              <SlSocialInstagram/>
              <SlSocialInstagram/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
