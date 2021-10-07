import styled, { createGlobalStyle } from 'styled-components';
import backgroundDesktop from './assets/images/bg-desktop.png';
import backgroundMobile from './assets/images/bg-mobile.png';

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  font-family: Raleway;
}
`;

export const Conteiner = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0c122c;
  background-image: url(${(props) =>
    props.screenSize > 1024 ? backgroundDesktop : backgroundMobile});
  background-size: ${(props) =>
    props.screenSize > 1024 ? 'contain' : 'cover'};
  background-repeat: no-repeat;
  background-position: bottom;
`;

export const Content = styled.div`
  width: 87.2%;
  height: 48rem;
  padding-top: 3.3rem;
`;
