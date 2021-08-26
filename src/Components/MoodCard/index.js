import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import PlaylistInfo from '../PlaylistInfo';

const Wrapper = styled.div`
    

    
    div {
    background: grey;
    width: 175px;
    height: 100px;
    margin: 5px;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;

        &:hover {
            transform: translateY(1px);
            opacity: 0.75;
            background: brown;
        }
    }

    p {
    font-family: Roboto;
    font-size: 1.6em;
    color: white;
    }
`;

class MoodCard extends Component {

    state = {
        
    };

    handleSubmitButton = () => {
            this.props.parentCallBackPlaylistInfo(this.props.mood);
            this.props.togglePlaylist();
    };


    render() {
        return (
            <Wrapper>
                <div className="card card-text border-warning" onClick={this.handleSubmitButton}>
                    <p>{this.props.mood}</p>
                </div>
            </Wrapper>
        )
    }
};

export default MoodCard;