import {
  RECEIVE_RESTAURANT,
  RECEIVE_RESTAURANTS,
} from "../actions/restaurantActions";

const restaurantsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_RESTAURANT: {
      const restaurantId = action.restaurant.id;
      const { restaurant } = action;

      return {
        ...state,
        [restaurantId]: {
          id: restaurant.id,
          name: restaurant.name,
          location: restaurant.location,
          latitude: restaurant.latitude,
          longitude: restaurant.longitude,
          description: restaurant.description,
          photoUrl: restaurant.photoUrl,
          reviewIds: restaurant.reviews.map((review) => review.id),
        },
      };
    }
    case RECEIVE_RESTAURANTS:
      return { ...state, ...action.restaurants };
    default:
      return state;
  }
};

export default restaurantsReducer;
