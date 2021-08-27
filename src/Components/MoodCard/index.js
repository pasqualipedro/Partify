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
    border-radius: 10px;
    cursor: pointer;

        &:hover {
            ${'' /* perspective: 1000px; */}
            transform: scale(0.975) ${'' /* skewX(10deg) skewY(10deg) */} ${'' /* rotateY(40deg) */};
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