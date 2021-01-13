import React from "react";
import './Dialogs.css';
import DialogList from "./Dialogs-list/Dialogs-list.jsx";
import MessageList from "./Messages/Message-list/Message-list";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {

  return (
    <div className='dialogs'>
      <DialogList dialogsData={props.dialogsState.dialogsData}/>
      <Messages messagesData={props.dialogsState.messagesData}/>
    </div>
  );
};
export default Dialogs;
