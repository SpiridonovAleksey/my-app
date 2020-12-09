import React from "react";
import Post from "./Post/Post.jsx";
import "./Posts-wrap.css";

const PostsWrap = () => {
  return (
    <section className="posts-wrap">
      <h2 className="posts-wrap__title">my publications</h2>
      <Post/>
      <Post/>
      <Post/>
    </section>
  )
};

export default PostsWrap;
