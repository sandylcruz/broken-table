import * as FavoriteApiUtil from "../util/favoriteApiUtil";

export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";
export const UNRECEIVE_FAVORITE = "UNRECEIVE_FAVORITE";

export const receiveFavorite = (favorite) => ({
  type: RECEIVE_FAVORITE,
  favorite,
});

export const unreceiveFavorite = (restaurantId, userId) => ({
  type: UNRECEIVE_FAVORITE,
  restaurantId,
  userId,
});

export const createFavorite = (restaurantId) => (dispatch) =>
  FavoriteApiUtil.createFavorite(restaurantId).then((favoriteFromServer) =>
    dispatch(receiveFavorite(favoriteFromServer))
  );

export const removeFavorite = (restaurantId) => (dispatch, getState) =>
  FavoriteApiUtil.removeFavorite(restaurantId).then(() =>
    dispatch(unreceiveFavorite(restaurantId, getState().session.id))
  );
