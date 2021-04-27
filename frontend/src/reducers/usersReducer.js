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
        const existingUser = state[review.author.id];

        if (existingUser) {
          nextState[review.author.id] = {
            ...existingUser,
            username: review.author.username,
            id: review.author.id,
          };
        } else {
          nextState[review.author.id] = review.user;
        }
      });

      return nextState;
    }
    default:
      return state;
  }
};

export default usersReducer;
