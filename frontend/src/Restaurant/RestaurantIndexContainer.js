import React from "react";
import { useSelector } from "react-redux";

import RestaurantIndex from "./RestaurantIndex";
import { selectRestaurants } from "../reducers/selectors";

const RestaurantIndexContainer = (props) => {
  const restaurants = useSelector(selectRestaurants);

  return <RestaurantIndex {...props} restaurants={restaurants} />;
};

export default RestaurantIndexContainer;
