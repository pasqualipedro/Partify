import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    
    div {
    background: grey;
    width: 500px;
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

class PlaylistInfo extends Component {

    state = {
        
    };

    render() {
        return (
            <Wrapper>
                <div href="#" className="card card-text border-warning">
                    <p>{this.props.mood}</p>
                    <ol>
                        <li>{this.props.link}</li>
                        <li>teste</li>
                        <li>teste</li>
                    </ol>
                </div>
            </Wrapper>
        )
    }
};

export default PlaylistInfo;