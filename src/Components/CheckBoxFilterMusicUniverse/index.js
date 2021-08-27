import React from "react";
import { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  form {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 75vw;
    background: red;
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
    /* this.props.getTracks(this.state.search); */
    this.props.getAllInfo(this.state.search);
    /* this.props.getAlbums(this.state.search); */
    
  };

  render() {
    return (
      <Wrapper>
        <form >
          <label>Search for songs, artists or albuns</label>
          <input
            type="text"
            id="header-search"
            placeholder="Search anything"
            name="search"
            value={this.state.search}
            onChange={(event) => this.handleInput(event)}
          />
        </form>
          <button type="submit" onClick={this.searchButton} >Search</button>
      </Wrapper>
    );
  }
}

export default CheckBoxFilterMusicUniverse;
