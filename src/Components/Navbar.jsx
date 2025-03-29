import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
    <div className="navbar-content">
        <div className="navbar-title">
        <Link to="/" style={{color: 'white', textDecoration: 'none'}}>WiseWords</Link>
        </div>
        <div className="navbar-buttons">
            <Link to ="/random">
              <button>Random</button>
            </Link>
            <Link to="/search">
              <button>Search</button>
            </Link>
        </div>
    </div>
    </div>
  );
};

export default Navbar;