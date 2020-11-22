import React from "react";
import "./main-content.css";
import NewPost from "../New-post/New-post.jsx";
import PostsWrap from "../Posts-section/Posts-wrap/Posts-wrap.jsx";
import UserGeneralWrap from "../User-general/User-general-wrap/User-general-wrap.jsx";


const MainContent = () => {
  return (
    <div className='main-content'>

      <UserGeneralWrap/>

      <NewPost/>

      <PostsWrap/>


    </div>
  )
};
export default MainContent;
