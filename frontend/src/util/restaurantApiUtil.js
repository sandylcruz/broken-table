import { ajax } from "jquery";

export const fetchRestaurants = () =>
  new Promise((resolve, reject) => {
    ajax({
      method: "GET",
      url: "api/restaurants",
      success: resolve,
      error: reject,
    });
  });

export const fetchRestaurant = () => {};
