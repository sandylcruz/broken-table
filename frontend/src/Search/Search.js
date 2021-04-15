import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import RestaurantIndex from "../Restaurant/RestaurantIndex";
import RestaurantMap from "../RestaurantMap/RestaurantMap";
import { restaurantsSelector } from "../reducers/selectors";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Search = React.memo(({ updateBounds }) => {
  const restaurants = useSelector(restaurantsSelector);

  return (
    <StyledDiv>
      <RestaurantIndex restaurants={restaurants} />
      <RestaurantMap restaurants={restaurants} updateBounds={updateBounds} />
    </StyledDiv>
  );
});

export default Search;
