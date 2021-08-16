import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PartyfyLogo from '../PartyfyLogo';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    background-color: grey;
    width: 100vw;
    height: 35%;
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

const About = styled.div`
    text-family: Roboto;
    font-size: 16px;
`;

const Why = styled.div`
    text-family: Roboto;
    font-size: 16px;
`;

const MainChallenges = styled.div`
    text-family: Roboto;
    font-size: 16px;
`;

function Footer() {
    return(
        <Wrapper>
            <PartyfyLogo />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/best-rankings">Best Rankings</Link></li>
                <li><Link to="/music-universe">Music Universe</Link></li>
            </ul>
            <About>
                <p>
                    About text here
                </p>
            </About>
            <Why>
                <p>
                    Why text here
                </p>
            </Why>
            <MainChallenges>
                <p>
                    Challenges text here
                </p>
            </MainChallenges>
        </Wrapper>
    )
}

export default Footer;