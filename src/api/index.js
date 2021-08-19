import ajax from './ajax';

const BASE_URL = 'http://localhost:5000';

export const reqSignIn = (email, password) => ajax(`${BASE_URL}/login`, { email, password });
export const reqSignUp = (email, password, firstName, lastName, userType) => ajax(`${BASE_URL}/signup`, {
  email, password, firstName, lastName, userType
});
export const reqGetTalent = (_id) => ajax(`${BASE_URL}/talent`, { _id });
