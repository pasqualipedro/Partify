import React from 'react';
import styled from 'styled-components';


const Logo = styled.div`
    margin: 0px;
    padding: 0px;
    line-height: 22px;
    

    .monotonFont {
        font-family: 'Monoton';
    }

    .bebasneueFont {
        font-family: 'Bebas Neue';
    }


    .firstLetter {
        color: #dd7e6b;
        font-size: 25px;
        
    }

    .middleTextAR {
        color: white;
        font-size: 32px;
        letter-spacing: 1px;
    }

    .middleTextTY {
        color: white;
        font-size: 32px;
    }

    .lastLetter {
        color: #6fa8dc;
        font-size: 25px;
        letter-spacing: -2px;

    }
`;


function PartyfyLogoSmall() {
    return(
        <Logo>
            <span className="monotonFont firstLetter" >P</span>
            <span className="bebasneueFont middleTextAR"> A R</span>
            <br/>
            <span className="bebasneueFont middleTextTY">TY.</span>
            <span className="monotonFont lastLetter" >FY</span>
        </Logo>
    )
}

export default PartyfyLogoSmall;