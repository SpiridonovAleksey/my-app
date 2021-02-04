import React from "react";
import "./Posts-wrap.css";
import StoreContext from "../../../StoreContext";

const PostsWrap = (props) => {

  return (
    <StoreContext.Consumer>
      {
        (store) => {

          let state = store.getState().profileState.postsData;

          let postsItem = state.map(item =>
            <div className="post">
              <img className="post__avatar"
                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE4Jz3awyArUnyFZaY0yo3zW09SjnZIH7G-g&usqp=CAU"
                   alt=""/>
              <p className="post__content">{item.text}</p>
              <button className="post__like">Like{item.count}</button>
            </div>
          );

          return (
            <section className="posts-wrap">
              <h2 className="posts-wrap__title visually-hidden">my publications</h2>
              {postsItem}
            </section>
          )
        }
      }
    </StoreContext.Consumer>
  )
};

export default PostsWrap;
