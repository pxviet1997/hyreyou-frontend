import ajax from './ajax';

const BASE_URL = 'http://localhost:5000';

export const reqSignIn = (email, password) => ajax(`${BASE_URL}/auth/login`, { email, password }, 'POST');

export const reqSignUp = (newUser) => ajax(`${BASE_URL}/auth/signup`, newUser, 'POST');

export const reqReset = (email) => ajax(`${BASE_URL}/auth/reset`, { email }, 'POST');

// reqForgotPassword

// reqEMailChecking

export const reqGetTalent = (_id) => ajax(`${BASE_URL}/talent`, { _id });

export const reqVerifyEmail = (_id) => ajax(`${BASE_URL}/auth/verify`, { _id });
