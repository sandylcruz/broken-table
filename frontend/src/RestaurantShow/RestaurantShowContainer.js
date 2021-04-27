import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchRestaurant } from "../actions/restaurantActions";
import RestaurantShow from "./RestaurantShow";
import {
  selectRestaurantById,
  selectReviewsByRestaurantId,
} from "../reducers/selectors";

const RestaurantShowContainer = React.memo(() => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  const reviews = useSelector((state) =>
    selectReviewsByRestaurantId(state, id)
  );

  useEffect(() => {
    dispatch(fetchRestaurant(id));
  }, []);

  return <RestaurantShow restaurant={restaurant} reviews={reviews} />;
});

export default RestaurantShowContainer;
