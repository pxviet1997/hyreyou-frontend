import {
  GET_TALENT, SET_BUSINESS, UPDATE_BUSINESS_DETAIL_SUCCESS, REJECT_TALENT, SHORTLIST_TALENT, CREATE_ROLE, GET_TALENT_LIST, REMOVE_TALENT_FROM_LIST, RESET_TALENT_LIST, MATCH_TO_TALENT
} from '../actions/type';
import { initialState } from './state/intinalState';

export const businessReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TALENT:
      return { ...state, talent: action.payload };
    case SET_BUSINESS: {
      const { user } = action.payload;
      return {
        ...state, user, useType: user.userType, isLoggedIn: true, error: false
      };
    }
    case UPDATE_BUSINESS_DETAIL_SUCCESS: {
      const {
        businessName, businessABN, email, contactNumber, address
      } = action.payload;
      let { user } = state;
      user = {
        ...user, businessName, businessABN, email, contactNumber, address
      };
      return { ...state, user, error: false };
    }
    case SHORTLIST_TALENT:
      return { ...state, user: action.payload };
    case REJECT_TALENT:
      return { ...state, user: action.payload };
    case CREATE_ROLE: {
      return { ...state, user: action.payload, error: false };
    }
    case GET_TALENT_LIST:
      return { ...state, talentList: action.payload };
    case REMOVE_TALENT_FROM_LIST: {
      let { talentList } = state;
      talentList = talentList.filter((talent) => talent._id !== action.payload);
      return { ...state, talentList, error: false };
    }
    case RESET_TALENT_LIST:
      return { ...state, talentList: [], error: false };
    case MATCH_TO_TALENT:
      return { ...state, user: action.payload, error: false };
    default:
      return state;
  }
};
