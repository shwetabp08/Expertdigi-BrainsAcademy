import React from "react";

const Gallery = () => {
  const galleryImages = [
    { id: 1, src: "Images/gallary1.png", alt: " Image" },
    { id: 2, src: "Images/gallary1.png", alt: " Image" },
    { id: 3, src: "Images/gallary1.png", alt: " Image" },
    { id: 4, src: "Images/gallary1.png", alt: " Image" },
    { id: 5, src: "Images/gallary1.png", alt: " Image" },
    { id: 6, src: "Images/gallary1.png", alt: " Image" },
    { id: 7, src: "Images/gallary1.png", alt: " Image" },
    { id: 8, src: "Images/gallary1.png", alt: " Image" },
  ];

  return (
    <section className="container my-5">
      <h2 className="text-center mt-5 title">Our Gallery</h2>
      <div className="row gy-4 gx-4 my-4">
        {galleryImages.map((image) => (
          <div key={image.id} className="col-md-6 col-lg-3 mb-4">
            <div className="gallery-card overflow-hidden shadow">
              <img src={image.src} alt={image.alt} className="img-fluid gallery-image" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
