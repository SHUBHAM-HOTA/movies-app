import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";

import "./index.css";
import App from "./components/App";
import movies from "./reducers.js";

const store = createStore(movies);
console.log("store", store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
