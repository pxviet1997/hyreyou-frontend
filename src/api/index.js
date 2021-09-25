import ajax from './ajax';
import { authHeader } from './header';

const BASE_URL = 'http://localhost:5000';

export const reqTalentSignIn = (user) => ajax(`${BASE_URL}/auth/talentlogin`, user, 'POST');
export const reqBusinessSignIn = (user) => ajax(`${BASE_URL}/auth/businesslogin`, user, 'POST');
export const reqSignIn = (userInfo) => ajax(`${BASE_URL}/auth/login`, userInfo, 'POST');

export const reqSignUp = (newUser) => ajax(`${BASE_URL}/auth/signup`, newUser, 'POST');

export const reqReset = (resetInfo) => ajax(`${BASE_URL}/auth/resetpassword`, resetInfo, 'POST', { headers: authHeader() });
export const reqChangePassword = (passwordInfo) => ajax(`${BASE_URL}/auth/changepassword`, passwordInfo, 'POST', { headers: authHeader() });

export const reqGetTalent = (_id) => ajax(`${BASE_URL}/talent`, { _id }, { headers: authHeader() });

export const reqVerifyEmail = (verifyInfo) => ajax(`${BASE_URL}/auth/verify`, verifyInfo);

export const reqUpdate = (info) => ajax(`${BASE_URL}/talent/update`, info, 'POST', { headers: authHeader() });

export const reqUpdateImage = (file, headers) => ajax(`${BASE_URL}/updateImage/upload`, file, 'POST', headers);
