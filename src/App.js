import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Navigation from "./components/nav/nav.jsx";
import MainContent from "./components/main-content/main-content.jsx";
import {BrowserRouter} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navigation/>
        <MainContent dialogsState={props.state.dialogsState}
                     postsData={props.state.postsData}
                     friendsData={props.state.friendsData}/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
