import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  window.getState = store.getState;
  window.dispatchEvent = store.dispatch;
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});
