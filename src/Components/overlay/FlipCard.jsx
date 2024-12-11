
import React, {useState, useEffect} from "react"; 
import "./flipcard.css";
import "../../Pages/HomePage/data.json";



const FlipCard = ({resim, title, content}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Ekran boyutuna göre mobil kontrolü
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px altında mobil
    };
    handleResize(); // İlk yüklemede kontrol et
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCardClick = () => {
    if (isMobile) {
      setIsFlipped(!isFlipped); // Sadece mobilde tıklama ile çalışır
    }
  };

  return (
    <div
      className={`flip-card ${isFlipped ? "flipped" : ""}`}
      onClick={handleCardClick}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={resim} alt="" />
        </div>
        <div className="flip-card-back">
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;

