import react from 'react-dom'
import styled from 'styled-components';
import CheckBoxFilterMusicUniverse from '../Components/CheckBoxFilterMusicUniverse';
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

function MusicUniverse() {
    return (
        <Wrapper>
            <h1>This is Music Universe</h1>
            <CheckBoxFilterMusicUniverse />
            <div>
                <InfoTextBox />
                <InfoTextBox />
                <InfoTextBox />
            </div>
        </Wrapper>
    )
}

export default MusicUniverse;