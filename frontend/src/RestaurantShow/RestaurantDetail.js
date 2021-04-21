import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import food from "./food.png";
import Star from "./Star.svg";

const StyledSideBar = styled.div`
  border-left: 0;
  padding: 10px;
`;

const StyledRestaurantOverview = styled.div`
  width: 80%;
  padding: 10px;
  border-right: 1px solid #d3d3d3;
`;

const StyledParentContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  border: 1px solid #d3d3d3;
  border-radius: 5%;
  padding: 10px;
`;

const StyledReservationContainer = styled.div`
  border: 1px solid #d3d3d3;
  margin: 10px;
  padding: 10px;
  height: 70px;
  text-align: center;
`;
const StyledStar = styled(Star)`
  transform: scale(0.75);
  fill: red;
`;

const StyledRestaurantSummary = styled.div`
  border: 1px solid #d3d3d3;
  margin: 10px;
  padding: 10px;
`;

// const loader = new Loader({
//   apiKey: MAPS_API_KEY,
//   version: "weekly",
//   ...additionalOptions,
// });

const RestaurantDetail = React.memo(({ restaurant }) => {
  const mapNodeRef = useRef();
  const mapRef = useRef();

  useEffect(() => {
    if (restaurant) {
      const mapLocation = {
        center: {
          lat: `${restaurant.latitude}`,
          lng: `${restaurant.latitude}`,
        },
        zoom: 13,
      };

      const map = new google.maps.Map(mapNodeRef.current, mapLocation);
      mapRef.current = map;

      return () => {
        mapRef.current = undefined;
      };
    }
    return true;
  }, [restaurant]);

  return (
    <StyledParentContainer>
      {!restaurant ? (
        <div>Loading...</div>
      ) : (
        <StyledRestaurantOverview>
          <h1>{restaurant.name}</h1>
          <StyledStar />
          <h3>About {restaurant.name} </h3>
          <p>{restaurant.description}</p>
          <StyledReservationContainer>
            Make a reservation
          </StyledReservationContainer>
        </StyledRestaurantOverview>
      )}

      <StyledSideBar>
        {!restaurant ? (
          <div>Loading...</div>
        ) : (
          <div>
            {" "}
            <img src={food} height="300" width="300" alt="food" />
            <StyledRestaurantSummary>
              <h3>{restaurant.name}</h3>
              <span>{restaurant.location}</span>
              <div ref={mapNodeRef} />
            </StyledRestaurantSummary>
          </div>
        )}
      </StyledSideBar>
    </StyledParentContainer>
  );
});

export default RestaurantDetail;
