//action types
export const ADD_MOVIES = "ADD_MOVIES";

//action creators
export function addMovies(movies) {
  console.log("test inside the function", movies);
  return {
    type: ADD_MOVIES,
    movies,
  };
}
