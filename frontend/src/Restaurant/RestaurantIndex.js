import React, { useEffect } from "react";

import styled from "styled-components";

const StyledDiv = styled.div`
  color: purple;
`;

const RestaurantIndex = React.memo(({ fetchRestaurants, restaurants }) => {
  useEffect(() => {
    fetchRestaurants();
  }, [fetchRestaurants]);

  return (
    <div>
      {restaurants.map((restaurant) => (
        <StyledDiv>
          <h1>Restaurants:</h1>
          <span>Name:</span>
          <span>{restaurant.name}</span>

          <span>Location:</span>
          <span>{restaurant.location}</span>

          <span>Rating:</span>
          <span>0</span>

          <span>Description:</span>
          <span>{restaurant.description}</span>
        </StyledDiv>
      ))}
    </div>
  );
});

export default RestaurantIndex;
