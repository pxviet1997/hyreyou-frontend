import { reqGetTalent, reqRejectCandidate, reqShortlistingCandidate } from 'src/api';
import { GET_TALENT, REJECT_TALENT, SHORTLIST_TALENT } from './type';

export const getTalent = (talentId) => async (dispatch) => {
  try {
    const response = await reqGetTalent(talentId);
    dispatch({ type: GET_TALENT, payload: response });
  } catch (error) {
    console.log(error);
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

// export const u =(w) => {
//   return {type: 'KO', payload: w};
// }
