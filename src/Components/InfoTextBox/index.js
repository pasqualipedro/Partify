import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    
    .box {
    transition: 300ms;
    background: grey;
    width: 180px;
    height: 250px;
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    color: orange;

        &:hover {
            transform: scale(0.975);
            opacity: 0.75;
            background: orange; ${'' /* ${props => this.props.img}; */}
            color: rgb(255, 255, 255);
            border-radius: 15px;
            border-color: #dd7e6b;
            border-width: 2px;
            
        }
    }

`;

class InfoTextBox extends Component {

    render() {
        return (
            <Wrapper >
                <a
                    href={this.props.link}
                    className="box"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div>
                        <h7>{this.props.itIs}:</h7>
                        <h3>{this.props.name}</h3>
                    </div>
                </a>
             </Wrapper>
        )
    }
};

export default InfoTextBox;