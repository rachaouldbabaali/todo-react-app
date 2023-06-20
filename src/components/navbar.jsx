import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="navbar-brand">ToDos to be completed</h1>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to="/" className="nav-link" activeClassName="active" end>Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/calculator" className="nav-link" activeClassName="active">list</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/quotes" className="nav-link" activeClassName="active">Quotes</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
