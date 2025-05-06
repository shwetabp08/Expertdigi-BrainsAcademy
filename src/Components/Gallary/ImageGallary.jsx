import React from 'react';

const images = [
  'Images/gallery-01.jpg',
  'Images/gallery-02.jpg',
  'Images/gallery-03.jpg',
  'Images/gallery-04.jpg',
  'Images/gallery-05.jpg',
  'Images/gallery-06.jpg',
];

const ImageGallery = () => {
  return (
    <section className='container'>
    <div className="gallery-grid ">
      {images.map((src, index) => (
        <div key={index} className={`gallery-item item-${index + 1}`}>
          <img src={src} alt={`Gallery ${index + 1}`}  />
        </div>
      ))}
    </div>
    </section>
  );
};

export default ImageGallery;
