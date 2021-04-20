import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const RestaurantItem = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  width: 400px;
  cursor: pointer;
  &:hover {
    border: 1px solid #969595;
    transition: border-color 0.15s ease-in-out 0s, box-shadow 0.1s ease-in-out 0s,
      background-color 0.25s ease-in-out 0s, color 0.15s ease-in-out 0s;
  }

  .15s ease-out,color .25s ease-out,opacity .25s ease-out,box-shadow .15s ease-out
`;
const RestaurantContainer = styled.div`
  width: 400px;
  margin: 40px;
`;

const RestaurantIndex = React.memo(({ restaurants }) => (
  <RestaurantContainer>
    {restaurants.map((restaurant) => (
      <Link to={`restaurants/${restaurant.id}`}>
        <RestaurantItem key={restaurant.id}>
          <h3>{restaurant.name}</h3>
          <span>{restaurant.location}</span>
          <span>Rating: 0 stars</span>
        </RestaurantItem>
      </Link>
    ))}
  </RestaurantContainer>
));

export default RestaurantIndex;
