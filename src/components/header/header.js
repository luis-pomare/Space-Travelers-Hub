import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import icon from '../../images/icon.png';

function Header() {
  const activeClassName = 'active';

  return (
    <>
      <header>
        <div className="container-logo">
          <img className="logo" alt="icon of the logo page" src={icon} />
          <h1> Space Travelers&apos; Hub</h1>
        </div>
        <nav>
          <ul className="links-container">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? activeClassName : undefined)}
              >
                Rockets
              </NavLink>
            </li>
            <span className="status-separator" />
            <li>
              <NavLink
                to="missions"
                className={({ isActive }) => (isActive ? activeClassName : undefined)}
              >
                Missions
              </NavLink>
            </li>
            <span className="status-separator" />
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
      <div className="container-line">
        <hr className="header-line" />
      </div>
    </>
  );
}

export default Header;
