import { ajax } from "jquery";

export const createFavorite = (favorite) =>
  new Promise((resolve, reject) => {
    ajax({
      method: "POST",
      url: `api/restaurants/:id/favorite`,
      data: {
        favorite: {
          restaurant_id: favorite.restaurantId,
          user_id: favorite.userId,
        },
      },
      success: resolve,
      error: reject,
    });
  });

export default createFavorite;
