import { RECEIVE_CURRENT_USER } from "../actions/sessionActions";
import { RECEIVE_RESTAURANT } from "../actions/restaurantActions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        [action.currentUser.id]: { ...action.currentUser, isCurrentUser: true },
      };
    case RECEIVE_RESTAURANT: {
      const nextState = { ...state };
      const { restaurant } = action;
      const { reviews } = restaurant;

      reviews.forEach((review) => {
        const existingUser = state[review.user.id];

        if (existingUser) {
          nextState[review.user.id] = {
            ...existingUser,
            username: review.user.username,
            id: review.user.id,
          };
        } else {
          nextState[review.user.id] = review.user;
        }
      });

      return nextState;
    }
    default:
      return state;
  }
};

export default usersReducer;
