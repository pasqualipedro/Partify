import React from 'react';
import { Component } from 'react';

/* className WebPlayer extends Component {

    state = {

    };


    render() {
        return (
            <>
                <div id="player">
                    <h4><i className="material-icons">equalizer</i> PartyTime</h4>
                    <div className="card">
                        <div className="card-image"></div>
                        <div className="card-content">
                            <h5>Title:</h5>
                            <p className="artist">Artist:</p>
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
                <section className="screen">
                    <input type="checkbox" name="check" id="magicButton" value="None"/>
                    <label for="magicButton" className="main"></label>
                    <div className="coverImage"></div>
                    <div className="search"></div>
                    <div className="bodyPlayer"></div>
                    <table className="list">
                        <tr className="song">
                            <td className="nr"><h5>1</h5></td>
                            <td className="title"><h6>Demons</h6></td>
                            <td className="lenght"><h5>3:12</h5></td>
                            <td><input type="checkbox" id="heart"/><label for="heart" className="icons"></label></td>
                        </tr>
                    </table>
                </section>
            </>
        )
    }
};

export default WebPlayer;

