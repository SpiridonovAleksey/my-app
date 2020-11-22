import React from "react";
import "./nav.css";

const Navigation = () => {
  return (
    <nav className='main-nav'>
      <ul className='main-nav__list'>
        <li className='main-nav__list-item'>
          <a className='main-nav__list-link' href="">Profile</a>
        </li>
        <li className='main-nav__list-item'>
          <a className='main-nav__list-link' href="">Messages</a>
        </li>
        <li className='main-nav__list-item'>
          <a className='main-nav__list-link' href="">News</a>
        </li>
        <li className='main-nav__list-item'>
          <a className='main-nav__list-link' href="">Music</a>
        </li>
        <li className='main-nav__list-item'>
          <a className='main-nav__list-link' href="">Settings</a>
        </li>
      </ul>
    </nav>
  )
}
export default Navigation;
