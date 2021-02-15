import React from "react";
import "./main-content.css";
import Profile from "../Profile/Profile.jsx";
import Dialogs from "../Dialogs/Dialogs.jsx";
import Music from "../Music/Music.jsx";
import News from "../News/News";
import {Route} from "react-router-dom";
import Users from "../users/users";

const MainContent = (props) => {

  return (
    <div className='main-content'>
      <Route path='/profile'
             render={() => <Profile/>}/>
      <Route path='/users'
             render={() => <Users/>}/>
      <Route path='/dialogs'
             render={() => <Dialogs/>}/>
      <Route path='/music'
             render={() => <Music/>}/>
      <Route path='/news'
             render={() => <News/>}/>
    </div>
  )
};
export default MainContent;
