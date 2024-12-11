import React, { useState, useEffect } from 'react';
import VakaCard from '../../Components/VakaSection/VakaCard';
import axios from 'axios';

const VakalarPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // API'den verileri çekme
    axios.get('http://localhost:3000/api/vakalar/') // Django API endpoint
      .then(response => setProducts(response.data))
      .catch(error => console.error('Hata:', error));
  }, []);

  return (
    <div>
      <h1>Vakalar</h1>
      <div className="vaka-listesi">
        {products.map((product) => (
          <VakaCard
            key={product.id} // Her bir ürün için benzersiz anahtar
            anaBaslik={product.baslik} // API'den gelen başlık
            altBaslik={product.altBaslik || "Alt Başlık"} // Varsayılan bir alt başlık
            description={product.aciklama} // API'den gelen açıklama
            resim={product.resim} // Eğer ürün görseli varsa ekle
          />
        ))}
      </div>
    </div>
  );
};

export default VakalarPage;
