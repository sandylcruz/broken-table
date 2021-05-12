import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { createFavorite } from "../actions/favoriteActions";
import MarkerManager from "../util/MarkerManager";
import Reviews from "./Reviews";
import { selectCurrentUser } from "../reducers/selectors";
import Star from "./svgs/Star.svg";
import FavoriteButton from "../components/FavoriteButton";

const RatingDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

const RatingsSignatureText = styled.div`
  color: #737373;
  font-size: 13px;
  margin-top: 3px;
`;

const RatingTextDiv = styled.div`
  display: flex;
  color: red;
`;

const ResizedImage = styled.img`
  margin-top: -35px;
  max-height: 400px;
  max-width: 500px;
`;

const SidebarContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledAboutBlock = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 1.5;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #737373;
`;

const StyledH1 = styled.h1`
  font-size: 50px;
  margin-top: 10px;
`;

const StyledH3 = styled.div`
  padding: 5px;
  font-weight: bold;
  font-size: 25px;
`;

const StyledH4 = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const StyledFavoriteDiv = styled.div`
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const StyledLocationSpan = styled.div`
  color: #737373; ;
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
  border-bottom: 1px solid #eaeaea;
  padding-top: 10px;
  height: 70px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const StyledRestaurantSummary = styled.div`
  border: 1px solid #eaeaea;
  margin: 10px;
  padding: 10px;
  line-height: 1.5;
  width: 350px;
`;

const StyledRestaurantSummaryText = styled.div`
  margin: 5px;
  padding: 5px;
`;

const StyledRestaurantOverview = styled.div`
  width: 80%;
  padding: 10px;
`;

const StyledSideBar = styled.div`
  border-left: 0;
  padding: 10px;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;

  display: none;
  @media (min-width: 600px) {
    display: flex;
    width: 100%;
  }
`;

const StyledStar = styled(Star)`
  transform: scale(0.75);
  fill: red;
  margin-bottom: 10px;
`;

const RestaurantDetail = React.memo(({ restaurant, reviews }) => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const mapNodeRef = useRef();
  const mapRef = useRef();
  const markerManagerRef = useRef();
  const [isFavorite, setIsFavorite] = useState(false);

  /*
request is made after clicking button
rewrite restaurant selector (selectRestaurant) to return 
if current user has favorited restaurant
selectRestaurantById should return name, ..., isFavorited: true/false
selector computes if it is favorited by looking at redux
iterate over every single favorite
  */

  const handleFavoriteToggle = useCallback(() => {
    const favorite = {
      restaurantId: restaurant.id,
      userId: currentUser.id,
    };
    // console.log(favorite);

    dispatch(createFavorite(favorite));
    setIsFavorite((previousIsFavorite) => !previousIsFavorite);
  }, []);

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
      markerManagerRef.current.updateMarkers([restaurant]);

      return () => {
        mapRef.current = undefined;
      };
    }
    return undefined;
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
          <StyledFavoriteDiv>
            <h2>Now Open.</h2>
            <StyledPTag>Add to your hit list to get updated.</StyledPTag>
            <FavoriteButton
              type="button"
              onClick={handleFavoriteToggle}
              isFavorite={isFavorite}
            >
              ❤ &nbsp; Add to Favorites
            </FavoriteButton>
          </StyledFavoriteDiv>

          <StyledReservationContainer>
            <StyledH3>Make a reservation</StyledH3>
          </StyledReservationContainer>
          <StyledAboutBlock>
            <StyledH3>About {restaurant.name}</StyledH3>
            <StyledPTag>{restaurant.description}</StyledPTag>
          </StyledAboutBlock>
          <Reviews reviews={reviews} />
        </StyledRestaurantOverview>
      )}

      <StyledSideBar>
        {!restaurant ? (
          <div>Loading Sidebar...</div>
        ) : (
          <SidebarContentDiv>
            {" "}
            <ResizedImage
              src={restaurant.photoUrl}
              height="350"
              width="350"
              alt="food"
            />
            <StyledRestaurantSummary>
              <StyledMapDiv ref={mapNodeRef} />
              <StyledRestaurantSummaryText>
                <StyledH4>{restaurant.name}</StyledH4>
                <StyledLocationSpan>{restaurant.location}</StyledLocationSpan>
              </StyledRestaurantSummaryText>
            </StyledRestaurantSummary>
          </SidebarContentDiv>
        )}
      </StyledSideBar>
    </StyledParentContainer>
  );
});

export default RestaurantDetail;
