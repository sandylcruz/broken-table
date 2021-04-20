import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  border: 3px solid black;
  height: 50px;
`;

const StyledRestaurantOverview = styled.div`
  border: 3px solid purple;
  height: 500px;
`;

const StyledParentContainer = styled.div`
  border: 3px solid pink;
  display: flex;
  flex-direction: column;
`;

const RestaurantDetail = React.memo(({ restaurant }) => (
  <StyledParentContainer>
    <StyledHeader>
      <button type="button">Overview</button>
      <button type="button">Photos</button>
      <button type="button">Reviews</button>
    </StyledHeader>

    <StyledRestaurantOverview>
      <h1>{restaurant.name}</h1>

      <h2>About {restaurant.name} </h2>
    </StyledRestaurantOverview>
  </StyledParentContainer>
));

export default RestaurantDetail;
