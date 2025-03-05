import React, { useState, useEffect, useRef } from "react";
import "./homePage.css";
import flipData from "./data.json";
import AnaResim from "../../Seminerler/somu.jpg";

import igne from "../../Seminerler/homeilk.png";

import ilacKutusu from "../../Assets/qqer.png";
import FlipCard from "../../Components/overlay/FlipCard";


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
  

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Video %50 görünür olduğunda tetiklenecek
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Video görünür olduğunda
          videoRef.current.play();
        } else {
          // Video görünmez olduğunda
          videoRef.current.pause();
          videoRef.current.currentTime = 0; // Videoyu başa sar
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);
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
            B-one, tetra kalsiyum fosfat içerikli kemiği kemiğe, kemiği metale
            10 dakika kadar kısa bi sürede yapıştıran ve bunu tamamen yerini kemiğe
            yani otojene bırakana kadar bu mukavementini kaybetmeyen bir
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
            <h1>Grandus B-One Ne İşe Yarar</h1>
            <p>
              B-ONE, tetra kalsiyum fosfat içerikli yenilikçi bir kemik yapıştırıcısıdır. Kemiği kemiğe ve metali kemiğe sadece 10 dakika gibi kısa bir sürede yapıştırabilme özelliğine sahiptir. Donarak osteokondüktif bir çatı oluşturur ve bu çatı tamamen yerini otojene bırakana kadar mukavemetini korur.
            </p>
            <p className="num">
              <strong>01.</strong> Binlerce tutucu ayak oluşturarak kemik ve metalle hızlıca yapışır, fail implantları bile 10 dakikada immediate yükleme imkanı sağlar.
            </p>
            
            <p className="num">
              <strong>02.</strong> Ağız ve çene cerrahisi, ortopedi ve travmatoloji, beyin cerrahisi, veterinerlik, kulak burun boğaz ve plastik cerrahi gibi birçok alanda kullanılabilir.
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
        <video 
          ref={videoRef}
          width="90%" 
          height="auto"
          loop
          muted // Otomatik oynatma için sessize alınmalı
          playsInline // iOS için gerekli
          controls
        >
          <source src="/images/SonVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default HomePage;
