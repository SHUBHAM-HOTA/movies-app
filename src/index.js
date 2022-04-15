import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware } from "redux";

import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers/index.js";
import thunk from "redux-thunk";

// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       //middleware code
//       console.log("action type = ", action.type);
//       next(action);
//     };
//   };
// };

//here is the arrow fucntion way of writting the above function
const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    //logger code
    if (typeof action !== "function") {
      console.log("action type = ", action.type);
    }
    next(action);
  };

//no need of thunk function because we installed the thunk package

// const thunk =
//   ({ dispatch, getState }) =>
//   (next) =>
//   (action) => {
//     //logger code
//     if (typeof action === "function") {
//       action(dispatch);
//       return;
//     }
//     next(action);
//   };

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
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
