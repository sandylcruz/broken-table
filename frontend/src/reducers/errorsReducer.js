import { combineReducers } from "redux";
import sessionErrorsReducer from "./sessionErrorsReducer";

const errorsReducer = combineReducers({
  errors: sessionErrorsReducer,
});

export default errorsReducer;
