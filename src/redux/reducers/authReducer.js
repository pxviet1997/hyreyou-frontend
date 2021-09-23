import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT, RESET_ERROR,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS
} from '../actions/type';
import { initialState } from './state/intinalState';

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
        userType: action.payload.user.userType,
        error: false
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        error: true
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        error: false
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        error: true
      };
    case RESET_ERROR:
      return {
        ...state,
        error: false
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        userType: '',
        error: false
      };
    default:
      return state;
  }
};
