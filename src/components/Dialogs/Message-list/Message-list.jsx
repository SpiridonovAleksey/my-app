import React from "react";
import './Message-list.css'

const MessageList = (props) => {

  let messageItem = props.messagesData.map(item =>
    <li className='message-list__item'>
      <img className='message-list__avatar' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/katara-avatar-the-last-airbender-1590006359.png?crop=0.719xw:0.936xh;0.0493xw,0.0642xh&resize=480:*"
           alt=""/>
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

