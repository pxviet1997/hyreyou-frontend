import {
  ADD_CERTIFICATION,
  ADD_EDUCATION_HISTORY_SUCCESS,
  ADD_JOB_HISTORY_SUCCESS,
  SET_TALENT,
  SET_TALENT_ERROR,
  UPDATE_EDUCATION_HISTORY_SUCCESS,
  UPDATE_JOB_EXPECTATION_SUCCESS,
  UPDATE_JOB_HISTORY_SUCCESS,
  UPDATE_PERSONAL_DETAIL_SUCCESS
} from '../actions/type';
import { initialState } from './state/intinalState';

export const talentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TALENT: {
      const { user } = action.payload;
      const { userType } = user;
      console.log(userType);
      return {
        ...state, user, userType, isLoggedIn: true, error: false
      };
    }
    case UPDATE_PERSONAL_DETAIL_SUCCESS:
      return {
        ...state, user: action.payload, error: false,
      };
    case ADD_JOB_HISTORY_SUCCESS: {
      const { user } = state;
      user.jobHistory.unshift(action.payload);
      return { ...state, user, error: false };
    }
    case UPDATE_JOB_HISTORY_SUCCESS: {
      const { user } = state;
      // console.log(action.payload);
      user.jobHistory = [...action.payload];
      // console.log(user);
      return { ...state, user, error: false };
    }
    case ADD_EDUCATION_HISTORY_SUCCESS: {
      const { user } = state;
      user.education.unshift(action.payload);
      return { ...state, user, error: false };
    }
    case UPDATE_EDUCATION_HISTORY_SUCCESS: {
      const { user } = state;
      // console.log(action.payload);
      user.education = [...action.payload];
      // console.log(user);
      return { ...state, user, error: false };
    }
    case UPDATE_JOB_EXPECTATION_SUCCESS: {
      const {
        expectedWorkType, expectedAvailability, expectedSalaryType, expectedSkillSet, expectedSalary
      } = action.payload;
      let { user } = state;
      user = {
        ...user, expectedWorkType, expectedAvailability, expectedSalaryType, expectedSkillSet, expectedSalary
      };
      console.log(user);
      return {
        ...state, expectedWorkType, expectedAvailability, expectedSalaryType, expectedSkillSet, expectedSalary
      };
    }
    case ADD_CERTIFICATION: {
      const certification = action.payload;
      console.log(certification);
      const { user } = state;
      user.certifications.push(certification);
      return { ...state, user, error: false };
    }
    case SET_TALENT_ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
};
