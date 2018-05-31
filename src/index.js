import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/index';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import app from './containers/App/reducer';

const rootReducer = combineReducers({
  app
});
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
