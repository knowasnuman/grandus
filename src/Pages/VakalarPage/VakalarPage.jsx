import React, { useState } from "react";

import customers from "../../Assets/priscilla-du-preez-XkKCui44iM0-unsplash.jpg";
import "./vakalarPage.css";

import vaka1 from "./IMG-20250116-WA0014.jpg";
import vaka2 from "./IMG-20250116-WA0015.jpg";
import vaka3 from "./IMG-20250116-WA0016.jpg";
import vaka4 from "./IMG-20250116-WA0017.jpg";
import vaka5 from "./IMG-20250116-WA0018.jpg";
import vaka6 from "./IMG-20250116-WA0019.jpg";
import vaka7 from "./IMG-20250116-WA0020.jpg";
import vaka8 from "./IMG-20250116-WA0021.jpg";

const VakalarPage = () => {
  const [slideIndices, setSlideIndices] = useState({
    "PROF. Dr. Ezher Hamza Dayısoylu": 1,
    "Dr. Dt. Altuğ Ilgaz Horzum": 1,
    "Dr. Osman Nihat Özer": 1
  });
  const [showImages, setShowImages] = useState({
    "PROF. Dr. Ezher Hamza Dayısoylu": false,
    "Dr. Dt. Altuğ Ilgaz Horzum": false,
    "Dr. Osman Nihat Özer": false
  });

  const groupedSlides = {
    "PROF. Dr. Ezher Hamza Dayısoylu": [
      { src: vaka1, caption: "PROF. Dr. Ezher Hamza Dayısoylu" },
      { src: vaka2, caption: "PROF. Dr. Ezher Hamza Dayısoylu" },
      { src: vaka3, caption: "PROF. Dr. Ezher Hamza Dayısoylu" },
    ],
    "Dr. Dt. Altuğ Ilgaz Horzum": [
      { src: vaka4, caption: "Dr. Dt. Altuğ Ilgaz Horzum" },
    ],
    "Dr. Osman Nihat Özer": [
      { src: vaka5, caption: "Dr. Osman Nihat Özer" },
      { src: vaka6, caption: "Dr. Osman Nihat Özer" },
      { src: vaka7, caption: "Dr. Osman Nihat Özer" },
      { src: vaka8, caption: "Dr. Osman Nihat Özer" },
    ],
  };

  const showSlides = (doctor, n) => {
    const slides = groupedSlides[doctor];
    let newIndex = slideIndices[doctor] + n;
    if (newIndex > slides.length) newIndex = 1;
    if (newIndex < 1) newIndex = slides.length;
    setSlideIndices({ ...slideIndices, [doctor]: newIndex });
  };

  const toggleImage = (doctor) => {
    setShowImages({ ...showImages, [doctor]: !showImages[doctor] });
  };

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

      <div className="vakalar-slideshow-wrapper">
        {Object.entries(groupedSlides).map(([doctor, slides]) => (
          <div key={doctor} className="vakalar-slideshow-container">
            <h2 className="vakalar-doctor-name">{doctor}</h2>
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`vakalar-mySlides vakalar-fade ${
                  slideIndices[doctor] === index + 1 ? "active" : ""
                }`}
              >
                <div className="vakalar-numbertext">{`${index + 1} / ${slides.length}`}</div>
                <div className="vakalar-image-container">
                  <img
                    src={slide.src}
                    alt={slide.caption}
                    className={`vakalar-sensitive-image ${showImages[doctor] ? 'visible' : 'blurred'}`}
                  />
                  {!showImages[doctor] && (
                    <div className="vakalar-image-overlay">
                      <p className="vakalar-warning-text">
                        Bu görseller hassas içerik içermektedir. Yine de görüntülemek istiyorsanız aşağıdaki butona tıklayınız.
                      </p>
                      <button
                        className="vakalar-show-image-btn"
                        onClick={() => toggleImage(doctor)}
                      >
                        Görseli Görüntüle
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {slides.length > 1 && (
              <>
                <button className="vakalar-prev" onClick={() => showSlides(doctor, -1)}>❮</button>
                <button className="vakalar-next" onClick={() => showSlides(doctor, 1)}>❯</button>
                <div className="vakalar-dots-container">
                  {slides.map((_, index) => (
                    <span
                      key={index}
                      className={`vakalar-dot ${slideIndices[doctor] === index + 1 ? "active" : ""}`}
                      onClick={() => setSlideIndices({...slideIndices, [doctor]: index + 1})}
                    ></span>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default VakalarPage;
