import React from 'react';
import PartyfyLogo from '../PartyfyLogo';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    background-color:rgb(50,50,50);
    width: 100vw;
    margin: 0;

    ul {
        display: flex;
        align-itens: center;
        justify-content: space-around;
        letter-spacing: 3px;
    }

    il {
        margin: 10px;
    }

    a {
        color: grey;
        font-family: Roboto;
        text-decoration: none;
    }
`;


function NavBar() {
    return(
        <Wrapper>
            <PartyfyLogo />
            <ul>
                <il><a href="url">Best Rankings</a></il>
                <il><a href="url">Music Universe</a></il>
                <il><a href="url">Party Time!</a></il>
                <il><a href="url">About</a></il>
            </ul>
        </Wrapper>
    )
}

export default NavBar;


