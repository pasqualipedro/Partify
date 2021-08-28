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
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .carousel {
        font-family: Roboto;
        text-align: center;
    }
`;

const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 500, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4}
]


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
            albums: await this.getAlbums(name)
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
        const albums = await api.TopTenAlbumsRandomArtist(name);
        return albums
    };


    render() {
        return (
            <Wrapper>
                <h1>This is Music Universe</h1>
                <h4>I want to search for:</h4>
                <CheckBoxFilterMusicUniverse getAllInfo={this.getAllInfo}/>
                <Carousel className="carousel" breakPoints={breakPoints}>
                    <Card number="1" />
                    <Card number="2" />
                    <Card number="3" />
                    <Card number="4" />
                    <Card number="5" />
                    <Card number="6" />
                    <Card number="7" />
                    <Card number="8" />
                </Carousel>
                {/* <div>
                    <h1>Tracks here!</h1>
                    {this.state.tracks.map((element, index) => <InfoTextBox name={element.name} id={index} /> )}
                </div>
                <div>
                    <h1>Artists here!</h1>
                    {this.state.artists.map((element, index) => <InfoTextBox name={element.name} id={index} /> )}
                </div>
                <div>
                    <h1>Albums here!</h1>
                    {this.state.albums.map((element, index) => <InfoTextBox name = {element.name} id = {index} /> )}
                </div> */}
            </Wrapper>
        )

    }
}

export default MusicUniverse;