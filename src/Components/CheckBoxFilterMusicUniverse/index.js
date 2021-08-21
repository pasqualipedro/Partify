import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import SearchBar from '../SearchBar';


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
        search : `Elvis`,
        filteredArtist : false ,
        filteredAlbum : false ,
        filteredSong : false ,
    };

    


    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.search);
        this.props.getMusics(this.state.search)
    }


    render() {
        return (
            <Wrapper>
                <form onSubmit= {this.handleSubmit} >
                    <label htmlFor="header-search">
                        <span className="visually-hidden">Search for songs, artists or albuns</span>
                    </label>
                    <input
                        type="text"
                        id="header-search"
                        placeholder="Search anything"
                        name="search" 
                    />
                    
        
                    <label><input type="checkbox" name="filterArtist" value="artist" id="artist" />Artist</label>
                    <label><input type="checkbox" name="filterAlbum" value="album" id="album" />Album</label>
                    <label><input type="checkbox" name="filterSong" value="song" id="song" />song</label>
                    <label></label><input type="submit"></input>
                    <label></label><input type="reset"></input>
                    <button type="submit">Search</button>
                </form>
            </Wrapper>
        )
    }
};

export default CheckBoxFilterMusicUniverse;