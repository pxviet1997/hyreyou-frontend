import { reqSignIn, reqSignUp } from 'src/api';

export const signIn = (userInfo) => async (dispatch) => {
  try {
    const response = await reqSignIn(userInfo);
    // bakeCookie('userInfo', JSON.stringify(response));
    // bake_cookie('userInfo', JSON.stringify(response));

    // console.log('new cookie:', readCookie('userInfo'));

    localStorage.setItem('userInfo', JSON.stringify(response));

    // console.log(response);
    dispatch({ type: 'LOGIN_SUCCESS', payload: response });
    dispatch({ type: 'RESET_MESSAGE' });
    // console.log(JSON.stringify(response));

    // return Promise.resolve();
  } catch (error) {
    dispatch({ type: 'SET_ERROR_MESSAGE', payload: error });
    dispatch({ type: 'LOGIN_FAIL' });
    // console.log(error);
    // return Promise.reject();
  }
};

export const signUp = (userInfo) => async (dispatch) => {
  try {
    const response = await reqSignUp(userInfo);
    dispatch({ type: 'SIGNUP_SUCCESS' });
    dispatch({ type: 'SET_CONFIRM_MESSAGE', payload: response.message });
  } catch (error) {
    console.log(error);
    dispatch({ type: 'SIGNUP_FAIL' });
    dispatch({ type: 'SET_ERROR_MESSAGE', payload: error });
  }
};

export const logOut = () => {
  localStorage.removeItem('userInfo');
  return { type: 'LOGOUT' };
};

export const resetError = () => ({ type: 'RESET_ERROR' });
