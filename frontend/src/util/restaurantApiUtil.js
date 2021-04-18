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

export const createRestaurant = (restaurant) =>
  new Promise((resolve, reject) => {
    ajax({
      method: "POST",
      url: "api/restaurants/new",
      data: { restaurant },
      success: resolve,
      error: reject,
    });
  });
