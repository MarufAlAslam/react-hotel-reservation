import React from "react";
import { Link } from "react-router-dom";
import galleryData from "./galleryData";

const Room = () => {
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
            <div className="d-flex mb-2 justify-content-start align-items-center hotel-icons text-white">
              <span className="d-inline-block me-3">
                <i className="fa fa-bed"></i> {data.bed}
              </span>
              <span className="d-inline-block me-3">
                <i className="fa fa-toilet"></i> {data.toilet}
              </span>
              <span className="d-inline-block me-3">
                <i className="fa fa-users"></i> {data.users}
              </span>
            </div>
            <Link to="/checkout" className="btn btn-light btn-sm mt-4">
              Book Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Room;
