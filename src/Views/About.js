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
            <h1>This is Best Rankings</h1>
            <div>
                <InfoTextBox />
                <InfoTextBox />
                <InfoTextBox />
            </div>
            <div className="authorInfoCards">
                <div className="authorCard">
                <h1>Pedro</h1>
                    <img src="Img/infos.png" alt="about"/>
                    <p>
                        <span class="twistFont">Twist</span>
                        Pong is exactly and purely what it first stated: a classic game, with a - humble - twist of my own. Originaly was planned more features, but for a matter of MVP and cronogram, some had to be cut out. I plan to add those as I gain more experience and have more time. I hope you like it ;)<br/>
                        <span class="smallLetters">Important to say here that it wasn´t intended by any way to copy any other games out there. <span class="twistFont">Twist</span> Pong was made only and purely for recreational/educational, non-commercial use</span>
                    </p>
                </div>
                <div className="authorCard">
                <h1>Luan</h1>
                    <img src="Img/infos.png" alt="about"/>
                    <p>
                        <span class="twistFont">Twist</span>
                        Pong is exactly and purely what it first stated: a classic game, with a - humble - twist of my own. Originaly was planned more features, but for a matter of MVP and cronogram, some had to be cut out. I plan to add those as I gain more experience and have more time. I hope you like it ;)<br/>
                        <span class="smallLetters">Important to say here that it wasn´t intended by any way to copy any other games out there. <span class="twistFont">Twist</span> Pong was made only and purely for recreational/educational, non-commercial use</span>
                    </p>
                </div>
            </div>
        </Wrapper>
    )
}

export default BestRankings;