import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";
import RestaurantIndexItem from "../Restaurant/RestaurantIndexItem";
import { selectCurrentUserFavoriteRestaurants } from "../reducers/selectors";

const FavoritesDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: #fafafa;
`;

const FavoriteItemContainer = styled.div`
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin: 5px;
  background-color: transparent;
`;

const InnerFavoritesDiv = styled.div`
  margin: 27px;
`;

const StyledH1 = styled.h1`
  font-size: 30px;
`;

const StyledRestaurantIndexItem = styled(RestaurantIndexItem)`
  border: 1px solid pink;
  // background-color: purple;
`;

const UserFavorites = React.memo(() => {
  const favoriteRestaurants = useSelector(selectCurrentUserFavoriteRestaurants);

  return (
    <FavoritesDiv>
      <InnerFavoritesDiv>
        <StyledH1>My Favorites</StyledH1>
        <FavoriteItemContainer>
          {favoriteRestaurants.map((restaurant) => (
            <StyledRestaurantIndexItem
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))}
        </FavoriteItemContainer>
      </InnerFavoritesDiv>
    </FavoritesDiv>
  );
});

export default UserFavorites;
