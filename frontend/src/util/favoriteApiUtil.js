import { ajax } from "jquery";
// import { selectCurrentUser } from "../reducers/selectors";

export const createFavorite = (favorite) =>
  new Promise((resolve, reject) => {
    ajax({
      method: "POST",
      url: `api/restaurants/${favorite.restaurantId}/favorites`,
      data: { favorite },
      success: resolve,
      error: reject,
    });
  });

export default createFavorite;
