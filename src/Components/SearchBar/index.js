import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';


class SearchBar extends Component {

    render() {
        return (
            <form action="/" method="get">
                <label htmlFor="header-search">
                    <span className="visually-hidden">Search for songs, artists or albuns</span>
                </label>
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search anything"
                    name="search" 
                />
                <button type="submit">Search</button>
            </form>
        )
    }
};


export default SearchBar;