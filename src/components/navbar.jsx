import React from 'react';
import '../../styles/navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="nav-bar">
    <ul className="nav">
      <span className="navlogo"><i className="fab fa-fort-awesome" /> Surreal Estate </span>
      <Link className="item" to="/">View Property</Link>
      <Link className="item" to="/add-property">Add a Property</Link>
    </ul>
  </div>
);

export default Navbar;
