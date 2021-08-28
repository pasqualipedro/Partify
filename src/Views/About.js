import { Component } from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  * {
    display: flex;
    justify-content: center;
  }
  div {
    display: flex;
    flex-wrap: wrap;
  }
  .explainContainer {
    display: flex;
    justify-content: space-around;
  }
  .infoTextBox {
    background: grey;
    width: 275px;
    margin: 5px;
    padding: 15px;
    border-radius: 5px;
    ul {
    display: flex;
    flex-orientation: row;   
    flex-wrap: wrap;
    justify-content: start;    
    }
  }
  .aboutPageIntroText {
      margin: 25px;
  }
  .authorCard {
    background: grey;
    width: 400px;
    min-height: 300px;
    border-radius: 5px;
    margin: 5px;
    padding: 15px;
    ul {
      display: flex;
      flex-orientation: column;
      justify-content: space-around;
      flex-wrap: wrap;
    }
  }
  }
  .authorImg2 {
    display: block;
    width: 128px;
    height 128px;
    margin: 0 auto 30px;
    border-radius: 50%;
    border: 5px solid #FFF;
    object-fit: cover;
    margin-top: 15px;
  }
  .authorImg1 {
    display: block;
    width: 128px;
    height 128px;
    margin: 0 auto 30px;
    border-radius: 50%;
    border: 5px solid #FFF;
    object-fit: cover;
    margin-top: 15px;
  }
`;
class About extends Component {
  render() {
    return (
      <Wrapper>
        {/* APP INFO BELLOW */}
        <div className="aboutPageIntroText alignInY">
            <h1>What it is?</h1>
            <h3>An app/website to manipulate Spotify API data in a fun way</h3>
        </div>
        <div>
          <div className="infoTextBox">
            <h1>How?</h1>
            <ul>
              <li>. Using the Spotify API + spotify-web-api-node.</li>
              <li>. Using other nodes for improve dynamics and interest in UX - eg: making dynamic carousels.</li>
              <li>. With the use of React Components.</li>
              <li>. With the use of Styled-Components.</li>
              <li>. Deployed with Herouku</li>
            </ul>
          </div>
          <div className="infoTextBox">
            <h1>Why?</h1>
            <ul>
              <li>
                . Because music is fun and can bring other sensations than just
                information
              </li>
              <li>. Because is fun to share music</li>
              <li>
                . Vaguely we could say the app return song´s according your
                fellings
              </li>
            </ul>
          </div>
        </div>
        {/* AUTHORS INFO BELLOW */}
        <div>
          {/* PEDRO */}
          <div className="authorCard">
            <img src="Img/pedro.jpg" alt="about" class="authorImg1" />
            <h1>Pedro Ari</h1>
            <p>
              <span class="authorInfo"></span>
              <ul>
              .  Brazillian, 31 years
              <br />
              . Architect and urbanist with +10 years exp
              <br />
              . Post-grad in Applied Computing to Arch Urb & Design
              <br />
              . Work for IKEA Portugal, Lisbon
              <br />
              . I have a dog named Lola, and she is adorable
              <br />
              </ul>
            </p>
          </div>
          {/* LUAN */}
          <div className="authorCard">
            <img src="Img/Luan.jpg" alt="about" class="authorImg2"/>
            <h1>Luan Barreto</h1>
            <p>
              <span class="authorInfo"></span>
              <ul>
              .  Brazilian, 26 years
              <br />
              . IT Management Student
              <br />
              . Born in Rio de Janeiro, but currently living in SP
              <br />
              . I love soccer, and doing weight training
              <br />
              . I currently work at Leroy Merlin Morumbi, 
              but i’ve also been to the store in Niterói
              <br />
              </ul>
            </p>
          </div>
        </div>
      </Wrapper>
    );
  }
}
export default About;