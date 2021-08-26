import { Component } from 'react';
import styled from 'styled-components';
import CheckBoxFilterMusicUniverse from '../Components/CheckBoxFilterMusicUniverse';
import InfoTextBox from '../Components/InfoTextBox';
import api from '../ApiRequests'

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

class MusicUniverse extends Component {

    state = {
        musics: [],
        albums: [],
        artists: []
    };

    getAllInfo = async (name) => {
        this.getMusics(name);
        this.getAlbums(name);
    }

    getMusics = async (name) => {
        const result = await api.TopTenTracks(name);
        console.log(result);
        this.setState({
            musics: result
        })
    };

/*     getArtists = async (name) => {
        const result = await api.TopTenTracks(name);
        console.log(result);
        this.setState({
            musics: result
        })
    }; */

    getAlbums = async (name) => {
        const result = await api.TopTenAlbums(name);
        console.log(result);
        this.setState({
            albums: result
        })
    };


    render() {
        return (
            <Wrapper>
                <h1>This is Music Universe</h1>
                <h4>I want to search for:</h4>
                <CheckBoxFilterMusicUniverse getAllInfo = {this.getAllInfo}  />
{/*                 getMusics = {this.getMusics} getAlbums = {this.getAlbums}*/}                
                <div>
                    {this.state.musics.map((element) => <InfoTextBox name = {element.name} id = {element.id} /> )}
                </div>
                {/* <div>
                    {this.state.artists.map((element) => <InfoTextBox name = {element.name} id = {element.id} /> )}
                </div>
                <div>
                    {this.state.albums.map((element) => <InfoTextBox name = {element.name} id = {element.id} /> )}
                </div> */}
            </Wrapper>
        )

    }
}

export default MusicUniverse;