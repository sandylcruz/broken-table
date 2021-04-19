import { createSelector } from "reselect";

export const selectCurrentUser = createSelector(
  (state) => {
    const currentUserId = state.session.id;

    if (!currentUserId) {
      return null;
    }

    return state.entities.users[currentUserId];
  },
  (currentUser) => currentUser
);

export const selectErrors = createSelector(
  (state) => state.errors,
  (errors) => errors
);

export const selectFilters = createSelector(
  (state) => state.ui.filters,
  (filters) => filters
);

export const selectAllRestaurants = createSelector(
  (state) => state.entities.restaurants,
  (restaurants) => Object.keys(restaurants).map((key) => restaurants[key])
);

export const selectRestaurantsInBounds = createSelector(
  (state) => state.entities.restaurants,
  (state) => state.ui.filters.bounds,
  (restaurants, bounds) =>
    Object.keys(restaurants).reduce((accumulator, key) => {
      const restaurant = restaurants[key];
      const isLatitudeValid =
        restaurant.latitude <= bounds.northEast.latitude &&
        restaurant.latitude >= bounds.southWest.latitude;
      const isLongitudeValid =
        restaurant.longitude <= bounds.northEast.longitude &&
        restaurant.longitude >= bounds.southWest.longitude;

      if (isLatitudeValid && isLongitudeValid) {
        accumulator.push(restaurant);
      }

      return accumulator;
    }, [])
);

// filter, map, reduce, selectors, dynamic key addition to objects, how to iterate over objects (Object.keys)
// Array.prototype.myFilter = function() {}
// Array.prototype.myMap = function() {}
// Array.prototype.myReduce = function () { }
