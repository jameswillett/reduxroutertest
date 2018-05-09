import { NOT_FOUND } from 'redux-first-router';
import { HOME, PICTURE } from '../actions/actionTypes';

const initialState = {
  component: 'home',
};

export default function component(state = initialState, action) {
  switch (action.type) {
    case HOME:
      return {
        component: 'home',
      };
    case PICTURE:
      return {
        component: 'picture',
        payload: action.payload.id,
      };
    case NOT_FOUND:
      return {
        component: 'notfound',
      };
    default:
      return state;
  }
}
