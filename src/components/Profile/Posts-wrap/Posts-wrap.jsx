import React from "react";
import "./Posts-wrap.css";
import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";
import Posts from "./posts/posts";

// const PostsWrap = (props) => {
//
//   // return (
//   //   <StoreContext.Consumer>
//   //     {
//   //       (store) => {
//   //
//   //         let state = store.getState().profileState.postsData;
//
//   let state = props.postsData;
//
//   let postsItem = state.map(item =>
//     <div className="post">
//       <img className="post__avatar"
//            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE4Jz3awyArUnyFZaY0yo3zW09SjnZIH7G-g&usqp=CAU"
//            alt=""/>
//       <p className="post__content">{item.text}</p>
//       <button className="post__like">Like{item.count}</button>
//     </div>
//   );
//
//   return (
//     <section className="posts-wrap">
//       <h2 className="posts-wrap__title visually-hidden">my publications</h2>
//       {postsItem}
//     </section>
//   )
//   //       }
//   //     }
//   //   </StoreContext.Consumer>
//   // )
// };

function mapStateToProps(state) {
  return {
    postsData: state.profileState.postsData
  }
}

const PostsContainer = connect(mapStateToProps)(Posts);

export default PostsContainer;
