import React from "react";
import galleryData from "./galleryData";

const Gallery = () => {
  return (
    <div className="gallery-grid">
      {galleryData.map((data) => (
        <div
          key={data.id}
          className="img-holder position-relative overflow-hidden"
        >
          <img src={data.img} className="img-fluid w-100" alt="" />
          <div className="info">
            <h3>
              <a href="/" className="text-decoration-none text-white">
                {data.name}
              </a>
            </h3>
            <p className="text-white">${data.rent}/Night</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
