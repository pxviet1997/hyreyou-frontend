const userInfo = JSON.parse(localStorage.getItem('userInfo'));

const initialState = userInfo
  ? {
    isLoggedIn: true,
    user: userInfo.user,
    userType: userInfo.userType,
    token: userInfo.token,
    error: false
  }
  : {
    isLoggedIn: false,
    user: null,
    userType: '',
    token: '',
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
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        error: false
      };
    case 'SIGNUP_FAIL':
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        error: true
      };
    case 'RESET_ERROR':
      return {
        ...state,
        error: false
      };
    case 'LOGOUT':
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
