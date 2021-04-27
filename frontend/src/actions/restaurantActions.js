import * as RestaurantAPIUtil from "../util/restaurantApiUtil";

export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS";
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

const receiveRestaurant = (restaurant) => ({
  type: RECEIVE_RESTAURANT,
  restaurant,
});

const receiveRestaurants = (restaurants) => ({
  type: RECEIVE_RESTAURANTS,
  restaurants,
});

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEWS,
  review,
});

export const createReview = (review) => (dispatch) =>
  RestaurantAPIUtil.createReview(review).then(() =>
    dispatch(receiveReview(review))
  );

export const fetchRestaurant = (id) => (dispatch) =>
  RestaurantAPIUtil.fetchRestaurant(id).then((restaurant) =>
    dispatch(receiveRestaurant(restaurant))
  );

export const fetchRestaurants = (filters) => (dispatch) =>
  RestaurantAPIUtil.fetchRestaurants(filters).then((restaurants) =>
    dispatch(receiveRestaurants(restaurants))
  );

export const createRestaurant = (partialRestaurant) => (dispatch) =>
  RestaurantAPIUtil.getCoordinatesFromAddress(partialRestaurant.location)
    .then(({ latitude, longitude }) => {
      const restaurant = { ...partialRestaurant, latitude, longitude };
      return restaurant;
    })
    .then((restaurant) => RestaurantAPIUtil.createRestaurant(restaurant))
    .then((restaurant) => {
      dispatch(receiveRestaurant(restaurant));
      return restaurant;
    });

export default createReview;
