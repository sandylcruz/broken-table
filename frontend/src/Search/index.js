import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import debounce from "../util/debounce";
import { fetchRestaurants as fetchRestaurantsAction } from "../actions/restaurantActions";
import Search from "./Search";
import {
  selectRestaurantsInBounds,
  selectFilters,
} from "../reducers/selectors";
import { updateBounds as updateBoundsAction } from "../actions/filterActions";

const SearchContainer = React.memo((props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const restaurants = useSelector(selectRestaurantsInBounds);

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

  return (
    <Search
      {...props}
      history={history}
      restaurants={restaurants}
      updateBounds={updateBounds}
    />
  );
});
export default SearchContainer;
