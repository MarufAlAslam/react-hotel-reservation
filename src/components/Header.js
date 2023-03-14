import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.jpg";

const Header = () => {
  return (
    <section className="header">
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img src={logo} className="img-fluid logo" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ms-4">
                <NavLink className="nav-link text-dark" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item ms-4">
                <NavLink className="nav-link text-dark" to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item ms-4">
                <NavLink className="nav-link text-dark" to="/rooms">
                  Our Rooms
                </NavLink>
              </li>
              <li className="nav-item ms-4">
                <NavLink className="nav-link text-dark" to="/reservation">
                  Reservation
                </NavLink>
              </li>
              <li className="nav-item ms-4">
                <NavLink className="nav-link text-dark" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
