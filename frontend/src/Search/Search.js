import React, { useEffect, useState } from "react";
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
  const [shouldRenderMap, setShouldRenderMap] = useState(
    window.innerWidth > 900
  );

  useEffect(() => {
    const handleResize = () => {
      const nextShouldRenderMap = window.innerWidth > 900;
      setShouldRenderMap(nextShouldRenderMap);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
