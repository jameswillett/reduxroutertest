import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRoutes, redirect } from 'redux-first-router';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';

import message from './reducers/message';
import component from './reducers/component';
import loggedIn from './reducers/loggedIn';

const logger = createLogger();
const history = createHistory();

const pictureThunk = (dispatch, getState) => {
  const { loggedIn } = getState();
  if (!loggedIn) {
    dispatch(redirect({ type: 'HOME' }));
    alert("YOU HAVE TO BE LOGGED IN TO SEE MY COOL DOGS");
  }
}

const routesMap = {
  HOME: '/',
  PICTURE: {
    path: '/picture/:id',
    thunk: pictureThunk,
  }
};

const { reducer, middleware, enhancer } = connectRoutes(history, routesMap);

const reducers = combineReducers({
  message,
  component,
  loggedIn,
  location: reducer,
});

const middlewares = applyMiddleware(thunk, middleware, logger);

const composeEnhancers = (enhancer, middlewares) =>
  typeof window !== 'undefined'
    ? composeWithDevTools(middlewares, enhancer)
    : compose (enhancer, middlewares);

const store = createStore(
  reducers,
  composeEnhancers(enhancer, middlewares)
);

export default store;
