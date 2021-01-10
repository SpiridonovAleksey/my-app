import React from "react";
import './Dialogs-list.css';
import {NavLink} from "react-router-dom";

const DialogList = (props) => {

  let dialogsData = [
    {id: 1, name: 'igor'},
    {id: 2, name: 'ira'},
    {id: 3, name: 'sveta'},
    {id: 4, name: 'miha'},
    {id: 5, name: 'marina'}
  ];

  let dialogsItem = dialogsData.map(item =>
    <li className='dialog-list__item'>
      <NavLink className='dialog-list__link' to={"/dialogs/" + item.id}>{item.name}</NavLink>
    </li>
  );

  return (
  <ul className='dialog-list'>
    {dialogsItem}
  </ul>
  );
};
export default DialogList;



