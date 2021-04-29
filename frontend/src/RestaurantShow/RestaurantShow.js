import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import MarkerManager from "../util/MarkerManager";
import Reviews from "./Reviews";
import Star from "./svgs/Star.svg";
import HitListButton from "../components/HitListButton";

const RatingDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

const RatingsSignatureText = styled.text`
  color: #737373;
  font-size: 13px;
  margin-top: 3px;
`;

const RatingTextDiv = styled.div`
  display: flex;
  margin-top: 5px;
  color: red;
`;

const ResizedImage = styled.img`
  max-height: 400px;
  max-width: 500px;
`;

const StyledAboutBlock = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const StyledH1 = styled.h1`
  font-size: 50px;
  margin-top: 50px;
`;

const StyledH3 = styled.div`
  padding: 5px;
  font-weight: bold;
  font-size: 25px;
`;

const StyledHitList = styled.div`
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const StyledMapDiv = styled.div`
  height: 200px;
  width: 100%;
`;

const StyledParentContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px;
  border-radius: 5%;
  padding-top: 70px;
`;

const StyledPTag = styled.div`
  margin: 5px;
  padding: 5px;
`;

const StyledReservationContainer = styled.div`
  border-top: 1px solid #eaeaea;
  padding-top: 10px;
  height: 70px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const StyledRestaurantSummary = styled.div`
  border: 1px solid #eaeaea;
  margin: 10px;
  padding: 10px;
`;

const StyledRestaurantOverview = styled.div`
  width: 80%;
  padding: 10px;
`;

const StyledSideBar = styled.div`
  border-left: 0;
  padding: 10px;
  padding-top: 70px;

  display: none;
  @media (min-width: 600px) {
    display: block;
  }
`;

const StyledStar = styled(Star)`
  transform: scale(0.75);
  fill: red;
  margin-bottom: 10px;
`;

const RestaurantDetail = React.memo(({ restaurant, reviews }) => {
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
        draggable: false,
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

  useEffect(() => {
    if (markerManagerRef.current && restaurant) {
      markerManagerRef.current.updateMarkers([restaurant]);
    }
  }, [restaurant]);

  return (
    <StyledParentContainer>
      {!restaurant ? (
        <div>Loading Restaurant...</div>
      ) : (
        <StyledRestaurantOverview>
          <StyledH1>{restaurant.name}</StyledH1>
          <RatingDiv>
            <StyledStar />{" "}
            <RatingTextDiv>
              {restaurant.averageRating || "No reviews yet"}
              <RatingsSignatureText>&nbsp;- BrokenTable</RatingsSignatureText>
            </RatingTextDiv>
          </RatingDiv>
          <StyledHitList>
            <h2>Now Open.</h2>
            <StyledPTag>Add to your hit list to get updated.</StyledPTag>
            <HitListButton>❤ &nbsp; Add to Hit List</HitListButton>
          </StyledHitList>
          <StyledAboutBlock>
            <StyledH3>About {restaurant.name}</StyledH3>
            <StyledPTag>{restaurant.description}</StyledPTag>
          </StyledAboutBlock>
          <StyledReservationContainer>
            <StyledH3>Make a reservation</StyledH3>
          </StyledReservationContainer>
          <Reviews reviews={reviews} />
        </StyledRestaurantOverview>
      )}

      <StyledSideBar>
        {!restaurant ? (
          <div>Loading Sidebar...</div>
        ) : (
          <div>
            {" "}
            <ResizedImage
              src={restaurant.photoUrl}
              max-height="200"
              max-width="200"
              alt="food"
            />
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
