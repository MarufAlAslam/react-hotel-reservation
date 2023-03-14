import React from "react";

const Topbar = () => {
  return (
    <section className="topbar bg-dark py-2 border-bottom border-dark">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0 text-white">
            Directly contact us for reservation:{" "}
            <a
              href="tel:1234567890"
              className="text-white text-decoration-none"
            >
              1234567890
            </a>
          </p>
          <p className="mb-0">
            <a href="/" className="text-decoration-none text-white">
              ENG
            </a>{" "}
            |
            <a href="/" className="text-decoration-none text-white">
              PHP
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
