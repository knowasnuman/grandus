import React from "react";
import { Link } from "react-router-dom";

import "./seminerPage.css";
import seminer1 from "../../Seminerler/seminerler1.jpg";
import seminer2 from "../../Seminerler/seminerler2.jpg";
import seminer3 from "../../Seminerler/seminerler3.jpg";
import seminer4 from "../../Seminerler/seminerler4.jpg";
import seminer5 from "../../Seminerler/seminerler5.jpg";
import seminer6 from "../../Seminerler/seminerler6.jpg";
import seminer7 from "../../Seminerler/seminerler7.jpg";
import seminer8 from "../../Seminerler/seminerler8.jpg";
import seminer9 from "../../Seminerler/seminerler9.jpg";
import seminer10 from "../../Seminerler/seminerler10.jpg";
import { useState } from "react";

const SeminerPage = () => {
  const slides = [
    { src: seminer1, alt: "" },
    { src: seminer2, alt: "" },
    { src: seminer3, alt: "" },
    { src: seminer4, alt: "" },
    { src: seminer5, alt: "" },
    { src: seminer6, alt: "" },
    { src: seminer7, alt: "" },
    { src: seminer8, alt: "" },
    { src: seminer9, alt: "" },
    { src: seminer10, alt: "" },
  ];

  const [currentSlide, setCurrentSlide] = useState(1);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length ? 1 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? slides.length : prev - 1));
  };

  const setSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div className="hhh">
      <Link to="/duyurular" className="duyuruYonlendirLink">
          <div className="duyuruYonlendirContainer">
            <div className="duyuruYonlendir">
              <p>
                Gelecek Seminerlerden Haberdar Olmak İçin Tıklayınız.
                
              </p>
            </div>
          </div>
          
          
          
        </Link>
      </div>

      <div className="anaTitle">
        <p>- Seminerler -</p>
      </div>
      <div className="seminerPage">
        <div className="seminerPage-title">
          <h1>Erzurum Hilton Semineri</h1>
          <h3>Konu:</h3>
          <p>
            Bu seminerimizde .
          </p>
          <p className="tarih">Tarih: 12.01.2025</p>
        </div>
        <div className="slideshow-container">
          <div className="slide">
            <img
              src={slides[currentSlide - 1].src}
              alt={slides[currentSlide - 1].alt}
            />
            <div className="caption">{slides[currentSlide - 1].alt}</div>
          </div>
          <button className="prev" onClick={prevSlide}>
            ❮
          </button>
          <button className="next" onClick={nextSlide}>
            ❯
          </button>
          <div className="thumbnails">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide.src}
                alt={slide.alt}
                className={`thumbnail ${
                  currentSlide === index + 1 ? "active" : ""
                }`}
                onClick={() => setSlide(index + 1)}
              />
            ))}
          </div>
        </div>
        );
      </div>
    </>
  );
};

export default SeminerPage;
