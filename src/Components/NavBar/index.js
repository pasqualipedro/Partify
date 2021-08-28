import React from 'react';
import { Link } from 'react-router-dom';
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
        <Wrapper>
            <h1 className="logoPLetter">P</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/music-universe">Music Universe</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </Wrapper>
    )
}

export default NavBar;


