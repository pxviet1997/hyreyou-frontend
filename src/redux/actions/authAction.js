import { reqSignIn } from 'src/api';
import {
  bake_cookie as bakeCookie,
  read_cookie as readCookie,
  delete_cookie as deleteCookie
} from 'sfcookies';

export const signIn = (userInfo) => async (dispatch) => {
  try {
    const response = await reqSignIn(userInfo);
    bakeCookie('userInfo', JSON.stringify(response));

    // console.log(response);
    dispatch({ type: 'LOGIN_SUCCESS', payload: response });
    dispatch({ type: 'RESET_MESSAGE' });
    // console.log(JSON.stringify(response));

    // return Promise.resolve();
  } catch (error) {
    dispatch({ type: 'SET_MESSAGE', payload: error });
    dispatch({ type: 'LOGIN_FAIL' });
    // console.log(error);
    // return Promise.reject();
  }
};

export const logOut = () => {
  return { type: 'LOGOUT' };
};
