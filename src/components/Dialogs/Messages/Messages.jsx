import React from "react";
import './Messages.css';
import MessageList from "./Message-list/Message-list.jsx";
import NewMessage from "./New-message/New-message.jsx";

const Messages = (props) => {

  return (
    <div className='messages'>
      <MessageList messagesData={props.messagesData}/>
      <NewMessage/>
    </div>
  );
};

export default Messages;
