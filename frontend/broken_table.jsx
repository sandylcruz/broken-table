import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./src/store/store";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  console.log("*****", store);
  window.getState = store.getState;
  window.dispatchEvent = store.dispatch;

  const root = document.getElementById("root");
  ReactDOM.render(<h1>BrokenTable hi</h1>, root);
});
