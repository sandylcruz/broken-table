import { combineReducers } from "redux";

import reservationsReducer from "./reservationsReducer";
import restaurantsReducer from "./restaurantsReducer";
import reviewsReducer from "./reviewsReducer";
import usersReducer from "./usersReducer";

const entitiesReducer = combineReducers({
  reservations: reservationsReducer,
  restaurants: restaurantsReducer,
  reviews: reviewsReducer,
  users: usersReducer,
});

export default entitiesReducer;
