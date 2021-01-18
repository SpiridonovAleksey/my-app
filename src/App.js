import React from 'react';
import './App.css';
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Navigation from "./components/nav/nav.jsx";
import MainContent from "./components/main-content/main-content.jsx";
import {BrowserRouter} from "react-router-dom";
import store, {updateNewPostText} from "./redux/state";

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navigation/>
        <MainContent dialogsState={props.state.dialogsState}
                     newPostText={props.state.profileState.newPostText}
                     postsData={props.state.profileState.postsData}
                     friendsData={props.state.profileState.friendsData}
                     // addNewPost={props.addNewPost}
                     // updateNewPostText={props.updateNewPostText}
                     addNewMessage={props.addNewMessage}
                     updateNewMessageText={props.updateNewMessageText}
                     dispatch={props.dispatch}
        />
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
