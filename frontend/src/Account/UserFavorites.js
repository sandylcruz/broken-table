import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { createFavorite, removeFavorite } from "../actions/favoriteActions";
import RestaurantIndexItem from "../Restaurant/RestaurantIndexItem";
import { selectCurrentUserFavoriteRestaurants } from "../reducers/selectors";

const FavoritesDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: #fafafa;
`;

const FavoriteItem = styled.div`
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
`;

const InnerFavoritesDiv = styled.div`
  margin: 27px;
`;

const StyledH1 = styled.h1`
  font-size: 30px;
`;

const StyledRestaurantIndexItem = styled(RestaurantIndexItem)`
  width: 560px;
  height: 130px;
  background-color: white;
  border-radius: 15px;
`;

const UserFavorites = React.memo(() => {
  const favoriteRestaurants = useSelector(selectCurrentUserFavoriteRestaurants);
  const dispatch = useDispatch();

  const handleFavoriteToggle = useCallback((restaurant) => {
    if (!restaurant.isFavorited) {
      dispatch(createFavorite(restaurant.id));
    } else {
      dispatch(removeFavorite(restaurant.id));
    }
  }, []);

  return (
    <FavoritesDiv>
      <InnerFavoritesDiv>
        <StyledH1>My Favorites</StyledH1>

        {favoriteRestaurants.map((restaurant) => (
          <ul key={restaurant.id}>
            <FavoriteItem key={restaurant.id}>
              <StyledRestaurantIndexItem
                key={restaurant.id}
                restaurant={restaurant}
                onFavoriteToggle={handleFavoriteToggle}
              />
            </FavoriteItem>
          </ul>
        ))}
      </InnerFavoritesDiv>
    </FavoritesDiv>
  );
});

export default UserFavorites;
