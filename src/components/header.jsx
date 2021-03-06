import React, { Component } from 'react';
import './header.css';
import { FaLeaf } from 'react-icons/fa';

class Header extends Component {
  render() {
    console.log('header rendered!');
    return (
      <header>
        <i className="header-logo"><FaLeaf /></i>
        <span className="header-title">Habit Tracker</span>
        <span className="header-counter">{this.props.totalCount}</span>
      </header>
    );
  }
}

export default Header;