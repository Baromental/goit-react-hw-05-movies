import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        <li className={s.navItem}>
          <NavLink to="/" className={s.navLink}>
            Home
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink to="/movies" className={s.navLink}>
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
