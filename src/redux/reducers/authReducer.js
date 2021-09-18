const initialState = {
  isLoggedIn: false,
  user: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, isLoggedIn: true, user: action.payload.user };
    case 'LOGIN_FAIL':
      return { ...state, isLoggedIn: false, user: null };
    default:
      return state;
  }
};
