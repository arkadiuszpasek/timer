import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';

const Nav = () => (
  <nav className="nav">
    <ul>
      <li>
        <Link to="/">
          <i className="far fa-clock" />
        </Link>
      </li>
    </ul>
    <ul>
      <li>
        <Link to="/quick-start">Quick Start</Link>
      </li>
      <li>
        <Link to="/settings">
          <i className="fas fa-cogs" />
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
