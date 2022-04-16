import React, { Component } from "react";
import { handleMovieSearch, addMoviesToList } from "../actions";
import "../index.css";
import { StoreContext } from "../index";
import { search } from "../reducers";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }

  handleAddToMovies = (movie) => {
    const { store } = this.props;
    store.dispatch(addMoviesToList(movie));
  };

  handleSearch = () => {
    const { searchText } = this.state;
    console.log("check here", this.props);
    const { store } = this.props;
    store.dispatch(handleMovieSearch(searchText));
  };

  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };
  render() {
    const { result: movie, showSearchResults } = this.props.search;
    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleChange} />
          <button id="search-btn" onClick={this.handleSearch}>
            Search
          </button>
          {showSearchResults && (
            <div className="search-results">
              <div className="search-results">
                <img src={movie.Poster} alt="" />
                <div className="movie-info">
                  <span>{movie.Title}</span>
                  <button
                    className="favourite-btn"
                    onClick={() => this.handleAddToMovies(movie)}
                  >
                    Add To Movies
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

// class NavbarWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => (
//           <Navbar search={this.props.search} dispatch={store.dispatch} />
//         )}
//       </StoreContext.Consumer>
//     );
//   }
// }

// function mapStateToProps({ search }) {
//   //search:state.search is similar to destructuring of {search:search}
//   return {
//     search,
//   };
// }

class NavbarWrapper extends React.Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(store) => <Navbar store={store} search={search} />}
      </StoreContext.Consumer>
    );
  }
}

export default NavbarWrapper;
