const initialState = {
  isLoggedIn: false,
  user: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SCUCCESS':
      return { ...state, isLoggedIn: true, user: action.payload.user };
    default:
      return state;
  }
}