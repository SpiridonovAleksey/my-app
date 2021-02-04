import React from "react";
import './friends.css'
import StoreContext from "../../../../StoreContext";

const Friends = (props) => {


  return (
    <StoreContext.Consumer>
      {
        (store) => {

          let state = store.getState().profileState.friendsData;

          let friendsItem = state.map(item =>
            <li className="friends-list__item">
              <img className="friends-list__img"
                   src={item.url}
                   alt=""/>
              <span className="friends-list__name">{item.name}</span>
            </li>
          );

          return (
            <div className="friends">
              <h3 className="friends__title">Друзья</h3>
              <ul className='friends-list'>
                {friendsItem}
              </ul>
            </div>
          )
        }
      }
    </StoreContext.Consumer>
  )
};

export default Friends;
