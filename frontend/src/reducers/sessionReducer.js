import {
  LOGOUT_CURRENT_USER,
  RECEIVE_CURRENT_USER,
} from "../actions/sessionActions";

const nullUser = Object.freeze({
  id: null,
});

const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id };
    case LOGOUT_CURRENT_USER:
      return nullUser;
    default:
      return state;
  }
};

export default sessionReducer;
