import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { fetchRestaurants as fetchRestaurantsAction } from "../actions/restaurantActions";
import RestaurantIndex from "../Restaurant/RestaurantIndex";
import RestaurantMap from "../RestaurantMap/RestaurantMap";
import { restaurantsSelector } from "../reducers/selectors";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const SearchContainer = (props) => {
  const restaurants = useSelector(restaurantsSelector);
  const dispatch = useDispatch();

  const fetchRestaurants = useCallback(() => {
    dispatch(fetchRestaurantsAction());
  }, [dispatch]);

  return (
    <StyledDiv>
      <RestaurantMap />
      <RestaurantIndex
        {...props}
        fetchRestaurants={fetchRestaurants}
        restaurants={restaurants}
      />
    </StyledDiv>
  );
};

export default SearchContainer;
