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
        tracks: [],
        albums: [],
        artists: []
    };

    /* getAllInfo = (name) => {
        this.getTracks(name);
        this.getArtists(name);
        this.getAlbums(name);
    } */

    getTracks = async (name) => {
        const result = await api.TopTenTracks(name);
        console.log(result);
        this.setState({
            tracks: result
        })
    };

    getArtists = async (name) => {
        const result = await api.TopTenArtists(name);
        console.log(result);
        this.setState({
            artists: result
        })
    };

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
                <CheckBoxFilterMusicUniverse getTracks={this.getTracks} getArtists={this.getArtists} getAlbums={this.getAlbums} />
{/*                 getSongs = {this.getTracks} getAlbums = {this.getAlbums}*/}
                <div>
                    {this.state.artists.map((element, index) => <InfoTextBox name={element.name} id={element.index} /> )}
                    {console.log(this.state.artists)}
                </div>
                {/* <div>
                    {this.state.artists.map((element) => <InfoTextBox name = {element.name} id = {element.id} /> )}
                    {console.log(this.state.artists)}
                </div> */}
                {/* <div>
                    {this.state.albums.map((element) => <InfoTextBox name = {element.name} id = {element.id} /> )}
                    {console.log(this.state.albums)}
                </div> */}
            </Wrapper>
        )

    }
}

export default MusicUniverse;