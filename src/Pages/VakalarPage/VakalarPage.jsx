import React, { useState, useEffect } from "react";
import VakaCard from "../../Components/VakaSection/VakaCard";
import customers from "../../Assets/priscilla-du-preez-XkKCui44iM0-unsplash.jpg";
import "./vakalarPage.css";
import axios from "axios";

const VakalarPage = () => {
  return (
    <>
      <div className="vakalar_container">
        <img src={customers} alt="Müşteri Vakaları" />
        <div className="blurred-overlay"></div>
        <div className="vakalar_title">
          <h1>Müşteri Vakaları</h1>
          <p>
            Müşterilerimizle ortaklığımızın, işyerlerinin daha verimli
            çalışmasını sağlamadan çalışanların sağlığını ve refahını artırmaya
            kadar dünyayı daha iyi çalışılabilir bir yer yapmak için insanları
            ve mekanları nasıl birbirine bağladığı hakkında daha fazla bilgi
            alın.
          </p>
        </div>
      </div>

      <VakaCard />
      <VakaCard />
      <VakaCard />
    </>
  );
};

export default VakalarPage;
