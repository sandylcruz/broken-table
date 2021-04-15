import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { fetchRestaurants as fetchRestaurantsAction } from "../actions/restaurantActions";
import RestaurantIndex from "../Restaurant/RestaurantIndex";
import RestaurantMap from "../RestaurantMap/RestaurantMap";
import { restaurantsSelector } from "../reducers/selectors";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Search = React.memo(({ updateBounds }) => {
  const dispatch = useDispatch();
  const restaurants = useSelector(restaurantsSelector);

  const fetchRestaurants = useCallback(() => {
    dispatch(fetchRestaurantsAction());
  }, [dispatch]);

  useEffect(() => {
    fetchRestaurants();
  }, [fetchRestaurants]);

  return (
    <StyledDiv>
      <RestaurantIndex restaurants={restaurants} />
      <RestaurantMap
        restaurants={restaurants}
        fetchRestaurants={fetchRestaurants}
        updateBounds={updateBounds}
      />
    </StyledDiv>
  );
});

export default Search;
