import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, browserHistory, match } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers/index';
import routes from './routes.jsx';

const loggerMiddleware = createLogger();

// eslint-disable-next-line no-underscore-dangle
const initialState = window.__INITIAL_STATE__;
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  ),
);

match({ history: browserHistory, routes }, (error, redirectLocation, renderProps) => {
  render(
    <Provider store={store}>
    <Router {...renderProps} />
    </Provider>,
    document.getElementById('root-app')
  );
});
