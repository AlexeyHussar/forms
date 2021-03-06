import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from './reducers'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={ createStore(appReducer,
    composeWithDevTools()) } >
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
