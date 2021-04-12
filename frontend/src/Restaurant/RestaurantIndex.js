import React, { useEffect } from "react";

import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
`;

const RestaurantIndex = React.memo(({ fetchRestaurants, restaurants }) => {
  useEffect(() => {
    fetchRestaurants();
  }, [fetchRestaurants]);

  return (
    <div>
      {restaurants.map((restaurant) => (
        <StyledDiv>
          <h3>{restaurant.name}</h3>
          <span>{restaurant.location}</span>
          <span>Rating: 0 stars</span>
        </StyledDiv>
      ))}
    </div>
  );
});

export default RestaurantIndex;
