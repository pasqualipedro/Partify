import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`

`;

class SearchBar extends Component {

    render() {
        return (
            <Wrapper>
                <form action="/" method="get">
                    <input
                        type="text"
                        id="header-search"
                        placeholder="Search anything"
                        name="search" 
                    />
                    <button type="submit">Seasadsadsadsarch</button>
                </form>
            </Wrapper>
        )
    }
};


export default SearchBar;