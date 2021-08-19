import react from 'react-dom'
import styled from 'styled-components';
import CheckBoxFilter from '../Components/CheckBoxFilter';
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
            <CheckBoxFilter />
            <div>
                <InfoTextBox />
                <InfoTextBox />
                <InfoTextBox />
            </div>
        </Wrapper>
    )
}

export default BestRankings;