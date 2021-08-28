import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PartyfyLogoSmall from '../PartyfyLogoSmall';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    color: rgb(255, 255, 255);
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
            <PartyfyLogoSmall className="logoSmall"/>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/music-universe">Music Universe</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </Wrapper>
    )
}

export default NavBar;


