import { ajax } from "jquery";
import { selectCurrentUser } from "../reducers/selectors";

export const createFavorite = (id) =>
  new Promise((resolve, reject) => {
    ajax({
      method: "POST",
      url: `api/restaurants/${id}/favorites`,
      data: {
        favorite: {
          restaurant_id: id,
          user_id: selectCurrentUser.id,
        },
      },
      success: resolve,
      error: reject,
    });
  });

export default createFavorite;
