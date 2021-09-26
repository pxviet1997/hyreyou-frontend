import { reqSignIn, reqSignUp } from 'src/api';
import {
  LOGIN_SUCCESS,
  LOGOUT,
  SET_AUTH_ERROR,
  SET_CONFIRM_MESSAGE,
  SET_ERROR_MESSAGE,
  SIGNUP_SUCCESS
} from './type';

export const signIn = (userInfo) => async (dispatch) => {
  try {
    const response = await reqSignIn(userInfo);

    localStorage.setItem('token', JSON.stringify(response.token));
    localStorage.setItem('user', JSON.stringify(response.user));

    dispatch({ type: LOGIN_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: SET_ERROR_MESSAGE, payload: error });
    dispatch({ type: SET_AUTH_ERROR });
  }
};

export const signUp = (userInfo) => async (dispatch) => {
  try {
    const response = await reqSignUp(userInfo);
    dispatch({ type: SIGNUP_SUCCESS });
    dispatch({ type: SET_CONFIRM_MESSAGE, payload: response.message });
  } catch (error) {
    console.log(error);
    dispatch({ type: SET_AUTH_ERROR });
    dispatch({ type: SET_ERROR_MESSAGE, payload: error });
  }
};

export const logOut = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  return { type: LOGOUT };
};

export const resetError = () => ({ type: 'RESET_ERROR' });
