import React from 'react';
import styled from 'styled-components'

import NavBar from '../Components/NavBar';
import CardFeature from '../Components/CardFeature';

/* font-family: 'Monoton', cursive;
font-family: 'Roboto', sans-serif; */


const AppStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: rgb(255, 255, 255);
  text-family: Roboto;
`;


function App() {
  return (
    <AppStyle >
      <NavBar/>
      <CardFeature/>
    </AppStyle>
  );
}

export default App;
