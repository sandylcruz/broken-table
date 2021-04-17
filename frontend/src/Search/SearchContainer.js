import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import debounce from "../util/debounce";
import { fetchRestaurants as fetchRestaurantsAction } from "../actions/restaurantActions";
import Search from "./Search";
import { selectFilters } from "../reducers/selectors";
import { updateBounds as updateBoundsAction } from "../actions/filterActions";

const SearchContainer = React.memo((props) => {
  const dispatch = useDispatch();

  const updateBounds = useMemo(
    () =>
      debounce((bounds) => {
        dispatch(updateBoundsAction(bounds));
      }, 500),
    [dispatch]
  );

  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchRestaurantsAction(filters));
  }, [filters]);

  return <Search {...props} updateBounds={updateBounds} />;
});
export default SearchContainer;
