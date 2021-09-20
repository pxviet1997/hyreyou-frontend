const initialState = {
  message: '',
  messageColor: 'red'
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ERROR_MESSAGE':
      return { ...state, message: action.payload, messageColor: 'red' };
    case 'SET_CONFIRM_MESSAGE':
      return { ...state, message: action.payload, messageColor: 'green' };
    case 'CLEAR_MESSAGE':
      return { ...state, message: '' };
    default:
      return state;
  }
};
