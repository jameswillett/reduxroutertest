

export default function loggedIn(state = false, action) {
  switch (action.type) {
    case 'TOGGLE_LOGGED_IN':
      return !state;
    default:
      return state;
  }
}
