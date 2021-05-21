import React from "react";
import ReactDOM from "react-dom";

import configureStore from "./store/store";
import App from "./App";

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();

  if (window.currentUser) {
    const { favoriteRestaurants, ...currentUser } = window.currentUser;
    const favoriteIds = favoriteRestaurants.map((restaurant) => restaurant.id);

    const restaurants = favoriteRestaurants.reduce(
      (accumulator, restaurant) => {
        accumulator[restaurant.id] = restaurant;
        return accumulator;
      },
      {}
    );

    const preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: {
            ...currentUser,
            favoriteIds,
          },
        },
        restaurants,
      },
      session: { id: window.currentUser.id },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById("root");
  ReactDOM.render(<App store={store} />, root);
});
