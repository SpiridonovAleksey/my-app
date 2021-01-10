import React from "react";
import "./main-content.css";
// import NewPost from "../New-post/New-post.jsx";
// import PostsWrap from "../Posts-section/Posts-wrap/Posts-wrap.jsx";
// import UserGeneralWrap from "../User-general/User-general-wrap/User-general-wrap.jsx";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import Music from "../Music/Music.jsx";
import News from "../News/News";
import {Route} from "react-router-dom";

const MainContent = (props) => {

  return (
    <div className='main-content'>
      <Route path='/profile' render={() => <Profile/>}/>
      <Route path='/dialogs' render={() => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
      <Route path='/music' render={() => <Music/>}/>
      <Route path='/news' render={() => <News/>}/>
    </div>
  )
};
export default MainContent;
