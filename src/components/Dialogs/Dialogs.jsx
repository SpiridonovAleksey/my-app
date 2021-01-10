import React from "react";
import './Dialogs.css';
import DialogList from "./Dialogs-list/Dialogs-list.jsx";
import MessageList from "./Message-list/Message-list";

const Dialogs = (props) => {

  return (
    <div className='dialogs'>
      <DialogList dialogsData={props.dialogsData}/>
      <MessageList messagesData={props.messagesData}/>
    </div>
  );
};
export default Dialogs;