import {
  RECEIVE_FAVORITE,
  UNRECEIVE_FAVORITE,
} from "../actions/favoriteActions";

import { RECEIVE_RESERVATION } from "../actions/reservationActions";

import {
  RECEIVE_RESTAURANT,
  RECEIVE_RESTAURANTS,
} from "../actions/restaurantActions";

import { RECEIVE_REVIEW } from "../actions/reviewActions";

const restaurantsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_RESTAURANT: {
      const restaurantId = action.restaurant.id;
      const { restaurant } = action;
      return {
        ...state,
        [restaurantId]: {
          averageRating: restaurant.averageRating,
          id: restaurant.id,
          name: restaurant.name,
          location: restaurant.location,
          latitude: restaurant.latitude,
          longitude: restaurant.longitude,
          description: restaurant.description,
          photoUrl: restaurant.photoUrl,
          reviewIds: restaurant.reviews.map((review) => review.id),
          numberOfFavorites: restaurant.numberOfFavorites,
          isFavorited: restaurant.isFavorited,
          reservations: restaurant.reservations,
        },
      };
    }
    case RECEIVE_RESTAURANTS:
      return { ...state, ...action.restaurants };

    case RECEIVE_REVIEW: {
      const { restaurantId } = action.review;
      const restaurant = state[restaurantId];
      const newState = {
        ...state,
        [restaurantId]: {
          ...restaurant,
          reviewIds: [...restaurant.reviewIds, action.review.id],
        },
      };

      return newState;
    }
    case RECEIVE_FAVORITE: {
      const { restaurantId } = action.favorite;
      const restaurant = state[restaurantId];
      const newState = {
        ...state,
        [restaurantId]: {
          ...restaurant,
          numberOfFavorites: restaurant.numberOfFavorites + 1,
          isFavorited: true,
        },
      };
      return newState;
    }
    case UNRECEIVE_FAVORITE: {
      const { restaurantId } = action;
      return {
        ...state,
        [restaurantId]: {
          ...state[restaurantId],
          isFavorited: false,
          numberOfFavorites: state[restaurantId].numberOfFavorites - 1,
        },
      };
    }

    case RECEIVE_RESERVATION: {
      const { restaurantId } = action.favorite;
      const restaurant = state[restaurantId];
      const newState = {
        ...state,
        [restaurantId]: {
          ...restaurant,
          reservations: restaurant.reservations,
        },
      };
      return newState;
    }

    default:
      return state;
  }
};
export default restaurantsReducer;
