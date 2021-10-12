import {
  reqAddCertification,
  reqAddEducationHistory, reqAddJobHistory, reqUpdateTalent,
} from 'src/api';
import {
  ADD_JOB_HISTORY_SUCCESS, SET_CONFIRM_MESSAGE, SET_TALENT_ERROR, SET_ERROR_MESSAGE,
  UPDATE_JOB_HISTORY_SUCCESS, UPDATE_PERSONAL_DETAIL_SUCCESS, ADD_EDUCATION_HISTORY_SUCCESS,
  UPDATE_EDUCATION_HISTORY_SUCCESS, UPDATE_JOB_EXPECTATION_SUCCESS, ADD_CERTIFICATION, REMOVE_JOB_HISTORY,
  REMOVE_EDUCATION_HISTORY
} from './type';

export const updatePersonalDetail = (info) => async (dispatch) => {
  try {
    const response = await reqUpdateTalent(info);

    // localStorage.setItem('user', JSON.stringify(response.user));

    dispatch({ type: UPDATE_PERSONAL_DETAIL_SUCCESS, payload: response.user });
    dispatch({ type: SET_CONFIRM_MESSAGE, payload: response.message });
  } catch (error) {
    dispatch({ type: SET_ERROR_MESSAGE, payload: error });
    dispatch({ type: SET_TALENT_ERROR });
  }
};

export const addJobHistory = (id, newJob) => async (dispatch) => {
  try {
    const response = await reqAddJobHistory({ _id: id, newJob });
    // localStorage.setItem('user', JSON.stringify(response.user));

    dispatch({ type: ADD_JOB_HISTORY_SUCCESS, payload: newJob });
    dispatch({ type: SET_CONFIRM_MESSAGE, payload: response.message });
  } catch (error) {
    console.log(error);
    dispatch({ type: SET_TALENT_ERROR });
    dispatch({ type: SET_ERROR_MESSAGE, payload: error });
  }
};

export const updateJobHistory = (updatedJob) => async (dispatch) => {
  try {
    const response = await reqUpdateTalent(updatedJob);
    // localStorage.setItem('user', JSON.stringify(response.user));
    const { info } = updatedJob;
    dispatch({ type: UPDATE_JOB_HISTORY_SUCCESS, payload: info.jobHistory });
    dispatch({ type: SET_CONFIRM_MESSAGE, payload: response.message });
  } catch (error) {
    console.log(error);
    dispatch({ type: SET_TALENT_ERROR });
    dispatch({ type: SET_ERROR_MESSAGE, payload: error });
  }
};

export const addEducationHistory = (id, newEducation) => async (dispatch) => {
  try {
    const response = await reqAddEducationHistory({ _id: id, newEducation });
    // localStorage.setItem('user', JSON.stringify(response.user));

    dispatch({ type: ADD_EDUCATION_HISTORY_SUCCESS, payload: newEducation });
    dispatch({ type: SET_CONFIRM_MESSAGE, payload: response.message });
  } catch (error) {
    console.log(error);
    dispatch({ type: SET_TALENT_ERROR });
    dispatch({ type: SET_ERROR_MESSAGE, payload: error });
  }
};

export const updateEducationHistory = (updatedEducation) => async (dispatch) => {
  try {
    const response = await reqUpdateTalent(updatedEducation);
    // localStorage.setItem('user', JSON.stringify(response.user));
    const { info } = updatedEducation;
    dispatch({ type: UPDATE_EDUCATION_HISTORY_SUCCESS, payload: info.education });
    dispatch({ type: SET_CONFIRM_MESSAGE, payload: response.message });
  } catch (error) {
    console.log(error);
    dispatch({ type: SET_TALENT_ERROR });
    dispatch({ type: SET_ERROR_MESSAGE, payload: error });
  }
};

export const updateJobExpectation = (updatedJobExpectation) => async (dispatch) => {
  try {
    const response = await reqUpdateTalent(updatedJobExpectation);
    const { info } = updatedJobExpectation;
    dispatch({ type: UPDATE_JOB_EXPECTATION_SUCCESS, payload: info });
    dispatch({ type: SET_CONFIRM_MESSAGE, payload: response.message });
  } catch (error) {
    console.log(error);
    dispatch({ type: SET_TALENT_ERROR });
    dispatch({ type: SET_ERROR_MESSAGE, payload: error });
  }
};

export const addCertification = (addedCertification) => async (dispatch) => {
  try {
    const response = await reqAddCertification(addedCertification);
    dispatch({ type: ADD_CERTIFICATION, payload: response.certification });
    dispatch({ type: SET_CONFIRM_MESSAGE, payload: response.message });
  } catch (error) {
    console.log(error);
    dispatch({ type: SET_TALENT_ERROR });
    dispatch({ type: SET_ERROR_MESSAGE, payload: error });
  }
};

export const removeJobHistory = (jobInfo) => async (dispatch) => {
  try {
    const response = await reqUpdateTalent(jobInfo);
    // console.log(jobInfo);
    dispatch({ type: REMOVE_JOB_HISTORY, payload: jobInfo.info.jobHistory });
    dispatch({ type: SET_CONFIRM_MESSAGE, payload: response.message });
  } catch (error) {
    console.log(error);
    dispatch({ type: SET_TALENT_ERROR });
    dispatch({ type: SET_ERROR_MESSAGE, payload: error });
  }
};

export const removeEducationHistory = (educationInfo) => async (dispatch) => {
  try {
    const response = await reqUpdateTalent(educationInfo);
    // console.log(jobInfo);
    dispatch({ type: REMOVE_EDUCATION_HISTORY, payload: educationInfo.info.education });
    dispatch({ type: SET_CONFIRM_MESSAGE, payload: response.message });
  } catch (error) {
    console.log(error);
    dispatch({ type: SET_TALENT_ERROR });
    dispatch({ type: SET_ERROR_MESSAGE, payload: error });
  }
};
