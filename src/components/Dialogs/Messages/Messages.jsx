import React from "react";
import './Messages.css';
import NewMessageContainer from "./New-message/New-message-container";
import MessageListContainer from "./Message-list/Message-list-container";

const Messages = (props) => {

  return (
    <div className='messages'>
      <MessageListContainer/>
      <NewMessageContainer/>
    </div>
  );
};

export default Messages;
