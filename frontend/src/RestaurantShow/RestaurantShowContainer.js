import React from "react";

import RestaurantShow from "./RestaurantShow";

const RestaurantShowContainer = (restaurant) => {
  const newRestaurant = restaurant;

  return (
    <div>
      <RestaurantShow />
      <h1>{newRestaurant}</h1>
    </div>
  );
};

export default RestaurantShowContainer;
