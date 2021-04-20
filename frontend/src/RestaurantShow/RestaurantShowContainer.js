import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchRestaurant } from "../actions/restaurantActions";
import RestaurantShow from "./RestaurantShow";
import { selectRestaurantById } from "../reducers/selectors";

const RestaurantShowContainer = React.memo(() => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  useEffect(() => {
    dispatch(fetchRestaurant(id));
  }, []);

  return (
    <div>
      <RestaurantShow restaurant={restaurant} />
    </div>
  );
});

export default RestaurantShowContainer;
