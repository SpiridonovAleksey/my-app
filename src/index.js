import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MainContent from "./components/main-content/main-content";

let dialogsData = [
  {id: 1, name: 'igor'},
  {id: 2, name: 'ira'},
  {id: 3, name: 'sveta'},
  {id: 4, name: 'miha'},
  {id: 5, name: 'marina'}
];

let messagesData = [
  {text: 'hi'},
  {text: 'Урок-шпаргалка поможет вам повторить всю английскую грамматику по учебнику Essential Grammar in Use.\n' +
      '          Английская грамматика для новичков. Чтобы вам было удобно,\n' +
      '          материал содержит обзор всей темы с опорными таблицами, красивыми и понятными схемами.\n' +
      '         К каждой теме мы разбираем примеры английских предложений'},
  {text: 'Чтобы вам было удобно,\n' +
      '          материал содержит обзор всей темы с опорными'}
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
