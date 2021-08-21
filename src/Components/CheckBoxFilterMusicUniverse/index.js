import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';


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
        search : ``,
        filteredArtist : false ,
        filteredAlbum : false ,
        filteredSong : false ,
    };


    handleCheckBoxes = (event) => {
        this.setState({

        })
    };
    
    handleInput = (event) => {
        this.setState({
            search : event.target.value
        })
    };

    handleSubmitButton = (event) => {
        event.preventDefault();
        console.log(this.state.search, this.state.filteredArtist, this.state.filteredAlbum, this.state.filteredSong);
        this.props.getMusics(this.state.search)
    };


    render() {
        return (
            <Wrapper>
                <form onSubmit= {this.handleSubmitButton} >
                    <label><input type="checkbox" name="filterArtist" value="artist" id="artist" />Artist</label>
                    <label><input type="checkbox" name="filterAlbum" value="album" id="album" />Album</label>
                    <label><input type="checkbox" name="filterSong" value="song" id="song" />song</label>
                    <label>Search for songs, artists or albuns</label>
                    <input
                        type="text"
                        id="header-search"
                        placeholder="Search anything"
                        name="search"
                        value= {this.state.search}
                        onChange = {(event) => this.handleInput(event)}
                    />
                    <button type="submit">Search</button>
                </form>
            </Wrapper>
        )
    }
};

export default CheckBoxFilterMusicUniverse;