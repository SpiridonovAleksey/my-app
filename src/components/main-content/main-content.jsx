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


const MainContent = () => {
  return (
    <div className='main-content'>
      <Route path='/profile' component={Profile}/>
      <Route path='/dialogs' component={Dialogs}/>
      <Route path='/music' component={Music}/>
      <Route path='/news' component={News}/>


    </div>
  )
};
export default MainContent;
