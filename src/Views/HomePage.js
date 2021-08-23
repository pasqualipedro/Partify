import PartyfyLogo from '../Components/PartyfyLogo'
import styled from 'styled-components';
import MoodCard from '../Components/MoodCard';
import WebPlayer from '../Components/WebPlayer/index';
import Footer from '../Components/Footer';
import api from '../ApiRequests'
import { Component } from 'react';
/* import EmoCard from '../Components/Emocards'; */

const PartOne = styled.section`
    background-image: url("../Img/person.png");
    background-size: cover;
    height: 100vh;
    width: 95vw;
`;

const PartTwo = styled.section`
    background: lightgrey;
`;

const MoodCardListOne = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

class HomePage extends Component {

    state = {
        playlist: [],
        moods: [`pop`, `rock`, `blues`, `samba`, `reggae`, `classic`, `gospel`, `punk`, `metal`, `grunge`, `lo-fi`, `jazz`]
    };

    getMoodPlaylists = async (mood) => {
        const result = await api.PlaylistMoodCards(`rock`);
        console.log(result);
        this.setState({
            playlist: result
        })
    };

    handleSubmitButton = (event) => {
        event.preventDefault();
            this.getMoodPlaylists();
    };

    render() {
        return (
            <>  
                <PartOne>
                    <PartyfyLogo />
                    <h2>Tell us your mood. We´ll make it happen ;)</h2>
                    <form onSubmit={this.handleSubmitButton}>
                        <button>Submit</button>
                    </form>
                    <MoodCardListOne className="">
                        {this.state.moods.map((element) => <MoodCard mood = {element} /> )}
                        {/* <MoodCard description = {element.description} id = {element.id} external_url = {element.external_url} /> */}
                    </MoodCardListOne>
                </PartOne>
                <PartTwo>
                    {/* <WebPlayer /> */}
                </PartTwo>
                <Footer />            
            </>
        )
    }
}

export default HomePage;