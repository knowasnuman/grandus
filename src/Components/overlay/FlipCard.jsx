import React, { useState, useEffect } from "react";
import "./flipcard.css";

import data from "../../Pages/HomePage/data.json"; // JSON dosyasını import ediyoruz.

const FlipCard = ({resim,title,content}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  // Ekran boyutuna göre mobil kontrolü
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobil sınırı: 768px
    };
    handleResize(); // İlk render sırasında kontrol
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Accordion için tıklama işlemi
  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flipcard-container">
      {isMobile ? ( // Mobilde Accordion görünümü
        <div className="accordion-container">
          {data.map((item, index) => (
            <div key={index} className="accordion-item">
              {/* Menü Başlığı */}
              <div className="accordion-header" onClick={() => toggleItem(index)}>
                <h3>{item.title}</h3>
                <button className="toggle-btn">
                  {openIndex === index ? "-" : "+"}
                </button>
              </div>
              {/* Menü İçeriği */}
              {openIndex === index && (
                <div className="accordion-content">
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : ( // Masaüstünde FlipCard görünümü
        <div className="flip-card-container">
         
            <div  className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={resim} alt={title} />
                </div>
                <div className="flip-card-back">
                  <h1>{title}</h1>
                  <p>{content}</p>
                </div>
              </div>
            </div>
          
        </div>
      )}
    </div>
  );
};

export default FlipCard;
