import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PartyfyLogo from '../PartyfyLogo';

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

    li {
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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/best-rankings">Best Rankings</Link></li>
                <li><Link to="/music-universe">Music Universe</Link></li>
            </ul>
        </Wrapper>
    )
}

export default NavBar;


