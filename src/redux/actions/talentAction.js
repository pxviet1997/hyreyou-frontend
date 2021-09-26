import { ConstructionOutlined } from '@material-ui/icons';
import { reqAddJobHistory, reqUpdate } from 'src/api';
import {
  ADD_JOB_HISTORY_SUCCESS,
  SET_CONFIRM_MESSAGE,
  SET_ERROR_MESSAGE,
  UPDATE_PERSONAL_DETAIL_FAIL,
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
    dispatch({ type: UPDATE_PERSONAL_DETAIL_FAIL });
  }
};

export const addJobHistory = (id, newJob) => async (dispatch) => {
  try {
    const response = await reqAddJobHistory({ _id: id, newJob });
    console.log(response);
    // localStorage.setItem('user', JSON.stringify(response.user));

    // dispatch({ type: SET_CONFIRM_MESSAGE, payload: response.message });
    dispatch({ type: ADD_JOB_HISTORY_SUCCESS, payload: newJob });
  } catch (error) {
    dispatch({ type: ADD_JOB_HISTORY_SUCCESS });
    dispatch({ type: SET_ERROR_MESSAGE, payload: error });
  }
};
