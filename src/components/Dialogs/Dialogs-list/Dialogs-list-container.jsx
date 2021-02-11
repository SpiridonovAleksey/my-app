import React from "react";
import './Dialogs-list.css';
import {connect} from "react-redux";
import DialogList from "./Dialogs-list";

let MapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsState.dialogsData
  }
};

const DialogListContainer = connect(MapStateToProps)(DialogList);

export default DialogListContainer;
