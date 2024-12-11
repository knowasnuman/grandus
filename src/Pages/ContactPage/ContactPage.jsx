import React from "react";
import "./contactPage.css";

import { SlSocialInstagram } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
const ContactPage = () => {
  return (
    <>
      <div className="ulas">
        <div className="mail_gonder">
          <div className="full_name">
            <div className="first_name">
              <label htmlFor="">Isminiz </label>
              <input type="text" />
            </div>
            <div className="last_name">
              <label htmlFor="">Soyisminiz </label>
              <input type="text" />
            </div>
          </div>
          <label htmlFor="">Email </label>
          <input type="email" className="mail" />
          <label htmlFor="">Mesajiniz </label>
          <input type="text" className="mesaj" />
          <button>Gonder</button>
        </div>
        <div className="iletisim_box">
          <div className="box1">
            <IoMailOutline className="content_icons"/>
            <p>forexapmle@gmail.com</p>
          </div>
          <div className="box2">
            <BsTelephone className="content_icons"/>
            <p>0500 555 50 55</p>
          </div>
          <div className="box3">
            <SlSocialInstagram className="content_icons"/>
            <p>b_onegreft</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
