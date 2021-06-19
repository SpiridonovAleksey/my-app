import React from "react";
import './Profile.css';
import UserGeneralWrap from "./User-general-wrap/User-general-wrap.jsx";
import Sidebar from "./sidebar/sidebar.jsx";
import NewPostContainer from "./New-post/New-post-container";
import PostsContainer from "./Posts-wrap/Posts-wrap";

const Profile = (props) => {
  return (
    <section className='profile'>
      <UserGeneralWrap profile={props.profile}/>
      <Sidebar/>
      <NewPostContainer/>
      <PostsContainer/>
    </section>
  );
};
export default Profile;
