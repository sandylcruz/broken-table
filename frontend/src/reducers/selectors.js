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

export const selectCurrentUserFavoriteRestaurants = createSelector(
  (state) => {
    const currentUser = selectCurrentUser(state);

    if (!currentUser) {
      return null;
    }

    return currentUser.favoriteIds;
  },
  (state) => state.entities.restaurants,
  (favoriteIds, restaurants) => {
    if (!favoriteIds) {
      return [];
    }

    return favoriteIds.map((id) => restaurants[id]);
  }
);

export const selectCurrentUserReservations = createSelector(
  (state) => {
    const currentUser = selectCurrentUser(state);

    if (!currentUser) {
      return null;
    }

    return currentUser.reservations;
  },
  (state) => state.entities.restaurants,

  (reservations, restaurants) => {
    if (!reservations) {
      return [];
    }

    return Object.keys(reservations).map((key) => {
      const rawReservation = reservations[key];
      const restaurant = restaurants[rawReservation.restaurantId];
      return {
        ...rawReservation,
        restaurant,
      };
    });
  }
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
  (state) =>
    state.entities.users[state.session.id]
      ? state.entities.users[state.session.id].favoriteIds
      : undefined,

  (restaurants, bounds, favoriteRestaurantIds) => {
    const favoriteRestaurantIdsSet = new Set(favoriteRestaurantIds);

    return Object.keys(restaurants).reduce((accumulator, key) => {
      const restaurant = restaurants[key];
      const isFavorited =
        favoriteRestaurantIds && favoriteRestaurantIdsSet.has(restaurant.id);

      const isLatitudeValid =
        restaurant.latitude <= bounds.northEast.latitude &&
        restaurant.latitude >= bounds.southWest.latitude;
      const isLongitudeValid =
        restaurant.longitude <= bounds.northEast.longitude &&
        restaurant.longitude >= bounds.southWest.longitude;

      if (isLatitudeValid && isLongitudeValid) {
        accumulator.push({ ...restaurant, isFavorited });
      }

      return accumulator;
    }, []);
  }
);

export const selectRestaurantById = createSelector(
  (state, id) => state.entities.restaurants[id],
  (restaurant) => restaurant
);

// Select review for given restaurant AND each review will include its user
export const selectReviewsByRestaurantId = createSelector(
  (state, id) => {
    const restaurant = state.entities.restaurants[id];

    if (!restaurant) {
      return undefined;
    }
    return restaurant.reviewIds;
  },

  (state) => state.entities.reviews,
  (state) => state.entities.users,

  (reviewIds, allReviews, allUsers) => {
    if (!reviewIds) {
      return [];
    }
    const reviews = reviewIds.map((reviewId) => {
      const { authorId, ...review } = allReviews[reviewId];
      const author = allUsers[authorId];

      return {
        ...review,
        author,
      };
    });

    return reviews;
  }
);
