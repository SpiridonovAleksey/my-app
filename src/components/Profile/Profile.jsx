import React from "react";
import './Profile.css';
import NewPost from "./New-post/New-post.jsx";
import PostsWrap from "./Posts-wrap/Posts-wrap.jsx";
import UserGeneralWrap from "./User-general-wrap/User-general-wrap.jsx";
import Sidebar from "./sidebar/sidebar.jsx";
import {updateNewPostText} from "../../redux/state";

const Profile = (props) => {
  return (
    <section className='profile'>
      <UserGeneralWrap/>
      <Sidebar friendsData={props.friendsData}/>
      <NewPost addNewPost={props.addNewPost}
               updateNewPostText={updateNewPostText}
               newPostText={props.newPostText}/>
      <PostsWrap postsData={props.postsData}/>
    </section>
  );
};
export default Profile;
