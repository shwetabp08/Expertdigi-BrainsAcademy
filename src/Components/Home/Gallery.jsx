import React from "react";

const Gallery = () => {
  const galleryImages = [
    { id: 1, src: "Images/gallery1.png", alt: " gallery" },
    { id: 3, src: "Images/gallery2.png", alt: " gallery" },
    { id: 5, src: "Images/gallery3.png", alt: " gallery" },
    { id: 7, src: "Images/gallery4.png", alt: " gallery" },
    { id: 2, src: "Images/gallery5.png", alt: " gallery" },
    { id: 4, src: "Images/gallery6.png", alt: " gallery" },   
    { id: 6, src: "Images/gallery7.png", alt: " gallery" }, 
    { id: 8, src: "Images/gallery8.png", alt: " gallery" },
  ];

  return (
    <section className="container my-5">
      <h2 className="text-center mt-5 title">Our Gallery</h2>
      <div className="row  g-4 my-4">
        {galleryImages.map((image) => (
          <div key={image.id} className="col-md-6 col-lg-3">
            <div className="gallery-card overflow-hidden ">
              <img src={image.src} alt={image.alt} className="img-fluid gallery-image" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
