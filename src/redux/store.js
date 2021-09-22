import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
// import rootReducer from "./reducers";
import logger from 'redux-logger';

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
