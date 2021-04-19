import React from "react";

import styled from "styled-components";

const RestaurantItem = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  width: 400px;
`;
const RestaurantContainer = styled.div`
  width: 400px;
`;

const RestaurantIndex = React.memo(({ restaurants }) => (
  <RestaurantContainer>
    {restaurants.map((restaurant) => (
      <RestaurantItem key={restaurant.id}>
        <h3>{restaurant.name}</h3>
        <span>{restaurant.location}</span>
        <span>Rating: 0 stars</span>
      </RestaurantItem>
    ))}
  </RestaurantContainer>
));

export default RestaurantIndex;
