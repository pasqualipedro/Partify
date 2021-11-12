import { Component } from 'react';
import styled from 'styled-components';
import CheckBoxFilterMusicUniverse from '../Components/CheckBoxFilterMusicUniverse';
import InfoTextBox from '../Components/InfoTextBox';
import api from '../ApiRequests'
import Carousel from "react-elastic-carousel";
import Card from "../Components/Carousel/Card";

const Wrapper = styled.div`
    * {
        display: flex;
        justify-content: center;
    }

    div {
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .carousel {
        font-family: Roboto;
        text-align: center;
    }

    .titleBlock{
        display: flex;
        flex-orientation: column;
        margin: 25px;
    }

    .itensCardList {
        display: grid;
        grid-template-columns: repeat(auto-fill, 180px);
        align-items: center;
        justify-items: center;
        margin: 10px;
    }
`;

/* const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 500, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4}
] */


class MusicUniverse extends Component {

    state = {
        tracks: [],
        artists: [],
        albums: []
    };

    getAllInfo = async (name) => {
        this.setState ({
            tracks: await this.getTracks(name),
            artists: await this.getArtists(name),
            albums: await this.getAlbums(name)
        })
        console.log(`tracks`, this.state.tracks, `artists`, this.state.artists, `albums`, this.state.albums);
    };

//- track url - 

//- artist url -

//- album url - 
//- album img - 

    getTracks = async (name) => {
        const tracks = await api.TopTenTracks(name);
        return tracks;
    };

    getArtists = async (name) => {
        const artists = await api.TopTenArtists(name);
        return artists;
    };

    getAlbums = async (name) => {
        const albums = await api.TopTenAlbumsRandomArtist(name);
        return albums
    };


    render() {
        return (
            <Wrapper>
                <div className="alignInY titleBlock">
                    <h1>This is Music Universe</h1>
                    <CheckBoxFilterMusicUniverse getAllInfo={this.getAllInfo}/>
                </div>
                <hr/>   
                    <div className="alignInY">
                        <h1>Tracks here!</h1>
                            <div className="">
                                {this.state.tracks.map((element, index) => <InfoTextBox name={element.name} id={index} itIs={`track`} link={element.external_urls.spotify} /> )}
                            </div>
                    </div>
                <hr/>
                    <div className="alignInY">
                        <h1>Artists here!</h1>
                            <div>
                                {this.state.artists.map((element, index) => <InfoTextBox name={element.name} id={index} itIs={`artist`} link={element.external_urls.spotify} /> )}
                            </div>
                    </div>
                <hr/>
                    <div className="alignInY">
                        <h1>Albums here!</h1>
                        <h7>*random based on all searched artists</h7>
                            <div>
                                {this.state.albums.map((element, index) => <InfoTextBox name={element.name} id={index} itIs={`album`} link={element.external_urls.spotify} img={element.images[1].url} /> )}
                            </div>    
                    </div>
            </Wrapper>
        )

    }
}

export default MusicUniverse;