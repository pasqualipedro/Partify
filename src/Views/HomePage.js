import react from 'react-dom'
import PartyfyLogo from '../Components/PartyfyLogo'
import styled from 'styled-components';
import CardFeature from '../Components/CardFeature';
import Webplayer from '../Components/Webplayer/index.html';


// ----- CONFIRMAR COMO MUDAR COR SOMENTE DE UMA INSTANCIA DE UM COMPONENTE ----//
/* const PartyfyLogo = styled.div`
    color: black;
`;
 */

const Wrapper = styled.div`
    ${'' /* background: url("https://unsplash.com/photos/DBGwy7s3QY0") no-repeat center center;
    background-size: cover;
    height:90vh; */}


    background-image: https://images.unsplash.com/photo-1458560871784-56d23406c091?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80;
    background-size: cover;
`;

function HomePage() {
    return (
        <>  <Wrapper>
                <PartyfyLogo />
                <h2>Like music? Let us help!</h2>
                <CardFeature />
                <Webplayer />
            </Wrapper>
        </>
    )
}

export default HomePage;