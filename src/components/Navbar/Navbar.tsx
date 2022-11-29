import React from 'react';
import {NavLink} from "react-router-dom";
import './Navbar.css';

interface Props {
  logo: string;
}

const Navbar: React.FC<Props> = ({logo}) => {

  return (
    <div className="navbar navbar-expand-lg navbar-dark border-bottom border-white p-0 ozgocho-navbar">
      <div className="container-fluid">
        <img src={logo} className="logo"/>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about-us" className="nav-link">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;