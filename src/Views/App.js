import React from 'react';
import styled from 'styled-components'

import NavBar from '../Components/NavBar';
import CardFeature from '../Components/CardFeature';

/* font-family: 'Monoton', cursive;
font-family: 'Roboto', sans-serif; */


const CardFeaturesList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: rgb(255, 255, 255);
  text-family: Roboto;
`;


function App() {
  return (
    <React.Fragment>
      <NavBar />
      {/* <CardFeaturesList>
        <CardFeature />
      </CardFeaturesList> */}
    </React.Fragment>
  );
}

export default App;
