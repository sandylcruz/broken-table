import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import Search from "./Search";
import { updateBounds as updateBoundsAction } from "../actions/filterActions";

const SearchContainer = (props) => {
  const dispatch = useDispatch();

  const updateBounds = useCallback(
    (bounds) => {
      dispatch(updateBoundsAction(bounds));
    },
    [dispatch]
  );

  return <Search {...props} updateBounds={updateBounds} />;
};
export default SearchContainer;
