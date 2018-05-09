import { SET_MESSAGE } from './actionTypes';

export const setMessage = (message) => {
  return (dispatch) => {
    dispatch({
      type: SET_MESSAGE,
      message,
    });
  }
}

export const toggleLoggedIn = () => {
  return dispatch =>
    dispatch({
      type: 'TOGGLE_LOGGED_IN',
    })
}
