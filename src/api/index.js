import ajax from './ajax';

const BASE_URL = 'http://localhost:5000';

export const reqTalentSignIn = (user) => ajax(`${BASE_URL}/auth/talentlogin`, user, 'POST');
export const reqBusinessSignIn = (user) => ajax(`${BASE_URL}/auth/businesslogin`, user, 'POST');
export const reqSignIn = (userInfo) => ajax(`${BASE_URL}/auth/login`, userInfo, 'POST');

export const reqSignUp = (newUser) => ajax(`${BASE_URL}/auth/signup`, newUser, 'POST');

export const reqReset = (resetInfo) => ajax(`${BASE_URL}/auth/resetpassword`, resetInfo, 'POST');
export const reqChangePassword = (passwordInfo) => ajax(`${BASE_URL}/auth/changepassword`, passwordInfo, 'POST');

export const reqGetTalent = (_id) => ajax(`${BASE_URL}/talent`, { _id });

export const reqVerifyEmail = (verifyInfo) => ajax(`${BASE_URL}/auth/verify`, verifyInfo);

export const reqCreateRole = (addRole) => ajax(`${BASE_URL}/business/createRole`, addRole, 'POST');
export const listAllRoleAndNoCandidate = (showRole) => ajax(`${BASE_URL}/business/listAllRoleAndNoCandidate`, showRole, 'POST');
export const listRoleCandidate = (listCandidate) => ajax(`${BASE_URL}/business/listRoleCandidate`, listCandidate, 'POST');
