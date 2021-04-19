import React, { useMemo } from "react";
import styled from "styled-components";

import RestaurantIndex from "../Restaurant/RestaurantIndex";
import RestaurantMap from "../RestaurantMap/RestaurantMap";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Search = React.memo(({ history, restaurants, updateBounds }) => {
  // will need to fix in the future for resizing window
  const shouldRenderMap = useMemo(() => window.innerWidth > 900, []);

  return (
    <StyledDiv>
      <RestaurantIndex restaurants={restaurants} />
      {shouldRenderMap && (
        <RestaurantMap
          history={history}
          restaurants={restaurants}
          updateBounds={updateBounds}
        />
      )}
    </StyledDiv>
  );
});

export default Search;
