import React from "react";

const RestaurantShow = (restaurant) => {
  const newRestaurant = restaurant;

  return (
    <div>
      <h1>Restaurant Show Page</h1>
      <h2>{newRestaurant}</h2>
    </div>
  );
};

export default RestaurantShow;
