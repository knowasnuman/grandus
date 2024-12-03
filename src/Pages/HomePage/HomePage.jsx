import React, { useState, useEffect } from 'react'

import "./homePage.css"
import IdareResim from '../../Pngler/idaretenResim1.jpg'
import { FaAngleDown } from "react-icons/fa";

import ProductFeatures from '../../Components/Urun Karti/productFeatures'



const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='anaResim'>
        <img src={IdareResim} alt=""/>
        <div className="urunKartBasligi">
          <div className={`kartTitle ${isVisible ? 'visible' : 'hidden'}`}>
            <h1>GRANDUS B-ONE</h1>
          </div>
        </div>
        <div className="urunKartAciklamasi">
          <div className={`card_Description ${isVisible ? 'visible' : 'hidden'}`}>
            <p>
              <strong>B-one</strong> tetra kalsiyum fosfat icerikli kemigi kemige, kemigi metale 10dk kadar kisa bi surede yapistiran ve bunu tamamen yerini kemige yani
              otojene birakana kadar bu mukavementini kaybetmeyen bir (kalsiyum fosfat cimento) sentetik kemiktir.
            </p>
          </div>
        </div>
      </div>
      <FaAngleDown className={`scroll ${isVisible ? 'hiddenScroll' : 'visiableScroll'}`}/>
      <div className="featureContainer">
        <ProductFeatures/>
        <ProductFeatures/>
        <ProductFeatures/>
        <ProductFeatures/>
        <ProductFeatures/>
        <ProductFeatures/>
      </div>
    </>
  )
}

export default HomePage


// Grandus basligi ve aciklamasi soldan gelecek 
// ikisi ayri divler olacak
// sagdan urunun kisa aciklamasi olan sik bir kart gelecek 