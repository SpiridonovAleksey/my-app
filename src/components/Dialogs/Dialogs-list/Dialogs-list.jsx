import React from "react";
import './Dialogs-list.css';
import {NavLink} from "react-router-dom";
import StoreContext from "../../../StoreContext";

const DialogList = (props) => {


  // return (
  //   <StoreContext.Consumer>
  //     {
  //       (store) => {

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
        // }
    //
    //   }
    // </StoreContext.Consumer>

  // );
};
export default DialogList;
