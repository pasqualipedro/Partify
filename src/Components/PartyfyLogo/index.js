import React from 'react';
import styled from 'styled-components';


const Logo = styled.h1`
    max-width: 250px;
    width: 15vw;
    font-size: 15px;
    font-family: 'Monoton';
    font-weight: normal;
    padding: 0px;
    color: red;
`;


function PartyfyLogo() {
    return(
        <Logo>
        <h1>PARTYFY</h1>
        </Logo>
    )
}

export default PartyfyLogo;