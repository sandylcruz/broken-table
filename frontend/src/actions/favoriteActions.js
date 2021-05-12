import * as FavoriteApiUtil from "../util/favoriteApiUtil";

export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";

export const receiveFavorite = (favorite) => ({
  type: RECEIVE_FAVORITE,
  favorite,
});

export const createFavorite = (favorite) => (dispatch) => {
  FavoriteApiUtil.createFavorite(favorite).then((favoriteFromServer) =>
    dispatch(receiveFavorite(favoriteFromServer))
  );
};
