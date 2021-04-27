import React from "react";

import RestaurantDetail from "./RestaurantDetail";

const RestaurantShow = React.memo(({ restaurant, reviews }) => (
  <RestaurantDetail restaurant={restaurant} reviews={reviews} />
));

export default RestaurantShow;
