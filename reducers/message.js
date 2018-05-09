import { SET_MESSAGE } from '../actions/actionTypes';

const initialState = {
  message: '',
  title: '',
};

export default function message(state = initialState, action) {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        message: action.message
      };
    default:
      return state;
  }
}
