import { ajax } from "jquery";
import Geocode from "react-geocode";

export const createReview = (review) =>
  new Promise((resolve, reject) => {
    ajax({
      method: "POST",
      url: `api/reviews`,
      data: {
        review: {
          restaurant_id: review.restaurantId,
          user_id: review.userId,
          body: review.body,
          rating: review.rating,
        },
      },
      success: resolve,
      error: reject,
    });
  });

export const fetchRestaurant = (id) =>
  new Promise((resolve, reject) => {
    ajax({
      method: "GET",
      url: `api/restaurants/${id}`,
      success: resolve,
      error: reject,
    });
  });

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

export const createRestaurant = (restaurant) => {
  const formData = new FormData();
  formData.append("restaurant[name]", restaurant.name);
  formData.append("restaurant[location]", restaurant.location);
  formData.append("restaurant[description]", restaurant.description);
  formData.append("restaurant[photo]", restaurant.photo);
  formData.append("restaurant[latitude]", restaurant.latitude);
  formData.append("restaurant[longitude]", restaurant.longitude);

  return new Promise((resolve, reject) => {
    ajax({
      method: "POST",
      url: "api/restaurants/",
      data: formData,
      contentType: false,
      processData: false,
      success: resolve,
      error: reject,
    });
  });
};

Geocode.setApiKey(MAPS_API_KEY);
Geocode.enableDebug();

export const getCoordinatesFromAddress = (address) =>
  Geocode.fromAddress(address).then((response) => {
    const { lat, lng } = response.results[0].geometry.location;
    return { latitude: lat, longitude: lng };
  });
