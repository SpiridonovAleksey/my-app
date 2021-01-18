import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/state';
// import {addNewPost} from "./redux/state.js";
// import {addNewMessage} from "./redux/state.js";
// import {updateNewMessageText} from "./redux/state.js";
// import {updateNewPostText} from "./redux/state.js"
// import {subscribe} from "./redux/state";

export let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state}
           dispatch={store.dispatch.bind(store)}
           // addNewPost={store.addNewPost.bind(store)}
           // updateNewPostText={store.updateNewPostText.bind(store)}
           addNewMessage={store.addNewMessage.bind(store)}
           updateNewMessageText={store.updateNewMessageText.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
