import styled from 'styled-components';
import InfoTextBox from '../Components/InfoTextBox';

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

function BestRankings() {
    return (
        <Wrapper>
            <div>
                <div className="infoTextBox">
                        <h1>Why?</h1>
                    <div>
                        <p>
                        . because music is fun and can bring other sensations than just information</br>
                        .  because is fun to share music</br>
                        . vaguely we could say the app return song´s according your fellings</br>
                        </p>
                    </div>
                </div>
                <div className="infoTextBox">
                        <h1>How?</h1>
                    <div>
                        <p>
                        . using the Spotify API + spotify-web-api-node.<br/>
                        . using other nodes for improve dynamics and interest in UX - eg: making dynamic carousels.<br/>
                        . with the use of React Components.<br/>
                        . with the use of Styled-Components.<br/>
                        . deployed with Herouku<br/>
                        </p>
                    </div>
                </div>
                <div className="infoTextBox">
                        <h1>What?</h1>
                    <div>
                        <p>
                        . An app/website to manipulate Spotify API data<br/>
                        </p>
                    </div>
                </div>
            </div>
            <div className="authorInfoCards">
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

export default BestRankings;