import React from "react";
import './Dialogs.css';
import DialogList from "./Dialogs-list/Dialogs-list.jsx";
import MessageList from "./Messages/Message-list/Message-list";
import Messages from "./Messages/Messages";
import DialogListContainer from "./Dialogs-list/Dialogs-list-container";

const Dialogs = (props) => {

  return (
    <div className='dialogs'>
      <DialogListContainer
        // dialogsData={props.dialogsState.dialogsData}
      />
      <Messages
                // messagesData={props.dialogsState.messagesData}
                // newMessageText={props.dialogsState.newMessageText}
                // dispatch={props.dispatch}
                // store={props.store}
      />
    </div>
  );
};
export default Dialogs;
