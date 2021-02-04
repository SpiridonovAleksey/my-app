import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/dialogs-reducer";
import NewMessage from "./New-message";
import StoreContext from "../../../../StoreContext";

const NewMessageContainer = (props) => {

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          // let newMessageText = React.createRef();
          let state = store.getState().dialogsState;

          let sendMessage = () => {
            store.dispatch(addMessageActionCreator());
          };

          let messageChange = (newText) => {
            // let newText = newMessageText.current.value;
            store.dispatch(updateNewMessageTextActionCreator(newText));
          };

          return (
            <NewMessage sendMessage={sendMessage}
                        messageChange={messageChange}
                        newMessageText={state.newMessageText}/>
          )
        }
      }
    </StoreContext.Consumer>
  );
};

export default NewMessageContainer;
