
import './vakaCard.css'

import React from 'react';
import OrnekResim from './idaretenResim.jpg'
import OrnekResim1 from './idaretenResim1.jpg'
const VakaCard = ({anaBaslik,altBaslik,description}) => {
  const BASE_URL = 'http://localhost:8000'; // Django backend URL'si
  return (
    <>
        
          <div className="vContainer">
            <h1 className='anaB'>{anaBaslik}</h1>
            <section className="vakaContainer">
              <div className="image">
                <img src={OrnekResim} alt="" />
                <img src={OrnekResim1} alt="" />
                <img src={OrnekResim1} alt="" />
              </div>
              <div className="icerik">
                <h1 className="vakaBaslik">{altBaslik}</h1>
                <p className="vakaIcerik">
                  {description}
                </p>
              </div>
            </section>
          </div>
        
    </>
  )
}

export default VakaCard
