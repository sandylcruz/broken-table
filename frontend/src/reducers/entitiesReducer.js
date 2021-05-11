import { combineReducers } from "redux";

import favoritesReducer from "./favoritesReducer";
import restaurantsReducer from "./restaurantsReducer";
import reviewsReducer from "./reviewsReducer";
import usersReducer from "./usersReducer";

const entitiesReducer = combineReducers({
  favorites: favoritesReducer,
  restaurants: restaurantsReducer,
  reviews: reviewsReducer,
  users: usersReducer,
});

export default entitiesReducer;
