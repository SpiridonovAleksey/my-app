import React from "react";
import './Profile.css';
import NewPost from "./New-post/New-post.jsx";
import PostsWrap from "./Posts-wrap/Posts-wrap.jsx";
import UserGeneralWrap from "./User-general-wrap/User-general-wrap.jsx";

const Profile = () => {
  return (
    <section className='profile'>
      <UserGeneralWrap/>
      <NewPost/>
      <PostsWrap/>
    </section>
  );
};
export default Profile;