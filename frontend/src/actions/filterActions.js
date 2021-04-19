import { fetchRestaurants } from "./restaurantActions";

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";

export const updateBounds = (bounds) => ({
  type: UPDATE_BOUNDS,
  bounds,
});

export const updateBoundsAndFetchRestaurants = (bounds) => (
  dispatch,
  getState
) => {
  dispatch(updateBounds(bounds));
  const {
    ui: { filters },
  } = getState();

  return fetchRestaurants(filters)(dispatch);
};
