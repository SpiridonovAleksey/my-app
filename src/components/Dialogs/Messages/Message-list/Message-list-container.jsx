import React from "react";
import './Message-list.css'
import {connect} from "react-redux";
import MessageList from "./Message-list";

let MapStateToProps = (state) => {
  return {
    messagesData: state.dialogsState.messagesData
  }
};

const MessageListContainer = connect(MapStateToProps)(MessageList);

export default MessageListContainer;

