import { combineReducers } from "redux";

import entitiesReducer from "./entitiesReducer";
import errorsReducer from "./errorsReducer";
import sessionReducer from "./sessionReducer";

const rootReducer = combineReducers({
  session: sessionReducer,
  entities: entitiesReducer,
  errors: errorsReducer,
});

export default rootReducer;
