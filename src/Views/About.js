import { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    * {
        display: flex;
        justify-content: center;
    }
    div {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
`;

class About extends Component {
    render () {
        return (
            <Wrapper>
            {/* APP INFO BELLOW */}
                <div>
                    <div className="infoTextBox">
                        <h1>What?</h1>
                        <ul>
                            <li>. An app/website to manipulate Spotify API data</li>
                        </ul>
                    </div>

                    <div className="infoTextBox">
                        <h1>How?</h1>
                        <ul>
                            <li>. using the Spotify API + spotify-web-api-node.</li>
                            <li>. using other nodes for improve dynamics and interest in UX - eg: making dynamic carousels.</li>
                            <li>. with the use of React Components.</li>
                            <li>. with the use of Styled-Components.</li>
                            <li>. deployed with Herouku</li>
                        </ul>
                    </div>

                    <div className="infoTextBox">
                        <h1>Why?</h1>
                        <ul>
                            <li>. because music is fun and can bring other sensations than just information</li>
                            <li>.  because is fun to share music</li>
                            <li>. vaguely we could say the app return song´s according your fellings</li>
                        </ul>
                    </div>
                </div>

            {/* AUTHORS INFO BELLOW */}
            
                <div>
                    {/* PEDRO */}
                    <div className="authorCard">
                        <h1>Pedro</h1>
                        <img src="Img/infos.png" alt="about"/>
                        <p>
                            <span class="twistFont">Twist</span>
                            . Pedro Adri Pasquali, Brazillian,31<br/>
                            . Architect and urbanist with +10 years exp<br/>
                            . post-grad in Applied Computing to Arch Urb & Design<br/>
                            . work for IKEA Portugal, Lisbon<br/>
                            . I have a dog named Lola, and she is adorable<br/>
                            <span class="smallLetters">Important to say here that it wasn´t intended by any way to copy any other games out there. <span class="twistFont">Twist</span> Pong was made only and purely for recreational/educational, non-commercial use</span>
                        </p>
                    </div>
                    
                    {/* LUAN */}
                    <div className="authorCard">
                    <h1>Luan</h1>
                        <img src="Img/infos.png" alt="about"/>
                        <p>
                            <span class="twistFont">Twist</span>
                            . Luan Barreto, Brazilian, 26<br/>
                            . IT Management Student<br/>
                            . Born in Rio de Janeiro, but currently living in SP<br/>
                            . I love soccer, and doing weight training<br/>
                            . I currently work at Leroy Merlin Morumbi, but i’ve also been to the store in Niterói<br/>
                            <span class="smallLetters">Important to say here that it wasn´t intended by any way to copy any other games out there. <span class="twistFont">Twist</span> Pong was made only and purely for recreational/educational, non-commercial use</span>
                        </p>
                    </div>

                </div>
    
            </Wrapper>
        )
    }
};

export default About;