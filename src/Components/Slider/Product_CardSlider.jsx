import React, { Component } from "react";
import Slider from "react-slick";
import './forSlick.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import pn1 from '../../Assets/Jojoba Yagi_10x4,3_30ml-03.jpg'
import pn2 from '../../Assets/Kabak Cekirdegi Yagi_11,7x5,3_50ml-03.jpg'
import pn3 from '../../Assets/mocha-001.jpg'

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#333" }}
        onClick={onClick}
      />
    );
  }
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#333" }}
        onClick={onClick}
      />
    );
  }
   
  function PauseOnHover() {
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow /> , 
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={pn1} alt="" />
          <main className="cardContainer4">
        <article className="card">
            <div className="cardTitle">
              <h2 className='cardT'>Urunun Ismi Yeri Gelince Uzun Olabilir</h2>
              <h2 className='price'>450 ₺</h2>
            </div>      
            <div className='cardDescription4'>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </div>
        </article>
        
        
      </main> 
        </div>
        <div>
          <img src={pn2} alt="" />
        </div>
        <div>
          <img src={pn3} alt="" />
        </div>
        <div>
          <img src={pn1} alt="" />
        </div>
        <div>
          <img src={pn2} alt="" />
        </div>
        <div>
          <img src={pn3} alt="" />
        </div>
        <div>
          <img src={pn1} alt="" />
        </div>
        <div>
          <img src={pn2} alt="" />
        </div>

        
      </Slider>
    </div>
  );
}

export default PauseOnHover;

  
