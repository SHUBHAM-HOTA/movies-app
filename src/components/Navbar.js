import React, { Component } from "react";
import { handleMovieSearch, addMoviesToList } from "../actions";
import "../index.css";
import { data } from "../data";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchResults: true,
      searchText: "",
    };
  }

  handleAddToMovies = (movie) => {
    this.props.dispatch(addMoviesToList(movie));
    this.setState({
      showSearchResults: false,
    });
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
    const { showSearchResults } = this.state;
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
                <img src={data[0].Poster} alt="" />
                <div className="movie-info">
                  <span>
                    {data[0].Title}({data[0].Year})
                  </span>
                  <button
                    className="favourite-btn"
                    onClick={() => this.handleAddToMovies(data[0])}
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
export default Navbar;
