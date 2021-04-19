import { combineReducers } from "redux";

import filtersReducer from "./filtersReducer";

const uiReducer = combineReducers({
  filters: filtersReducer,
});

export default uiReducer;
