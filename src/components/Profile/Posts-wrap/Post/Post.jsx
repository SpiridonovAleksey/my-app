import React from "react";
import "./Post.css";

const Post = (props) => {

  return (
    <div className="post">
      <img className="post__avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfBJb0V9mwKFAoznIFdeWISIB_JR_XzIMYwA&usqp=CAU"
           alt=""/>
       <p className="post__content">{props.message}</p>
      <button className="post__like">Like{props.count}</button>
    </div>
  )
};

export default Post;
