import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import configureStore from './configureStore';
import { Provider } from "react-redux";
import "font-awesome/css/font-awesome.css";
import "./style.css";
// import { persistStore } from 'redux-persist';
import history from './utils/history';

const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');




//const store = store();
// const persistor = persistStore(store, iniState, () => {
//   console.log('rehydration complete')
// })

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  MOUNT_NODE
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
