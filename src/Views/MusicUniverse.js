import { Component } from 'react';
import react from 'react-dom'
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
    };

    getMusics = async (name) => {
        
        const result = await api.fetchArtistAlbums(name);
        console.log(result);
        this.setState({
            musics: result
        })
    };

    render() {
        return (
            <Wrapper>
                <h1>This is Music Universe</h1>
                <CheckBoxFilterMusicUniverse getMusics = {this.getMusics}/>
                <div>
                    {this.state.musics.map((element) => <InfoTextBox name = {element.name} /> )}
                </div>
            </Wrapper>
        )

    }
}

export default MusicUniverse;