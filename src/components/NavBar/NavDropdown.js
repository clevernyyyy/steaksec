import React, { Component } from 'react';
import CSSTransition from 'react-addons-css-transition-group';
import Menu from './NavMenu.js';
import './NavBar.scss';

class NavDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  handleHover = (event) => {
    this.setState({
      showMenu: true
    });
  }

  handleLeave = (event) => {
    this.setState({
      showMenu: false
    });
  }

  render() {
    const {link, children, idx} = this.props;
    const indx = 100 + idx;

    return (
      <li className='nav__menu-item'
        onMouseLeave={this.handleLeave}>
        <a className='nav-link'
          onMouseEnter={this.handleHover}>
          {link}
        </a>
        <div className='submenu-container'
          style={{'zIndex': indx}}>
          <CSSTransition
            transitionName="slide"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            {this.state.showMenu && <Menu children={children} />}
          </CSSTransition>
        </div>
      </li>
    );
  }
}

export default NavDropdown;
