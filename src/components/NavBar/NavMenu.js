import React, { Component } from 'react';
import './NavBar.scss';

class NavMenu extends Component {
  render() {
    const {children} = this.props;
    const childLinks = children.map(child => {
      return (
        <a className='nav__submenu-item-anchor'
          key={child.href}   
          href={child.href}>
          <li className='nav__submenu-item'>
            {child.text}
          </li>
        </a>
      );
    });

    return (
      <ul className="nav__submenu">
        {childLinks}
      </ul>
    );
  }
}

export default NavMenu;


