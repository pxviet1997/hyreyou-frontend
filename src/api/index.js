import ajax from './ajax';

const BASE_URL = 'http://localhost:5000';

export const reqTalentSignIn = (user) => ajax(`${BASE_URL}/auth/talentlogin`, user, 'POST');
export const reqBusinessSignIn = (user) => ajax(`${BASE_URL}/auth/businesslogin`, user, 'POST');

export const reqSignUp = (newUser) => ajax(`${BASE_URL}/auth/signup`, newUser, 'POST');

export const reqReset = (email) => ajax(`${BASE_URL}/auth/reset`, { email }, 'POST');

// reqForgotPassword

// reqEmailChecking

export const reqGetTalent = (_id) => ajax(`${BASE_URL}/talent`, { _id });

export const reqVerifyEmail = (_id) => ajax(`${BASE_URL}/auth/verify`, { _id });
