import React from 'react';
import { Component } from 'react';
/* import styled from 'styled-components'; */


class WebPlayer extends Component {

    state = {

    };


    render() {
        return (
            <body>
                <div id="player">
                    <h4><i class="material-icons">equalizer</i> PartyTime</h4>
                    <div class="card">
                        <div class="card-image"></div>
                        <div class="card-content">
                            <h5>Title:</h5>
                            <p class="artist">Artist:</p>
                            <audio controls src="Musicas Webplayer/Early Avril - Unicorn Heads.mp3"></audio>
                        </div>
                    </div>
                </div>
                <script src="index.js"></script>
            </body>
        )
    }
};

export default WebPlayer;