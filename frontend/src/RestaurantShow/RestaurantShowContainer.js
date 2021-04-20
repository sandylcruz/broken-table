import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import RestaurantShow from "./RestaurantShow";
import { selectRestaurantById } from "../reducers/selectors";

const RestaurantShowContainer = React.memo(() => {
  const { id } = useParams();
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  return (
    <div>
      <RestaurantShow restaurant={restaurant} />
    </div>
  );
});

export default RestaurantShowContainer;
