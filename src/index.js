import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {applyMiddleware,createStore,compose} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import{thunk} from'redux-thunk'

import rootReducer from './redux/store';
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const appStore=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const root=ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Provider store={appStore}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
