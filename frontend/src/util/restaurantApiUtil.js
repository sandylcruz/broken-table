import { ajax } from "jquery";
import Geocode from "react-geocode";

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
      url: "api/restaurants/",
      data: { restaurant },
      success: resolve,
      error: reject,
    });
  });

Geocode.setApiKey(MAPS_API_KEY);
Geocode.enableDebug();

export const getCoordinatesFromAddress = (address) =>
  Geocode.fromAddress(address).then((response) => {
    const { lat, lng } = response.results[0].geometry.location;
    return { latitude: lat, longitude: lng };
  });
