import React from "react";
import "./New-post.css"
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import NewPost from "./New-post";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    newPostText: state.profileState.newPostText
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    postChange: (newText) => {
      dispatch(onPostChangeActionCreator(newText))
    }
  }
};

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);
export default NewPostContainer;
