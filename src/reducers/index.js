import {
  ADD_MOVIES,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  SET_SHOW_FAVOURITES,
} from "../actions";

const initialMoviesState = {
  list: [],
  favourites: [],
  showFavourites: false,
};

export function movies(state = initialMoviesState, action) {
  // if (action.type === ADD_MOVIES) {
  //   console.log("test inside the reducer", action.movies);
  //   return {
  //     ...state,
  //     list: action.movies,
  //   };
  // }
  // return state;

  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };

    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };

    case REMOVE_FAVOURITE:
      const filteredArray = state.favourites.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        favourites: filteredArray,
      };

    case SET_SHOW_FAVOURITES:
      return {
        ...state,
        showFavourites: action.val,
      };
    default:
      return state;
  }
}

const InitialSearchState = {
  result: {},
};

export function search(state = InitialSearchState, action) {
  return state;
}

const initialRootState = {
  movies: initialMoviesState,
  search: InitialSearchState,
};

// this is the main root reducer which will manage both movies and search reducer
export default function rootReducer(state = initialRootState, action) {
  return {
    movies: movies(state.movies, action),
    search: search(state.search, action),
  };
}
