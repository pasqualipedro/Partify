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

    .modalOne, .overlayOne {
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: fixed;
    }

    .overlayOne {
        background: rgba(49,49,49,0.8);
    }
    .modal-contentOne {
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
    }

    .close-modal {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 5px 7px;
    }

`;

class PlaylistInfo extends Component {



    render() {
        return (
            <Wrapper>
                {this.props.open && this.props.playlistInfo.id && (
                    <div className="modalOne" >
                        <div className="overlayOne" onClick={this.props.togglePlaylist}></div>
                            <div className="modal-contentOne">
                                <p>{this.props.mood}</p>
                                {console.log( "teste teste teste", this.props.playlistInfo)}
                                <ol>
                                    <li>
                                        <a href={this.props.playlistInfo.external_urls} >
                                            <img src="../../Img/play.png" alt="playbutton" />
                                        </a>
                                    </li>
                                    <li>Seguidores: {/* {this.props.playlistInfo.followers} */}</li>
                                    <li>{this.props.playlistInfo.external_urls.spotify}</li>
                                </ol>

                            </div>
                        
                    </div>

                )}
            </Wrapper>
        )
    }
};

export default PlaylistInfo;