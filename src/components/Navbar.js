// components/Navbar.js

import React from 'react';
import { Link, NavLink } from 'react-router-dom'; 

const navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li><NavLink 
        exact
        activeClassName="selected"
        activeStyle={{fontWeight: 'bold', color: 'red' }}
        to='/'>Home</NavLink></li>
        <li><NavLink 
        exact
        activeClassName="selected"
        activeStyle={{fontWeight: 'bold', color: 'red' }}
        to='/about'>About</NavLink></li>
          <li><NavLink exact
        activeClassName="selected"
        activeStyle={{fontWeight: 'bold', color: 'red' }}
        to='/projects' style={{ textDecoration: 'none' }}>Projects</NavLink></li>
      </ul>
    </nav>
  )
}

export default navbar;