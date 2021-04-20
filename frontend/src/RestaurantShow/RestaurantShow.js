import React from "react";

import RestaurantDetail from "./RestaurantDetail";

const RestaurantShow = React.memo(({ restaurant }) => (
  <div>
    <RestaurantDetail restaurant={restaurant} />
  </div>
));

export default RestaurantShow;
