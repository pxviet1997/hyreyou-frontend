import { ADD_JOB_HISTORY_SUCCESS, UPDATE_PERSONAL_DETAIL_FAIL, UPDATE_PERSONAL_DETAIL_SUCCESS } from '../actions/type';
import { initialState } from './state/intinalState';

export const talentReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PERSONAL_DETAIL_SUCCESS:
      return {
        ...state, user: action.payload, error: false,
      };
    case UPDATE_PERSONAL_DETAIL_FAIL:
      return {
        ...state, error: true
      };
    case ADD_JOB_HISTORY_SUCCESS: {
      const { user } = state;
      user.jobHistory.unshift(action.payload);
      return {
        ...state, user, error: false
      };
    }
    default:
      return state;
  }
};
