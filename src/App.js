import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import HomePage from "./Views/HomePage";
import About from './Views/About';
import MusicUniverse from './Views/MusicUniverse';
import Carousel from "./Components/Carousel";
import { createGlobalStyle } from "styled-components";

/* const axios = require('axios');

const postAuthentication = () => {
  axios({
    url: 'https://accounts.spotify.com/api/token',
    method: 'post',
    params: {
      grant_type: 'client_credentials'
    },
    headers: {
      'Accept':'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    auth: {
      username: 'YOUR-CLIENT-ID',
      password: 'YOUR-CLIENT-SECRET'
    }
  })
  .then(function(response) {
      console.log(response);
  })
  .catch(function(error) {
  });
};
document.getElementById('get-country-btn').addEventListener('click', () => {
  const userInput = document.getElementById('country-name-input').value;
  getCountryInfo(userInput);
}); */



const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Roboto;
    background-color: rgb(23, 32, 42);
    color: rgb(255, 255, 255);

  }

  /*---GENERAL ALIGNMENT CLASSES---*/
  .alignInY {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
  }

  .alignInX {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
  } 

  .alignInXFlexStart {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: flex-start; 
  }

  .alignInXY {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
  }

`;

/* font-family: 'Monoton', cursive;
font-family: 'Roboto', sans-serif; */

/* const CardFeaturesList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: rgb(255, 255, 255);
  text-family: Roboto;
`; */

function App() {

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/music-universe" component={MusicUniverse}/>
        <Route path="/about" component={About}/>
      </Switch>
    </>
  );
}

export default App;
