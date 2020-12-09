import React from "react";
import './Dialogs-list.css';
import {NavLink} from "react-router-dom";

const DialogListItem = (props) => {
  return (
    <li className='dialog-list__item'>
      <NavLink className='dialog-list__link' to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </li>
  );
};

const DialogList = (props) => {
  return (
  <ul className='dialog-list'>
    <DialogListItem name='igor' id='1'/>
    <DialogListItem name='ira' id='2'/>
    <DialogListItem name='sveta' id='3'/>
    <DialogListItem name='miha' id='4'/>
    <DialogListItem name='marina' id='5'/>
  </ul>
  );
};
export default DialogList;



