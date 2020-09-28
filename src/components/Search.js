import React, { Component } from "react";

class Search extends Component {
  state = { artistQuery: "" };
  handleKeypress = (e) => {
    if (e.key === "Enter") {
      this.searchArtist();
    }
  };
  updateArtistQuery = (e) => {
    this.setState({ artistQuery: e.target.value });
  };

  searchArtist = () => {
    this.props.searchArtist(this.state.artistQuery);
  };

  render() {
    return (
      <div>
        <input
          onKeyPress={this.handleKeypress}
          onChange={this.updateArtistQuery}
          placeholder="Search for Artist"
        />
        <button onClick={this.searchArtist}>Search</button>
      </div>
    );
  }
}

export default Search;
