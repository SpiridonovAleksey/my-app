import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Navigation from "./components/nav/nav.jsx";
import MainContent from "./components/main-content/main-content.jsx";

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navigation/>
      <MainContent/>
      <Footer/>
    </div>
  );
};

export default App;
