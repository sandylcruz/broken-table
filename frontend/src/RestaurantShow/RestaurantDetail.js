import React from "react";
import styled from "styled-components";

import food from "./food.png";
import Star from "./Star.svg";

const StyledSideBar = styled.div`
  border-left: 0;
  padding: 10px;
`;

const StyledRestaurantOverview = styled.div`
  width: 80%;
  padding: 10px;
  border-right: 1px solid #d3d3d3;
`;

const StyledParentContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  border: 1px solid #d3d3d3;
  border-radius: 5%;
  padding: 10px;
`;

const StyledReservationContainer = styled.div`
  border: 1px solid #d3d3d3;
  margin: 10px;
  padding: 10px;
  height: 70px;
  text-align: center;
`;
const StyledStar = styled(Star)`
  transform: scale(0.75);
  fill: red;
`;

const StyledRestaurantSummary = styled.div`
  border: 1px solid #d3d3d3;
  margin: 10px;
  padding: 10px;
`;

const RestaurantDetail = React.memo(({ restaurant }) => (
  <StyledParentContainer>
    {!restaurant ? (
      <div>Loading...</div>
    ) : (
      <StyledRestaurantOverview>
        <h1>{restaurant.name}</h1>
        <StyledStar />
        <h3>About {restaurant.name} </h3>
        <p>{restaurant.description}</p>
        <StyledReservationContainer>
          Make a reservation
        </StyledReservationContainer>
      </StyledRestaurantOverview>
    )}

    <StyledSideBar>
      {!restaurant ? (
        <div>Loading...</div>
      ) : (
        <div>
          {" "}
          <img src={food} height="300" width="300" alt="food" />
          <StyledRestaurantSummary>
            <h3>{restaurant.name}</h3>
            <span>{restaurant.location}</span>
          </StyledRestaurantSummary>
        </div>
      )}
    </StyledSideBar>
  </StyledParentContainer>
));

export default RestaurantDetail;
