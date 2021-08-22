import ajax from './ajax';

const BASE_URL = 'http://localhost:5000';

export const reqSignIn = (email, password) => ajax(`${BASE_URL}/auth/login`, { email, password }, 'POST');

export const reqSignUp = (email, password, firstName, lastName, userType, mobileNumber) => ajax(`${BASE_URL}/auth/signup`, {
  email, password, firstName, lastName, userType, mobileNumber
}, 'POST');

export const reqReset = (email) => ajax(`${BASE_URL}/auth /reset`, { email }, 'POST');

//reqForgotPassword


//reqEMailChecking


export const reqGetTalent = (_id) => ajax(`${BASE_URL}/talent`, { _id });
