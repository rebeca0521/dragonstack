import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { render } from "react-dom";
import Root from "../src/components/Root";
import { fetchAuthenticated } from './actions/account';
import thunk from "redux-thunk"; //讓action creator回傳可以不只是action object可以是function

import rootReducer from "./reducers/index";
import "./index.css";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), //用來顯示state的chrome外掛工具
  applyMiddleware(thunk)
);

store.dispatch(fetchAuthenticated())
.then(()=>{
    render(
        <Provider store={store}>
            <Root/>
        </ Provider>,
        document.getElementById('root')
    )
})