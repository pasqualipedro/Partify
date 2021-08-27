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
    }


    ol {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: grey; 
    }
`;

class AuthorCard extends Component {

    render() {
        return (
            <Wrapper>
                <h1>{this.props.name}</h1>
                <img src="Img/infos.png" alt="about"/>
                <p>
                    <span class="twistFont">Twist</span>
                    Pong is exactly and purely what it first stated: a classic game, with a - humble - twist of my own. Originaly was planned more features, but for a matter of MVP and cronogram, some had to be cut out. I plan to add those as I gain more experience and have more time. I hope you like it ;)<br/>
                    <span class="smallLetters">Important to say here that it wasn´t intended by any way to copy any other games out there. <span class="twistFont">Twist</span> Pong was made only and purely for recreational/educational, non-commercial use</span>
                </p>
            </Wrapper>
        )
    }
};

export default AuthorCard;

