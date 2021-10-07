import { reqGetTalent, reqUpdateBusiness, reqRejectCandidate, reqShortlistingCandidate } from 'src/api';
import {
  GET_TALENT, SET_CONFIRM_MESSAGE, SET_ERROR_MESSAGE, SET_TALENT_ERROR, UPDATE_BUSINESS_DETAIL_SUCCESS, UPDATE_BUSINESS_INFORMATION_SUCCESS,
  REJECT_TALENT, SHORTLIST_TALENT
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
    dispatch({ type: SET_TALENT_ERROR });
  }
};

export const updateBusinessInformation = (info) => async (dispatch) => {
  try {
    const response = await reqUpdateBusiness(info);
    dispatch({ type: UPDATE_BUSINESS_INFORMATION_SUCCESS, payload: response.user });
    dispatch({ type: SET_CONFIRM_MESSAGE, payload: response.message });
  } catch (error) {
    dispatch({ type: SET_ERROR_MESSAGE, payload: error });
    dispatch({ type: SET_TALENT_ERROR });
  }
};
export const shortlistTalent = (talentInfo) => async (dispatch) => {
  try {
    const response = await reqShortlistingCandidate(talentInfo);
    dispatch({ type: SHORTLIST_TALENT, payload: response });
  } catch (error) {
    console.log(error);
  }
};

export const rejectTalent = (talentInfo) => async (dispatch) => {
  try {
    const response = await reqRejectCandidate(talentInfo);
    dispatch({ type: REJECT_TALENT, payload: response });
  } catch (error) {
    console.log(error);
  }
};
