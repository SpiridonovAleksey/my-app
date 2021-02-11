import React from "react";
import './Dialogs-list.css';
import {NavLink} from "react-router-dom";

const DialogList = (props) => {

  let state = props.dialogsData;

  let dialogsItem = state.map(item =>
    <li className='dialog-list__item'>
      <NavLink className='dialog-list__link'
               to={"/dialogs/" + item.id}>{item.name}</NavLink>
    </li>
  );

  return (
    <ul className='dialog-list'>
      {dialogsItem}
    </ul>
  )
};
export default DialogList;
