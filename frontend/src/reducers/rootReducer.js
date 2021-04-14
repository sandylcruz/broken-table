import { combineReducers } from "redux";

import entitiesReducer from "./entitiesReducer";
import errorsReducer from "./errorsReducer";
import filtersReducer from "./filtersReducer";
import sessionReducer from "./sessionReducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  filters: filtersReducer,
  session: sessionReducer,
});

export default rootReducer;
