import React from "react";
import './Message-list.css'

const MessageList = (props) => {

  let messageItem = props.messagesData.map(item =>
    <li className='message-list__item'>
      <img className={item.class} src={item.url} alt=""/>
      <p className='message-list__text'>{item.text}</p>
    </li>
  );

  return (
    <ul className='message-list'>
      {messageItem}
    </ul>
  );
};
export default MessageList;
