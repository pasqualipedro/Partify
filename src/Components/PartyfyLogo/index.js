import React from 'react';
import styled from 'styled-components';


const Logo = styled.h1`
    width: 100%;
    background: grey;
    font-family: 'Monoton';
    font-weight: light;
    font-height:0.32em; 
`;

/*
font-family: 'Monoton', cursive;
font-family: 'Roboto', sans-serif;
*/

function PartyfyLogo() {
    return(
        <Logo>
        <h1>PARTYFY</h1>
        </Logo>
    )
}

export default PartyfyLogo;