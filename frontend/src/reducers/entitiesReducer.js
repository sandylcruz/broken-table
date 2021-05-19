import { combineReducers } from "redux";

import restaurantsReducer from "./restaurantsReducer";
import reviewsReducer from "./reviewsReducer";
import usersReducer from "./usersReducer";

const entitiesReducer = combineReducers({
  restaurants: restaurantsReducer,
  reviews: reviewsReducer,
  users: usersReducer,
});

export default entitiesReducer;
