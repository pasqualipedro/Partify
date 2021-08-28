import React from 'react';
import styled from 'styled-components';


const Logo = styled.div`
    margin: 5px;
    padding: 0px;
    line-height: 40px;
    

    .monotonFont {
        font-family: 'Monoton';
    }

    .bebasneueFont {
        font-family: 'Bebas Neue';
    }


    .firstLetter {
        color: #dd7e6b;
        font-size: 75px;
        
    }

    .middleTextAR {
        color: white;
        font-size: 85px;
        letter-spacing: 4px;
    }

    .middleTextTY {
        color: white;
        font-size: 85px;
    }

    .lastLetter {
        color: #6fa8dc;
        font-size: 75px;
        letter-spacing: -5px;

    }
`;


function PartyfyLogo() {
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

export default PartyfyLogo;