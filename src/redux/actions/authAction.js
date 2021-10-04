import { reqGetUser, reqSignIn, reqSignUp } from 'src/api';
import {
  SET_TALENT,
  LOGIN_SUCCESS,
  LOGOUT,
  SET_AUTH_ERROR,
  SET_CONFIRM_MESSAGE,
  SET_ERROR_MESSAGE,
  SIGNUP_SUCCESS,
  SET_BUSINESS
} from './type';

export const signIn = (userInfo) => async (dispatch) => {
  try {
    const response = await reqSignIn(userInfo);

    console.log(response);

    localStorage.setItem('token', JSON.stringify(response.token));
    localStorage.setItem('userType', JSON.stringify(response.userType));

    dispatch({ type: LOGIN_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: SET_ERROR_MESSAGE, payload: error });
    dispatch({ type: SET_AUTH_ERROR });
  }
};

export const getUser = () => async (dispatch) => {
  try {
    const token = JSON.parse(localStorage.getItem('token'));
    const userType = JSON.parse(localStorage.getItem('userType'));

    const response = await reqGetUser({ token, userType });

    const type = userType === 'Talent' ? SET_TALENT : SET_BUSINESS;
    dispatch({ type, payload: response.user });
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
  localStorage.removeItem('userType');
  localStorage.removeItem('token');
  return { type: LOGOUT };
};

export const resetError = () => ({ type: 'RESET_ERROR' });
