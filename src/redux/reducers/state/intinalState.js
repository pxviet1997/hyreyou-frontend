const user = JSON.parse(localStorage.getItem('user'));

export const initialState = user
  ? {
    isLoggedIn: true,
    user,
    userType: user.userType,
    error: false
  }
  : {
    isLoggedIn: false,
    user: null,
    userType: '',
    error: false
  };

export const initialMessageState = {
  message: '',
  messageColor: ''
};
