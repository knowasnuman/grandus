import "./vakaCard.css";

import React from "react";
import OrnekResim from "./idaretenResim.jpg";
import OrnekResim1 from "./idaretenResim1.jpg";
const VakaCard = () => {
  return (
    <>
      <div className="vContainer">
        <section className="vakaContainer">
          <h1 className="anaB">Musterimiz "Numan Taha Kotan" grandus tedavisinden sonra sunlari soyledi</h1>
          <div className="icerik">
            <p className="vakaIcerik">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
              at, labore odit culpa iure perspiciatis error nam corrupti vitae?
              Repudiandae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, deserunt, eligendi illo molestias non ad 
              repellat harum nostrum amet voluptatum nam, doloremque soluta exercitationem facere maiores quaerat error! Eaque, deleniti.
            </p>
          </div>
        </section>
        <div className="image">
            <img src={OrnekResim} alt="" />
          </div>
      </div>
    </>
  );
};

export default VakaCard;
