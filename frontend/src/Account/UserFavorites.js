import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";
import RestaurantIndexItem from "../Restaurant/RestaurantIndexItem";
import { selectCurrentUserFavoriteRestaurants } from "../reducers/selectors";

const FavoritesDiv = styled.div`
  background-color: #eaeaea;
  height: 100%;
  width: 100%;
  display: flex;
`;

const FavoriteItemContainer = styled.div`
  border: 1px solid pink;
`;

const InnerFavoritesDiv = styled.div`
  margin: 27px;
`;

const StyledH1 = styled.h1`
  font-size: 30px;
`;

const UserFavorites = React.memo(() => {
  const favoriteRestaurants = useSelector(selectCurrentUserFavoriteRestaurants);

  return (
    <FavoritesDiv>
      <InnerFavoritesDiv>
        <StyledH1>My Favorites</StyledH1>
        <FavoriteItemContainer>
          {favoriteRestaurants.map((restaurant) => (
            <RestaurantIndexItem key={restaurant.id} restaurant={restaurant} />
          ))}
        </FavoriteItemContainer>
      </InnerFavoritesDiv>
    </FavoritesDiv>
  );
});

export default UserFavorites;
