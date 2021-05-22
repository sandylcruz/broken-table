import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { createFavorite, removeFavorite } from "../actions/favoriteActions";
import RestaurantIndexItem from "./RestaurantIndexItem";

const RestaurantContainer = styled.div`
  margin: 40px;
  padding-top: 70px;
`;

const RestaurantIndex = React.memo(({ restaurants }) => {
  const dispatch = useDispatch();

  const handleFavoriteToggle = useCallback((restaurant) => {
    if (!restaurant.isFavorited) {
      dispatch(createFavorite(restaurant.id));
    } else {
      dispatch(removeFavorite(restaurant.id));
    }
  }, []);

  return (
    <RestaurantContainer>
      {restaurants.map((restaurant) => (
        <RestaurantIndexItem
          key={restaurant.id}
          onFavoriteToggle={handleFavoriteToggle}
          restaurant={restaurant}
        />
      ))}
    </RestaurantContainer>
  );
});

export default RestaurantIndex;
