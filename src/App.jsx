import React from 'react';
import { FyloInfo } from './components/FyloInfo';
import { Info } from './components/Info';
import { GlobalStyle, Conteiner, Content } from './global';

function App() {
  const widthDevice = window.screen.width;
  return (
    <>
      <GlobalStyle />
      <Conteiner screenSize={widthDevice}>
        <Content>
          <FyloInfo />
          <Info />
        </Content>
      </Conteiner>
    </>
  );
}

export default App;
