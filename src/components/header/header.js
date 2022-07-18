import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {
  const activeClassName = 'active';

  return (
    <header>
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
    </header>
  );
}

export default Header;
