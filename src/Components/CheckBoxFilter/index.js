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

class CheckBoxFilter extends Component {

    state = {
        decade: ``,
        artist: ``,
        album: ``,
        song: ``
    };


    render() {
        return (
            <Wrapper>
                <form>
                    <label><input type="number" id="decade" name="decade" min="1900" max="2021"/>Decade</label>
                    <label><input type="checkbox" name="filter-artist" value="artist" id="artist" />Artist</label>
                    <label><input type="checkbox" name="filter-album" value="album" id="album" />Album</label>
                    <label><input type="checkbox" name="filter-song" value="song" id="song" />song</label>
                    <label></label><input type="reset"></input>
                </form>
            </Wrapper>
        )
    }
};

export default CheckBoxFilter;