import React from "react";
import "./nav.css";
import {NavLink} from "react-router-dom";

const Navigation = () => {
  return (
    <nav className='main-nav'>
      <ul className='main-nav__list'>
        <li className='main-nav__list-item'>
          <NavLink className='main-nav__list-link' to="/profile">Profile</NavLink>
        </li>
        <li className='main-nav__list-item'>
          <NavLink className='main-nav__list-link' to="/dialogs">Messages</NavLink>
        </li>
        <li className='main-nav__list-item'>
          <NavLink className='main-nav__list-link' to="/news">News</NavLink>
        </li>
        <li className='main-nav__list-item'>
          <NavLink className='main-nav__list-link' to="/music">Music</NavLink>
        </li>
        <li className='main-nav__list-item'>
          <NavLink className='main-nav__list-link' to="">Settings</NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default Navigation;
