import react from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Wedding</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            <Link className="nav-link" to="/about">About Us</Link>
            <Link className="nav-link" to="/services">Services</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
            <Link className="nav-link" to="/rsvp">RSVP</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
