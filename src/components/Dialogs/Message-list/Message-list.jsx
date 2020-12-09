import React from "react";
import './Message-list.css'

const MessageListItem = (props) => {
  return (
    <li className='message-list__item'>
      <img className='message-list__avatar' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/katara-avatar-the-last-airbender-1590006359.png?crop=0.719xw:0.936xh;0.0493xw,0.0642xh&resize=480:*"
           alt=""/>
      <p className='message-list__text'>{props.message}</p>
    </li>
  );
};

const MessageList = (props) => {
  return (
    <ul className='message-list'>
      <MessageListItem message='hi'/>
      <MessageListItem message='Урок-шпаргалка поможет вам повторить всю английскую грамматику по учебнику Essential Grammar in Use.
          Английская грамматика для новичков. Чтобы вам было удобно,
          материал содержит обзор всей темы с опорными таблицами, красивыми и понятными схемами.
         К каждой теме мы разбираем примеры английских предложений'/>
      <MessageListItem message='Чтобы вам было удобно,
          материал содержит обзор всей темы с опорными'/>

    </ul>
  );
};
export default MessageList;

