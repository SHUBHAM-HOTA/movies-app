import { ADD_MOVIES } from "../actions";

const initialMoviesState = {
  list: [],
  favourites: [],
};

export default function movies(state = initialMoviesState, action) {
  if (action === ADD_MOVIES) {
    console.log("test inside the reducer", action.movies);
    return {
      ...state,
      list: [action.movies],
    };
  }
  return state;
}
