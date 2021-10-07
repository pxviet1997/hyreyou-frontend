import { GET_TALENT, REJECT_TALENT, SHORTLIST_TALENT } from '../actions/type';
import { initialState } from './state/intinalState';

export const businessReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TALENT:
      return { ...state, talent: action.payload };
    case SHORTLIST_TALENT:
      return { ...state, user: action.payload };
    case REJECT_TALENT:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
