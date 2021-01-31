import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/dialogs-reducer";
import NewMessage from "./New-message";

const NewMessageContainer = (props) => {
  // let newMessageText = React.createRef();
  let state = props.store.getState().dialogsState;

  let sendMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let messageChange = (newText) => {
    // let newText = newMessageText.current.value;
    props.store.dispatch(updateNewMessageTextActionCreator(newText));
  };

  return (
    <NewMessage sendMessage={sendMessage}
                messageChange={messageChange}
                newMessageText={state.newMessageText}/>
  );
};

export default NewMessageContainer;
