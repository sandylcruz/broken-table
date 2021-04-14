import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { fetchRestaurants as fetchRestaurantsAction } from "../actions/restaurantActions";
import RestaurantIndex from "../Restaurant/RestaurantIndex";
import RestaurantMap from "../RestaurantMap/RestaurantMap";
import { restaurantsSelector } from "../reducers/selectors";
import { updateBounds as updateBoundsAction } from "../actions/filterActions";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Search = (props) => {
  const dispatch = useDispatch();
  const restaurants = useSelector(restaurantsSelector);
  const updateBounds = updateBoundsAction();

  const fetchRestaurants = useCallback(() => {
    dispatch(fetchRestaurantsAction());
  }, [dispatch]);

  return (
    <StyledDiv>
      <RestaurantIndex
        {...props}
        fetchRestaurants={fetchRestaurants}
        restaurants={restaurants}
      />
      <RestaurantMap restaurants={restaurants} updateBounds={updateBounds} />
    </StyledDiv>
  );
};

export default Search;
