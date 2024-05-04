import React from "react";
import Logo from "../assets/logo.jpg";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="Logo" srcSet="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav max-auto">
              <a
                className="nav-link active Success"
                aria-current="page"
                href="/home"
              >
                Home
              </a>
              <a className="nav-link" href="/services">
                Services
              </a>
               <a className="nav-link" href="/about">
                  About
                </a>
                <a className="nav-link" href="/review">
                  Review
                </a>
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </div>
            <div className="navbar">
              <a href="/contact" className="btn btn-primary text-light">
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
