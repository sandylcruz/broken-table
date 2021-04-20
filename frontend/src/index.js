import React from "react";
import ReactDOM from "react-dom";

import configureStore from "./store/store";
import { fetchRestaurant } from "./actions/restaurantActions";
import Root from "./components/Root";

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
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
  window.fetchRestaurant = fetchRestaurant;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
