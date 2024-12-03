import React from 'react'
import './productFeatures.css'
import './data.json'


const UrunKart = ({data}) => {
  return (
    <>
        <div className="container">
          <h1>B-One ICERIGI</h1>
          <p>
            B-one tetra kalsiyum fosfat icerikli "KEMIGI KEMIGE, METALI KEMIGE
            10 DAKIKADA YAPISTIRABILEN", donarak osteokonduktif bir cati olusturan ve bu cati 
            tamamen yerini otejene birakana kadar kesinlikle mukavemet kaybetmeyen sentetik
            bir kemiktir.
          </p>
        </div>
    </>
  )
}

export default UrunKart
// data jsondan cekilecek veriler ve kartlara aktarilacak 
// kart ozellikleri begenilmedi degisilecek 
