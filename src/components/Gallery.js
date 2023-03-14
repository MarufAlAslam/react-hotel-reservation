import React from "react";

import g1 from "../assets/img/1.jpg";
import g2 from "../assets/img/2.jpg";
import g3 from "../assets/img/3.jpg";
import g4 from "../assets/img/4.jpg";
import g5 from "../assets/img/5.jpg";
import g6 from "../assets/img/6.jpg";
import g7 from "../assets/img/7.jpg";
import g8 from "../assets/img/8.jpg";

const galleryData = [
  {
    id: 1,
    img: g1,
    name: "Hotel 1",
    rent: 100,
  },
  {
    id: 2,
    img: g2,
    name: "Hotel 2",
    rent: 100,
  },
  {
    id: 3,
    img: g3,
    name: "Hotel 3",
    rent: 100,
  },
  {
    id: 4,
    img: g4,
    name: "Hotel 4",
    rent: 100,
  },
  {
    id: 5,
    img: g5,
    name: "Hotel 5",
    rent: 100,
  },
  {
    id: 6,
    img: g6,
    name: "Hotel 6",
    rent: 100,
  },
  {
    id: 7,
    img: g7,
    name: "Hotel 7",
    rent: 100,
  },
  {
    id: 8,
    img: g8,
    name: "Hotel 8",
    rent: 100,
  },
];

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
