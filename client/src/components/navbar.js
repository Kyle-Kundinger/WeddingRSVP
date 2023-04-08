import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import '../css/navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid text-light">
        <Link className="navbar-brand text-light" to="/">Wedding</Link>
        <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <Link className="nav-link text-light active" aria-current="page" to="/">Home</Link>
            <Link className="nav-link text-light" to="/rsvp">RSVP</Link>
            <Link className="nav-link text-light" to="/about">About Us</Link>
            <Link className="nav-link text-light" to="/directions">Directions</Link>
            <Link className="nav-link text-light" to="/contact">Contact</Link>
            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
