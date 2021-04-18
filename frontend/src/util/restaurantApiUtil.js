import { ajax } from "jquery";

export const fetchRestaurants = (filters) =>
  new Promise((resolve, reject) => {
    ajax({
      method: "GET",
      url: "api/restaurants",
      data: { filters },
      success: resolve,
      error: reject,
    });
  });

export const createRestaurant = () => {};
