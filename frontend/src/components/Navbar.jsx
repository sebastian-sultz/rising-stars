import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { GiBookmarklet } from "react-icons/gi";
const Navbar = () => {
  // Function to determine active link class
  const getNavLinkClass = ({ isActive }) => {
    return `nav-item nav-link ${isActive ? 'text-primary fw-bold' : ''}`;
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
      <NavLink to="/" className="navbar-brand">
        <h1 className="m-0 text-primary">
          <GiBookmarklet className=" me-3"/>Rising Stars Public School
        </h1>
      </NavLink>
      <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav mx-auto">
          <NavLink to="/" className={getNavLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/about" className={getNavLinkClass}>
            About Us
          </NavLink>
          <NavLink to="/academics" className={getNavLinkClass}>
            Academics
          </NavLink>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Initiatives</a>
            <div className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
              <Link to="/moksha" className="dropdown-item">Moksha</Link>
              <Link to="/glimpse" className="dropdown-item">Glimpse</Link>
              <Link to="/appointment" className="dropdown-item">Make Appointment</Link>
            </div>
          </div>
        </div>
        <NavLink to="/contact" className="btn btn-primary rounded-pill px-3 d-none d-lg-block">
          Contact Us<i className="fa fa-arrow-right ms-3"></i>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;