import * as RestaurantAPIUtil from "../util/restaurantApiUtil";

export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS";

const receiveRestaurants = (restaurants) => ({
  type: RECEIVE_RESTAURANTS,
  restaurants,
});

export const fetchRestaurants = (filters) => (dispatch) =>
  RestaurantAPIUtil.fetchRestaurants(filters).then((restaurants) =>
    dispatch(receiveRestaurants(restaurants))
  );
