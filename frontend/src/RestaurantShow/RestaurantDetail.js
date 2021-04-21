import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import food from "./food.png";
import MarkerManager from "../util/MarkerManager";
import Star from "./Star.svg";

const StyledMapDiv = styled.div`
  height: 200px;
  margin: 10px;
  padding: 10px;
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

const StyledRestaurantSummary = styled.div`
  border: 1px solid #d3d3d3;
  margin: 10px;
  padding: 10px;
`;

const StyledRestaurantOverview = styled.div`
  width: 80%;
  padding: 10px;
  border-right: 1px solid #d3d3d3;
`;

const StyledSideBar = styled.div`
  border-left: 0;
  padding: 10px;
`;

const StyledStar = styled(Star)`
  transform: scale(0.75);
  fill: red;
`;

const RestaurantDetail = React.memo(({ restaurant }) => {
  const mapNodeRef = useRef();
  const mapRef = useRef();
  const markerManagerRef = useRef();

  useEffect(() => {
    if (restaurant) {
      const mapLocation = {
        center: {
          lat: restaurant.latitude,
          lng: restaurant.longitude,
        },
        zoom: 15,
        disableDefaultUI: true,
      };

      const map = new google.maps.Map(mapNodeRef.current, mapLocation);
      mapRef.current = map;
      markerManagerRef.current = new MarkerManager(map);

      return () => {
        mapRef.current = undefined;
      };
    }
    return true;
  }, [restaurant]);

  // useEffect(() => {
  //   markerManagerRef.current.updateMarkers(restaurants);
  // }, [restaurants]);

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
              <StyledMapDiv ref={mapNodeRef} />
              <h3>{restaurant.name}</h3>
              <span>{restaurant.location}</span>
            </StyledRestaurantSummary>
          </div>
        )}
      </StyledSideBar>
    </StyledParentContainer>
  );
});

export default RestaurantDetail;
