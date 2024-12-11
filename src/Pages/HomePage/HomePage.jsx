import React, { useState, useEffect, useRef } from "react";
import "./homePage.css";
import flipData from './data.json';
import AnaResim from "./Grandus B-One (2).png";
import { FaAngleDown } from "react-icons/fa";
import igne from "../../Assets/igne111.jpg";

import FlipCard from "../../Components/overlay/FlipCard";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
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

  
  return (
    <>
      <div className="anaResim">
        <img src={AnaResim} alt="" />
        <div className="urunKartBasligi">
          <div className={`kartTitle ${isVisible ? "visible" : "hidden"}`}>
            <h1>GRANDUS B-ONE</h1>
          </div>
        </div>
        <div className="urunKartAciklamasi">
          <div
            className={`card_Description ${isVisible ? "visible" : "hidden"}`}
          >
            <p>
              <strong>B-one</strong> tetra kalsiyum fosfat icerikli kemigi
              kemige, kemigi metale 10dk kadar kisa bi surede yapistiran ve bunu
              tamamen yerini kemige yani otojene birakana kadar bu mukavementini
              kaybetmeyen bir (kalsiyum fosfat cimento) sentetik kemiktir.
            </p>
          </div>
        </div>
      </div>
      <div className={`sagTaraf ${isVisible ? "visibleSag" : "hiddenSag"}`}>
        <h2>Onemli Biseler</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ullam
          officiis libero sed asperiores aspernatur?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ullam
          officiis libero sed asperiores aspernatur?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ullam
          officiis libero sed asperiores aspernatur?
        </p>
      </div>
      <FaAngleDown
        className={`scroll ${isVisible ? "hiddenScroll" : "visiableScroll"}`}
      />
      <div className="section1">
        <div className="sectionBox">
          <div className="line"></div>
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
          <div className="sectionImage">
            <img src={igne} alt="" />
          </div>
          <div className="line"></div>
        </div>
      </div>
      <div className="flipCard">
        <div className="cards-container">
          {flipData.filter((_, index) => [0, 1, 4, 5 ].includes(index)).map((card) => (
            <FlipCard className="card-between"
              key={card.id}
              resim={card.resim}
              title={card.title}
              content={card.content}
            />
          ))}
          
        </div>
        <div className="cards-container1">     
          {flipData.filter((_, index) => [2, 3, 6, 7, 8].includes(index)).map((card) => (
            <FlipCard className="card-between"
              key={card.id}
              resim={card.resim}
              title={card.title}
              content={card.content}
            />
          ))}
        </div>
      </div>
      <div  className="animasyonVideo">
        <h1>Grandus B-One Nasil Hazirlanir ?</h1>
        <video 
          ref = {videoRef}
          width="90%" 
          height="auto" 
          muted 
          loop
        >
          <source src="/images/ornekVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    </div>
    </>
  );
};

export default HomePage;

// Grandus basligi ve aciklamasi soldan gelecek
// ikisi ayri divler olacak
// sagdan urunun kisa aciklamasi olan sik bir kart gelecek
