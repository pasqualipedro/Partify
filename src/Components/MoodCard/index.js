import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    

    
    div {
    transition: 300ms;
    background: grey;
    width: 175px;
    height: 100px;
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;

        &:hover {
            transform: scale(0.975);
            opacity: 0.75;
            background: white;
            color: rgb(23, 32, 42);
            border-radius: 15px;
            border-color: #dd7e6b;
            border-width: 2px;
            
        }
    }

    p {
    font-family: Roboto;
    font-size: 1.6em;
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
                <div className="card card-text" onClick={this.handleSubmitButton}>
                    <p>{this.props.mood}</p>
                </div>
            </Wrapper>
        )
    }
};

export default MoodCard;