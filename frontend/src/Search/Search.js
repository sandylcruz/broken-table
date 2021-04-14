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

const Search = (props) => {
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
      <RestaurantIndex {...props} restaurants={restaurants} />
      <RestaurantMap
        restaurants={restaurants}
        fetchRestaurants={fetchRestaurants}
      />
    </StyledDiv>
  );
};

export default Search;
