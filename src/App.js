import React from 'react';
import background from 'assets/images/background-stars.svg';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import Nav from 'components/Nav/Nav';
import PlanetDetail from 'components/PlanetDetail/PlanetDetail';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Wrapper>
          <Background>
            <Nav />
            <Routes>
              <Route path="/" element={<Navigate replace to="/planets/mercury" />} />
              <Route path="planets/:id" element={<PlanetDetail />} />
            </Routes>
          </Background>
        </Wrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
}
export const Wrapper = styled.div`
  min-height: 150vh;
  width: 100%;
  background-color: #070724;
  position: relative;
  overflow: hidden;
  @media (min-width: 720px) {
    height: auto;
  }
  @media (min-width: 1200px) {
    min-height: 100vh;
    height: 100vh;
  }
`;
export const Background = styled.div`
  position: absolute;
  min-height: 150vh;
  width: 100%;
  overflow: hidden;
  background-image: url(${background});
  @media (min-width: 720px) {
    height: auto;
    min-height: 1000vh;
  }
  @media (min-width: 1200px) {
    min-height: 100vh;
    height: 100vh;
  }
`;
export default App;
