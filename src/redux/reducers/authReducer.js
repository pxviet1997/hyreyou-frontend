import { read_cookie as readCookie } from 'sfcookies';

// const userInfo = JSON.parse(readCookie('userInfo'));
const userInfo = readCookie('userInfo');
console.log(userInfo);

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
