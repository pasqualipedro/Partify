import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import HomePage from "./Views/HomePage";
import BestRankings from './Views/BestRankings';
import MusicUniverse from './Views/BestRankings';


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
