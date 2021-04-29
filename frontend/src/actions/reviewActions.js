import * as RestaurantAPIUtil from "../util/restaurantApiUtil";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review,
});

export const createReview = (review) => (dispatch) =>
  RestaurantAPIUtil.createReview(review).then((reviewFromServer) =>
    dispatch(receiveReview(reviewFromServer))
  );

export default createReview;
