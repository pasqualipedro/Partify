import React from 'react';
import styled from 'styled-components';


const Logo = styled.div`
    margin: 0px;
    padding: 0px;
    
    .monotonFont {
        font-family: 'Monoton';
    }
    .firstLetter {
        color: #dd7e6b;
        font-size: 40px;
        
    }
`;


function PartyfyLogoSmall() {
    return(
        <Logo>
            <h1 className="monotonFont firstLetter" >P</h1>
        </Logo>
    )
}

export default PartyfyLogoSmall;