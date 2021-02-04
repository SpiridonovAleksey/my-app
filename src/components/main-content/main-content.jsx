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
import store, {updateNewPostText} from "../../redux/store";

const MainContent = (props) => {

  return (
    <div className='main-content'>
      <Route path='/profile' render={() => <Profile
                                                    // postsData={props.postsData}
                                                    // friendsData={props.friendsData}
                                                    // newPostText={props.newPostText}
                                                    // dispatch={props.dispatch}
                                                    // store={props.store}
      />}/>
      <Route path='/dialogs' render={() => <Dialogs
                                                    // dialogsState={props.dialogsState}
                                                    // dispatch={props.dispatch}
                                                    // store={props.store}
      />}/>
      <Route path='/music' render={() => <Music/>}/>
      <Route path='/news' render={() => <News/>}/>
    </div>
  )
};
export default MainContent;
