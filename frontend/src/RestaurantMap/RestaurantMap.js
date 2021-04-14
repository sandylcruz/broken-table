import React, { useEffect, useRef } from "react";

import styled from "styled-components";
import MarkerManager from "../util/MarkerManager";
import updateBounds from "../actions/filterActions";

const StyledMapDiv = styled.div`
  width: 50%;
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

  useEffect(() => {
    const map = mapRef.current;

    map.addListener("center_changed", () => {
      const LatLngBounds = map.getBounds;
      const northEast = LatLngBounds.getNorthEast;
      const southWest = LatLngBounds.getSouthWest;

      const boundsObject = {
        northEast: {
          latitude: northEast.latitude,
          longitude: northEast.longitude,
        },

        southWest: {
          latitude: southWest.latitude,
          longitude: southWest.longitude,
        },
      };

      updateBounds(boundsObject);
    });
  });

  return <StyledMapDiv ref={mapNodeRef} />;
});
export default RestaurantMap;
