import React from "react";
import "./New-post.css"
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import NewPost from "./New-post";

const NewPostContainer = (props) => {

  let state = props.store.getState().profileState;

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let postChange = (newText) => {
    props.store.dispatch(onPostChangeActionCreator(newText));
  };



  return (
    <NewPost addPost={addPost}
             postChange={postChange}
             newPostText={state.newPostText}/>
  )
};
export default NewPostContainer;
