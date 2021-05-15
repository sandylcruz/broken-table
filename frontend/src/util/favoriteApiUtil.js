import { ajax } from "jquery";

export const CREATE_FAVORITE = "CREATE_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const createFavorite = (restaurantId) =>
  new Promise((resolve, reject) => {
    ajax({
      method: "POST",
      url: `api/restaurants/${restaurantId}/favorites`,
      success: resolve,
      error: reject,
    });
  });

export const removeFavorite = (restaurantId) =>
  new Promise((resolve, reject) => {
    ajax({
      method: "DELETE",
      url: `api/restaurants/${restaurantId}/favorites`,
      success: resolve,
      error: reject,
    });
  });

export default createFavorite;
