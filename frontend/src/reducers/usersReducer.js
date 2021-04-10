import { RECEIVE_CURRENT_USER } from "../actions/sessionActions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        [action.currentUser.id]: { ...action.currentUser, isCurrentUser: true },
      };
    default:
      return state;
  }
};

export default usersReducer;