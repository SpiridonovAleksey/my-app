import React from "react";
import './Dialogs.css';
import Messages from "./Messages/Messages";
import DialogListContainer from "./Dialogs-list/Dialogs-list-container";

const Dialogs = (props) => {

  return (
    <div className='dialogs'>
      <DialogListContainer/>
      <Messages/>
    </div>
  );
};

export default Dialogs;
