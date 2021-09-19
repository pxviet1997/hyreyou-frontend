import { reqSignIn } from 'src/api';

export const signIn = (userInfo) => async (dispatch) => {
  try {
    const response = await reqSignIn(userInfo);

    // console.log(response);
    dispatch({ type: 'LOGIN_SUCCESS', payload: response });
    dispatch({ type: 'RESET_MESSAGE' });

    // return Promise.resolve();
  } catch (error) {
    dispatch({ type: 'SET_MESSAGE', payload: error });
    dispatch({ type: 'LOGIN_FAIL' });
    // console.log(error);
    // return Promise.reject();
  }
};
