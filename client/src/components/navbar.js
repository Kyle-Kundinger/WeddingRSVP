import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/navbar.css';

function Navbar() {
  const navbarCollapseRef = useRef(null);

  const handleLinkClick = () => {
    if (navbarCollapseRef.current) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapseRef.current);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  };

  const handleToggleClick = () => {
    if (navbarCollapseRef.current) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapseRef.current);
      if (bsCollapse) {
        bsCollapse.toggle();
      } else {
        new bootstrap.Collapse(navbarCollapseRef.current, { toggle: true });
      }
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid text-light">
        <Link className="navbar-brand text-light" to="/">Wedding</Link>
        <button className="navbar-toggler custom-toggler" type="button" onClick={handleToggleClick} aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" ref={navbarCollapseRef}>
          <div className="navbar-nav">
            <Link className="nav-link text-light active" aria-current="page" to="/" onClick={handleLinkClick}>Home</Link>
            <Link className="nav-link text-light" to="/about" onClick={handleLinkClick}>About Us</Link>
            <Link className="nav-link text-light" to="/directions" onClick={handleLinkClick}>Directions</Link>
            <Link className="nav-link text-light" to="/contact" onClick={handleLinkClick}>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
