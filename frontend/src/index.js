import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";

import App from "./App";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  window.getState = store.getState;
  window.dispatchEvent = store.dispatch;
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});
