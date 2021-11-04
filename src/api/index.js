import ajax from './ajax';
import { authHeader } from './header';

export const BASE_URL = 'http://localhost:5000';

export const reqTalentSignIn = (user) => ajax(`${BASE_URL}/auth/talentlogin`, user, 'POST');

export const reqBusinessSignIn = (user) => ajax(`${BASE_URL}/auth/businesslogin`, user, 'POST');

export const reqSignIn = (userInfo) => ajax(`${BASE_URL}/auth/login`, userInfo, 'POST');

export const reqSignUp = (newUser) => ajax(`${BASE_URL}/auth/signup`, newUser, 'POST');

export const reqReset = (resetInfo) => ajax(`${BASE_URL}/auth/resetpassword`, resetInfo, 'POST', { headers: authHeader() });

export const reqChangePassword = (passwordInfo) => ajax(`${BASE_URL}/auth/changepassword`, passwordInfo, 'POST', { headers: authHeader() });

export const reqGetTalent = (_id) => ajax(`${BASE_URL}/talent/get-talent`, { _id }, 'GET');

export const reqGetUser = (userInfo) => ajax(`${BASE_URL}/auth/get-user`, userInfo);

export const reqVerifyEmail = (verifyInfo) => ajax(`${BASE_URL}/auth/verify`, verifyInfo);

export const reqUpdateTalent = (info) => ajax(`${BASE_URL}/talent/update`, info, 'POST', { headers: authHeader() });

export const reqUpdateBusiness = (info) => ajax(`${BASE_URL}/business/update`, info, 'POST');

export const reqUpdateImage = (file, headers) => ajax(`${BASE_URL}/updateImage/upload`, file, 'POST', headers);

export const reqAddJobHistory = (newJob) => ajax(`${BASE_URL}/talent/add-job-history`, newJob, 'POST');

export const reqAddEducationHistory = (newEducation) => ajax(`${BASE_URL}/talent/add-education-history`, newEducation, 'POST');

export const reqCreateRole = (addRole) => ajax(`${BASE_URL}/business/create-role`, addRole, 'POST');

export const reqGetTalentList = (talentList) => ajax(`${BASE_URL}/business/get-talent-list`, talentList, 'POST');

export const reqShortlistTalent = (shortlistedTalent) => ajax(`${BASE_URL}/business/shortlist-talent`, shortlistedTalent, 'POST');

export const reqRejectTalent = (rejectCandidate) => ajax(`${BASE_URL}/business/reject-talent`, rejectCandidate, 'POST');

export const reqAddCertification = (certification) => ajax(`${BASE_URL}/talent/add-certification`, certification, 'POST');

export const reqDownload = (downloadInfo) => ajax(`${BASE_URL}/talent/download`, downloadInfo);

export const reqMatchToTalent = (_id) => ajax(`${BASE_URL}/business/match-talent`, { _id }, 'POST');
