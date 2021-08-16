import react from 'react-dom'
import PartyfyLogo from '../Components/PartyfyLogo'
import styled from 'styled-components';
import CardFeature from '../Components/CardFeature';
import WebPlayer from '../Components/WebPlayer/index';
import Footer from '../Components/Footer';


// ----- CONFIRMAR COMO MUDAR COR SOMENTE DE UMA INSTANCIA DE UM COMPONENTE ----//
/* const PartyfyLogo = styled.div`
    color: black;
`;
 */

const PartOne = styled.section`
    background-image: url("../Img/person.png");
    background-size: cover;
    height: 100vh;
    width: 95vw;
`;

const PartTwo = styled.section`
    background: lightgrey;
`;

function HomePage() {
    return (
        <>  
            <PartOne>
                <PartyfyLogo />
                <h2>Like music? Let us help!</h2>
                <CardFeature />
            </PartOne>
            <PartTwo>
                <WebPlayer />
            </PartTwo>
            <Footer />            
        </>
    )
}

export default HomePage;