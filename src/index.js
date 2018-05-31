import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import 'rxjs';
import registerServiceWorker from './registerServiceWorker';
import app from './containers/App/reducer';
import flipClicked from './containers/App/epics';
import App from './containers/App/index';
import './index.css';

const rootEpic = combineEpics(
  flipClicked
);

const rootReducer = combineReducers({
  app,
});

const epicMiddleware = createEpicMiddleware(rootEpic);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,
  composeEnhancers(
    applyMiddleware(epicMiddleware)
  )
);

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
