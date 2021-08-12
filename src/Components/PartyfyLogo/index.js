import React from 'react';
import styled from 'styled-components';


const Logo = styled.h1`
    width: 100%;
    background: blue;
    font-family: 'Monoton';
    font-weight: normal;
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