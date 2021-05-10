import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import MarkerManager from "../util/MarkerManager";

const StyledMapDiv = styled.div`
  width: 500px;
  height: 700px;
  padding-top: 70px;

  position: fixed;
`;

// whenever route changes, reset the map
// how to change scroll position
// how to check if you changed your route

const RestaurantMap = React.memo(({ restaurants, updateBounds }) => {
  const markerManagerRef = useRef();
  const mapNodeRef = useRef();
  const mapRef = useRef();

  useEffect(() => {
    // cannot compute center and zoom from default bounds.
    // these default map options happen to coincides with bound we're looking for
    // in the future, find a better way of doing this.
    // map uses center + zoom. state only has bounds
    const mapOptions = {
      center: { lat: 37.773136, lng: -122.423959 },
      zoom: 14,
    };

    const map = new google.maps.Map(mapNodeRef.current, mapOptions);
    mapRef.current = map;
    markerManagerRef.current = new MarkerManager(map);
  }, []);

  useEffect(() => {
    markerManagerRef.current.updateMarkers(restaurants);
  }, [restaurants]);

  useEffect(() => {
    const map = mapRef.current;

    const idleListener = map.addListener("idle", () => {
      const LatLngBounds = map.getBounds();
      const northEast = LatLngBounds.getNorthEast();
      const southWest = LatLngBounds.getSouthWest();

      const boundsObject = {
        northEast: {
          latitude: northEast.lat(),
          longitude: northEast.lng(),
        },

        southWest: {
          latitude: southWest.lat(),
          longitude: southWest.lng(),
        },
      };

      updateBounds(boundsObject);
    });

    return () => {
      google.maps.event.removeListener(idleListener);
    };
  }, [updateBounds]);

  return <StyledMapDiv ref={mapNodeRef} />;
});

export default RestaurantMap;
