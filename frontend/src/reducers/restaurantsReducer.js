import {
  RECEIVE_RESTAURANT,
  RECEIVE_RESTAURANTS,
} from "../actions/restaurantActions";

const restaurantsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_RESTAURANT: {
      const restaurantId = action.restaurant.id;
      return { ...state, [restaurantId]: action.restaurant };
    }
    case RECEIVE_RESTAURANTS:
      return { ...state, ...action.restaurants };
    default:
      return state;
  }
};

export default restaurantsReducer;
