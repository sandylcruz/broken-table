import React from "react";
import ReactDOM from "react-dom";

import configureStore from "./store/store";
import Root from "./components/Root";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  window.getState = store.getState;
  window.dispatchEvent = store.dispatch;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
