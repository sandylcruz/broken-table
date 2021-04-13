import { combineReducers } from "redux";

import restaurantsReducer from "./restaurantsReducer";
import usersReducer from "./usersReducer";

const entitiesReducer = combineReducers({
  restaurants: restaurantsReducer,
  users: usersReducer,
});

export default entitiesReducer;
