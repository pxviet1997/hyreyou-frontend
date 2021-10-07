import { GET_TALENT, SET_BUSINESS, UPDATE_BUSINESS_DETAIL_SUCCESS } from '../actions/type';
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
    default:
      return state;
  }
};
