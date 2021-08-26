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
    filteredArtist: false,
    filteredAlbum: false,
    filteredSong: false,
  };

/*   handleCheckBoxArtist = (event) => {
    this.setState({
      filteredArtist: event.target.checked,
    });
  };

  handleCheckBoxAlbum = (event) => {
    this.setState({
      filteredAlbum: event.target.checked,
    });
  };

  handleCheckBoxSong = (event) => {
    this.setState({
      filteredSong: event.target.checked,
    });
  }; */


  handleInput = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  handleSubmitButton = (event) => {
    event.preventDefault();
    console.log(
      this.state.search,
      this.state.filteredArtist,
      this.state.filteredAlbum,
      this.state.filteredSong
    );
    this.props.getAllInfo(this.state.search);

  };

  render() {
    return (
      <Wrapper>
        <form onSubmit={this.handleSubmitButton}>
          <label>
            <input
              type="checkbox"
              name="filteredArtist"
              value={this.state.filteredArtist}
              id="artist"
              onClick={(event) => this.handleCheckBoxArtist(event)}
            />
            Artist
          </label>
          <label>
            <input
              type="checkbox"
              name="filteredAlbum"
              value={this.state.filteredAlbum}
              id="album"
              onClick={(event) => this.handleCheckBoxAlbum(event)}
            />
            Album
          </label>
          <label>
            <input
              type="checkbox"
              name="filteredSong"
              value={this.state.filteredSong}
              id="song"
              onClick={(event) => this.handleCheckBoxSong(event)}
            />
            song
          </label>
          <label>Search for songs, artists or albuns</label>
          <input
            type="text"
            id="header-search"
            placeholder="Search anything"
            name="search"
            value={this.state.search}
            onChange={(event) => this.handleInput(event)}
          />
          <button type="submit">Search</button>
        </form>
      </Wrapper>
    );
  }
}

export default CheckBoxFilterMusicUniverse;
