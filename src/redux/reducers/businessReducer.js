import { GET_TALENT, SET_BUSINESS } from '../actions/type';
import { initialState } from './state/intinalState';

export const businessReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TALENT:
      return { ...state, talent: action.payload };
    case SET_BUSINESS:
      return {
        ...state, user: action.payload
      };
    default:
      return state;
  }
};
