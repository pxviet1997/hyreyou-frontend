const user = JSON.parse(localStorage.getItem('user'));

export const initialState = user
  ? {
    isLoggedIn: true,
    user,
    userType: user.userType,
    error: false,
    talent: null,
  }
  : {
    isLoggedIn: false,
    user: null,
    userType: '',
    error: false,
    talent: null,
  };

export const initialMessageState = {
  message: '',
  messageColor: ''
};
