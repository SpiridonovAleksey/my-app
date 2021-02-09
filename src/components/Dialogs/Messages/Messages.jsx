import React from "react";
import './Messages.css';
import MessageList from "./Message-list/Message-list.jsx";
import NewMessage from "./New-message/New-message.jsx";
import NewMessageContainer from "./New-message/New-message-container";
import MessageListContainer from "./Message-list/Message-list-container";

const Messages = (props) => {

  return (
    <div className='messages'>
      <MessageListContainer
        // messagesData={props.messagesData}
      />
      <NewMessageContainer
        //           addNewMessage={props.addNewMessage}
        //           newMessageText={props.newMessageText}
        //           dispatch={props.dispatch}
        //           store={props.store}
      />
    </div>
  );
};

export default Messages;
