import React from "react";

const RestaurantIndex = React.memo(({ restaurants }) => (
  <div>
    {restaurants.map((restaurant) => (
      <div>
        <h1>Restaurants:</h1>
        <span>Name:</span>
        <span>{restaurant.name}</span>

        <span>Location:</span>
        <span>{restaurant.location}</span>

        <span>Rating:</span>
        <span>0</span>

        <span>Description:</span>
        <span>{restaurant.description}</span>
      </div>
    ))}
  </div>
));

export default RestaurantIndex;
