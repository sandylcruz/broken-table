import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { createRestaurant as createRestaurantAction } from "../actions/restaurantActions";
import RestaurantForm from "./RestaurantForm";

const RestaurantFormContainer = React.memo(() => {
  const dispatch = useDispatch();

  const createRestaurant = useCallback(
    (partialRestaurant) => {
      dispatch(createRestaurantAction(partialRestaurant));
    },
    [dispatch]
  );

  return <RestaurantForm createRestaurant={createRestaurant} />;
});

export default RestaurantFormContainer;
