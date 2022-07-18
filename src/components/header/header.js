import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import icon from '../../images/icon.png';

function Header() {
  const activeClassName = 'active';

  return (
    <header>
      <img className="logo" alt="icon of the logo page" src={icon} />
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeClassName : undefined)}
            >
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="missions"
              className={({ isActive }) => (isActive ? activeClassName : undefined)}
            >
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="myprofile"
              className={({ isActive }) => (isActive ? activeClassName : undefined)}
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
