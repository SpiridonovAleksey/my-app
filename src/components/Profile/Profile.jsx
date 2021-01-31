import React from "react";
import './Profile.css';
import NewPost from "./New-post/New-post.jsx";
import PostsWrap from "./Posts-wrap/Posts-wrap.jsx";
import UserGeneralWrap from "./User-general-wrap/User-general-wrap.jsx";
import Sidebar from "./sidebar/sidebar.jsx";
import store, {updateNewPostText} from "../../redux/store";
import NewPostContainer from "./New-post/New-post-container";

const Profile = (props) => {
  return (
    <section className='profile'>
      <UserGeneralWrap/>
      <Sidebar friendsData={props.friendsData}/>
      <NewPostContainer
        // newPostText={props.newPostText}
                // addNewPost={props.addNewPost}
                // updateNewPostText={props.updateNewPostText}
                // dispatch={props.dispatch}
                store={props.store}/>
      <PostsWrap postsData={props.postsData}/>
    </section>
  );
};
export default Profile;
