export const setErrorMessage = (message) => ({
  type: 'SET_ERROR_MESSAGE',
  payload: message,
});

export const setConfirmMessage = (message) => ({
  type: 'SET_CONFIRM_MESSAGE',
  payload: message,
});

export const clearMessage = () => ({
  type: 'CLEAR_MESSAGE',
});
