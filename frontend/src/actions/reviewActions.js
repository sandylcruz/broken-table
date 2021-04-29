import * as RestaurantAPIUtil from "../util/restaurantApiUtil";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

export const receiveReview = (averageRating, review) => ({
  type: RECEIVE_REVIEW,
  averageRating,
  review,
});

export const createReview = (review) => (dispatch) =>
  RestaurantAPIUtil.createReview(review).then((reviewFromServer) =>
    dispatch(receiveReview(reviewFromServer))
  );

export default createReview;
