import * as FavoriteApiUtil from "../util/favoriteApiUtil";

export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";

export const receiveFavorite = (favorite) => ({
  type: RECEIVE_FAVORITE,
  favorite,
});

export const createFavorite = (favorite) => (dispatch) => {
  console.log("In action creator. Favorite = ", favorite);
  FavoriteApiUtil.createFavorite(favorite).then((favoriteFromServer) =>
    dispatch(receiveFavorite(favoriteFromServer))
  );
  console.log(
    "In action creator, dispatched receiveFavorite where favorite = ",
    favorite
  );
};
