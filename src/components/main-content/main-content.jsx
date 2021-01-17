import React from "react";
import "./main-content.css";
// import NewPost from "../New-post/New-post.jsx";
// import PostsWrap from "../Posts-section/Posts-wrap/Posts-wrap.jsx";
// import UserGeneralWrap from "../User-general/User-general-wrap/User-general-wrap.jsx";
import Profile from "../Profile/Profile.jsx";
import Dialogs from "../Dialogs/Dialogs.jsx";
import Music from "../Music/Music.jsx";
import News from "../News/News";
import {Route} from "react-router-dom";
import {updateNewPostText} from "../../redux/state";

const MainContent = (props) => {

  return (
    <div className='main-content'>
      <Route path='/profile' render={() => <Profile postsData={props.postsData}
                                                    updateNewPostText={props.updateNewPostText}
                                                    newPostText={props.newPostText}
                                                    friendsData={props.friendsData}
                                                    addNewPost={props.addNewPost}/>}/>
      <Route path='/dialogs' render={() => <Dialogs dialogsState={props.dialogsState}
                                                    addNewMessage={props.addNewMessage}
                                                    updateNewMessageText={props.updateNewMessageText}/>}/>
      <Route path='/music' render={() => <Music/>}/>
      <Route path='/news' render={() => <News/>}/>
    </div>
  )
};
export default MainContent;
