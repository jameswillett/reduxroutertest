import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRoutes } from 'redux-first-router';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';

import message from './reducers/message';
import component from './reducers/component';

const logger = createLogger();
const history = createHistory();

const routesMap = {
  HOME: '/',
  PICTURE: '/picture/:id',
};

const { reducer, middleware, enhancer } = connectRoutes(history, routesMap);

const reducers = combineReducers({
  message,
  component,
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
