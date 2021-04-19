import React from "react";
import { useSelector } from "react-redux";

import RestaurantIndex from "./RestaurantIndex";
import { restaurantsSelector } from "../reducers/selectors";

const RestaurantIndexContainer = (props) => {
  const restaurants = useSelector(restaurantsSelector);

  return <RestaurantIndex {...props} restaurants={restaurants} />;
};

export default RestaurantIndexContainer;
