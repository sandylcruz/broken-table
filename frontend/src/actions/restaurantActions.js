import * as RestaurantAPIUtil from "../util/restaurantApiUtil";

export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS";
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";

const receiveRestaurants = (restaurants) => ({
  type: RECEIVE_RESTAURANTS,
  restaurants,
});

const receiveRestaurant = (restaurant) => ({
  type: RECEIVE_RESTAURANTS,
  restaurant,
});

export const fetchRestaurants = (filters) => (dispatch) =>
  RestaurantAPIUtil.fetchRestaurants(filters).then((restaurants) =>
    dispatch(receiveRestaurants(restaurants))
  );

export const createRestaurant = (restaurant) => (dispatch) =>
  // eslint-disable-next-line no-shadow
  RestaurantAPIUtil.createRestaurant(restaurant).then((restaurant) =>
    dispatch(receiveRestaurant(restaurant))
  );
