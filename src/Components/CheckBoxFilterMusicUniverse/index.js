import React from "react";
import { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  form {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 300px;
    margin: 30px;
  }

  .roundedSearchBar {
    border-radius: 5px;
    margin: 0;
  }

  .button {
    border-radius: 5px;
    margin: 0;

  }

`;

class CheckBoxFilterMusicUniverse extends Component {
  state = {
    search: ``,
    filteredArtist: [],
    filteredAlbum: [],
    filteredTrack: []
  };

  handleInput = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  searchButton = (event) => {
    event.preventDefault();
    this.props.getAllInfo(this.state.search);
  };

  render() {
    return (
      <Wrapper>
        <div className="alignInY">
          <h4>Search for songs, artists or albuns:</h4>
          <form className="">
            <input
              className="roundedSearchBar"
              type="text"
              id="header-search"
              placeholder="Search anything"
              name="search"
              value={this.state.search}
              onChange={(event) => this.handleInput(event)}
            />
            <button
              className="button"
              type="submit"
              onClick={this.searchButton} >Search
            </button>
          </form>
        </div>
      </Wrapper>
    );
  }
}

export default CheckBoxFilterMusicUniverse;
