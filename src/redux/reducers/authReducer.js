const initialState = {
  isLoggedIn: false,
  user: null,
  userType: '',
  error: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
        userType: action.payload.userType,
        error: false
      };
    case 'LOGIN_FAIL':
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        error: true
      };
    default:
      return state;
  }
};
