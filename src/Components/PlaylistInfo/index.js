import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    
    .btn-modal {
    padding: 10px 20px;
    display: block;
    margin: 100px auto 0;
    font-size: 18px;
}

    .modalPlaylist, .overlayLayer {
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: fixed;
    }

    .overlayLayer {
        background: rgba(49,49,49,0.8);
    }
    .modalPlaylist-content {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        line-height: 1.4;
        background: #f1f1f1;
        padding: 14px 28px;
        border-radius: 3px;
        max-width: 600px;
        min-width: 300px;
        max-height: 500px;
        overflow-y:auto;
        overflow-x:hidden;
    }

    .close-modal {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 5px 7px;
    }

    .playlistCover {
        width: 200px;
        height: 200px;
    }

`;

class PlaylistInfo extends Component {



    render() {
        return (
            <Wrapper>
                {this.props.open && this.props.playlistInfo.id && (

                    //-MODAL HERE
                    <div className="modalPlaylist" >
                        <div className="overlayLayer" onClick={this.props.togglePlaylist}></div>
                            <div className="modalPlaylist-content">

                                {console.log(this.props.playlistInfo)}

                                <h1>I´m feeling like...{this.props.mood}</h1>
                                <img className="playlistCover" src={this.props.playlistImg} alt="playbutton" />
                                <a href={this.props.playlistInfo.external_urls.spotify}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <img src="../../Img/play.png" alt="playbutton" />
                                </a>
                                <h5>Playlist name: {this.props.playlistInfo.name}</h5>
                                <h5>Followers: {this.props.playlistInfo.followers.total}</h5>
                                <h5>Tracks: {this.props.playlistInfo.tracks.total}</h5>
                                <ul>                                       
                                    {this.props.playlistInfo.tracks.items.map((element, index) =>
                                        <a
                                            href={element.track.external_urls.spotify}
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <li>{index + 1} | {element.track.name}</li>
                                        </a>
                                    )}
                                </ul>
                            </div>

                    </div>

                )}
            </Wrapper>
        )
    }
};

export default PlaylistInfo;