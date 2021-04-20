import React from "react";
import styled from "styled-components";
// import { fetchRestaurant } from "../util/restaurantApiUtil";

const StyledSideBar = styled.div`
  border: 3px solid black;
`;

const StyledRestaurantOverview = styled.div`
  border: 3px solid purple;
  width: 80%;
`;

const StyledParentContainer = styled.div`
  border: 3px solid pink;
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

const StyledReservationContainer = styled.div`
  border: 3px solid blue;
  height: 70px;
`;

const RestaurantDetail = React.memo(({ restaurant }) => (
  <StyledParentContainer>
    {!restaurant ? (
      <div>Loading...</div>
    ) : (
      <StyledRestaurantOverview>
        <h1>{restaurant.name}</h1>
        <h2>{restaurant.location}</h2>

        <h2>About {restaurant.name} </h2>
        <p>{restaurant.description}</p>
        <StyledReservationContainer>
          Make a reservation
        </StyledReservationContainer>
      </StyledRestaurantOverview>
    )}

    <StyledSideBar>
      <button type="button">Overview</button>
      <button type="button">Photos</button>
      <button type="button">Reviews</button>
    </StyledSideBar>
  </StyledParentContainer>
));

export default RestaurantDetail;
