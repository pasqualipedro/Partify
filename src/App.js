import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Carousel from "./Components/Carousel";

import HomePage from "./Views/HomePage";
import About from './Views/About';
import MusicUniverse from './Views/MusicUniverse';

import { createGlobalStyle } from "styled-components";

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
