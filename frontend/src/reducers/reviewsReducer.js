import { RECEIVE_RESTAURANT } from "../actions/restaurantActions";
import { RECEIVE_REVIEW } from "../actions/reviewActions";

const makeNormalizedReview = (review) => ({
  id: review.id,
  body: review.body,
  rating: review.rating,
  authorId: review.author.id,
});

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESTAURANT: {
      const nextState = { ...state }; // contains previous reviews
      const { reviews } = action.restaurant; // array of review objects

      reviews.forEach((review) => {
        nextState[review.id] = makeNormalizedReview(review);
      });

      return nextState;
    }
    case RECEIVE_REVIEW: {
      const { review } = action;
      const newReview = makeNormalizedReview(review);
      return { ...state, [review.id]: newReview };
    }
    default:
      return state;
  }
};

export default reviewsReducer;
