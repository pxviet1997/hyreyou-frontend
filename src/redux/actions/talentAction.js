import { reqAddJobHistory, reqUpdate } from 'src/api';
import {
  ADD_JOB_HISTORY_SUCCESS,
  SET_CONFIRM_MESSAGE,
  SET_TALENT_ERROR,
  SET_ERROR_MESSAGE,
  UPDATE_JOB_HISTORY_SUCCESS,
  UPDATE_PERSONAL_DETAIL_SUCCESS
} from './type';

export const updatePersonalDetail = (info) => async (dispatch) => {
  try {
    const response = await reqUpdate(info);

    localStorage.setItem('user', JSON.stringify(response.user));

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
    localStorage.setItem('user', JSON.stringify(response.user));

    dispatch({ type: ADD_JOB_HISTORY_SUCCESS, payload: newJob });
    dispatch({ type: SET_CONFIRM_MESSAGE, payload: response.message });
  } catch (error) {
    dispatch({ type: SET_TALENT_ERROR });
    dispatch({ type: SET_ERROR_MESSAGE, payload: error });
  }
};

export const updateJobHistory = (updatedJob) => async (dispatch) => {
  try {
    const response = await reqUpdate(updatedJob);
    localStorage.setItem('user', JSON.stringify(response.user));
    const { info } = updatedJob;
    dispatch({ type: UPDATE_JOB_HISTORY_SUCCESS, payload: info.jobHistory });
    dispatch({ type: SET_CONFIRM_MESSAGE, payload: response.message });
  } catch (error) {
    console.log(error);
    dispatch({ type: SET_TALENT_ERROR });
    dispatch({ type: SET_ERROR_MESSAGE, payload: error });
  }
};
