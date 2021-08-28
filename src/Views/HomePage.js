import PartyfyLogo from '../Components/PartyfyLogo'
import styled from 'styled-components';
import MoodCard from '../Components/MoodCard';
import api from '../ApiRequests'
import { Component } from 'react';
import PlaylistInfo from '../Components/PlaylistInfo';


const PartOne = styled.section`
    background-size: cover;
    height: 100vh;
    width: 95vw;

    .logoAndSlogan {
        margin: 35px
    }

    .alignGrid {
        display: flex;
        align-items: center;
        justify-items: center;
    }

    .moodCardList {
        display: grid;
        grid-template-columns: repeat(auto-fill, 180px);
        align-items: center;
        justify-items: center;
        margin: 10px;
    }
`;


class HomePage extends Component {

    state = {
        moods: [`sad`, `happy`, `furious`, `frustrated`, `euphoric`, `wanna dance!`, `in love`, `drunk...`, `energetic`, `anxious`, `lazy`, `heartbreak`, `courageous`, `unstoppable`, `trash`, `as a queen`, `as a king`, `rich`, `high`, `poor`, `cold`, `hot`, `free hugs`, `hungry`, `adventurous`, `zzz`, `sexy`, `strong`],
        playlistInfo: [],
        playlistImg: [],
        openPlaylist: false,
        openPlaylistMood: ``

    };

    getMoodPlaylistInfo = async (mood) => {
        const result = await api.randomPlaylistInfo(mood);
        this.setState({
            playlistInfo: result,
            openPlaylistMood: mood,
            playlistImg: result.images[0].url
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
                    <div className="alignInY">
                        <div className="logoAndSlogan alignInY">
                            <PartyfyLogo />
                            <h5>share the dance floor</h5>
                        </div>
                        <h2>Tell us your mood. We´ll make it happen ;)</h2>
                    </div>
                    <div className="" >
                        <div className="moodCardList">
                            {this.state.moods.map((element, index) =>
                                <MoodCard
                                    mood={element}
                                    parentCallBackPlaylistInfo={this.getMoodPlaylistInfo}
                                    key={index}
                                    togglePlaylist={this.togglePlaylist}
                                /> 
                            )}
                        </div>
                    </div>
        

                </PartOne>
                <PlaylistInfo
                    togglePlaylist={this.togglePlaylist}
                    open={this.state.openPlaylist} 
                    mood={this.state.openPlaylistMood} 
                    playlistInfo={this.state.playlistInfo}
                    playlistImg={this.state.playlistImg}
                />
            </>
        )
    }
}

export default HomePage;