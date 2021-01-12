import React from "react";
import "./Posts-wrap.css";

const PostsWrap = (props) => {

  let postsItem = props.postsData.map(item =>
    <div className="post">
      <img className="post__avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfBJb0V9mwKFAoznIFdeWISIB_JR_XzIMYwA&usqp=CAU"
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
};

export default PostsWrap;
