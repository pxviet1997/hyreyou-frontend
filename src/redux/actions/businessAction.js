import { reqGetTalent } from 'src/api';
import { GET_TALENT } from './type';

export const getTalent = (talentId) => async (dispatch) => {
  try {
    const response = await reqGetTalent(talentId);
    dispatch({ type: GET_TALENT, payload: response });
  } catch (error) {
    console.log(error);
  }
};

// export const u =(w) => {
//   return {type: 'KO', payload: w};
// }
