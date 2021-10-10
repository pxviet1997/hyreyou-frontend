import {
  reqGetTalent, reqUpdateBusiness, reqRejectTalent, reqShortlistTalent, reqCreateRole, reqTalentList
} from 'src/api';
import {
  GET_TALENT, SET_CONFIRM_MESSAGE, SET_ERROR_MESSAGE, SET_BUSINESS_ERROR, UPDATE_BUSINESS_DETAIL_SUCCESS, UPDATE_BUSINESS_INFORMATION_SUCCESS,
  REJECT_TALENT, SHORTLIST_TALENT, CREATE_ROLE, GET_TALENT_LIST, REMOVE_TALENT_FROM_LIST
} from './type';

export const getTalent = (talentId) => async (dispatch) => {
  try {
    const response = await reqGetTalent(talentId);
    dispatch({ type: GET_TALENT, payload: response });
  } catch (error) {
    console.log(error);
  }
};

export const updateBusinessDetail = (info) => async (dispatch) => {
  try {
    const response = await reqUpdateBusiness(info);
    dispatch({ type: UPDATE_BUSINESS_DETAIL_SUCCESS, payload: response.user });
    dispatch({ type: SET_CONFIRM_MESSAGE, payload: response.message });
  } catch (error) {
    dispatch({ type: SET_ERROR_MESSAGE, payload: error });
    dispatch({ type: SET_BUSINESS_ERROR });
  }
};

export const updateBusinessInformation = (info) => async (dispatch) => {
  try {
    const response = await reqUpdateBusiness(info);
    dispatch({ type: UPDATE_BUSINESS_INFORMATION_SUCCESS, payload: response.user });
    dispatch({ type: SET_CONFIRM_MESSAGE, payload: response.message });
  } catch (error) {
    dispatch({ type: SET_ERROR_MESSAGE, payload: error });
    dispatch({ type: SET_BUSINESS_ERROR });
  }
};
export const shortlistTalent = (talentInfo) => async (dispatch) => {
  try {
    const response = await reqShortlistTalent(talentInfo);
    dispatch({ type: SHORTLIST_TALENT, payload: response });
    dispatch({ type: REMOVE_TALENT_FROM_LIST, payload: talentInfo.talentId });
    dispatch({ type: SET_CONFIRM_MESSAGE, payload: response.message });
  } catch (error) {
    console.log(error);
    dispatch({ type: SET_ERROR_MESSAGE, payload: error });
    dispatch({ type: SET_BUSINESS_ERROR });
  }
};

export const rejectTalent = (talentInfo) => async (dispatch) => {
  try {
    const response = await reqRejectTalent(talentInfo);
    dispatch({ type: REJECT_TALENT, payload: response });
    dispatch({ type: REMOVE_TALENT_FROM_LIST, payload: talentInfo.talentId });
    dispatch({ type: SET_CONFIRM_MESSAGE, payload: response.message });
  } catch (error) {
    console.log(error);
    dispatch({ type: SET_ERROR_MESSAGE, payload: error });
    dispatch({ type: SET_BUSINESS_ERROR });
  }
};

export const createRole = (newRoleInfo) => async (dispatch) => {
  try {
    const response = await reqCreateRole(newRoleInfo);
    const { _id, ...newRole } = newRoleInfo;
    dispatch({ type: CREATE_ROLE, payload: newRole });
    dispatch({ type: SET_CONFIRM_MESSAGE, payload: response.message });
  } catch (error) {
    console.log(error);
    dispatch({ type: SET_ERROR_MESSAGE, payload: error });
    dispatch({ type: SET_BUSINESS_ERROR });
  }
};

export const getTalentList = (listRoleCandidateInfo) => async (dispatch) => {
  try {
    const response = await reqTalentList(listRoleCandidateInfo);
    dispatch({ type: GET_TALENT_LIST, payload: response });
    dispatch({ type: SET_CONFIRM_MESSAGE, payload: response.message });
  } catch (error) {
    console.log(error);
    dispatch({ type: SET_ERROR_MESSAGE, payload: error });
    dispatch({ type: SET_BUSINESS_ERROR });
  }
};
