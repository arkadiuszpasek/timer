import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="navbar bg-secondary">
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Productive timer
        </Link>
      </li>
    </ul>
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link" to="/quick-start">
          Quick Start
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/settings">
          Settings
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
