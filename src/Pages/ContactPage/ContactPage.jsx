import React, { useRef } from "react";
import "./contactPage.css";
import emailjs from "@emailjs/browser";

import { SlSocialInstagram } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_kvtxay7", "template_8w5y7et", form.current, {
        publicKey: "NjJZtS-pXz4Ovyqw6",
      })
      .then(
        () => {
          alert(
            "E-Posta Başarıyla gönderildi. Tarafınıza geri dönüş sağlanacaktır."
          );
        },
        (error) => {
          alert(
            "E-Posta Gönderilirken Bir Hata Oluştu. doguanadoludis@hotmail.com adresine mail atarak mesajınızı bize iletebilirsiniz.",
            error.text
          );
        }
      );
  };
  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="ulas">
        <div className="mail_gonder">
          <div className="full_name">
            <div className="first_name">
              <label htmlFor="">Isminiz </label>
              <input type="text" name="user_name" />
            </div>
            <div className="last_name">
              <label htmlFor="">Soyisminiz </label>
              <input type="text" name="user_lastname" />
            </div>
          </div>
          <label htmlFor="">Email </label>
          <input type="email" name="user_email" className="mail" />
          <label htmlFor="">Mesajiniz </label>
          <textarea type="text" name="message" className="mesaj" />
          <button type="submit">Gonder</button>
        </div>
        <div className="iletisim_box">
          <div className="box1">
            <IoMailOutline className="content_icons" />
            <p>doguanadoludis@hotmail.com</p>
          </div>
          <div className="box2">
            <BsTelephone className="content_icons" />
            <p>0442 233 91 38</p>
          </div>
          <div className="box3">
            <a style={{textDecoration: "none", color: "inherit"}}
              href="https://www.instagram.com/doguanadoludis?igsh=MWhhNG54OHE1cGkxdA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <SlSocialInstagram className="content_icons" />
              <p>doguanadoludis</p>
            </a>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactPage;
