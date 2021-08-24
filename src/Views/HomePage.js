import PartyfyLogo from '../Components/PartyfyLogo'
import styled from 'styled-components';
import MoodCard from '../Components/MoodCard';
import WebPlayer from '../Components/WebPlayer/index';
import Footer from '../Components/Footer';
import api from '../ApiRequests'
import { Component } from 'react';
import PlaylistInfo from '../Components/PlaylistInfo';


const PartOne = styled.section`
    background-color: white;
    ${'' /* background-image: url("../Img/person.png"); */}
    background-size: cover;
    height: 100vh;
    width: 95vw;
`;
const PartTwo = styled.section`
    background: lightgrey;
`;
const MoodCardList = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

class HomePage extends Component {

    state = {
        moods: [`sad`, `happy`, `furious`, `frustrated`, `euphoric`, `Wanna Dance!`, `In Love`, `I´m drunk...`, `energetic`, `anxious`, `lazy`, `heartbreak`, `courageous`, `unstoppable`, `trash`, `as a Queen`, `as a King`, `Rich`, `High`, `Cold`, `Hot`, `free hugs`, ],
        playlistInfo: []

    };


    getMoodPlaylistInfo = async (mood) => {
        const result = await api.randomPlaylistInfo(mood);
        console.log(result);
        this.setState({
            playlistInfo: result
        })
    };

    

    render() {
        return (
            <>  
                <PartOne>
                    <PartyfyLogo />
                    <h2>Tell us your mood. We´ll make it happen ;)</h2>
                    <MoodCardList className="">
                        {this.state.moods.map((element, index) => <MoodCard mood = {element} parentCallBackPlaylistInfo = {this.getMoodPlaylistInfo} key = {index} /> )}
                    </MoodCardList>
                    <PlaylistInfo
                        // link = {this.state}
                        // followers = {this.state}
                        // cover = {this.state}
                        // tracksArray = {this.state}
                        // totalTracks = {this.state}
                    />
                </PartOne>
                <Footer />            
            </>
        )
    }
}

export default HomePage;