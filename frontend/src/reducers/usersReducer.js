import { RECEIVE_CURRENT_USER } from "../actions/sessionActions";
import {
  RECEIVE_FAVORITE,
  UNRECEIVE_FAVORITE,
} from "../actions/favoriteActions";
import { RECEIVE_RESTAURANT } from "../actions/restaurantActions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER: {
      return {
        ...state,
        [action.currentUser.id]: {
          ...action.currentUser,
          isCurrentUser: true,
          favoriteIds: [],
        },
      };
    }
    case RECEIVE_FAVORITE: {
      const nextState = { ...state };
      const { favorite } = action;
      const existingUser = state[favorite.userId];
      const previousFavorites = existingUser.favoriteIds;

      nextState[favorite.userId] = {
        ...existingUser,
        favoriteIds: [...previousFavorites, favorite.restaurantId],
      };

      return nextState;
    }

    case UNRECEIVE_FAVORITE: {
      const { restaurantId, userId } = action;

      return {
        ...state,
        [userId]: {
          ...state[userId],
          favoriteIds: state[userId].favoriteIds.filter(
            (id) => id !== restaurantId
          ),
        },
      };
    }

    case RECEIVE_RESTAURANT: {
      const nextState = { ...state };
      const { restaurant } = action;
      const { reviews } = restaurant;

      reviews.forEach((review) => {
        const existingUser = state[review.author.id];

        if (existingUser) {
          nextState[review.author.id] = {
            ...existingUser,
            username: review.author.username,
            id: review.author.id,
            created_at: review.createdAt,
            photoUrl: review.author.photoUrl,
            city: review.author.city,
            state: review.author.state,
          };
        } else {
          nextState[review.author.id] = review.author;
        }
      });

      return nextState;
    }
    default:
      return state;
  }
};

export default usersReducer;
