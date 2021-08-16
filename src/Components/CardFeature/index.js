import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    flex-wrap: wrap;
    z-index: 1;
`;

const Card = styled.div`
    position: relative;
    width: 280px;
    height: 400px;
    margin: 30px;
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    background: rgba(68, 101, 250, 0.856);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);

    
`;

const Content = styled.div`
    padding: 20px;
    text-align: center;
    transform: translateY(100px);
    opacity: 0;
    transition: 0.5s;

    &:hover {
        transform: translateY(0px);
        opacity: 0.9;
    }

    h2 {
    position: absolute;
    top: -80px;
    right: 30px;
    font-size: 8em;
    color: rgba(255, 255, 255, 0.171);
    pointer-events: none;
    }

    h3 {
    font-size: 1.8em;
    color: white;
    z-index: 1;
    }

    p {
    font-size: 1em;
    color: black;
    font-weight: 300;
    }

    a {
    position: relative;
    display: inline-block;
    padding: 8px 20px;
    margin-top: 15px;
    background: white;
    color: black;
    text-decoration: none;
    border-radius: 20px;
    font-weight: 500;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
`;

class CardFeature extends Component {
    state = {}


    render() {
        return (
            <Container>
                <Card>
                    <Content>
                        <img src="../../Img/limit.png"/>
                        <h2>01</h2>
                        <h3>Best Rankings</h3>
                        <p>Find the most played song, singer or album right now!</p>
                        <Link to="/best-rankings">More</Link>
                    </Content>
                </Card>
                <Card>
                    <Content>
                        <img src="../../Img/noun_Speaker_4123960.svg"/>
                        <h2>02</h2>
                        <h3>Music Universe</h3>
                        <p>Discover the best in the world of music!</p>
                        <Link to="/music-universe">More</Link>
                    </Content>
                </Card>
            </Container>
        )
    }
}

export default CardFeature;

