import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
class Header extends Component {
  render(){
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to={'/about'}>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to={'/users'}>Dashboard</NavLink>
        </li>
      </ul>
    </nav>
  }
}

export default Header;