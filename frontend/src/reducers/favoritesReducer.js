// when you select a restaurant, selector will also select favorites
// restaurant objects will come back with favorites on it
// de-normalize favorites to be its own table
// when you select a current user, it will also put in favorite restaurants

import {
  RECEIVE_FAVORITE,
  UNRECEIVE_FAVORITE,
} from "../actions/favoriteActions";

const favoritesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FAVORITE: {
      const nextState = { ...state };
      const { favorite } = action;

      nextState[favorite.id] = favorite;

      return nextState;
    }
    case UNRECEIVE_FAVORITE: {
      const nextState = { ...state };
      const { favorite } = action;

      delete nextState[favorite.id];
      return nextState;
    }
    default: {
      return state;
    }
  }
};

export default favoritesReducer;
