import PartyfyLogo from '../Components/PartyfyLogo'
import styled from 'styled-components';
import MoodCard from '../Components/MoodCard';
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

const MoodCardList = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

class HomePage extends Component {

    state = {
        moods: [`sad`, `happy`, `furious`, `frustrated`, `euphoric`, `Wanna Dance!`, `In Love`, `I´m drunk...`, `energetic`, `anxious`, `lazy`, `heartbreak`, `courageous`, `unstoppable`, `trash`, `as a Queen`, `as a King`, `Rich`, `High`, `Cold`, `Hot`, `free hugs`, ],
        playlistInfo: [],
        openPlaylist: false,
        openPlaylistMood: ``

    };


    getMoodPlaylistInfo = async (mood) => {
        const result = await api.randomPlaylistInfo(mood);
        console.log(result);
        this.setState({
            playlistInfo: result,
            openPlaylistMood: mood
        })
    };

    togglePlaylist = () => {
        if (this.state.openPlaylist) {
            this.setState({
                playlistInfo: [],
                openPlaylistMood: ``
            })
        }
        this.setState({
            openPlaylist: !this.state.openPlaylist
        });
    };


    render() {
        return (
            <>  
                <PartOne>
                    <PartyfyLogo />
                    <h2>Tell us your mood. We´ll make it happen ;)</h2>
                    <MoodCardList className="">
                        {this.state.moods.map((element, index) => <MoodCard mood={element} parentCallBackPlaylistInfo={this.getMoodPlaylistInfo} key={index} togglePlaylist={this.togglePlaylist} /> )}
                    </MoodCardList>
                    
        

                </PartOne>
                <Footer />            
                <PlaylistInfo
                    togglePlaylist={this.togglePlaylist}
                    open={this.state.openPlaylist} 
                    mood={this.state.openPlaylistMood} 
                    playlistInfo={this.state.playlistInfo}
                />
            </>
        )
    }
}

export default HomePage;