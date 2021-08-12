import React, { Component } from 'react'
import './CardFeature.css';


class CardFeature extends Component {
    state = {}

    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="content">
                        <h2>01</h2>
                        <h3>Best Rankings</h3>
                        <p>Find the most played song, singer or album right now!</p>
                        <a href="#">More</a>
                    </div>
                </div>

                <div className="card">
                    <div className="content">
                        <h2>02</h2>
                        <h3>Music Universe</h3>
                        <p>Discover the best in the world of music!</p>
                        <a href="#">More</a>
                    </div>
                </div>

                <div className="card">
                    <div className="content">
                        <h2>03</h2>
                        <h3>Party Time</h3>
                        <p>Listen to your favorite songs!</p>
                        <a href="#">More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardFeature;

