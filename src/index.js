import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import storeReducer from "./redux/storeReducer";


const rootReducer = combineReducers({
    storeReducer: storeReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); //actual store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter><App /></BrowserRouter>
  </Provider>
);

