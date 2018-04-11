import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import config from 'config'

import NavLinks from './NavLink';
import NavDropdown from './NavDropdown';
import logo from './logo.png';
import './NavBar.scss';

class NavBar extends Component {
  render() {
    const navs = config.navs;
    const links = navs.map((link, idx) => {
      if (link.children && link.children.length > 0) {
        const i = navs.length - idx;
        return (
          <NavDropdown
            className='nav__menu'
            key={link.href}
            link={link.text}
            href={link.href}
            children={link.children}
            idx={i}
          />
        );
      } else {
        return (
          <NavLinks
            key={link.href}
            link={link.text}
            href={link.href}
          />
        );
      }
    });

    return (
      <div className='nav-bar'>
        <div className='container nav'>
          <NavLink exact
            activeClassName='active-nav'
            className='logo'
            to='/'>
              <img src={logo}
                alt="logo"
                height="40px" />
          </NavLink>
          <span className='nav-options nav__menu'>
            {links}
          </span>
        </div>
      </div>
    );
  }
}

export default NavBar;
