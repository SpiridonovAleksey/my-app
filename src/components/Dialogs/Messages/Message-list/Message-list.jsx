import React from "react";
import './Message-list.css'
import StoreContext from "../../../../StoreContext";

const MessageList = (props) => {

  return (
    <StoreContext.Consumer>
      {
        (store) => {

          let state = store.getState().dialogsState.messagesData;

          let messageItem = state.map(item =>
            <li className='message-list__item'>
              <img className={item.class}
                   src={item.url}
                   alt=""/>
              <p className='message-list__text'>{item.text}</p>
            </li>
          );

          return (
            <ul className='message-list'>
              {messageItem}
            </ul>
          )
        }
      }
    </StoreContext.Consumer>
  );
};
export default MessageList;

