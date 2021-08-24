import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';

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

    handleSubmitButton = (event) => {
        event.preventDefault();
            this.props.parentCallBackPlaylistInfo(this.props.mood);
    };

    render() {
        return (
            <Wrapper>
                <div href="#" className="card card-text border-warning">
                    <form onSubmit={this.handleSubmitButton}>
                        <button>Select</button>
                    </form>
                    <p>{this.props.mood}</p>
                </div>
            </Wrapper>
        )
    }
};

export default MoodCard;