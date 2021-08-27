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

    getAllInfo = async (name) => {
        this.setState ({
            tracks: await this.getTracks(name),
            artists: await this.getArtists(name),
            /* albums: await this.getAlbums(name) */
        })
    };

    getTracks = async (name) => {
        const tracks = await api.TopTenTracks(name);
        return tracks;
    };

    getArtists = async (name) => {
        const artists = await api.TopTenArtists(name);
        return artists;
    };

    getAlbums = async (name) => {
        const albums = await api.TopTenAlbums(name);
        return albums
    };


    render() {
        return (
            <Wrapper>
                <h1>This is Music Universe</h1>
                <h4>I want to search for:</h4>
                <CheckBoxFilterMusicUniverse getAllInfo={this.getAllInfo}/>
{/*                 getSongs = {this.getTracks} getAlbums = {this.getAlbums}*/}
                <div>
                    {this.state.tracks.map((element, index) => <InfoTextBox name={element.name} id={index} /> )}
                </div>
                <div>
                    {this.state.artists.map((element, index) => <InfoTextBox name={element.name} id={index} /> )}
{/*                     {console.log(this.state.artists)}
 */}                </div>
                {/* <div>
                    {this.state.albums.map((element, index) => <InfoTextBox name = {element.name} id = {index} /> )}
                </div> */}
            </Wrapper>
        )

    }
}

export default MusicUniverse;