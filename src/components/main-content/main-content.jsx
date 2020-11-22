import React from "react";
import "./main-content.css";
import NewPost from "../New-post/New-post.jsx";
import PostsWrap from "../Posts-section/Posts-wrap/Posts-wrap.jsx";


const MainContent = () => {
  return (
    <div className='main-content'>

      <section>
        <img src=""
             alt="Avatar"/>
        <div>
          <span>Description</span>
        </div>
      </section>

      <NewPost/>

      <PostsWrap/>


    </div>
  )
};
export default MainContent;
