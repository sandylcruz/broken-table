import { combineReducers } from "redux";

import entitiesReducer from "./entitiesReducer";
import errorsReducer from "./errorsReducer";
import uiReducer from "./uiReducer";
import sessionReducer from "./sessionReducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  session: sessionReducer,
  ui: uiReducer,
});

export default rootReducer;
