import React from 'react';
import { GlobalStyle, Conteiner, Content } from './global';

function App() {
  const widthDevice = window.screen.width;
  return (
    <>
      <GlobalStyle />
      <Conteiner screenSize={widthDevice}>
        <Content>
          <h1>hello world</h1>
        </Content>
      </Conteiner>
    </>
  );
}

export default App;
