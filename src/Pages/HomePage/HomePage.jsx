import React, { useState, useEffect, useRef } from "react";
import "./homePage.css";
import flipData from "./data.json";
import AnaResim from "./Grandus B-One (2).png";
import { FaAngleDown } from "react-icons/fa";
import igne from "../../Assets/igne111.jpg";
import solIgne from "../../Assets/igneSagaBakan.png";
import ilacKutusu from "../../Assets/ilacKutusu.jpg";
import FlipCard from "../../Components/overlay/FlipCard";
import DuyuruBox from "../../Components/duyuruBox/DuyuruBox";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 480) {
        // Mobil cihazlar için
        if (window.scrollY > 10) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        // Masaüstü cihazlar için
        if (window.scrollY > 1) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const videoRef = useRef(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVideoVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Video ekrana %50 görünür olduğunda tetiklenir.
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);
  useEffect(() => {
    if (isVideoVisible) {
      videoRef.current.play(); // Video görünür olduğunda oynatılır.
    } else {
      videoRef.current.pause(); // Video görünürlüğü kaybolunca durdurulur.
    }
  }, [isVideoVisible]);
  const [isFlipMobile, setIsFlipMobile] = useState(false);


  useEffect(() => {
    const checkMobile = () => setIsFlipMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <>
      <div className="anaResim">
        <img src={AnaResim} alt="" />
        <div className="first">
          <img
            src={ilacKutusu}
            alt=""
            className={`ilacKutu ${isVisible ? "hidden" : "visible"}`}
          />
          <h1>Grandus B-One </h1>
          <h1>Nedir?</h1>
          <p>
            B-one, tetra kalsiyum fosfat icerikli kemigi kemige, kemigi metale
            10dk kadar kisa bi surede yapistiran ve bunu tamamen yerini kemige
            yani otojene birakana kadar bu mukavementini kaybetmeyen bir
            (kalsiyum fosfat cimento) sentetik kemiktir.
          </p>
        </div>
      </div>

      <div className="section1">
        <div className="sectionBox">
          <div className="sectionImage">
            <img src={igne} alt="" />
          </div>
          <div className="sectionDescription">
            <h1>Grandus B-One Ne Ise Yarar</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et totam
              obcaecati rem tenetur blanditiis. Minus tenetur quaerat maxime
              similique architecto iste quasi asperiores sequi qui eligendi
              natus, voluptatum, dicta soluta vel accusamus veniam rerum ipsa
              aspernatur cupiditate nemo atque debitis!
            </p>
            <p className="num">
              <strong>01.</strong> Soyle yapar
            </p>
            <p className="num">
              <strong>02.</strong> Soyle boyle ve boyle yapar
            </p>
            <p className="num">
              <strong>03.</strong> Hazirlanmasi cok kisa ve cok etkili
            </p>
            <p className="num">
              <strong>04.</strong> Yeni bir teknoloji kullanir
            </p>
          </div>
        </div>
      </div>
      <h1 className="hakkinda">Grandus B-One Hakkında</h1>
      <div className="flipCard">
        <div className="cards-container">
         {isFlipMobile ? (
            <FlipCard/>
         ): (
          <>
          {flipData.map((card) => (
            <FlipCard
              className="card-between"
              key={card.id}
              resim={card.resim}
              title={card.title}
              content={card.content}
            />
          ))}
          </>
          

         )}
          
        </div>
      </div>
      <div className="animasyonVideo">
        <h1>Grandus B-One Nasil Hazirlanir ?</h1>
        <video ref={videoRef} width="90%" height="auto" muted loop controls>
          <source src="/images/GRANDUSANİMSYONR1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default HomePage;
