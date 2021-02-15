import React from "react";
import './Message-list.css'

const MessageList = (props) => {

  let state = props.messagesData;

  let messageItem = state.map(item =>
    <li className='message-list__item' key={item.id}>
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
};
export default MessageList;

