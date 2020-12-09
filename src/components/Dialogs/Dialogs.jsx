import React from "react";
import './Dialogs.css';
import DialogList from "./Dialogs-list/Dialogs-list.jsx";
import MessageList from "./Message-list/Message-list";

const Dialogs = () => {
  return (
    <div className='dialogs'>
      <DialogList/>
      <MessageList/>
    </div>
  );
};
export default Dialogs;
