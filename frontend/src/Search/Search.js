import React, { useMemo } from "react";
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
  // will need to fix in the future for resizing window
  const shouldRenderMap = useMemo(() => window.innerWidth > 900, []);

  return (
    <StyledDiv>
      <RestaurantIndex restaurants={restaurants} />
      {shouldRenderMap && (
        <RestaurantMap restaurants={restaurants} updateBounds={updateBounds} />
      )}
    </StyledDiv>
  );
});

export default Search;
