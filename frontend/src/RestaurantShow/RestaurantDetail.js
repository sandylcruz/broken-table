import React from "react";

const RestaurantDetail = React.memo(({ restaurant }) => (
  <div>
    <h1>{restaurant.name}</h1>
  </div>
));

export default RestaurantDetail;
