import React from "react";
import "./nav.css";
import {NavLink} from "react-router-dom";

const Navigation = () => {
  return (
    <nav className='main-nav'>
      <ul className='main-nav__list'>
        <li className='main-nav__list-item'>
          <NavLink className='main-nav__list-link' to="/profile">Моя страница</NavLink>
        </li>
        <li className='main-nav__list-item'>
          <NavLink className='main-nav__list-link' to="/users">Пользователи</NavLink>
        </li>
        <li className='main-nav__list-item'>
          <NavLink className='main-nav__list-link' to="/dialogs">Сообщения</NavLink>
        </li>
        <li className='main-nav__list-item'>
          <NavLink className='main-nav__list-link' to="/news">Новости</NavLink>
        </li>
        <li className='main-nav__list-item'>
          <NavLink className='main-nav__list-link' to="/music">Музыка</NavLink>
        </li>
        <li className='main-nav__list-item'>
          <NavLink className='main-nav__list-link' to="">Настройки</NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default Navigation;
