import { CLEAR_MESSAGE, SET_CONFIRM_MESSAGE, SET_ERROR_MESSAGE } from '../actions/type';
import { initialMessageState } from './state/intinalState';

export const messageReducer = (state = initialMessageState, action) => {
  switch (action.type) {
    case SET_ERROR_MESSAGE:
      return { ...state, message: action.payload, messageColor: 'red' };
    case SET_CONFIRM_MESSAGE:
      return { ...state, message: action.payload, messageColor: 'green' };
    case CLEAR_MESSAGE:
      return { ...state, message: '' };
    default:
      return state;
  }
};
