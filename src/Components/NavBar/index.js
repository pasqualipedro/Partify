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
        flex-wrap: wrap;
    }

    li {
        margin: 10px;
    }

    a {
        color: grey;
        font-family: Roboto;
        text-decoration: none;
    }

    .logoPLetter {
        color: #dd7e6b;
        font-size: 45px;
        font-family: 'Monoton';
        margin: 0;
        padding: 0;
    }

`;

function NavBar() {
    return(
        <Wrapper className="alignInXY">
            <PartyfyLogoSmall className="logoSmall"/>
            <ul className="links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/music-universe">Music Universe</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </Wrapper>
    )
}

export default NavBar;


