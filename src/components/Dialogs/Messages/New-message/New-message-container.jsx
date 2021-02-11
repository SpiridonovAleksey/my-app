import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/dialogs-reducer";
import NewMessage from "./New-message";
import {connect} from "react-redux";

let MapStateToProps = (state) => {
  return {
    newMessageText: state.dialogsState.newMessageText
  }
};

let MapDispatchToProps = (dispatch) => {
  return {
    messageChange: (newText) => {
      dispatch(updateNewMessageTextActionCreator(newText))
    },
    sendMessage: () => {
      dispatch(addMessageActionCreator())
    }
  }
};

const NewMessageContainer = connect(MapStateToProps, MapDispatchToProps)(NewMessage);

export default NewMessageContainer;
