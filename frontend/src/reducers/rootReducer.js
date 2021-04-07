import { combineReducers } from "redux";
import sessionReducer from "./sessionReducer";
import entitiesReducer from "./entitiesReducer";
import errorsReducer from "./errorsReducer";

const rootReducer = combineReducers({
  session: sessionReducer,
  entities: entitiesReducer,
  errors: errorsReducer,
});

export default rootReducer;
