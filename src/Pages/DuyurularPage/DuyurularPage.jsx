import React, { useState, useEffect } from "react";
import "./duyurularPage.css";

const DuyurularPage = () => {
  const [announcements, setAnnouncements] = useState([]); // Duyuru verileri
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null); // Seçili duyuru

  // JSON verisini yükleme
  useEffect(() => {
    fetch("/duyuruData.json") // JSON dosyasının yolu
      .then((response) => response.json())
      .then((data) => {
        // Tarihe göre sıralama (En yeni tarih en başta)
        const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setAnnouncements(sortedData);
        setSelectedAnnouncement(sortedData[0]); // İlk duyuruyu seçili yap
      })
      .catch((error) => console.error("Veri yüklenirken hata oluştu:", error));
  }, []);
  

  return (
    <div className="announcements-container ">
      {/* Sol Taraf: Duyuru Listesi */}
      <div className="announcement-list">
        <h2>DUYURULAR</h2>
        {announcements.map((item) => (
          <div
            key={item.id}
            className={`announcement-item ${selectedAnnouncement?.id === item.id ? "active" : ""}`}
            onClick={() => setSelectedAnnouncement(item)}
          >
            <p className="announcement-date">{item.date}</p>
            <h4 className="announcement-title">{item.title}</h4>
          </div>
        ))}
      </div>

      {/* Sağ Taraf: Duyuru Detayları */}
      {selectedAnnouncement && (
        <div className="announcement-details">
          <h3 className="details-title ">{selectedAnnouncement.title}</h3>
          <p className="details-date ">{selectedAnnouncement.date}</p>
          <p className="details-content">{selectedAnnouncement.details}</p>
        </div>
      )}
    </div>
  );
};

export default DuyurularPage;
{/* 
    Responsive
    Tarihe gore siralama
*/}