import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import HomePage from "./Views/HomePage";
import BestRankings from './Views/BestRankings';
import MusicUniverse from './Views/MusicUniverse';
import styled, { createGlobalStyle } from "styled-components";
import api from './ApiRequests';

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

const teste1 = async () => {
  await api.fetchArtistAlbums()
};

const teste2 = async () => {
  const token = await api.getTeste()
  console.log(token);
};



const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Roboto;
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
        <Route path="/best-rankings" component={BestRankings}/>
        <Route path="/music-universe" component={MusicUniverse}/>
      </Switch>
    </>
  );
}

export default App;
