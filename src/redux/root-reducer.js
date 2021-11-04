import reduceReducers from 'reduce-reducers';
import { combineReducers } from 'redux';
import { authReducer } from './reducers/authReducer';
import { businessReducer } from './reducers/businessReducer';
import { messageReducer } from './reducers/messageReducer';
import { talentReducer } from './reducers/talentReducer';

const sharedReducer = reduceReducers(authReducer, talentReducer, businessReducer);

const rootReducer = combineReducers({
  // auth: authReducer,
  message: messageReducer,
  shared: sharedReducer
  // talent: talentReducer
});

export default rootReducer;
