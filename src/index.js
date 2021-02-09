import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import StoreContext from "./StoreContext";
import {Provider} from "react-redux";

export let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
      <App
        // state={state}
        //    dispatch={store.dispatch.bind(store)}
        //    store={store}
      />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

renderEntireTree();
store.subscribe(() => {
  renderEntireTree();
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
