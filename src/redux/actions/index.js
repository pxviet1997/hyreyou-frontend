
export const signIn = (userInfo) => async (dispatch) => {
  try {
    const response = await reqSignIn(userInfo);
    console.log(response);
    dispatch({ type: 'LOGIN_SUCCESS', payload: response });
  } catch (error) {
    console.log(error);
  }

}
// export