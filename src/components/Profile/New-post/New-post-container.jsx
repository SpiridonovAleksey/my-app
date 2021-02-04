import React from "react";
import "./New-post.css"
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import NewPost from "./New-post";
import StoreContext from "../../../StoreContext";

const NewPostContainer = () => {


  return (
    <StoreContext.Consumer>
      {
        (store) => {

          let state = store.getState().profileState;

          let addPost = () => {
            store.dispatch(addPostActionCreator());
          };

          let postChange = (newText) => {
            store.dispatch(onPostChangeActionCreator(newText));
          };

          return (
            <NewPost addPost={addPost}
                     postChange={postChange}
                     newPostText={state.newPostText}/>
          )
        }
      }
    </StoreContext.Consumer>
  )
};
export default NewPostContainer;
