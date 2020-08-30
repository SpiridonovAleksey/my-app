import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='page-header'>
        <img className='page-logo' src="https://p.kindpng.com/picc/s/26-264795_fiat-decal-decorative-abarth-logo-png-transparent-png.png"
             alt="логотип"/>
      </header>
      <nav className='main-nav'>
        <ul className='main-nav__list'>
          <li>
            <a href="">Profile</a>
          </li>
          <li>
            <a href="">Messages</a>
          </li>
          <li>
            <a href="">News</a>
          </li>
          <li>
            <a href="">Music</a>
          </li>
          <li>
            <a href="">Settings</a>
          </li>
        </ul>
      </nav>
      <div className='main-content'>
        <img src="https://i1.7fon.org/thumb/m527697.jpg"
             alt=""/>

        <section>
          <img src=""
               alt="Avatar"/>
          <div>
            <span>Description</span>
          </div>
        </section>

        <section>
          <h2>My Posts</h2>
          <div>
            Post 1
          </div>
          <div>
            Post 2
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
