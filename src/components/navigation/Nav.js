import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="navbar bg-secondary">
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          <i className="far fa-clock fa-2x" />
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
          <i className="fas fa-cogs fa-lg" />
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
