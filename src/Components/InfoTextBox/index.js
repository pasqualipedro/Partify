import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: grey;
    max-width: 200px;
    margin: 10px;
    padding: 5px;
    border-radius: 15px;



    ol {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: grey; 
    }
`;


class InfoTextBox extends Component {

    render() {
        return (
            <Wrapper>
                <div>
                    <h1>Content Title</h1>
                </div>
                <div>
                    <ol>
                        <li>teste</li>
                        <li>teste</li>
                        <li>teste</li>
                    </ol>
                </div>
            </Wrapper>
        )
    }
};

export default InfoTextBox;