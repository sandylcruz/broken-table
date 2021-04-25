import React from "react";

import RestaurantDetail from "./RestaurantDetail";

const RestaurantShow = React.memo(({ restaurant }) => (
  <RestaurantDetail restaurant={restaurant} />
));

export default RestaurantShow;
