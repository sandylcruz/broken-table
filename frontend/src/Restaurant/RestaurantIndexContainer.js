import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchRestaurants as fetchRestaurantsAction } from "../actions/restaurantActions";
import RestaurantIndex from "./RestaurantIndex";
import { restaurantsSelector } from "../reducers/selectors";

const RestaurantIndexContainer = (props) => {
  const restaurants = useSelector(restaurantsSelector);
  const dispatch = useDispatch();

  const fetchRestaurants = useCallback(() => {
    dispatch(fetchRestaurantsAction());
  }, [dispatch]);

  return (
    <RestaurantIndex
      {...props}
      fetchRestaurants={fetchRestaurants}
      restaurants={restaurants}
    />
  );
};

export default RestaurantIndexContainer;
