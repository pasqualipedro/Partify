import React from 'react';
import { Component } from 'react';

/* class WebPlayer extends Component {

    state = {

    };


    render() {
        return (
            <>
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
            </>
        )
    }
}; */



class WebPlayer extends Component {
    state = {
    };
    render() {
        return (
            <>
                <section class="screen">
                    <input type="checkbox" name="check" id="magicButton" value="None"/>
                    <label for="magicButton" class="main"></label>
                    <div class="coverImage"></div>
                    <div class="search"></div>
                    <div class="bodyPlayer"></div>
                    <table class="list">
                        <tr class="song">
                            <td class="nr"><h5>1</h5></td>
                            <td class="title"><h6>Demons</h6></td>
                            <td class="lenght"><h5>3:12</h5></td>
                            <td><input type="checkbox" id="heart"/><label for="heart" class="icons"></label></td>
                        </tr>
                    </table>
                </section>
            </>
        )
    }
};

export default WebPlayer;

