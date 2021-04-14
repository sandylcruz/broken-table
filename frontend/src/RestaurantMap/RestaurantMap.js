import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import MarkerManager from "../util/MarkerManager";

const StyledMapDiv = styled.div`
  width: 500px;
  height: 500px;
`;

const RestaurantMap = React.memo(({ restaurants }) => {
  const markerManagerRef = useRef();
  const mapNodeRef = useRef();
  const mapRef = useRef();

  useEffect(() => {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13,
    };

    const map = new google.maps.Map(mapNodeRef.current, mapOptions);
    mapRef.current = map;
    markerManagerRef.current = new MarkerManager(map);
  }, []);

  useEffect(() => {
    markerManagerRef.current.updateMarkers(restaurants);
  }, [restaurants]);

  return <StyledMapDiv ref={mapNodeRef} />;
});
export default RestaurantMap;
