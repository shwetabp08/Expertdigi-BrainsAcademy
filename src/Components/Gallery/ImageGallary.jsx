import React, { useState } from 'react';
import './Gallery.css';

const images = [
  'Images/gallery1.png', 'Images/gallery2.png', 'Images/gallery3.png',
  'Images/gallery4.png', 'Images/gallery5.png', 'Images/gallery6.png',
  'Images/gallery7.png', 'Images/gallery8.png', 'Images/gallery9.png',
  'Images/gallery10.png', 'Images/gallery11.png', 'Images/gallery12.png',
  'Images/gallery13.png', 'Images/gallery14.png', 'Images/gallery15.png',
  'Images/gallery16.png', 'Images/gallery17.png', 'Images/gallery18.png',
  'Images/gallery19.png', 'Images/gallery20.png', 'Images/gallery21.png',
  'Images/gallery22.png', 'Images/gallery23.png', 'Images/gallery24.png',
  'Images/gallery25.png', 'Images/gallery26.png', 'Images/gallery27.png',
  'Images/gallery28.png',
];

const ImageGallery = () => {
  const [loadedCount, setLoadedCount] = useState(0);

  const handleImageLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  const allLoaded = loadedCount === images.length;

  return (
    <section className="gallery-wrapper">
      {!allLoaded && (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )}

      <div className={`container my-3 gallery-grid ${!allLoaded ? 'invisible-grid' : ''}`}>
        {images.map((src, index) => (
          <div key={index} className={`gallery-item item-${index + 1}`}>
            <img src={src} alt={`Gallery ${index + 1}`} onLoad={handleImageLoad} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;
