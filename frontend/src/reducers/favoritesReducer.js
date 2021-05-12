// when you select a restaurant, selector will also select favorites
// restaurant objects will come back with favorites on it
// de-normalize favorites to be its own table
// when you select a current user, it will also put in favorite restaurants

import { RECEIVE_FAVORITE } from "../actions/favoriteActions";

// const makeNormalizedFavorite = (favorite) => ({
//   id: favorite.id,
//   userId: favorite.author.id,
//   restaurantId: favorite.restaurant.id,
// });

const favoritesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FAVORITE: {
      const nextState = { ...state };
      console.log("In reducer. nextState = ", nextState);
      const { favorite } = action;
      console.log("In the reducer. Favorite = ", favorite);

      nextState[favorite.id] = favorite;

      // nextState[favorite.id] = makeNormalizedFavorite(favorite);

      console.log("Inserted normalized favorite. nextState = ", nextState);
      return nextState;
    }
    default: {
      return state;
    }
  }
};

export default favoritesReducer;
