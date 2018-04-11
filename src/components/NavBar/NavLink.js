import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

class NavBar extends Component {
  render() {
    const {link, href} = this.props
    return (
      <li className="nav__menu-item">
        <NavLink activeClassName='active-nav'
        	className="nav-link"
        	to={href}>
        	{link}
        </NavLink>
      </li>
    );
  }
}

export default NavBar;
