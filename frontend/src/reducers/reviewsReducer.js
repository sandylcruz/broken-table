import { RECEIVE_RESTAURANT } from "../actions/restaurantActions";
import { RECEIVE_REVIEW } from "../actions/reviewActions";

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESTAURANT: {
      const nextState = { ...state }; // contains previous reviews
      const { reviews } = action.restaurant; // array of review objects

      reviews.forEach((review) => {
        nextState[review.id] = {
          id: review.id,
          body: review.body,
          rating: review.rating,
          authorId: review.author.id,
        };
      });

      return nextState;
    }
    case RECEIVE_REVIEW: {
      return state;
    }
    default:
      return state;
  }
};

export default reviewsReducer;
