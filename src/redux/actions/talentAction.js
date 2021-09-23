import { reqUpdate } from 'src/api';
import {
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
