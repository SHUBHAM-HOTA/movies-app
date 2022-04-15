import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";

import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers/index.js";

const store = createStore(rootReducer);
// console.log("store", store);
// console.log("function", movies);

// console.log("before state", store.getState());

// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{ name: "super man" }],
// });

// console.log("after state", store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
