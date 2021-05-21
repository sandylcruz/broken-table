import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import configureStore from "./store/store";
import App from "./App";

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();

  if (window.currentUser) {
    // eslint-disable-next-line prettier/prettier
    const { favoriteRestaurants, ...currentUser } = window.currentUser;
    const { reservations } = window.currentUser;
    // const reservationIds = reservations.map(
    //   (reservation) => reservation.restaurant.id
    // );
    const favoriteIds = favoriteRestaurants.map((restaurant) => restaurant.id);

    const usersReservations = reservations.reduce(
      (accumulator, reservation) => {
        const reservationObject = {
          ...reservation,
          restaurantId: reservation.restaurant.id,
        };
        delete reservationObject.restaurant;
        accumulator[reservation.id] = reservationObject;
        return accumulator;
      },
      {}
    );

    const restaurants = favoriteRestaurants.reduce(
      (accumulator, restaurant) => {
        accumulator[restaurant.id] = restaurant;
        return accumulator;
      },
      {}
    );

    reservations.forEach((reservation) => {
      if (!restaurants[reservation.restaurant.id]) {
        restaurants[reservation.restaurant.id] = reservation.restaurant;
      }
    });

    const preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: {
            ...currentUser,
            favoriteIds,
            reservations: usersReservations,
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
  ReactDOM.render(
    <HashRouter>
      <App store={store} />
    </HashRouter>,
    root
  );
});
