import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`

    div {
        text-size: 16px;
        align-text: center;
        background: blue;
        max-width: 250px;
        margin: 10px;
        padding: 5px;
        border-radius: 10px;
    }
   
   

    h1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: grey; 
    }
`;

class MoodCard extends Component {

    state = {
        
    };


    render() {
        return (
            <Wrapper>
                <div>
                    <h1>{this.props.mood}</h1>
                </div>
            </Wrapper>
        )
    }
};

export default MoodCard;